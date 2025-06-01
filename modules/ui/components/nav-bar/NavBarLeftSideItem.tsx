import React from "react";
import Link from "next/link";

type NavBarItemProps = {
  text: string;
  url: string;
};

const NavBarLeftSideItem = ({ text, url }: NavBarItemProps) => {
  return (
    <>
      <Link href={url} passHref>
        <h2 className="text-xl">{text}</h2>
      </Link>
    </>
  );
};

export default NavBarLeftSideItem;
