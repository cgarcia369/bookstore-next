import React from "react";
import NavBarLeftSideItem from "@/modules/ui/components/nav-bar/NavBarLeftSideItem";
import NavBarRightSideItem from "./NavBarRightSideItem";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import SearchInput from "@/modules/ui/components/nav-bar/SearchInput";

const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between py-6 text-(--primary) general-padding">
        <h1 className="font-(family-name:--font-playwrite-hu) text-3xl">Bookstore</h1>
        <div className="flex gap-x-12 items-end h-full">
          <NavBarLeftSideItem text={"Categorias"} url={""} />
          <NavBarLeftSideItem text={"Popular"} url={""} />
          <NavBarLeftSideItem text={"Buscar"} url={""} />
        </div>
        <SearchInput onSearch={() => {}} />
        <div className="flex gap-x-12">
          <NavBarRightSideItem url={""} text="Cuenta" icon={<MdOutlineAccountCircle />} />
          <NavBarRightSideItem url={""} text="Carrito" icon={<TiShoppingCart />} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
