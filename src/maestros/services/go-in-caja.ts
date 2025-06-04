import { API } from "../../api/axios-api";

export const goInCaja = async (claveCaja:string) => {
    try {
        const response = await API.post("/caja/ingresar", {
            claveCaja: claveCaja,
        });
        return response.data;
    } catch (error) {
        console.error("Error al ingresar a la caja:", error);
        throw error;
    }
}