import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, CircularProgress, Button, Stack } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { es } from 'date-fns/locale';
import { useState } from "react";
import { useCajaQuery } from "../hooks/useCajaQuery";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "tipoMovimiento", headerName: "Tipo Movimiento", width: 150 },
    { field: "cuenta", headerName: "Cuenta", width: 120 },
    { field: "medioPago", headerName: "Medio de Pago", width: 140 },
    { field: "fecha", headerName: "Fecha", width: 130 },
    { field: "monto", headerName: "Monto", width: 120 },
    { field: "descripcion", headerName: "Descripción", width: 200 },
];

const CajaDataGrid = () => {
    const [fechaDesde, setFechaDesde] = useState<Date | null>(null);
    const [fechaHasta, setFechaHasta] = useState<Date | null>(null);
    const [filtros, setFiltros] = useState<{ fecha_inicio?: Date | null; fecha_fin?: Date | null }>({});

    const { cajaQuery } = useCajaQuery(filtros);

    const handleBuscar = () => {
        setFiltros({ fecha_inicio: fechaDesde, fecha_fin: fechaHasta });

    };

    const handleLimpiar = () => {
        setFechaDesde(null);
        setFechaHasta(null);
        setFiltros({});

    };

    if (cajaQuery.isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
                <CircularProgress />
            </Box>
        );
    }

    if (cajaQuery.isError) {
        return <Box color="error.main">Error al cargar los datos de la caja.</Box>;
    }

    return (
        <Box sx={{ height: "90vh", width: "100%" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
                <Stack direction="row" spacing={2} mb={2} alignItems="center">
                    <DatePicker
                        label="Desde"
                        value={fechaDesde}
                        onChange={setFechaDesde}
                        format="dd/MM/yyyy"
                        slotProps={{ textField: { size: "small", sx: { minWidth: 140 } } }}
                    />
                    <DatePicker
                        label="Hasta"
                        value={fechaHasta}
                        onChange={setFechaHasta}
                        format="dd/MM/yyyy"
                        slotProps={{ textField: { size: "small", sx: { minWidth: 140 } } }}
                    />
                    <Button variant="contained" color="primary" size="small" onClick={handleBuscar}>
                        Buscar
                    </Button>
                    <Button variant="outlined" color="secondary" size="small" onClick={handleLimpiar}>
                        Limpiar
                    </Button>

                    <span>total: {cajaQuery.data?.total}</span>
                </Stack>
            </LocalizationProvider>
            <DataGrid
                rows={cajaQuery.data?.caja || []}
                columns={columns}
            />
        </Box>
    );
};

export default CajaDataGrid;
