import React from "react";
import FooterContact from "@/modules/ui/components/footer/FooterContact";
import FooterLinks from "@/modules/ui/components/footer/FooterLinks";
import { IoLogoWhatsapp, IoLogoFacebook, IoLogoInstagram } from "react-icons/io";

const iconSize = 20;
const Footer = () => {
  return (
    <footer className="bg-primary px-40 py-10 flex  text-white">
      <div className="flex-1 flex">
        <div className="flex flex-col gap-y-5 justify-center my-auto">
          <h1 className="font-(family-name:--font-playwrite-hu) text-5xl">Bookstore</h1>
          <div className="flex gap-x-5 items-center justify-center">
            <IoLogoWhatsapp size={iconSize} />
            <IoLogoInstagram size={iconSize} />
            <IoLogoFacebook size={iconSize} />
          </div>
        </div>
      </div>
      <div className="flex w-5/8 justify-between">
        <FooterLinks />
        <FooterContact />
      </div>
    </footer>
  );
};

export default Footer;
