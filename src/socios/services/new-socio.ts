import { API } from "../../api/axios-api"
import { newSocioInterface } from "../../shared/interfaces/socios/socios.interface"

export const newSocio = async (socioData: newSocioInterface): Promise<newSocioInterface> => {
    const { data } = await API.post<newSocioInterface>("/socios", {
        ...socioData,
        fecha_nacimiento: socioData.fecha_nacimiento.toISOString(),
        dni:socioData.dni.toString(),
        celular: socioData.celular.toString()
    })
    return data
}