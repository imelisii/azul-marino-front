import { API } from "../../api/axios-api";
import { CobranzaValues } from "../../shared/interfaces/socios/cobranza-values.interfafce";



export const cobranza = async (cobranzaValues: CobranzaValues) => {
    const { data } = await API.post("/cobros", {
        cobranzaValues
    })

    return data
}