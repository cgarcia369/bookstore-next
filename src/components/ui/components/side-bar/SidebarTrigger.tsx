"use client";
import React from "react";
import { useUiStore } from "@/components/ui/store";
import { IoIosMenu } from "react-icons/io";

const SidebarTrigger = () => {
  const handleOpenSidebar = useUiStore(({ handleOpenSidebar }) => handleOpenSidebar);
  return (
    <button className="block lg:hidden cursor-pointer" onClick={handleOpenSidebar}>
      <IoIosMenu size={35} />
    </button>
  );
};

export default SidebarTrigger;
