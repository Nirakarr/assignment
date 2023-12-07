import React, { useEffect, useState } from "react";

import CompanyTableHeader from "./CompanyTableHeader";
import axios from "axios";
import { Link } from "react-router-dom";

const CompanyTable = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getdata");
        console.log(response.data.data);
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-[10px]">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-black sm:rounded-lg">
            <h1 className="flex items-center justify-center m-auto text-2xl font-bold">
              Company Information
            </h1>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-grey-500">
                <CompanyTableHeader />
                <tbody className="bg-red-100 divide-y divide-gray-500">
                  {posts.map((post, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap border-r border-gray-800">
                        <div className="text-sm font-medium overflow-x-auto">
                          {post.id}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap border-r border-gray-800">
                        <div className="text-sm font-medium overflow-x-auto">
                          {post.CompanyName}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell border-r border-gray-800">
                        <div className="text-sm font-medium overflow-x-auto">
                          {post.Phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell border-r border-gray-800">
                        <div className="text-sm font-medium">{post.Email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell border-r border-gray-800">
                        <img
                          className="h-[50px] w-[50px]"
                          src={`http://localhost:5000/uploads/${post.CompanyLogo}`}
                          alt=""
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell border-r border-gray-800">
                        <div className="text-sm font-medium">{post.Email}</div>
                      </td>
                      <td className="whitespace-nowrap text-right text-sm font-bold p-5 border-r border-gray-800">
                        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-end items-center">
                          <Link to={`/postCompanyDetails`}>
                            <button
                              className="text-blue-600 hover:text-blue-900 ml-2 rounded-lg px-4 py-2 mt-1 hover:bg-green-500"
                              style={{
                                border: "0.5px solid",
                                borderRadius: "10px",
                              }}
                            >
                              <ion-icon
                                name="eye-outline"
                                className="icon-large"
                              ></ion-icon>
                              Post
                            </button>
                          </Link>
                          <Link to={`/viewCompanyDetails/${post.id}`}>
                            <button
                              className="text-green-600 ml-2 px-4 py-2 mt-1 hover:bg-blue-500 hover:text-white"
                              style={{
                                border: "0.5px solid",
                                borderRadius: "10px",
                              }}
                            >
                              <ion-icon
                                name="eye-outline"
                                className="icon-large"
                              ></ion-icon>
                              View
                            </button>
                          </Link>
                          <Link to={`/updateCompanyDetails/${post.id}`}>
                            <button
                              className="text-blue-600 hover:text-blue-900 ml-2 rounded-lg px-4 py-2 mt-1 hover:bg-green-500"
                              style={{
                                border: "0.5px solid",
                                borderRadius: "10px",
                              }}
                            >
                              <ion-icon name="create-outline"></ion-icon>
                              Update
                            </button>
                          </Link>
                          <Link to={`/deleteCompanyDetails/${post.id}`}>
                            <button
                              className="text-red-600 hover:text-black ml-2 px-4 py-2 border-indigo-600 mt-1 hover:bg-red-500"
                              style={{
                                border: "0.5px solid",
                                borderRadius: "10px",
                              }}
                            >
                              <ion-icon name="trash-outline"></ion-icon>
                              Delete
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTable;
