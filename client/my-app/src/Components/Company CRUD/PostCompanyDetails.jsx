import React, { useState } from "react";
import { useSnackbar } from "notistack";

const PostCompanyDetails = () => {
  const [CompanyName, setCompanyName] = useState("");
  const [Phone, setPhoneNo] = useState("");
  const [Email, setEmail] = useState("");
  const [CompanyLogo, setCompanyLogo] = useState(null);

  const { enqueueSnackbar } = useSnackbar();
  const addPost = async () => {
    const formData = new FormData();
    formData.append("CompanyName", CompanyName);
    formData.append("Phone", Phone);
    formData.append("Email", Email);
    formData.append("CompanyLogo", CompanyLogo);

    try {
      const result = await fetch("http://localhost:5000/postcompanydetails", {
        method: "POST",
        body: formData,
      });
      const response = await result.json();
      console.log(response);

      if (result.ok) {
        enqueueSnackbar("Company Details Posted Successfully", {
          variant: "success",
        });
      }
    } catch (error) {
      enqueueSnackbar("Company Details Post Failed", { variant: "error" });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="md:max-w-[1000] sm:max-w-[auto] max-w-md mx-auto md:mt-[100px] mt-[180px] p-4 bg-white shadow-lg rounded-lg ">
        <h2 className="md:text-xl text-l font-semibold">Add Company Details</h2>
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
            onClick={addPost}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300"
          >
            Post Company Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCompanyDetails;
