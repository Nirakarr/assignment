import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewCompanyDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const fetchpost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/getcompanybyid/${id}`
        );

        if (response.status !== 200) {
          enqueueSnackbar("Eror in Response", {
            variant: "error",
          });
        }
        setPost(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchpost();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="md:max-w-[1000] sm:max-w-[auto] max-w-md mx-auto md:mt-[10px] mt-[180px] p-4 bg-white shadow-lg rounded-lg ">
          <h2 className="md:text-xl text-l font-semibold flex justify-center items-center mb-5 mt-5">
            View Company Details
          </h2>
          <img
            src={`http://localhost:5000/uploads/${post.CompanyLogo}`}
            className="w-full h-64 object-cover mb-4"
            alt="Company Logo"
          />
          <p className="text-lg text-blue-600 mb-2">
            Company Name: <br />
            <strong>{post.CompanyName}</strong>
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <strong>{post.Phone}</strong>
          </p>
          <p className="text-lg text-gray-700">
            <strong> {post.Email}</strong>
          </p>
          <Link to={`/updateCompanyDetails/${id}`}>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Edit
            </button>
          </Link>
          <Link to={`/deleteCompanyDetails/${id}`}>
            <button className="mt-4 ml-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewCompanyDetails;
