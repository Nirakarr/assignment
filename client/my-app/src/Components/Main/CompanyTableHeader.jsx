import React from "react";

const CompanyTableHeader = () => {
  return (
    <>
      <thead className="border-b border-black">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-gray-800"
          >
            ID
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-gray-800"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden md:table-cell border-r border-gray-800"
          >
            Contact Number
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden md:table-cell border-r border-gray-800"
          >
            Email Address
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden md:table-cell border-r border-gray-800"
          >
            Company Logo
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-gray-800"
          >
            Actions
          </th>
        </tr>
      </thead>
    </>
  );
};

export default CompanyTableHeader;
