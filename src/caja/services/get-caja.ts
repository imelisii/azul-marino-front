import { API } from "../../api/axios-api";
import { CajaDataResponse } from "../interface/caja-data.response";


// Recibe fechas opcionales como parámetros
export const getCaja = async (params?: { fecha_inicio?: Date | null; fecha_fin?: Date | null }) => {
    let query: any = {};
    if (params?.fecha_inicio) query.fecha_inicio = params.fecha_inicio.toISOString()
    if (params?.fecha_fin) query.fecha_fin = params.fecha_fin.toISOString()

    const { data } = await API.get<CajaDataResponse>('/caja', { params: query });
    return data;
}
