import React, { PropsWithChildren } from "react";

type PanelItemWrapperProps = PropsWithChildren<{
  title: string;
}>;

const PanelItemWrapper = ({ title, children }: PanelItemWrapperProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-xl">{title}</h1>
      {children}
    </div>
  );
};

export default PanelItemWrapper;
