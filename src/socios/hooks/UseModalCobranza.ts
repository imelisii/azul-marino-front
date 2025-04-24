
import UseActividades from "../../acatividades/hooks/UseActividades"
import { useSociosStore } from "../../store/socios-store"
import { UseSocioQuery } from "./UseSocioQuery"
import { UseActividadesStore } from "../../store/actividades-store";
import useCobranzaQuery from "./useCobranzaQuery";

import { useCobranzaStore } from "../../store/cobranza-store";


// interface UseModalCobranzaReturn {
//     isPaymentOpened: boolean;
//     actividadSelected: number | null;
//     total: number;
//     socioQuery: UseQueryResult<Socio>;
//     actividadesQuery: UseQueryResult<Actividad[]>;
//     cobranzaMutation: UseMutationResult<any, any, CobranzaValues, unknown>;

//     setActividadSelected: (id: number) => void;
//     paymentCloser: () => void;
//     setCobranzaPartial: () => void;
//     setTotal: (total: number) => void;
// }






const UseModalCobranza = () => {

    const isPaymentOpened = useSociosStore(state => state.isPaymentOpened)
    const paymentCloser = useSociosStore(state => state.paymentColoser)
    const socioSelected = useSociosStore(state => state.socioSelected)
    const actividadSelected = UseActividadesStore(state => state.actividadSelected)
    const setActividadSelected = UseActividadesStore(state => state.setActividadSelected)
    const setCobranzaPartial = useCobranzaStore(state => state.setCobranzaPartida)

    const { socioQuery } = UseSocioQuery(socioSelected!)
    const { actividadesQuery } = UseActividades()
    const { cobranzaMutation } = useCobranzaQuery()






    return {
        isPaymentOpened,
        paymentCloser,
    
        actividadSelected,
        setActividadSelected,
        setCobranzaPartial,
        socioQuery,
        actividadesQuery,
        cobranzaMutation,



    }
}

export default UseModalCobranza
