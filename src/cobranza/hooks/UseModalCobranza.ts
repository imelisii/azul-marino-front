
import UseActividades from "../../acatividades/hooks/UseActividades"
import { useSociosStore } from "../../store/socios-store"
import { UseActividadesStore } from "../../store/actividades-store";
import useCobranzaQuery from "./useCobranzaQuery";
import { useCobranzaStore } from "../../store/cobranza-store";
import * as Yup from 'yup';
import { GridColDef } from "@mui/x-data-grid";
import { UseSocioQuery } from "../../socios/hooks/UseSocioQuery";
import { InscripcionesDetail } from "../../shared/interfaces/socios/socio-detail.interface";



const initialValues = {
    actividad: '',
    metodoPago: '',
    aCuentaDe: '',
    monto: 0,

  }







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

const columnsHisotrial: GridColDef<InscripcionesDetail>[] = [
    { field: 'fecha', headerName: 'Fecha', flex: 1 },
    { field: 'nombre', headerName: 'Actividad', flex: 1 },
    { field: 'descripcion', headerName: 'Descripción', flex: 1 },
    { field: "monto", headerName: 'Monto', flex: 1 },

];





const UseModalCobranza = () => {

    const isPaymentOpened = useSociosStore(state => state.isPaymentOpened)
    const paymentCloser = useSociosStore(state => state.paymentColoser)
    const socioSelected = useSociosStore(state => state.socioSelected)
    const actividadSelected = UseActividadesStore(state => state.actividadSelected)
    const setActividadSelected = UseActividadesStore(state => state.setActividadSelected)
    const setCobranzaPartial = useCobranzaStore(state => state.setCobranzaPartida)


    const { actividadesQuery } = UseActividades()
    const { cobranzaMutation } = useCobranzaQuery("/cobros")
    const { socioQuery } = UseSocioQuery(socioSelected?.id!)


    return {
        validationSchema,
        isPaymentOpened,
        paymentCloser,

        actividadSelected,
        socioSelected,
        setActividadSelected,
        setCobranzaPartial,
        columnsHisotrial,
        initialValues,



        actividadesQuery,
        cobranzaMutation,
        socioQuery,



    }
}

export default UseModalCobranza
