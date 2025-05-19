import { API } from "../../api/axios-api"
import { Actividad } from "../../shared/interfaces/actividades/actividades.interface"



export const getActividades = async () => {
    const { data } = await API.get<Actividad[]>('/actividades')
    return data
}