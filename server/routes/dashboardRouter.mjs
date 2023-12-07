// dashboardRoutes.js

import express from "express";
import conn from "../config/db.js";

const router = express.Router();

// GET - Dashboard data
router.get("/dashboard", async (req, res) => {
  try {
    // Get total count of companies
    const [companyCountResult] = await conn
      .promise()
      .query("SELECT COUNT(*) AS companyCount FROM company");

    // Get total count of users
    const [userCountResult] = await conn
      .promise()
      .query("SELECT COUNT(*) AS userCount FROM user");

    // Get list of companies with details and sorted by the highest user count
    const [companiesWithUserCountResult] = await conn.promise().query(`
      SELECT company.id AS companyId, company.CompanyName, COUNT(user.id) AS userCount
      FROM company
      LEFT JOIN user ON company.id = user.CompanyId
      GROUP BY company.id
      ORDER BY userCount DESC
    `);

    const dashboardData = {
      companyCount: companyCountResult[0].companyCount,
      userCount: userCountResult[0].userCount,
      companies: companiesWithUserCountResult,
    };

    res.status(200).json({ status: 200, data: dashboardData });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
});


export default router;
