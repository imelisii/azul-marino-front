import { useQuery } from "@tanstack/react-query"
import { getSocioById } from "../services/get-socio-by-id"


export const UseSocioQuery = (id: number) => {
    const socioQuery = useQuery({
        queryKey: ["socio", id],
        queryFn:  () =>  getSocioById(id),
        staleTime: 1000 * 60 * 5,
        enabled: !!id,
        retry: 1,


    })





    return {
        socioQuery,

    }
}


