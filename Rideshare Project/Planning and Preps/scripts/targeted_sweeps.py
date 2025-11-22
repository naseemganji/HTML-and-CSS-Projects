"""
Targeted sweeps:
A) For fixed DEV and pricing, find the maximum CAC (cost-to-acquire) that still yields NetProfit >= 0 in Year 3.
B) For fixed DEV and pricing, compute number of enterprise contracts (given per-contract revenue) required to reach NetProfit >= 0 in Year 3.

Writes: ..\targeted_sweep_results.xlsx
Prints summary to console.
"""
from openpyxl import Workbook
from math import ceil

# Shared assumptions (realistic baseline)
TAM = 400000
SOM = 0.05
pro_pct = 0.70
price_standard = 99
price_pro = 199
GM = 0.80
Lifetime = 2
DEV_ONE_OFF = 100000
OPS_ANNUAL = 180000
annual_cost_lines = 70000 + 40000 + 8000 + 8000 + 20000 + 8000 + 30000 + 8000 + 6000 + 24000 + 8000 + 8000 + 5000  # from realistic costs_data sum
# Note: sum above approximates earlier costs_data; exact sum used will be computed below
annual_costs_base = annual_cost_lines
growth_base = 0.30
cost_growth = 0.03

# Compute paying_y3 for base conv
base_conv = 0.05
paying_start = int(TAM * SOM * base_conv)
paying_y3 = int(round(paying_start * ((1 + growth_base) ** 2)))

arpu = price_standard * (1 - pro_pct) + price_pro * pro_pct
revenue_subs_y3 = paying_y3 * arpu
annual_costs_y3 = annual_costs_base * ((1 + cost_growth) ** 2) + OPS_ANNUAL * ((1 + cost_growth) ** 2)

# A) Find maximum CAC that still yields Net >= 0 in Year3
max_cac = None
cac_candidates = list(range(1, 201))
for cac in reversed(cac_candidates):  # high to low, find highest CAC that still meets net>=0
    gross = revenue_subs_y3 * GM
    net_y3 = gross - (paying_y3 * cac) - annual_costs_y3
    net_after_dev = net_y3 - DEV_ONE_OFF
    if net_after_dev >= 0:
        max_cac = cac
        break

# B) How many enterprise contracts (Year3 revenue) required to reach Net>=0
# Let enterprise_rev be additional revenue in Year3. Solve for enterprise_rev:
# net_after_dev = revenue_total*GM - (paying_y3 * CAC_assumed) - annual_costs_y3 - DEV_ONE_OFF >= 0
# revenue_total = revenue_subs_y3 + enterprise_rev
# enterprise_rev_needed = ( (paying_y3 * CAC_assumed) + annual_costs_y3 + DEV_ONE_OFF ) / GM - revenue_subs_y3
# We'll compute for several CAC assumptions (e.g., 20,30,40) and for per-contract revenue values.

cac_assumptions = [20, 30, 40]
per_contract_revenues = [8000, 12000, 20000]  # annual revenue per enterprise contract
enterprise_results = []
for cac in cac_assumptions:
    denom = GM
    need = ((paying_y3 * cac) + annual_costs_y3 + DEV_ONE_OFF) / denom - revenue_subs_y3
    need = max(0, need)
    for per in per_contract_revenues:
        contracts_needed = int(ceil(need / per)) if per > 0 else None
        enterprise_results.append((cac, per, need, contracts_needed))

# Save results to Excel
wb = Workbook()
ws = wb.active
ws.title = 'MaxCAC'
ws.append(['Metric','Value','Notes'])
ws.append(['paying_y3', paying_y3, 'Paying users in Year 3 (base conv 5%)'])
ws.append(['revenue_subs_y3', revenue_subs_y3, 'Subscription revenue in Year 3'])
ws.append(['annual_costs_y3', annual_costs_y3, 'Estimated total annual costs in Year 3 (incl OPS growth)'])
ws.append(['DEV_ONE_OFF', DEV_ONE_OFF, 'One-time dev (Y1)'])
ws.append(['max_cac_for_break_even_y3', max_cac, 'Maximum CAC (CAD) that still allows Net>=0 in Year3, None if not found'])

w2 = wb.create_sheet('EnterpriseContracts')
w2.append(['CAC_assumption','Per_contract_rev','Enterprise_rev_needed','Contracts_needed'])
for row in enterprise_results:
    w2.append(row)

out = '..\\targeted_sweep_results.xlsx'
wb.save(out)

# Print concise summary
print('Targeted sweep results saved to', out)
print('\nA) Max CAC for break-even in Year3 (base assumptions):', max_cac)
print('\nB) Enterprise contracts needed (Year3)')
for cac, per, need, contracts_needed in enterprise_results:
    print(f'CAC={cac} | per_contract={per} CAD | enterprise_rev_needed={need:,.0f} CAD | contracts_needed={contracts_needed}')
