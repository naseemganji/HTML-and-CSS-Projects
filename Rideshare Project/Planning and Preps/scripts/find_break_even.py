"""
Parameter sweep to find break-even (Year 3) combos.
Writes: ..\break_even_results.xlsx
Prints top matches to console.
"""
from openpyxl import Workbook
from openpyxl.styles import Font

# cost lines (same base used earlier)
costs_data = [
    ('Development','Frontend devs (salaries/contract)', 180000),
    ('Development','Backend devs & API', 150000),
    ('Development','QA / Testing', 30000),
    ('Development','DevOps / Infra setup', 20000),
    ('Infrastructure','Hosting (annual)', 36000),
    ('Infrastructure','CDN / Maps / APIs', 12000),
    ('Marketing','Paid Ads & UA', 90000),
    ('Marketing','Content & SEO', 18000),
    ('Sales','Promotions / Discounts', 12000),
    ('Support','Customer support (annual)', 48000),
    ('Legal & Finance','Legal / Compliance', 15000),
    ('Legal & Finance','Payment processing fees', 12000),
    ('Other','Office / Tools / Misc', 10000),
    ('One-time','MVP design & research', 25000),
]
annual_costs_base = sum(item[2] for item in costs_data if item[0] != 'One-time')

# baseline constants
TAM = 400000
SOM = 0.05
pro_pct = 0.70
GM = 0.80
Lifetime = 2
OPS_ANNUAL_base = 300000
cost_growth = 0.03
growth_base = 0.30  # growth for 'Base' conv

# Ranges for sweep
DEV_range = list(range(50000, 451000, 50000))  # 50k..450k
CAC_range = list(range(10, 81, 10))  # 10..80
conv_range = [0.05, 0.08, 0.10, 0.12, 0.15, 0.2]  # paying conversion
price_std_range = [79, 89, 99, 119, 139, 159]
price_pro_offset = 70  # price_pro = price_std + offset (rough)

results = []

for DEV in DEV_range:
    for CAC in CAC_range:
        for conv in conv_range:
            for price_std in price_std_range:
                price_pro = price_std + price_pro_offset
                # Year1 paying users
                paying_start = int(TAM * SOM * conv)
                # Year3 paying users with growth
                paying_y3 = int(round(paying_start * ((1 + growth_base) ** 2)))

                arpu = price_std * (1 - pro_pct) + price_pro * pro_pct
                revenue_y3 = paying_y3 * arpu
                annual_costs_y3 = annual_costs_base * ((1 + cost_growth) ** 2) + OPS_ANNUAL_base * ((1 + cost_growth) ** 2)
                total_costs_y3 = annual_costs_y3  # DEV_ONE_OFF only in year1
                gross_y3 = revenue_y3 * GM
                net_y3 = gross_y3 - (paying_y3 * CAC) - total_costs_y3
                # account DEV (we consider cumulative; but DEV is Y1 only, so Year3 net is after dev still)
                net_y3_after_dev = net_y3 - DEV

                results.append((net_y3_after_dev, DEV, CAC, conv, price_std, price_pro, paying_y3, revenue_y3))

# Sort by net (descending: best first)
results.sort(key=lambda x: x[0], reverse=True)

# Save top 50 to Excel
wb = Workbook()
ws = wb.active
ws.title = 'TopResults'
ws.append(['Net_Y3_after_DEV','DEV_ONE_OFF','CAC','Conv','Price_std','Price_pro','Paying_Y3','Revenue_Y3'])
for c in range(1,9):
    ws.cell(row=1, column=c).font = Font(bold=True)

for row in results[:200]:
    ws.append(row)

out = '..\\break_even_results.xlsx'
wb.save(out)
print('Wrote', out)

# Print best 10 combinations
print('\nBest 10 combinations (Net Y3 after DEV):')
for r in results[:10]:
    net, DEV, CAC, conv, pstd, ppro, paying, rev = r
    print(f'Net={net:.2f} CAD | DEV={DEV} | CAC={CAC} | conv={conv:.3f} | p_std={pstd} | p_pro={ppro} | payingY3={paying} | revY3={rev:.2f}')

# Report if any combination reaches non-negative
nonneg = [r for r in results if r[0] >= 0]
print(f'\nNumber of combinations with Net>=0 in Year3: {len(nonneg)}')
if len(nonneg) > 0:
    print('Sample achieving combos:')
    for r in nonneg[:10]:
        net, DEV, CAC, conv, pstd, ppro, paying, rev = r
        print(f'Net={net:.2f} CAD | DEV={DEV} | CAC={CAC} | conv={conv:.3f} | p_std={pstd} | p_pro={ppro} | payingY3={paying} | revY3={rev:.2f}')
else:
    print('No combination in the scanned ranges reached break-even by Year 3.')
