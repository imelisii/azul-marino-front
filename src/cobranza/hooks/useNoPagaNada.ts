import { UseActividadesStore } from "../../store/actividades-store";
import { useCobranzaStore } from "../../store/cobranza-store";
import { useSociosStore } from "../../store/socios-store";
import useCobranzaQuery from "./useCobranzaQuery";


const useNoPagaNada = () => {
  const noPagaNada = useCobranzaStore(state => state.cobranzaNoPagaNada);
  const openNoPagaNada = useCobranzaStore(state => state.openCobranzaNoPagaNada);
  const closeNoPagaNada = useCobranzaStore(state => state.closeCobranzaNoPagaNada);
  const socio = useSociosStore(state => state.socioSelected);
  const actividad = UseActividadesStore(state => state.actividadSelected);
  const { cobranzaMutation } = useCobranzaQuery("/cobros/no-paga-nada")


  const generarDeuda = async() => {
    cobranzaMutation.mutate({
      socioId: socio?.id!,
      actividadId: actividad?.id!,
      metodoPago: "",
      aCuentaDe: "",
      monto: 0
    })
  }





  return {
    noPagaNada,
    openNoPagaNada,
    closeNoPagaNada,
    actividad,
    socio,

    generarDeuda,
  }
}

export default useNoPagaNada
