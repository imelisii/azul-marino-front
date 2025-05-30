import { API } from "../../api/axios-api"

export const getClaveCaja = async (): Promise<string[]> => {
    const { data } = await API.get<string[]>('/caja/clave-caja')
    return data
}