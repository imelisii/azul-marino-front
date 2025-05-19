import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CobranzaValues } from "../interfaces/cobranza-values.interfafce";
import toast from "react-hot-toast";
import { cobranza } from "../services/cobranza";
import { useCobranzaStore } from "../../store/cobranza-store";
import { AxiosError } from "axios";
import { NestErrorResponse } from "../../shared/interfaces/axios-err-response";






const useCobranzaQuery = (endPoint: string) => {
  const cobranzaClear = useCobranzaStore(state => state.clearInfoPago)
  const queryClient = useQueryClient();


  const cobranzaMutation = useMutation({
    mutationFn: (cobranzaValues: CobranzaValues) => cobranza(cobranzaValues, endPoint),
    onSuccess: (data, variables) => {
      toast.success(`${data}`);
      cobranzaClear()
      queryClient.invalidateQueries({ queryKey: ["socio", variables.socioId] })

    },
    onError: (error: AxiosError<NestErrorResponse>) => {
      toast.error(`Error al realizar la cobranza: ${error.response?.data.message}`);
    },
  });

  return {
    cobranzaMutation,
  };
};

export default useCobranzaQuery;
