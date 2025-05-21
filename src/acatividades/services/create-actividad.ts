import { API } from "../../api/axios-api"
import { Actividad, NewActivity } from "../../shared/interfaces/actividades/actividades.interface"



export const createActividad = async (newActividad:NewActivity): Promise<Actividad> => {
    const { data } = await API.post<Actividad>('/actividades', {
        ...newActividad
    })
    return data
}