import { Dialog, Grid, DialogTitle, DialogContent, FormControl, InputLabel, Select, MenuItem, DialogActions, Button, TextField } from "@mui/material";
import { Formik, Field, ErrorMessage } from "formik";
import { Form } from "formik";
import toast from "react-hot-toast";
import usePagaPartes from "../hooks/usePagaPartes";










const ModalPagoPartes = () => {
    const { actividad, isCobranzaParcialOpen, setCobranzaParcial, socio, validationSchema } = usePagaPartes()
    if (!socio) return <div>No se selecciono un socio</div>

    return (
        <Dialog open={isCobranzaParcialOpen} maxWidth="md" fullWidth>
            <Grid container columns={12}>
                <Grid size={12} justifyContent={"center"} alignItems={"center"}>
                    <Formik
                        initialValues={{
                            medioPago1: "",
                            medioPago2: "",
                            valor: 0,
                            aCuentaDe: "",

                        }}

                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            if (actividad?.precio !== undefined && values.valor > Number(actividad?.precio)) {
                                toast.error("El valor no puede ser mayor al precio de la actividad")
                                return
                            }
                            setCobranzaParcial()
                            console.log(values)
                        }}
                    >
                        {({ values, handleChange }) => {

                            return (
                                <Form>
                                    <DialogTitle>Cobrar a Socio: {`${socio.nombre} ${socio.apellido} en 2 partes el total de ${actividad?.precio} `}</DialogTitle>
                                    <DialogContent dividers>
                                        <FormControl fullWidth margin="normal">
                                            <InputLabel id="actividad-label">Medio Pago 1</InputLabel>
                                            <Field
                                                as={Select}
                                                labelId="actividad-label"
                                                name="medioPago1"
                                                value={values.medioPago1}
                                                onChange={handleChange}
                                                label="Actividad"
                                            >
                                                <MenuItem value="efectivo">Efectivo</MenuItem>
                                                <MenuItem value="transferencia">Transferencia</MenuItem>
                                                <MenuItem value="mp">Mercado Pago</MenuItem>

                                            </Field>
                                            <ErrorMessage name="medioPago1" component="div" className="text-red-500" />
                                        </FormControl>


                                        <FormControl margin="normal">

                                            <Field
                                                type="number"
                                                as={TextField}
                                                name="valor"
                                                value={values.valor}
                                                onChange={handleChange}
                                                label="Valor a cobrar"

                                            />
                                            <ErrorMessage name="valor" component="div" className="text-red-500" />
                                        </FormControl>

                                        {/* Método de pago */}
                                        <FormControl fullWidth margin="normal">
                                            <InputLabel id="metodoPago-label">Medio Pago 2</InputLabel>
                                            <Field
                                                as={Select}
                                                labelId="metodoPago-label"
                                                name="medioPago2"
                                                value={values.medioPago2}
                                                onChange={handleChange}
                                                label="Método de Pago"
                                            >
                                                <MenuItem value="efectivo">Efectivo</MenuItem>
                                                <MenuItem value="transferencia">Transferencia</MenuItem>
                                                <MenuItem value="mp">Mercado Pago</MenuItem>
                                            </Field>
                                            <ErrorMessage name="medioPago2" component="div" className="text-red-500" />
                                        </FormControl>



                                        <FormControl fullWidth margin="normal">
                                            <InputLabel id="metodoPago-label">A Cuenta de</InputLabel>
                                            <Field
                                                as={Select}
                                                labelId="metodoPago-label"
                                                name="aCuentaDe"
                                                value={values.aCuentaDe}
                                                onChange={handleChange}
                                                label="A cuenta de"
                                            >

                                                <MenuItem value="Anibal">Anibal</MenuItem>
                                                <MenuItem value="Marcos">Marcos</MenuItem>
                                            </Field>
                                            <ErrorMessage name="aCuentaDe" component="div" className="text-red-500" />
                                        </FormControl>




                                    </DialogContent>

                                    <DialogActions>
                                        <Grid  flex={1} justifyContent={"space-between"} container>
                                            <Button onClick={() => setCobranzaParcial()} size="large" color="error" variant="contained">Cancelar</Button>
                                            <Button size="large" color="success" variant="contained" type="submit">Cobrar</Button>

                                        </Grid>

                                    </DialogActions>
                                </Form>
                            )

                        }}
                    </Formik>
                </Grid>
            </Grid>
        </Dialog>
    );


}

export default ModalPagoPartes
