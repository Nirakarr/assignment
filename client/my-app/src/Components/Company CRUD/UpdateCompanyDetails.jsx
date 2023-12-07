import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const UpdateCompanyDetails = () => {
  const { id } = useParams();
  const [CompanyName, setCompanyName] = useState("");
  const [Phone, setPhoneNo] = useState("");
  const [Email, setEmail] = useState("");
  const [CompanyLogo, setCompanyLogo] = useState(null);

  const { enqueueSnackbar } = useSnackbar();

  const updatePost = async () => {
    const formData = new FormData();
    formData.append("CompanyName", CompanyName);
    formData.append("Phone", Phone);
    formData.append("Email", Email);
    formData.append("CompanyLogo", CompanyLogo);

    try {
      const result = await fetch(`http://localhost:5000/updatecompany/${id}`, {
        method: "PUT",
        body: formData,
        headers: {},
      });
      if (result.status === 200) {
        enqueueSnackbar("Company Details Updated Successfully", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Company Details Update Failed", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Network Error", { variant: "error" });
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="md:max-w-[1000] sm:max-w-[auto] max-w-md mx-auto md:mt-[100px] mt-[180px] p-4 bg-white shadow-lg rounded-lg ">
        <h2 className="md:text-xl text-l font-semibold">
          Update Company Details
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={CompanyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-2 border rounded focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactno" className="block font-medium mb-1">
            Contact Number:
          </label>
          <input
            type="text"
            id="Phone"
            name="Phone"
            value={Phone}
            onChange={(e) => setPhoneNo(e.target.value)}
            className="w-full p-2 border rounded focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email Address:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="CompanyLogo" className="block font-medium mb-1">
            Company Logo:
          </label>
          <input
            type="file"
            id="CompanyLogo"
            name="CompanyLogo"
            accept="image/*"
            onChange={(e) => setCompanyLogo(e.target.files[0])}
            className="w-full p-2 border rounded focus:border-blue-500"
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            onClick={updatePost}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300"
          >
            Update Company Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCompanyDetails;
