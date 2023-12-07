import React from "react";
import { Icons } from "./Menu";
import SocialIcons from "./SocialIcons";
import FooterInfo from "./FooterInfo";
const Footer = () => {
  return (
    <footer className="bg-[#6f9196] text-white mx-2 my-2">
      <div className="md:flex md:justify-center md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <div>
          <input
            type="text"
            placeholder="Enter Your mail"
            className="text-[black]
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Payment Partners</h1>
      </div>
      <FooterInfo />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-white text-xl pb-8"
      >
        <div className="flex items-center justify-center">
          <span className="ml-2 md:text-xl text-l">
            © My Company Nepal ,2023
          </span>
        </div>
        <span className="md:text-2xl">Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
