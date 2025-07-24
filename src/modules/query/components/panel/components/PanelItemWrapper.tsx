import React, { PropsWithChildren } from "react";
import { clsx } from "clsx";

type PanelItemWrapperProps = PropsWithChildren<{
  title: string;
  className?: string;
}>;

const PanelItemWrapper = ({ title, children, className }: PanelItemWrapperProps) => {
  return (
    <div className={clsx("flex flex-col gap-y-4 py-6 md:py-0", className)}>
      <h1 className="text-xl hidden md:block">{title}</h1>
      {children}
    </div>
  );
};

export default PanelItemWrapper;
