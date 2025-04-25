import { API } from "../../api/axios-api"
import { SocioDetail } from "../../shared/interfaces/socios/socio-detail.interface"




export const getSocioById = async (id: number): Promise<SocioDetail> => {
    const { data } = await API.get<SocioDetail>(`/socios/${id}`)
    return data
}