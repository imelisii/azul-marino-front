import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Stack } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { es } from 'date-fns/locale';
import CustomDatePicker from "../../shared/DatePicker/CustomDatePicker";
import useCajaGrid from "../hooks/useCajaGrid";
import toast from "react-hot-toast";




const CajaDataGrid = () => {

    const { cajaQuery, columns, fechaDesde, fechaHasta, handleBuscar, handleLimpiar, setFechaDesde, setFechaHasta } = useCajaGrid();

  

    if (cajaQuery.isError && cajaQuery.error.message.includes("403")) {
        toast.error(`Falta de permisos para acceder a la caja`);
    }

    return (
        <Box sx={{ height: "90vh", width: "100%" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
                <Stack direction="row" spacing={2} mb={2} alignItems="center">
                    <CustomDatePicker
                        label="Desde"
                        fecha={fechaDesde}
                        setFecha={setFechaDesde}
                    />
                    <CustomDatePicker
                        label="Hasta"
                        fecha={fechaHasta}
                        setFecha={setFechaHasta}
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
