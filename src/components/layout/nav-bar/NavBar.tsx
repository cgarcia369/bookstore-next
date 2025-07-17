import React from "react";
import NavBarLeftSideItem from "@/components/layout/nav-bar/NavBarLeftSideItem";
import NavBarRightSideItem from "./NavBarRightSideItem";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import SearchInput from "@/components/layout/nav-bar/SearchInput";
import SidebarTrigger from "@/components/layout/side-bar/SidebarTrigger";
import { links } from "@/components/layout/constants";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="flex items-center lg:justify-between py-6 text-(--primary) general-padding sticky top-0 bg-background z-40">
        <Link href="/" className="flex-1 lg:flex-none">
          <h1 className="font-(family-name:--font-playwrite-hu) text-3xl ">Bookstore</h1>
        </Link>
        <div className="gap-x-12 items-end h-full hidden lg:flex">
          {links.map((link, index) => (
            <NavBarLeftSideItem key={index} {...link} />
          ))}
        </div>
        <SearchInput className="hidden lg:flex" />
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
