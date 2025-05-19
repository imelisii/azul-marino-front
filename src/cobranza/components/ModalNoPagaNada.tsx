
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';
import useNoPagaNada from '../hooks/useNoPagaNada';

export default function ModalNoPagaNada() {

    const { noPagaNada, openNoPagaNada, closeNoPagaNada, generarDeuda, actividad, socio, } = useNoPagaNada();




    return (
        <>
            <Dialog
                open={noPagaNada}
                onClose={openNoPagaNada}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {socio?.nombre + " " + socio?.apellido + " - " + actividad?.nombre}
                </DialogTitle>

                <DialogContent dividers>
                    <DialogContentText id="alert-dialog-description">
                        <p className="text-xl">Esta seguro de generar deuda de <strong className='text-red-600'>${actividad?.precio}</strong> para el socio {socio?.nombre + " " + socio?.apellido} en la actividad {actividad?.nombre}?</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Grid flex={1} container justifyContent={"space-between"} alignItems={"center"}>
                        <Button onClick={closeNoPagaNada} variant='contained' color='error' autoFocus> Cancelar </Button>
                        <Button onClick={() => generarDeuda()} variant='contained' color='success'>Generar Deuda</Button>
                    </Grid>



                </DialogActions>
            </Dialog>
        </>
    );
}
