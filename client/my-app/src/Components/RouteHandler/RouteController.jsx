import React from "react";
import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer"
import RouteManager from "./RouteManager";
const RouteController = () => {
  return <>
   <NavBar/>
   <RouteManager/>
   <Footer/>
  </>;
};

export default RouteController;
