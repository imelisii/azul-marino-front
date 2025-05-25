
import { create, StateCreator } from "zustand"
import { Socio } from '../shared/interfaces/socios/socios.interface';


interface SociosStore {
    isNewOpened: boolean;
    isEditOpened: boolean;
    isDeleteOpened: boolean;
    isPaymentOpened: boolean;
    socioSelected: Socio | null;

    newHandler: () => void;
    editHandler: (socio: Socio) => void;
    deleteHandler: () => void;
    paymentHandler: (socio: Socio) => void;
    paymentColoser: () => void;
    closeHandler: () => void;
    clearSocioSelected: () => void;



}




const sociosStore: StateCreator<SociosStore> = (set) => ({
    isNewOpened: false,
    isEditOpened: false,
    isDeleteOpened: false,
    isPaymentOpened: false,
    socioSelected: null,

    newHandler: () => set((state) => ({ isNewOpened: !state.isNewOpened })),
    editHandler: (socio: Socio) => set((state) => ({ isEditOpened: !state.isEditOpened, socioSelected: socio })),
    deleteHandler: () => set((state) => ({ isDeleteOpened: !state.isDeleteOpened })),
    paymentHandler: (socio: Socio) => set((state) => ({ isPaymentOpened: !state.isPaymentOpened, socioSelected: socio })),
    paymentColoser: () => set((state) => ({ isPaymentOpened: !state.isPaymentOpened, socioSelected: null })),
    closeHandler: () => set({ isEditOpened: false, socioSelected: null }),
    clearSocioSelected: () => set({ socioSelected: null, isPaymentOpened: false, isEditOpened: false, isDeleteOpened: false, isNewOpened: false }),
});




export const useSociosStore = create<SociosStore>(sociosStore);