import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Actividad, NewActivity } from "../../shared/interfaces/actividades/actividades.interface"
import { createActividad } from "../services/create-actividad"
import toast from "react-hot-toast"
import { AxiosError } from "axios"
import { NestErrorResponse } from "../../shared/interfaces/axios-err-response"


const useNewActivityQuery = () => {
    const clientQuery = useQueryClient()

    const actividadesMutation = useMutation({
        mutationKey: ["newActividad"],
        mutationFn: (newActividad: NewActivity) => createActividad(newActividad),
        onSuccess: (data) => {
            toast.success(`Se creo la actividad ${data.nombre} `)
            clientQuery.invalidateQueries({ queryKey: ["actividades"] })

        },
        onError: (err: AxiosError<NestErrorResponse>) => {
            toast.error(`Error al crear la actividad ${err.response?.data.message}`)
        }
    })




    return {
        actividadesMutation,
    }
}

export default useNewActivityQuery
