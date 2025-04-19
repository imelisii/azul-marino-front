import { API } from "../../api/axios-api"
import { Socio } from "../../shared/interfaces/socios/socios.interface"



export const getSocios = async () => {
    const { data } = await API.get<Socio[]>("/socios")
    return data
}



