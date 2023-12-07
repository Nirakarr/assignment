import React from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteCompanyDetails = () => {
  const { id } = useParams(); // Get the card ID from the URL parameter
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      // Make an API request to delete the card by its ID
      await axios.delete(`http://localhost:5000/deletecompany/${id}`);
      enqueueSnackbar("Company Details Deleted Successfully", {
        variant: "success",
      });
      navigate("/");
    } catch (error) {
      enqueueSnackbar("Error Deleting Company Details", { variant: "error" });
    }
  };

  return (
    <div className="mt-[100px]">
      <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <p className="text-lg font-semibold mb-4">
            Are you sure you want to delete Company Details?
          </p>
          <p className="text-gray-600 mb-4">Post ID: {id}</p>
          <div className="flex justify-end">
            <Link
              to={`/`}
              className="bg-gray-300 text-gray-700 px-3 py-1 rounded mr-2"
            >
              Cancel
            </Link>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Confirm Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCompanyDetails;
