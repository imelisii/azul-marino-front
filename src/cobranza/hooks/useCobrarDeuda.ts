import * as Yup from 'yup';
import { useCobranzaStore } from '../../store/cobranza-store';
import { useSociosStore } from '../../store/socios-store';
import useCobrarDeudaQuery from './useCobrarDeudaQuery';


const useCobrarDeuda = () => {
    const open = useCobranzaStore(state => state.cobranzaDeuda);
    const onClose = useCobranzaStore(state => state.closeCobranzaDeuda);
    const socioSelected = useSociosStore(state => state.socioSelected);
    const deudaSelected = useCobranzaStore(state => state.deudaSelected);

    const { cobrarDeudaQuery } = useCobrarDeudaQuery();





    const validationSchema = Yup.object({
        monto: Yup.number().required("Campo requerido").min(1, "Debe ser mayor a 0").max(Number(deudaSelected?.monto) || 0, "No puede ser mayor al monto de la deuda"),
        descripcion: Yup.string().required("Campo requerido"),
    });


    const initialValues = {
        monto: deudaSelected?.monto,
        descripcion: "",
    };

    return {
        validationSchema,
        initialValues,
        open,
        onClose,
        socioSelected,
        deudaSelected,
        cobrarDeudaQuery,
    }

}
export default useCobrarDeuda
