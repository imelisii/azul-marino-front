
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import usePagaParte from '../hooks/usePagaParte';
import { Grid } from '@mui/material';



interface Props {
    metodoPago: string;
    aCuentaDe?: string;
}



export default function ModalPagoPartes({ metodoPago, aCuentaDe }: Props) {
    const { isPagaUnaParte, closeCobranzaUnaParte, actividadSelected, initialValues, validationSchema, socioSelected, cobranzaMutation } = usePagaParte();

    return (
        <>
            <Dialog
                maxWidth="xl"

                open={isPagaUnaParte}
                onClose={closeCobranzaUnaParte}
                slotProps={{
                    backdrop: {
                        sx: {
                            backgroundColor: 'rgba(255,255,255)',
                        },
                    },
                }}
            >
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => cobranzaMutation.mutate({
                    socioId: socioSelected?.id!,
                    actividadId: actividadSelected?.id!,
                    metodoPago: metodoPago,
                    aCuentaDe: aCuentaDe ?? "efectivo",
                    monto: values.cuotaParte,
                })}>
                    {({ values }) => (
                        <Form>
                            <DialogTitle>Cobrar una parte de la cuota {actividadSelected?.precio}</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    <strong>{`Esta por cobrar una parte de la cuota a ${socioSelected?.nombre} ${socioSelected?.apellido}, total: ${actividadSelected?.precio}`}</strong>
                                </DialogContentText>
                                <Field
                                    values={values.cuotaParte}
                                    as={TextField}
                                    autoFocus
                                    fullWidth
                                    name="cuotaParte"
                                    label="¿Cuánto paga del total?"
                                    type="number"
                                    variant="standard"
                                    margin="dense"

                                />
                                <ErrorMessage name="cuotaParte" component="div" className='text-red-500' />
                            </DialogContent>
                            <DialogActions>
                                <Grid flex={1} container justifyContent={"space-between"} alignItems={"center"}>
                                    <Button variant="contained" onClick={closeCobranzaUnaParte}>
                                        Cancelar
                                    </Button>
                                    <Button variant="contained" color="success" type="submit">
                                        Cobrar
                                    </Button>


                                </Grid>

                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>
        </>
    );
}
