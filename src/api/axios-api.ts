import axios from "axios"
import { useAuthStore } from "../store/auth/auth.store"


export const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})


API.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().token

        if (token) {
            config.headers["Authorization"] = "Bearer " + token
        }
        return config
    }
)
