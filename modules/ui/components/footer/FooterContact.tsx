import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarTimes, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const iconSize = 25;
const FooterContact = () => {
  const items = [
    {
      text: "Tr 85 No. 54-19 B 8 INT 2 APT 103, C.P 11001, Bogotá, Colombia",
      icon: <FaLocationDot size={iconSize} />
    },
    {
      text: "+57 76480060",
      icon: <FaPhone size={iconSize} />
    },
    {
      text: "ctcaerr@gmail.com",
      icon: <MdEmail size={iconSize} />
    },
    {
      text: "Lunes a Viernes 8:00 AM - 5:00 PM",
      icon: <FaCalendarTimes size={iconSize} />
    }
  ];
  return (
    <ul className="flex flex-col gap-y-5 justify-center">
      {items.map((item, index) => (
        <li key={index}>
          <div className="flex items-center gap-x-3">
            {item.icon}
            {item.text}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FooterContact;
