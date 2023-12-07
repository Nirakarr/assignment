import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const UpdateUserDetails = () => {
  const { id } = useParams();
  const [UserName, setUserName] = useState("");
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Photo, setPhoto] = useState(null);
  const [Phone, setPhone] = useState("");
  const [CompanyId, setCompanyId] = useState("");

  const { enqueueSnackbar } = useSnackbar();

  const updateUser = async () => {
    const formData = new FormData();
    formData.append("UserName", UserName);
    formData.append("FullName", FullName);
    formData.append("Email", Email);
    formData.append("Photo", Photo);
    formData.append("Phone", Phone);
    formData.append("CompanyId", CompanyId);

    try {
      const result = await fetch(`http://localhost:5000/updateuser/${id}`, {
        method: "PUT",
        body: formData,
        headers: {},
      });
      if (result.status === 200) {
        enqueueSnackbar("User Details Updated Successfully", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("User Details Update Failed", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Network Error", { variant: "error" });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="md:max-w-[1000] sm:max-w-[auto] max-w-md mx-auto md:mt-[100px] mt-[180px] p-4 bg-white shadow-lg rounded-lg ">
        <h2 className="md:text-xl text-l font-semibold">
          Update User Details
        </h2>
        <div className="mb-4">
          <label htmlFor="username" className="block font-medium mb-1">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-2 border rounded focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fullname" className="block font-medium mb-1">
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
          <label htmlFor="photo" className="block font-medium mb-1">
            Profile Picture:
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="w-full p-2 border rounded focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-medium mb-1">
            Contact Number:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="companyid" className="block font-medium mb-1">
            Associated Company Identifier:
          </label>
          <input
            type="text"
            id="companyid"
            name="companyid"
            value={CompanyId}
            onChange={(e) => setCompanyId(e.target.value)}
            className="w-full p-2 border rounded focus:border-blue-500"
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            onClick={updateUser}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300"
          >
            Update User Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserDetails;
