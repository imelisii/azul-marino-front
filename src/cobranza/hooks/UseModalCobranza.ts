
import UseActividades from "../../acatividades/hooks/UseActividades"
import { useSociosStore } from "../../store/socios-store"
import { UseActividadesStore } from "../../store/actividades-store";
import useCobranzaQuery from "./useCobranzaQuery";
import { useCobranzaStore } from "../../store/cobranza-store";
import * as Yup from 'yup';
import { GridColDef } from "@mui/x-data-grid";






const validationSchema = Yup.object({
    actividad: Yup.string().required('La actividad es obligatoria'),
    metodoPago: Yup.string().required('El método de pago es obligatorio'),
    aCuentaDe: Yup.string().when("metodoPago", {
        is: (metodoPago: string) => metodoPago !== "efectivo",
        then: (schema) => schema.required('El monto a cuenta es obligatorio'),
        otherwise: (schema) => schema.notRequired()
    }),
    monto: Yup.number().min(1, "El monto debe ser mayor a 1").required('El monto es obligatorio')
});







const UseModalCobranza = () => {

    const isPaymentOpened = useSociosStore(state => state.isPaymentOpened)
    const paymentCloser = useSociosStore(state => state.paymentColoser)
    const socioSelected = useSociosStore(state => state.socioSelected)
    const actividadSelected = UseActividadesStore(state => state.actividadSelected)
    const setActividadSelected = UseActividadesStore(state => state.setActividadSelected)
    const setCobranzaPartial = useCobranzaStore(state => state.setCobranzaPartida)

   
    const { actividadesQuery } = UseActividades()
    const { cobranzaMutation } = useCobranzaQuery()

    const columnsHisotrial: GridColDef[] = [
        { field: 'fecha', headerName: 'Fecha', flex: 1 },
        { field: 'actividad', headerName: 'Actividad', flex: 1 },
        { field: 'metodo', headerName: 'Método de Pago', flex: 1 },
        { field: 'monto', headerName: 'Monto', flex: 1, type: 'number' },
      ];
    






    return {
        validationSchema,
        isPaymentOpened,
        paymentCloser,

        actividadSelected,
        socioSelected,
        setActividadSelected,
        setCobranzaPartial,
        columnsHisotrial,


       
        actividadesQuery,
        cobranzaMutation,



    }
}

export default UseModalCobranza
