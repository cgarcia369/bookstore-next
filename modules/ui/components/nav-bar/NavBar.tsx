import React from "react";
import NavBarLeftSideItem from "@/modules/ui/components/nav-bar/NavBarLeftSideItem";
import NavBarRightSideItem from "./NavBarRightSideItem";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import SearchInput from "@/modules/ui/components/nav-bar/SearchInput";
import SidebarTrigger from "@/modules/ui/components/side-bar/SidebarTrigger";
import { links } from "@/modules/ui/constants";

const NavBar = () => {
  return (
    <>
      <nav className="flex items-center lg:justify-between py-6 text-(--primary) general-padding sticky top-0 bg-background z-40">
        <h1 className="font-(family-name:--font-playwrite-hu) text-3xl flex-1 lg:flex-none">Bookstore</h1>
        <div className="gap-x-12 items-end h-full hidden lg:flex">
          {links.map((link, index) => (
            <NavBarLeftSideItem key={index} {...link} />
          ))}
        </div>
        <SearchInput className="hidden lg:flex" onSearch={() => {}} />
        <div className="gap-x-4 lg:gap-x-12 flex mr-4 lg:mr-0">
          <NavBarRightSideItem url={""} text="Cuenta" icon={<MdOutlineAccountCircle />} />
          <NavBarRightSideItem url={""} text="Carrito" icon={<TiShoppingCart />} />
        </div>
        <SidebarTrigger />
      </nav>
    </>
  );
};

export default NavBar;
