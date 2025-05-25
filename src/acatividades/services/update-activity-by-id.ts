import { API } from "../../api/axios-api"
import { Actividad } from '../../shared/interfaces/actividades/actividades.interface';

export const updateActivityById = async (Actividad: Actividad): Promise<Actividad> => {
    const { data } = await API.patch<Actividad>(`/actividades/${Actividad.id}`,
        {
            nombre: Actividad.nombre,
            descripcion: Actividad.descripcion,
            precio: Number(Actividad.precio),
            activa: Actividad.activa
        }
    );
    return data;
}