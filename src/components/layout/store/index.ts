import { create } from "zustand";

export type UiStore = {
  isOpenSidebar: boolean;
  handleOpenSidebar: () => void;
  handleCloseSidebar: () => void;
  handleReverseSidebar: () => void;
};
export const useUiStore = create<UiStore>()((set) => {
  return {
    isOpenSidebar: false,
    handleOpenSidebar: () =>
      set((state) => ({
        ...state,
        isOpenSidebar: true
      })),
    handleCloseSidebar: () =>
      set((state) => ({
        ...state,
        isOpenSidebar: false
      })),
    handleReverseSidebar: () =>
      set((state) => ({
        ...state,
        isOpenSidebar: !state.isOpenSidebar
      }))
  };
});
