"""
Generate sample tax packet exports for a user: T2125 CSV, GST/HST CSV and a PDF tax packet.
Produces: sample_tax_packet_user_123.zip in repo root containing CSVs and PDF.
"""
import csv
import zipfile
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

user_id = 123
tax_year = 2024

# Sample aggregated data (would normally come from app DB)
sample_t2125 = {
    'business_name': 'DriveGo User 123',
    'business_number': '123456789RT0001',
    'tax_year': tax_year,
    'gross_receipts': 50000.00,
    'motor_vehicle_expenses': 8000.00,
    'mileage_business_km': 20000,
    'fuel': 3000.00,
    'insurance': 1200.00,
    'maintenance': 1000.00,
    'other_expenses': 500.00,
}

sample_gst = {
    'reporting_period_start': f'{tax_year-1}-10-01',
    'reporting_period_end': f'{tax_year}-09-30',
    'total_taxable_sales': 48000.00,
    'zero_rated_sales': 2000.00,
    'exempt_sales': 0.0,
    'input_tax_credits': 1200.00,
}

csv_t2125 = f'T2125_{user_id}_{tax_year}.csv'
csv_gst = f'GST_HST_{user_id}_{tax_year}.csv'
pdf_name = f'tax_packet_{user_id}_{tax_year}.pdf'
zip_name = f'sample_tax_packet_user_{user_id}.zip'

# Write T2125 CSV
with open(csv_t2125, 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(['Field','Value'])
    for k, v in sample_t2125.items():
        writer.writerow([k, v])

# Write GST/HST CSV
with open(csv_gst, 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(['Field','Value'])
    for k, v in sample_gst.items():
        writer.writerow([k, v])

# Create a simple PDF packet
c = canvas.Canvas(pdf_name, pagesize=letter)
width, height = letter
c.setFont('Helvetica-Bold', 14)
c.drawString(72, height - 72, f'DriveGo Tax Packet — User {user_id} — {tax_year}')

c.setFont('Helvetica', 10)
y = height - 110
c.drawString(72, y, 'Summary:')
y -= 16
for k, v in sample_t2125.items():
    c.drawString(80, y, f'{k}: {v}')
    y -= 14

y -= 10
c.drawString(72, y, 'GST/HST Summary:')
y -= 16
for k, v in sample_gst.items():
    c.drawString(80, y, f'{k}: {v}')
    y -= 14

c.showPage()
c.save()

# Package into zip
with zipfile.ZipFile(zip_name, 'w') as z:
    z.write(csv_t2125)
    z.write(csv_gst)
    z.write(pdf_name)

print('Created', zip_name)
