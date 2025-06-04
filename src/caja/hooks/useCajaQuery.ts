import { useQuery } from "@tanstack/react-query";
import { getCaja } from "../services/get-caja";
import { DesdeHasta } from "../../shared/interfaces/desde-hasta.interface";

export const useCajaQuery = (params: DesdeHasta) => {
    const cajaQuery = useQuery({
        queryKey: ["caja", params?.fecha_fin?.toISOString(), params?.fecha_fin?.toISOString()],
        queryFn: () => getCaja(params),
        staleTime: 1000 * 60 * 5,
        retry: 1,
        enabled: !!params?.fecha_inicio || !!params?.fecha_fin,
    });

    return { cajaQuery };
};
