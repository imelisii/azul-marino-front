import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useCobranzaStore } from '../../store/cobranza-store';
import { Socio } from '../../shared/interfaces/socios/socios.interface';



interface Props {
    socio: Socio

}


export default function ModalPagoPartes({ socio }: Props) {


    const isPagaUnaParte = useCobranzaStore(state => state.cobranzaUnaParte)
    const closeCobranzaUnaParte = useCobranzaStore(state => state.closeCobranzaUnaParte)
    



    



    return (
        <React.Fragment>
            <Dialog maxWidth = "xl" fullWidth
                open={isPagaUnaParte}
                onClose={closeCobranzaUnaParte}
                slotProps={{
                    paper: {
                        component: 'form',
                        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            console.log(event);
                            closeCobranzaUnaParte();
                        },

                    },
                    backdrop: {
                        sx: {
                            backgroundColor: 'rgba(255,255,255)',

                        },
                    }
                }}
            >
                <DialogTitle>Cobrar una parte de la cuota</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <strong>{` Esta por cobrar una parte de la cuota a ${socio?.nombre} ${socio?.apellido} `}</strong>
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="coutaParte"
                        label="Cuanto paga del total?"
                        type="number"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => closeCobranzaUnaParte()}>Cancel</Button>
                    <Button type="submit">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
