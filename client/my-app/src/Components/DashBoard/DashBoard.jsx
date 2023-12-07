import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    companyCount: 0,
    userCount: 0,
    companies: [],
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch("http://localhost:5000/dashboard");
        const data = await response.json();
        setDashboardData(data.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>

      <div className="bg-gray-100 p-6 mb-6 rounded-md">
        <p className="text-lg">
          Total Count of Companies:{" "}
          <span className="font-bold">{dashboardData.companyCount}</span>
        </p>
        <p className="text-lg">
          Total Count of Users:{" "}
          <span className="font-bold">{dashboardData.userCount}</span>
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">
          List of Companies sorted by Highest User Count:
        </h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Company Name</th>
              <th className="py-2 px-4 border-b">User Count</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.companies.map((company) => (
              <tr
                key={company.companyId}
                className="border-b hover:bg-gray-100"
              >
                <td className="py-2 px-4 text-center">{company.CompanyName}</td>
                <td className="py-2 px-4 text-center font-bold">
                  {company.userCount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
