
import { create, StateCreator } from "zustand"



interface ActividadesStore {
    actividadSelected: number | null;
    setActividadSelected: (id: number) => void;
}




const actividadesStore: StateCreator<ActividadesStore> = (set) => ({
    actividadSelected: null,
    setActividadSelected: (id) => set({ actividadSelected: id })
});




export const UseActividadesStore = create<ActividadesStore>(actividadesStore);