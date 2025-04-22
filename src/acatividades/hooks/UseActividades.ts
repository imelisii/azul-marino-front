import { useQuery } from "@tanstack/react-query"
import { getActividades } from "../services/get-actividades"

const UseActividades = () => {

    const actividadesQuery = useQuery({
        queryKey: ["actividades"],
        queryFn: getActividades,
        staleTime: 1000 * 60 * 12,

    })




    return {
        actividadesQuery,
    }
}

export default UseActividades
