import { create, StateCreator } from "zustand";


interface CajaStore {


}

const cajaStore: StateCreator<CajaStore> = () => ({


});

export const useCajaStore = create<CajaStore>(cajaStore);
