import { useMutation } from "@tanstack/react-query";
import { CobranzaValues } from "../interfaces/cobranza-values.interfafce";
import toast from "react-hot-toast";
import { cobranza } from "../services/cobranza";






const useCobranzaQuery = (endPoint: string) => {
  const cobranzaMutation = useMutation({
    mutationFn: (cobranzaValues: CobranzaValues) => cobranza(cobranzaValues, endPoint),
    onSuccess: (data) => {
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
