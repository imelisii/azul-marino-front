
import { create, StateCreator } from "zustand"
import { Actividad } from "../shared/interfaces/actividades/actividades.interface";





interface MaestroStore {
   isOpenNewActivity: boolean;
   isOpenEditActivity: boolean;
   activityMaestrosSelected?: Actividad | undefined;
   setOpenNewActivity: (isOpen: boolean) => void;
   setCloseNewActivity: () => void;
   setOpenEditActivity: (isOpen: boolean) => void
   setCloseEditActivity: () => void;
   setACtividadMaestrosSelected: (actividad: Actividad) => void;

   clearInfo: () => void;

}




const maestroStore: StateCreator<MaestroStore> = (set, get) => ({
   isOpenNewActivity: false,
   isOpenEditActivity: false,
   activityMaestrosSelected: undefined,

   setOpenNewActivity: (isOpen: boolean) => set({ isOpenNewActivity: isOpen }),
   setCloseNewActivity: () => set({ isOpenNewActivity: false }),
   setOpenEditActivity: (isOpen: boolean) => set({ isOpenEditActivity: isOpen }),
   setCloseEditActivity: () => set({ isOpenEditActivity: false }),
   setACtividadMaestrosSelected: (actividad: Actividad) => {
      set({ activityMaestrosSelected: actividad });
      get().setOpenEditActivity(true);
   },
   clearInfo: () => {
      set({
         isOpenNewActivity: false,
         isOpenEditActivity: false,
         activityMaestrosSelected: undefined,
      });
   },
});




export const useMaestroSotre = create<MaestroStore>(maestroStore);