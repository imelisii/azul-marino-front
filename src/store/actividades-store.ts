
import { create, StateCreator } from "zustand"
import { Actividad } from "../shared/interfaces/actividades/actividades.interface";




interface ActividadesStore {
    actividadSelected: Actividad | null;
    setActividadSelected: (actividad: Actividad) => void;
    clearActividadSelected: () => void;
}




const actividadesStore: StateCreator<ActividadesStore> = (set) => ({
    actividadSelected: null,
    actividadObjeto: null,
    setActividadSelected: (actividad: Actividad) => set({ actividadSelected: actividad }),
    clearActividadSelected: () => set({ actividadSelected: null }),

});




export const UseActividadesStore = create<ActividadesStore>(actividadesStore);