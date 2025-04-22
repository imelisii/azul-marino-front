import { API } from "../../api/axios-api"



export const getActividades = async () => {
    const { data } = await API.get('/actividades')
    return data
}