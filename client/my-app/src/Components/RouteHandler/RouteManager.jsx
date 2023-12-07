import React from "react";
import { useLocation, useParams } from "react-router-dom";
import PostCompanyDetails from "../Company CRUD/PostCompanyDetails";
import ViewCompanyDetails from "../Company CRUD/ViewCompanyDetails";
import UpdateCompanyDetails from "../Company CRUD/UpdateCompanyDetails";
import DeleteCompanyDetails from "../Company CRUD/DeleteCompanyDetails";
import PostUsersDetails from "../Users CRUD/PostUsersDetails";
import UpdateUserDetails from "../Users CRUD/UpdateUserDetails";
import DeleteUserDetails from "../Users CRUD/DeleteUserDetails";
import Dashboard from "../DashBoard/DashBoard";
import ViewUserDetails from "../Users CRUD/ViewUserDetails";
import CompanyProfile from "../Main/CompanyProfile";
import CompanyTable from "../Main/CompanyTable";
import UsersTable from "../Main/UsersTable";

const RouteManager = () => {
  const location = useLocation(); // Get the current location

  let {id} = useParams();

  const renderCard = () => {
    if (location.pathname === "/") {
      return (
        <div>
          <CompanyProfile />
          <CompanyTable />
          <UsersTable />
        </div>
      );
    } else if (location.pathname === "/postCompanyDetails") {
      return <PostCompanyDetails />;
    } else if (location.pathname === `/viewCompanyDetails/${id}`) {
      return <ViewCompanyDetails />;
    } else if (location.pathname === `/updateCompanyDetails/${id}`) {
      return <UpdateCompanyDetails />;
    } else if (location.pathname === `/deleteCompanyDetails/${id}`) {
      return <DeleteCompanyDetails />;
    } else if (location.pathname === `/postUserDetails`) {
      return <PostUsersDetails />;
    } else if (location.pathname === `/deleteUserDetails/${id}`) {
      return <DeleteUserDetails />;
    } else if (location.pathname === `/viewUserDetails/${id}`) {
      return <ViewUserDetails />;
    } else if (location.pathname === `/updateUserDetails/${id}`) {
      return <UpdateUserDetails />;
    } else if (location.pathname === "/dashboard") {
      return <Dashboard />;
    }

    return null;
  };

  return <div>{renderCard()}</div>;
};

export default RouteManager;
