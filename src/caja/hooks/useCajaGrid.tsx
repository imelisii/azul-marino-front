import { useState } from "react";
import { useCajaQuery } from "./useCajaQuery";
import { GridColDef } from "@mui/x-data-grid";
import { DesdeHasta } from "../../shared/interfaces/desde-hasta.interface";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "tipoMovimiento", headerName: "Tipo Movimiento", width: 150 },
    { field: "cuenta", headerName: "Cuenta", width: 120 },
    { field: "medioPago", headerName: "Medio de Pago", width: 140 },
    { field: "fecha", headerName: "Fecha", width: 130 },
    { field: "monto", headerName: "Monto", width: 120 },
    { field: "descripcion", headerName: "Descripción", flex: 1, minWidth: 200 },
];




const useCajaGrid = () => {
    const [fechaDesde, setFechaDesde] = useState<Date | null>(null);
    const [fechaHasta, setFechaHasta] = useState<Date | null>(null);
    const [filtros, setFiltros] = useState<DesdeHasta>({});

    const { cajaQuery } = useCajaQuery(filtros);


    const handleBuscar = () => {
        setFiltros({ fecha_inicio: fechaDesde, fecha_fin: fechaHasta });

    };

    const handleLimpiar = () => {
        setFechaDesde(null);
        setFechaHasta(null);
        setFiltros({});

    };


    return {

        cajaQuery,
        fechaDesde,
        setFechaDesde,
        fechaHasta,
        setFechaHasta,
        filtros,
        setFiltros,
        columns,
        handleLimpiar,
        handleBuscar,
    }



}

export default useCajaGrid
