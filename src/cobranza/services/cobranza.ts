import { API } from "../../api/axios-api";
import { CobranzaValues } from "../../cobranza/interfaces/cobranza-values.interfafce";
import { CobrarDeudaInterface } from "../../shared/deuda/cobrar-deuda.inteface";



export const cobranza = async (cobranzaValues: CobranzaValues, endPoint: string) => {

    const { data } = await API.post(`${endPoint}`, {
        ...cobranzaValues
    })

    return data
}


export const cobrarDeuda = async (deudaData:CobrarDeudaInterface, endPoint: string) => {
    const { data } = await API.post(`${endPoint}`, {
        ...deudaData
    })

    return data
}

