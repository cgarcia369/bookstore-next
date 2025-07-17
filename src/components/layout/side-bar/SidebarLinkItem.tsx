import React from "react";
import Link from "next/link";

type SidebarLinkItemProps = {
  url: string;
  text: string;
};

const SidebarLinkItem = ({ url, text }: SidebarLinkItemProps) => {
  return (
    <>
      <Link href={url} className="text-2xl font-bold hover:translate-x-4 text-gray-800">
        <h2>{text}</h2>
      </Link>
    </>
  );
};

export default SidebarLinkItem;
