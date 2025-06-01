import React, { cloneElement, ReactElement } from "react";
import Link from "next/link";
type NavBarRightSideProps = {
  url: string;
  icon: ReactElement<{ size?: number }>;
  text: string;
};

const NavBarRightSideItem = ({ url, icon, text }: NavBarRightSideProps) => {
  return (
    <Link href={url}>
      <div className="flex items-center gap-x-2">
        {cloneElement(icon, { size: 30 })}
        <h2>{text}</h2>
      </div>
    </Link>
  );
};

export default NavBarRightSideItem;
