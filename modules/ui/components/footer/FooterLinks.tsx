import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const links = [
  { name: "Inicio", url: "/" },
  { name: "Acerca de", url: "/about" },
  { name: "Contacto", url: "/contact" },
  { name: "Política de privacidad", url: "/privacy-policy" },
  { name: "Términos de servicio", url: "/terms-of-service" }
];
const FooterLinks = () => {
  return (
    <ul className="flex flex-col gap-y-3">
      {links.map((link, index) => (
        <Link href={link.url} key={index}>
          <li className="flex gap-x-2 items-center">
            <IoIosArrowForward size={10} />
            <span>{link.name}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default FooterLinks;
