import { AxiosError } from "axios";
import { API } from "../../api/axios-api";
import { Usuario } from "../interfaces/usuarios";



export class AuthService {
    static login = async (email: string, password: string): Promise<Usuario> => {
        try {
            const { data } = await API.post<Usuario>("/caja", { usuario: email, clave: password })
            return data
        } catch (e) {
            if (e instanceof AxiosError) {
                throw new Error(e.response?.data)
            }
            throw new Error(e as any)
        }
    }


    static checkStatus = async (): Promise<Usuario> => {

        try {
            const { data } = await API.get<Usuario>("/auth/chek-status")
            return data
        } catch (err) {
            throw new Error(err as any)
        }


    }
}