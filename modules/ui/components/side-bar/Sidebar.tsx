"use client";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { useUiStore } from "@/modules/ui/store";
import SearchInput from "@/modules/ui/components/nav-bar/SearchInput";
import SidebarLinkItem from "@/modules/ui/components/side-bar/SidebarLinkItem";
import { linksMobile } from "../../constants";
import SidebarHeader from "@/modules/ui/components/side-bar/SidebarHeader";
import SidebarAccount from "@/modules/ui/components/side-bar/SidebarAccount";
import SidebarSeparator from "./SidebarSeparator";

const animationVariants = {
  initial: { left: "1000px", opacity: 0 },
  animate: { left: "0", opacity: 1 },
  exit: { left: "1000px", opacity: 0 }
};
const AppSidebar = () => {
  const isOpenSidebar = useUiStore(({ isOpenSidebar }) => isOpenSidebar);
  return (
    <AnimatePresence>
      {isOpenSidebar && (
        <motion.div
          variants={animationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed top-0 w-dvw h-dvh z-[999]"
        >
          <div className="absolute bg-primary opacity-70 w-dvw h-dvh z-10" />
          <div className="relative flex flex-col bg-background h-full z-20 p-5 gap-y-5">
            <SidebarHeader />
            <SidebarSeparator />
            <SidebarAccount />
            <SidebarSeparator />
            <SearchInput onSearch={() => {}} />
            <SidebarSeparator />
            <div className="flex flex-col w-full gap-y-6 flex-1 justify-center-safe pb-40 ">
              {linksMobile.map((link, index) => (
                <SidebarLinkItem {...link} key={index} />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppSidebar;
