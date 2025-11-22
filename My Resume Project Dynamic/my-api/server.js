const express = require("express");
const sql = require("mssql");
require("dotenv").config();

const app = express();
app.use(express.json());

// SQL Server config - Fixed for Windows Authentication
const config = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
  options: {
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true
  }
};
// REMOVE the entire 'authentication' property
// Connect to SQL Server
sql.connect(config)
  .then(pool => {
    console.log("✅ Connected to SQL Server:", process.env.DB_DATABASE);

    app.get("/personalinfo", async (req, res) => {
      try {
        const result = await pool.request().query("SELECT TOP 10 * FROM dbo.PersonalInfo");
        res.json(result.recordset);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

  })
  .catch(err => {
    console.error("❌ Database connection failed:", err.message);
  });

app.listen(5000, '0.0.0.0', () => {
  console.log("🚀 Server running on http://localhost:5000");
});