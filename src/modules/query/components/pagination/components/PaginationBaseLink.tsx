import { PaginationItem, PaginationLink } from "@/components/ui/pagination/pagination";
import React from "react";
import { clsx } from "clsx";

type PaginationBaseLinkProps = {
  href: string;
  label: string | number;
  isActive?: boolean;
  disabled?: boolean;
};

const PaginationBaseLink = ({ href, label, isActive, disabled }: PaginationBaseLinkProps) => {
  return (
    <PaginationItem>
      <PaginationLink isActive={isActive} href={href} className={clsx((disabled || isActive) && "pointer-events-none")}>
        {label}
      </PaginationLink>
    </PaginationItem>
  );
};

export default PaginationBaseLink;
