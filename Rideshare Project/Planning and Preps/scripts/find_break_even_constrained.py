"""
Constrained break-even sweep (realistic bounds):
- price_standard <= 119
- conv <= 0.12
- CAC >= 20
Writes: ..\break_even_constrained.xlsx
"""
from openpyxl import Workbook
from openpyxl.styles import Font

costs_data = [
    ('Development','Frontend',70000),('Development','Backend',40000),('Infra','Hosting',20000),('Infra','APIs',8000),('Marketing','Paid',30000),('Support','Support',24000),('Legal','Legal',8000),('Other','Misc',5000)
]
annual_costs_base = sum(item[2] for item in costs_data)

TAM = 400000
SOM = 0.05
pro_pct = 0.70
GM = 0.80
Lifetime = 2
OPS_ANNUAL = 180000
cost_growth = 0.03
growth_base = 0.30

DEV_range = [50000,100000,150000]
CAC_range = [20,30,40,50]
conv_range = [0.05,0.08,0.10,0.12]
price_std_range = [79,89,99,119]
price_pro_offset = 100

results = []
for DEV in DEV_range:
    for CAC in CAC_range:
        for conv in conv_range:
            for price_std in price_std_range:
                price_pro = price_std + price_pro_offset
                paying_start = int(TAM * SOM * conv)
                paying_y3 = int(round(paying_start * ((1 + growth_base) ** 2)))
                arpu = price_std * (1 - pro_pct) + price_pro * pro_pct
                revenue_y3 = paying_y3 * arpu
                annual_costs_y3 = annual_costs_base * ((1 + cost_growth) ** 2) + OPS_ANNUAL * ((1 + cost_growth) ** 2)
                gross_y3 = revenue_y3 * GM
                net_y3 = gross_y3 - (paying_y3 * CAC) - annual_costs_y3
                net_after_dev = net_y3 - DEV
                results.append((net_after_dev, DEV, CAC, conv, price_std, price_pro, paying_y3, revenue_y3))

results.sort(key=lambda x: x[0], reverse=True)
wb = Workbook()
ws = wb.active
ws.title='TopResults'
ws.append(['Net_Y3_after_DEV','DEV','CAC','Conv','Price_std','Price_pro','PayingY3','RevenueY3'])
for c in range(1,9):
    ws.cell(row=1,column=c).font=Font(bold=True)

for r in results:
    ws.append(r)

out='..\\break_even_constrained.xlsx'
wb.save(out)
print('Created', out)
print('Best 10:')
for r in results[:10]:
    net, DEV, CAC, conv, pstd, ppro, paying, rev = r
    print(f'Net={net:.2f} | DEV={DEV} | CAC={CAC} | conv={conv} | pstd={pstd} | payingY3={paying} | revY3={rev:.2f}')
