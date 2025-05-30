import { useQuery } from "@tanstack/react-query";
import { getClaveCaja } from "../services/get-clave-caja";

export const useClaveCaja = () => {
    const claveCajaQuery = useQuery({
        queryKey: ["claveCaja"],
        queryFn: getClaveCaja,
        staleTime: 1000 * 60 * 5,
        retry: 1,
    });

    return { claveCajaQuery };
};
