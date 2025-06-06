import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useUiStore } from "@/modules/ui/store";

const SidebarHeader = () => {
  const handleCloseSidebar = useUiStore(({ handleCloseSidebar }) => handleCloseSidebar);
  return (
    <div className="flex items-center sticky top-0">
      <h1 className="text-xl flex-1">
        <span className="font-(family-name:--font-playwrite-hu)">Bookstore </span>- Menú
      </h1>
      <button className="ml-auto cursor-pointer" onClick={handleCloseSidebar}>
        <IoIosCloseCircle size={35} />
      </button>
    </div>
  );
};

export default SidebarHeader;
