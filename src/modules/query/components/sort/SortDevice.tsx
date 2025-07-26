import React from "react";
import { SortComponentProps } from "./types/sort.types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog/dialog";
import { FaSortAmountDown } from "react-icons/fa";
import { Button } from "@/components/ui/button/button";
import { CheckIcon } from "lucide-react";

const SortDevice = ({ refine, canRefine, options, currentRefinement }: SortComponentProps) => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="block md:hidden" asChild>
          <Button variant="outline">
            <FaSortAmountDown className="fill-current text-gray-800" size={30} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ordenar por</DialogTitle>
            <ul className="flex flex-col gap-y-4 text-base py-4 ">
              {options.map((x) => (
                <li key={x.value} className="flex">
                  <DialogClose asChild>
                    <button
                      className="flex justify-between items-center border-l border-l-primary text-left pl-4 cursor-pointer shadow py-3 w-full rounded"
                      onClick={() => {
                        if (!canRefine) return;
                        refine(x.value);
                      }}
                      disabled={!canRefine}
                    >
                      {x.label}
                      {currentRefinement === x.value && <CheckIcon className="size-4 mr-3" />}
                    </button>
                  </DialogClose>
                </li>
              ))}
            </ul>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SortDevice;
