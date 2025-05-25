import { API } from "../../api/axios-api"
import { Actividad } from "../../shared/interfaces/actividades/actividades.interface";

export const getActivityById = async (id: number): Promise<Actividad> => {
    const { data } = await API.get<Actividad>(`/actividades/${id}`);
    return data;
}   