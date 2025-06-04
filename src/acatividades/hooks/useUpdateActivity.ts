import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateActivityById } from "../services/update-activity-by-id"
import { Actividad } from '../../shared/interfaces/actividades/actividades.interface';
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { NestErrorResponse } from "../../shared/interfaces/axios-err-response";
import { useMaestroSotre } from '../../store/maestros-store';


export const useUpdateActivity = () => {
    const clearInfo = useMaestroSotre(state => state.clearInfo)

    const queryClient = useQueryClient()
    const updateActivityQuery = useMutation({
        mutationKey: ["update-activity"],
        mutationFn: (act: Actividad) => updateActivityById(act),
        onSuccess: (data: Actividad) => {
            toast.success(`Actividad ${data.nombre} actualizada correctamente`)
            queryClient.invalidateQueries({ queryKey: ["actividades"] });
            queryClient.invalidateQueries({ queryKey: ["actividad", data.id] });
            clearInfo()


        },
        onError: (error: AxiosError<NestErrorResponse>) => {
            toast.error(`Error al actualizar la actividad: ${error.response?.data.message || "Error desconocido"}`)
            console.log(error)
        }

    })


    return {
        updateActivityQuery
    }
}