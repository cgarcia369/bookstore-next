import React from "react";
import FooterContact from "@/modules/ui/components/footer/FooterContact";
import FooterLinks from "@/modules/ui/components/footer/FooterLinks";
import { IoLogoWhatsapp, IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

const iconSize = 20;
const Footer = () => {
  return (
    <footer className="bg-primary px-2 lg:px-40 py-10 flex  flex-wrap lg:flex-nowrap text-white">
      <div className="flex w-full lg:w-auto lg:flex-1 mb-10 lg:mb-0">
        <div className="flex flex-col gap-y-5 justify-center my-auto mx-auto lg:mx-0">
          <h1 className="font-(family-name:--font-playwrite-hu) text-5xl">Bookstore</h1>
          <div className="flex gap-x-5 items-center justify-center">
            <IoLogoWhatsapp size={iconSize} />
            <IoLogoInstagram size={iconSize} />
            <IoLogoFacebook size={iconSize} />
          </div>
        </div>
      </div>
      <div className="flex w-full mx-4 lg:mx-0 lg:w-5/8 justify-between items-center lg:gap-x-4">
        <FooterLinks />
        <FooterContact />
      </div>
    </footer>
  );
};

export default Footer;
