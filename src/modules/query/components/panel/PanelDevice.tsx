"use client";
import React, { useState } from "react";
import RefineList from "../refinelist/RefineList";
import { refineLists } from "../../constants/refinelistItems";
import Range from "../range/Range";
import { rangeObj } from "../../constants/rangeItems";
import Rating from "@/modules/query/components/rating/Rating";
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle } from "@/components/ui/dialog/dialog";
import { Button } from "@/components/ui/button/button";
import { FaFilter } from "react-icons/fa";
import PanelDeviceItem from "./components/PanelDeviceItem";

const PanelDevice = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const handleOpen = (id: string) => {
    setOpenItem(id);
  };
  const handleClose = () => {
    setOpenItem(null);
  };
  return (
    <>
      <Dialog>
        <DialogTrigger className="block lg:hidden" asChild>
          <Button variant="outline">
            <FaFilter className="fill-current text-gray-800" size={30} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Filtros</DialogTitle>
            <ul className="flex flex-col gap-y-4 text-base py-4">
              <PanelDeviceItem
                handleOpen={handleOpen}
                handleClose={handleClose}
                isOpen={openItem === "Precio"}
                title={"Precio"}
                content={<Range title={rangeObj.price.title} attribute={rangeObj.price.attribute} />}
              />
              {refineLists.map((refineList) => (
                <PanelDeviceItem
                  key={refineList.attribute}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  isOpen={openItem === refineList.title}
                  title={refineList.title}
                  content={<RefineList {...refineList} key={refineList.attribute} />}
                />
              ))}
              <PanelDeviceItem
                handleOpen={handleOpen}
                handleClose={handleClose}
                isOpen={openItem === "Opiniones"}
                title={"Opiniones"}
                content={<Rating className="items-center" />}
              />
            </ul>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PanelDevice;
