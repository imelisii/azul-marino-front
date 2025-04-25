import { useMutation } from "@tanstack/react-query";
import { CobranzaValues } from "../interfaces/cobranza-values.interfafce";
import toast from "react-hot-toast";
import { cobranza } from "../services/cobranza";
import { useCobranzaStore } from "../../store/cobranza-store";






const useCobranzaQuery = (endPoint: string) => {
  const cobranzaClear = useCobranzaStore(state => state.clearInfoPago)
  const cobranzaMutation = useMutation({
    mutationFn: (cobranzaValues: CobranzaValues) => cobranza(cobranzaValues, endPoint),
    onSuccess: (data) => {
      cobranzaClear()
      toast.success(`Cobranza realizada con éxito ${data}`);
    },
    onError: (error: any) => {
      toast.error(`Error al realizar la cobranza: ${error.message}`);
    },
  });

  return {
    cobranzaMutation,
  };
};

export default useCobranzaQuery;
