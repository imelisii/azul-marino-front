import { API } from "../../api/axios-api";
import { CobranzaValues } from "../../cobranza/interfaces/cobranza-values.interfafce";



export const cobranza = async (cobranzaValues: CobranzaValues, endPoint: string) => {

    const { data } = await API.post(`${endPoint}`, {
        ...cobranzaValues
    })

    return data
}

