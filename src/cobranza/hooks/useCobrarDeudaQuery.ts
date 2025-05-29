import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cobrarDeuda } from "../services/cobranza"
import toast from "react-hot-toast";
import { useCobranzaStore } from "../../store/cobranza-store";
import { AxiosError } from "axios";
import { NestErrorResponse } from "../../shared/interfaces/axios-err-response";
import { CobrarDeudaInterface } from "../../shared/deuda/cobrar-deuda.inteface";


const useCobrarDeudaQuery = () => {
    const clearInfo = useCobranzaStore(state => state.clearInfoPago)
    const queryClient = useQueryClient();


    const cobrarDeudaQuery = useMutation({
        mutationFn: (deudaData: CobrarDeudaInterface) => cobrarDeuda(deudaData, "cobros/cobrar-deuda"),
        onSuccess: (data, variables) => {
            toast.success(`Deuda cobrada: ${data}`);
            clearInfo()
            queryClient.invalidateQueries({ queryKey: ["socio", variables.socioId] })

        },
        onError: (error: AxiosError<NestErrorResponse>) => {
            toast.error(`Error al cobrar la deuda: ${error.response?.data.message}`);
        },
    })


    return {
        cobrarDeudaQuery, 
    }
}

export default useCobrarDeudaQuery
