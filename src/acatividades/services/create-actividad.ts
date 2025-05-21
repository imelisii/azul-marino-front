import { API } from "../../api/axios-api"
import { Actividad } from "../../shared/interfaces/actividades/actividades.interface"



export const createActividad = async (newActividad:Actividad): Promise<Actividad> => {
    const { data } = await API.post<Actividad>('/actividades', {
        ...newActividad
    })
    return data
}