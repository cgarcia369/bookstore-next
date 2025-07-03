import React, { useState } from "react";
import { RefinementListItem } from "instantsearch.js/es/connectors/refinement-list/connectRefinementList";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/components/dialog/dialog";
import useGroupByInitialLetter from "@/components/query/components/refinelist/hooks/useGroupByInitialLetter";

type RefineListMoreModalProps = {
  items: RefinementListItem[];
  title: string;
  onClickItem: (item: RefinementListItem) => void;
};

const RefineListMoreModal = ({ items, title, onClickItem }: RefineListMoreModalProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { itemsAsArray } = useGroupByInitialLetter({ items });
  return (
    <>
      <Dialog open={open} onOpenChange={(change) => setOpen(change)}>
        <DialogTrigger>
          <h2 className="text-sm cursor-pointer underline underline-offset-2 text-secondary">Mostrar más</h2>
        </DialogTrigger>
        <DialogContent className="lg:min-w-max">
          <DialogHeader>
            <DialogTitle className="text-center">{title}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-y-8 overflow-auto h-full lg:max-h-screen lg:p-8 text-muted-foreground">
            {itemsAsArray.map((item) => (
              <div className="flex flex-col gap-y-8" key={item.key}>
                <div className="flex flex-col gap-y-5">
                  <h3 className="text-xl font-medium text-gray-900">{item.key}</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-6">
                    {item.value.map((refineItem) => (
                      <p
                        className="text-base text-nowrap cursor-pointer"
                        onClick={() => {
                          onClickItem(refineItem);
                          setOpen(false);
                        }}
                        key={refineItem.label}
                      >
                        {refineItem.label}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-300 w-full min-h-px mx-auto" />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RefineListMoreModal;
