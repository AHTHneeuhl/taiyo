import { create } from "zustand";

interface UpdateContactState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUpdateContact = create<UpdateContactState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUpdateContact;
