import { create, StateCreator } from "zustand";

interface CobranzaStore {
    total: number;
    setTotal: (total: number, medioPago: string) => void;
}

const cobranzaStore: StateCreator<CobranzaStore> = (set) => ({
    total: 0,
    setTotal: (total: number, medioPago: string) => {
        if (medioPago === "efectivo") {
            set({ total: total * 0.9 });
        } else {
            set({ total });
        }
    },
});

export const useCobranzaStore = create<CobranzaStore>(cobranzaStore);
