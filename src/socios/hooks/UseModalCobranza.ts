import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import UseActividades from "../../acatividades/hooks/UseActividades"
import { Actividad } from "../../shared/interfaces/actividades/actividades.interface";
import { Socio } from "../../shared/interfaces/socios/socios.interface";
import { useSociosStore } from "../../store/socios-store"
import { UseSocioQuery } from "./UseSocioQuery"
import { UseActividadesStore } from "../../store/actividades-store";
import useCobranzaQuery from "./useCobranzaQuery";
import { CobranzaValues } from "../../shared/interfaces/socios/cobranza-values.interfafce";
import { useCobranzaStore } from "../../store/cobranza-store";


interface UseModalCobranzaReturn {
    isPaymentOpened: boolean;
    actividadSelected: number | null;
    total: number;
    socioQuery: UseQueryResult<Socio>;
    actividadesQuery: UseQueryResult<Actividad[]>;
    cobranzaMutation: UseMutationResult<any, any, CobranzaValues, unknown>;

    setActividadSelected: (id: number) => void;
    paymentCloser: () => void;
    setTotal: (total: number, medioPago: string) => void;
}






const UseModalCobranza = (): UseModalCobranzaReturn => {

    const isPaymentOpened = useSociosStore(state => state.isPaymentOpened)
    const paymentCloser = useSociosStore(state => state.paymentColoser)
    const socioSelected = useSociosStore(state => state.socioSelected)
    const actividadSelected = UseActividadesStore(state => state.actividadSelected)
    const setActividadSelected = UseActividadesStore(state => state.setActividadSelected)
    const total = useCobranzaStore(state => state.total)
    const setTotal = useCobranzaStore(state => state.setTotal)

    const { socioQuery } = UseSocioQuery(socioSelected!)
    const { actividadesQuery } = UseActividades()
    const { cobranzaMutation } = useCobranzaQuery()






    return {
        isPaymentOpened,
        paymentCloser,
        total,
        setTotal,
        actividadSelected,
        setActividadSelected,
        socioQuery,
        actividadesQuery,
        cobranzaMutation,



    }
}

export default UseModalCobranza
