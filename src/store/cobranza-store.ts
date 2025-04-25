import { create, StateCreator } from "zustand";
import toast from "react-hot-toast";

interface CobranzaStore {
    cobranzaPartida: boolean;
    cobranzaUnaParte: boolean;
    cobranzaNoPagaNada: boolean;


    setCobranzaPartida: () => void;
    closeCobranzaUnaParte: () => void;
    openCobranzaPartidaValidada: (idActividad?: number) => void;
    openCobranzaUnaParteValidad: (idActividad?: number, medioPago?: string) => void;
    openCobranzaNoPagaNada: () => void;
    closeCobranzaNoPagaNada: () => void;
}

const cobranzaStore: StateCreator<CobranzaStore> = (set) => ({
    cobranzaPartida: false,
    cobranzaUnaParte: false,
    cobranzaNoPagaNada: false,

    setCobranzaPartida: () => {
        set((state) => ({ cobranzaPartida: !state.cobranzaPartida }));
    },
    openCobranzaPartidaValidada: (idActividad?: number) => {

        if (idActividad === 0 || idActividad === undefined) return toast.error("Seleccione La actividad a cobrar")


        set({ cobranzaPartida: true });
    },
    closeCobranzaUnaParte: () => {
        set((state) => ({ cobranzaUnaParte: !state.cobranzaUnaParte }));
    },
    openCobranzaUnaParteValidad: (idActividad?: number, medioPago?: string) => {
        if (!idActividad || !medioPago) return toast.error("Seleccione la actividad y el medio de pago")
        set({ cobranzaUnaParte: true });
    },
    openCobranzaNoPagaNada: () => {
        set({ cobranzaNoPagaNada: true });
    },
    closeCobranzaNoPagaNada: () => {
        set({ cobranzaNoPagaNada: false });
    },
});

export const useCobranzaStore = create<CobranzaStore>(cobranzaStore);
