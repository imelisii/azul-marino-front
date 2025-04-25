
import { create, StateCreator } from "zustand"
import { Socio } from '../shared/interfaces/socios/socios.interface';


interface SociosStore {
    isNewOpened: boolean;
    isEditOpened: boolean;
    isDeleteOpened: boolean;
    isPaymentOpened: boolean;
    socioSelected: Socio | null;

    newHandler: () => void;
    editHandler: () => void;
    deleteHandler: () => void;
    paymentHandler: (socio: Socio) => void;
    paymentColoser: () => void;
    clearSocioSelected: () => void;


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
    paymentHandler: (socio: Socio) => set((state) => ({ isPaymentOpened: !state.isPaymentOpened, socioSelected: socio })),
    paymentColoser: () => set((state) => ({ isPaymentOpened: !state.isPaymentOpened, socioSelected: null })),
    clearSocioSelected: () => set({ socioSelected: null, isPaymentOpened: false, isEditOpened: false, isDeleteOpened: false, isNewOpened: false }),
});




export const useSociosStore = create<SociosStore>(sociosStore);