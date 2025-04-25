import * as Yup from 'yup';
import { UseActividadesStore } from '../../store/actividades-store';
import { useCobranzaStore } from '../../store/cobranza-store';
import { useSociosStore } from '../../store/socios-store';

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
        .min(1, 'El valor debe ser mayor a 0'),
    aCuentaDe: Yup.string().required('Este campo es obligatorio'),
});





const usePagaPartes = () => {
 const isCobranzaParcialOpen = useCobranzaStore(state => state.cobranzaPartida)
    const setCobranzaParcial = useCobranzaStore(state => state.setCobranzaPartida)
    const actividad = UseActividadesStore(state => state.actividadSelected)
    const socio = useSociosStore(state => state.socioSelected)





    return {

        validationSchema,
        isCobranzaParcialOpen,
        setCobranzaParcial,
        actividad,
        socio,
    }
}

export default usePagaPartes
