import { API } from "../../api/axios-api"
import { Socio } from "../../shared/interfaces/socios/socios.interface"



export const getSocioById = async (id: number): Promise<Socio> => {
    const { data } = await API.get<Socio>(`/socios/${id}`)
    return data
}