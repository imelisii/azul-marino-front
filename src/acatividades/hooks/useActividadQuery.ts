import { useQuery } from "@tanstack/react-query"
import { getActivityById } from "../services/get-activity-by-id"


const useActividadQuery = (id: number) => {
    const activityQuery = useQuery({
        queryKey: ["actividad", id],
        queryFn: () => getActivityById(id),
        staleTime: 1000 * 60 * 5,
        enabled: !!id,
    })


    return {
        activityQuery,
    }
}

export default useActividadQuery
