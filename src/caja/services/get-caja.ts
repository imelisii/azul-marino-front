import { API } from "../../api/axios-api";
import { DesdeHasta } from "../../shared/interfaces/desde-hasta.interface";
import { CajaDataResponse } from "../interface/caja-data.response";



export const getCaja = async (params?: DesdeHasta) => {
    let query: Record<string, string> = {};
    if (params?.fecha_inicio) query.fecha_inicio = params.fecha_inicio.toISOString()
    if (params?.fecha_fin) query.fecha_fin = params.fecha_fin.toISOString()

    const { data } = await API.get<CajaDataResponse>('/caja', { params: query });
    return data;
}
