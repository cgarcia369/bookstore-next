import React from "react";
import Image from "next/image";
import { RiShutDownLine } from "react-icons/ri";
const SidebarAccount = () => {
  return (
    <div className="flex gap-x-5">
      <Image
        className="inline-block size-15 rounded ring-2 ring-white"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
        width={80}
        height={80}
      />
      <div className="flex flex-col flex-1 gap-y-2">
        <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
        <p className="text-base rounded text-white bg-secondary px-2 w-min">Cliente</p>
      </div>
      <div className="bg-primary w-15 h-15 my-auto flex justify-center items-center rounded">
        <RiShutDownLine size={40} className="p-2  fill-current text-white" />
      </div>
    </div>
  );
};

export default SidebarAccount;
