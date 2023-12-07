import React from "react";

const UsersTableHeader = () => {
  return (
    <>
      <thead className="border-b border-black">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-gray-800"
          >
            User Id
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-gray-800"
          >
            Username
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden md:table-cell border-r border-gray-800"
          >
            Full Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden md:table-cell border-r border-gray-800"
          >
            Email
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
            Profile Picture
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden md:table-cell border-r border-gray-800"
          >
            Company Id
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

export default UsersTableHeader;
