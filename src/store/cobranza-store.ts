import { create, StateCreator } from "zustand";
import toast from "react-hot-toast";
import { useSociosStore } from "./socios-store";
import { UseActividadesStore } from "./actividades-store";
import { Saldo } from "../shared/interfaces/socios/socio-detail.interface";



interface CobranzaStore {
    cobranzaPartida: boolean;
    cobranzaUnaParte: boolean;
    cobranzaNoPagaNada: boolean;
    cobranzaDeuda: boolean;
    deudaSelected: Saldo | null;


    setCobranzaPartida: () => void;
    closeCobranzaUnaParte: () => void;
    openCobranzaPartidaValidada: (idActividad?: number) => void;
    openCobranzaUnaParteValidad: (idActividad?: number, medioPago?: string, aCuentaDe?: string) => void;
    openCobranzaDeuda: (deduaSelected: Saldo) => void;
    closeCobranzaDeuda: () => void;
    openCobranzaNoPagaNada: () => void;
    closeCobranzaNoPagaNada: () => void;
    clearInfoPago:() => void;
}

const cobranzaStore: StateCreator<CobranzaStore> = (set) => ({
    cobranzaPartida: false,
    cobranzaUnaParte: false,
    cobranzaNoPagaNada: false,
    cobranzaDeuda: false,
    deudaSelected: null,

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
    openCobranzaUnaParteValidad: (idActividad?: number, medioPago?: string, aCuentaDe?: string) => {
        if (!idActividad || !medioPago) return toast.error("Seleccione la actividad y el medio de pago")
        if (medioPago !== "efectivo" && !aCuentaDe) return toast.error("Si es Mercado Pago o Transferencia, debe selecionar a cuenta de quien es el pago")


        set({ cobranzaUnaParte: true });
    },
    openCobranzaNoPagaNada: () => {
        set({ cobranzaNoPagaNada: true });
    },
    closeCobranzaNoPagaNada: () => {
        set({ cobranzaNoPagaNada: false });
    },
    clearInfoPago: () => {
        useSociosStore.getState().clearSocioSelected()
        UseActividadesStore.getState().clearActividadSelected()
        set({ cobranzaPartida: false, cobranzaUnaParte: false, cobranzaNoPagaNada: false, cobranzaDeuda: false, deudaSelected: null });
    },
    openCobranzaDeuda: (deudaSelected: Saldo) => {
        set({ cobranzaDeuda: true, deudaSelected });
    },
    closeCobranzaDeuda: () => {
        set({ cobranzaDeuda: false, deudaSelected: null });
    },
    
   
});

export const useCobranzaStore = create<CobranzaStore>(cobranzaStore);
