import { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";

export default function ModalCobranza() {
    const [actividad, setActividad] = useState("");
    const [metodoPago, setMetodoPago] = useState("");
    const [aCuentaDe, setACuentaDe] = useState("");

    const handleCobrar = () => {
        console.log({
            actividad,
            metodoPago,
            aCuentaDe,
        });

    };

    return (
        <Dialog open={false}  maxWidth="md" fullWidth >
            <DialogTitle>Cobrar</DialogTitle>
            <DialogContent dividers>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Actividad</InputLabel>
                    <Select
                        value={actividad}
                        onChange={(e) => setActividad(e.target.value)}
                        label="Actividad"
                    >
                        <MenuItem value="clase">Clase</MenuItem>
                        <MenuItem value="producto">Producto</MenuItem>
                        <MenuItem value="servicio">Servicio</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <InputLabel>Método de Pago</InputLabel>
                    <Select
                        value={metodoPago}
                        onChange={(e) => setMetodoPago(e.target.value)}
                        label="Método de Pago"
                    >
                        <MenuItem value="efectivo">Efectivo</MenuItem>
                        <MenuItem value="transferencia">Transferencia</MenuItem>
                        <MenuItem value="tarjeta"></MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <InputLabel>A cuenta de</InputLabel>
                    <Select
                        value={aCuentaDe}
                        onChange={(e) => setACuentaDe(e.target.value)}
                        label="A cuenta de"
                    >
                        <MenuItem value="juan">Juan</MenuItem>
                        <MenuItem value="maria">María</MenuItem>
                        <MenuItem value="otro">Otro</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>

            <DialogActions>
                <Button>Cancelar</Button>
                <Button variant="contained" onClick={handleCobrar}>
                    Cobrar
                </Button>
            </DialogActions>
        </Dialog>
    );
}
