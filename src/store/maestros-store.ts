
import { create, StateCreator } from "zustand"





interface MaestroStore {
   isOpenNewActivity: boolean;
   setOpenNewActivity: (isOpen: boolean) => void;
}




const maestroStore: StateCreator<MaestroStore> = (set) => ({
   isOpenNewActivity: false,
   setOpenNewActivity: (isOpen: boolean) => set({ isOpenNewActivity: isOpen })
});




export const useMaestroSotre = create<MaestroStore>(maestroStore);