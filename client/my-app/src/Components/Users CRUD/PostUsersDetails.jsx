import React, { useState } from "react";
import { useSnackbar } from "notistack";

const PostUsersDetails = () => {
  const [UserName, setUserName] = useState("");
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Photo, setPhoto] = useState(null);
  const [Phone, setPhoneNo] = useState("");
  const [CompanyId, setCompanyId] = useState("");

  const { enqueueSnackbar } = useSnackbar();
  const addPost = async () => {
    const formData = new FormData();
    formData.append("UserName", UserName);
    formData.append("FullName", FullName);
    formData.append("Phone", Phone);
    formData.append("Email", Email);
    formData.append("Photo", Photo);
    formData.append("CompanyId", CompanyId);

    try {
      const result = await fetch("http://localhost:5000/createuser", {
        method: "POST",
        body: formData,
      });
      const response = await result.json();
      console.log(response);

      if (result.ok) {
        enqueueSnackbar("User Details Added Successfully", {
          variant: "success",
        });
      }
    } catch (error) {
      enqueueSnackbar("Failed to add User Details", { variant: "error" });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="md:max-w-[1000] sm:max-w-[auto] max-w-md mx-auto md:mt-[100px] mt-[180px] p-4 bg-white shadow-lg rounded-lg ">
        <h2 className="md:text-xl text-l font-semibold">Add Users Details</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            User Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-2 border rounded focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            Full Name:
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={FullName}
            onChange={(e) => setFullName(e.target.value)}
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
            Profile Picture:
          </label>
          <input
            type="file"
            id="CompanyLogo"
            name="CompanyLogo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
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
          <label htmlFor="companyId" className="block font-medium mb-1">
            Associated Company Identifier
          </label>
          <input
            type="text"
            id="CompanyID"
            name="CompanyID"
            value={CompanyId}
            onChange={(e) => setCompanyId(e.target.value)}
            className="w-full p-2 border rounded focus:border-blue-500"
          />
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={addPost}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300"
          >
            Post User Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostUsersDetails;
