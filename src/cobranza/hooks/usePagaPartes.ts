import * as Yup from 'yup';
import { UseActividadesStore } from '../../store/actividades-store';
import { useCobranzaStore } from '../../store/cobranza-store';
import { useSociosStore } from '../../store/socios-store';
import useCobranzaQuery from './useCobranzaQuery';


const initualValues = {
    medioPago1: "",
    medioPago2: "",
    valor: 0,
    aCuentaDe: "",

}




const usePagaPartes = () => {
    const isCobranzaParcialOpen = useCobranzaStore(state => state.cobranzaPartida)
    const setCobranzaParcial = useCobranzaStore(state => state.setCobranzaPartida)
    const actividad = UseActividadesStore(state => state.actividadSelected)
    const socio = useSociosStore(state => state.socioSelected)
    const { cobranzaMutation } = useCobranzaQuery("/cobros/partes")

    const validationSchema = Yup.object({
        medioPago1: Yup.string().required('Este campo es obligatorio'),
        medioPago2: Yup.string()
            .required('Este campo es obligatorio')
            .test(
                'no-igual-a-medioPago1',
                'Los medios de pago no pueden ser iguales',
                function (value) {
                    const { medioPago1 } = this.parent;
                    return value !== medioPago1;
                }
            ),
        valor: Yup.number()
            .required('Este campo es obligatorio')
            .min(1, 'El valor debe ser mayor a 0')
            .max(actividad?.precio! - 1, `El valor no puede ser mayor o igual al precio de la actividad`),
        aCuentaDe: Yup.string().required('Este campo es obligatorio'),
    });



    return {

        validationSchema,
        isCobranzaParcialOpen,
        setCobranzaParcial,
        actividad,
        socio,
        initualValues,
        cobranzaMutation
    }
}

export default usePagaPartes
