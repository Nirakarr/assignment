import React from "react";
import IconsFooter from "../Footer/IconsFooter";

const FooterInfo = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center pt-2 gap-4">
        <a
          href="https://www.khalti.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Khalti_Digital_Wallet_Logo.jpg/800px-Khalti_Digital_Wallet_Logo.jpg"
            className="w-40 h-20"
            alt="Khalti Logo"
          />
        </a>

        <a
          href="https://esewa.com.np/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.esewa.com.np/ui/images/esewa_og.png?111"
            className="w-30 h-20"
            alt="eSewa Logo"
          />
        </a>

        <a
          href="https://www.imepay.com.np/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/35/68/5a/35685a07-54a3-b93e-ccbe-25f0761c53e7/AppIcon-1x_U007emarketing-0-7-0-sRGB-85-220.png/1200x600wa.png"
            className="w-30 h-20"
            alt="IME Pay Logo"
          />
        </a>

        <a
          href="https://connectips.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://techmandu.com/wp-content/uploads/2020/11/Connect-IPS-direct-bank-payment-in-Nepal.jpg"
            className="w-30 h-20"
            alt="ConnectIPS Logo"
          />
        </a>
      </div>
      <h1 className="text-center text-2xl font-bold text-[#white]">
        Inspiring Nepal to find their perfect room.
      </h1>
      <p className="text-center text-xl">
        Our goal: Every Nepali home, one room at a time.
      </p>
      <IconsFooter />
    </div>
  );
};

export default FooterInfo;
