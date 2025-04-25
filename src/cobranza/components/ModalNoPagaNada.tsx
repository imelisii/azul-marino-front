
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useCobranzaStore } from '../../store/cobranza-store';
import { Grid } from '@mui/material';

export default function ModalNoPagaNada() {

    const noPagaNada = useCobranzaStore(state => state.cobranzaNoPagaNada);
    const openNoPagaNada = useCobranzaStore(state => state.openCobranzaNoPagaNada);
    const closeNoPagaNada = useCobranzaStore(state => state.closeCobranzaNoPagaNada);




    return (
        <>
            <Dialog
                open={noPagaNada}
                onClose={openNoPagaNada}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Grid flex={1} container justifyContent={"space-between"} alignItems={"center"}>
                        <Button onClick={closeNoPagaNada} variant='contained' color='error' autoFocus> Cancelar </Button>
                        <Button onClick={openNoPagaNada} variant='contained' color='success'>Generar Deuda</Button>
                    </Grid>



                </DialogActions>
            </Dialog>
        </>
    );
}
