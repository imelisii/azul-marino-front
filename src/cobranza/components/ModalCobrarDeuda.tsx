import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid, Typography, TextField, FormControl } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useCobrarDeuda from "../hooks/useCobrarDeuda";




const ModalCobrarDeuda = () => {
    const { validationSchema, socioSelected, onClose, open, deudaSelected, initialValues, cobrarDeudaQuery } = useCobrarDeuda();
    if (!socioSelected || !open) return null;
   





    return (
        <Dialog open={open} maxWidth="sm" fullWidth>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                enableReinitialize
                onSubmit={(values) =>
                    cobrarDeudaQuery.mutate({
                        socioId: socioSelected.id,
                        monto: Number(values.monto),
                        idDeuda: deudaSelected?.id!,
                        descripcion: values.descripcion,
                    })
                }
            >
                {({ values }) => (
                    <Form>
                        <DialogTitle>Cobrar Deuda</DialogTitle>
                        <DialogContent dividers>
                            <Grid container spacing={2}>
                                <Grid size={12}>
                                    <Typography variant="subtitle1">
                                        Socio: {socioSelected.apellido} {socioSelected.nombre} (DNI: {socioSelected.dni})
                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="body1">
                                        Total deuda: <b>${deudaSelected?.monto}</b>
                                    </Typography>
                                </Grid>
                                <Grid size={12}>
                                    <FormControl fullWidth margin="normal">
                                        <Field
                                            as={TextField}
                                            name="monto"
                                            label="Monto a cobrar"
                                            type="number"
                                            value={values.monto}
                                        />
                                        <ErrorMessage name="monto" component="div" className="text-red-500" />
                                    </FormControl>
                                </Grid>
                                <Grid size={12}>
                                    <FormControl fullWidth margin="normal">
                                        <Field
                                            as={TextField}
                                            name="descripcion"
                                            label="Descripción"
                                            value={values.descripcion}
                                        />
                                        <ErrorMessage name="descripcion" component="div" className="text-red-500" />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={onClose} color="error" variant="contained">
                                Cancelar
                            </Button>
                            <Button type="submit" color="success" variant="contained">
                                Cobrar
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </Dialog>
    );
};

export default ModalCobrarDeuda;
