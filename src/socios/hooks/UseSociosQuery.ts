import { useQuery } from "@tanstack/react-query"
import { getSocios } from "../services/get-socios"


 export const UseSociosQuery = () => {
 const sociosQuery = useQuery({
    queryKey: ["socios"],
    queryFn: getSocios,
    staleTime: 1000 * 60 * 12 ,
 })





  return {
    sociosQuery,

  }
}


