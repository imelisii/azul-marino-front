
import { create, StateCreator } from "zustand"


interface SociosStore {
    isNewOpened: boolean;
    isEditOpened: boolean;
    isDeleteOpened: boolean;
    isPaymentOpened: boolean;
    socioSelected: number | null;

    newHandler: () => void;
    editHandler: () => void;
    deleteHandler: () => void;
    paymentHandler: (id: number) => void;
    paymentColoser: () => void;


}




const sociosStore: StateCreator<SociosStore> = (set) => ({
    isNewOpened: false,
    isEditOpened: false,
    isDeleteOpened: false,
    isPaymentOpened: false,
    socioSelected: null,

    newHandler: () => set((state) => ({ isNewOpened: !state.isNewOpened })),
    editHandler: () => set((state) => ({ isEditOpened: !state.isEditOpened })),
    deleteHandler: () => set((state) => ({ isDeleteOpened: !state.isDeleteOpened })),
    paymentHandler: (id: number) => set((state) => ({ isPaymentOpened: !state.isPaymentOpened, socioSelected: id })),
    paymentColoser: () => set((state) => ({ isPaymentOpened: !state.isPaymentOpened, socioSelected: null })),
});




export const useSociosStore = create<SociosStore>(sociosStore);