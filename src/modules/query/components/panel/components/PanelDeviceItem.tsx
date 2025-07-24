import React, { ReactNode } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible/collapsible";

type PanelDeviceItemProps = {
  title: string;
  content: ReactNode;
  isOpen: boolean;
  handleOpen: (id: string) => void;
  handleClose: VoidFunction;
};

const PanelDeviceItem = ({ content, title, isOpen, handleOpen, handleClose }: PanelDeviceItemProps) => {
  return (
    <>
      <Collapsible open={isOpen}>
        <CollapsibleTrigger
          asChild
          onClick={() => {
            if (isOpen) {
              handleClose();
              return;
            }
            handleOpen(title);
          }}
        >
          <li className="flex justify-between items-center border-l border-l-primary text-left pl-4 cursor-pointer shadow py-3 w-full rounded">
            {title}
          </li>
        </CollapsibleTrigger>
        <CollapsibleContent>{content}</CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default PanelDeviceItem;
