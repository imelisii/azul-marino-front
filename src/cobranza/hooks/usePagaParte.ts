import * as Yup from 'yup';
import { UseActividadesStore } from "../../store/actividades-store";
import { useCobranzaStore } from "../../store/cobranza-store";
import { useSociosStore } from '../../store/socios-store';
import useCobranzaQuery from './useCobranzaQuery';


const usePagaParte = () => {
  const isPagaUnaParte = useCobranzaStore(state => state.cobranzaUnaParte);
  const closeCobranzaUnaParte = useCobranzaStore(state => state.closeCobranzaUnaParte);

  const socioSelected = useSociosStore(state => state.socioSelected);
  const actividadSelected = UseActividadesStore(state => state.actividadSelected);
  const { cobranzaMutation } = useCobranzaQuery("/cobros/parte");

  const initialValues = {
    cuotaParte: 0,
  };

  const validationSchema = Yup.object({
    cuotaParte: Yup.number()
      .typeError('Debe ser un número')
      .min(1, 'Debe ingresar un valor mayor a 0')
      .max(Number(actividadSelected?.precio) - 1, `No puede ser mayor o igual al total (${actividadSelected?.precio})`)
      .required('Este campo es obligatorio'),
  });



  return {
    isPagaUnaParte,
    closeCobranzaUnaParte,
    socioSelected,
    actividadSelected,
    initialValues,
    validationSchema,

    cobranzaMutation

  }
}

export default usePagaParte
