import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Actividad } from "../../shared/interfaces/actividades/actividades.interface"
import { createActividad } from "../services/create-actividad"
import toast from "react-hot-toast"
import { AxiosError } from "axios"
import { NestErrorResponse } from "../../shared/interfaces/axios-err-response"


const UseActividad = () => {
    const clientQuery = useQueryClient()

    const actividadesMutation = useMutation({
        mutationKey: ["actividad"],
        mutationFn: (newActividad: Actividad) => createActividad(newActividad),
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

export default UseActividad
