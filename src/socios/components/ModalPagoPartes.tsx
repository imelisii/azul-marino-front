import { Dialog, Grid, DialogTitle, DialogContent, FormControl, InputLabel, Select, MenuItem, DialogActions, Button, TextField } from "@mui/material";
import { Formik, Field, ErrorMessage } from "formik";
import { Form } from "formik";
import { Socio } from "../../shared/interfaces/socios/socios.interface";
import { useCobranzaStore } from "../../store/cobranza-store";
import UseActividades from "../../acatividades/hooks/UseActividades";
import { UseActividadesStore } from "../../store/actividades-store";


interface Props {
    socio: Socio


}





const ModalPagoPartes = ({ socio }: Props) => {

    const isCobranzaParcialOpen = useCobranzaStore(state => state.cobranzaPartida)
    const setCobranzaParcial = useCobranzaStore(state => state.setCobranzaPartida)
    const { actividadesQuery } = UseActividades()
    const idActividad = UseActividadesStore(state => state.actividadSelected)
    const actividadObjet = actividadesQuery.data?.find(a => a.id === idActividad)





    return (
        <Dialog open={isCobranzaParcialOpen} maxWidth="md" fullWidth>
            <Grid container columns={12}>
                <Grid size={12} justifyContent={"center"} alignItems={"center"}>
                    <Formik
                        initialValues={{
                            medioPago1: "",
                            medioPago2: "",
                            valor1: 0,
                            aCuentaDe1: "",
                            aCuentaDe2: "",


                        }}
                        onSubmit={(values) => {
                            console.log(values, idActividad);
                        }}
                    >
                        {({ values, handleChange }) => {

                            return (
                                <Form>
                                    <DialogTitle>Cobrar a Socio: {`${socio.nombre} ${socio.apellido} en 2 partes el total de ${actividadObjet?.precio} `}</DialogTitle>
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
                                            <ErrorMessage name="medioPago1" component="div" />
                                        </FormControl>


                                        <FormControl margin="normal">

                                            <Field
                                                type="number"
                                                as={TextField}
                                                name="valor1"
                                                value={values.valor1}
                                                onChange={handleChange}
                                                label="Valor 1"
                                            />
                                            <ErrorMessage name="valor1" component="div" />
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
                                            <ErrorMessage name="medioPago2" component="div" />
                                        </FormControl>

                                     


                                    </DialogContent>

                                    <DialogActions>
                                        <Grid spacing={8} justifyContent={"space-evenly"} container>
                                            <Button size="large" color="success" variant="contained" type="submit">Cobrar</Button>
                                            <Button onClick={() => setCobranzaParcial()} size="large" color="error" variant="contained">Cancelar</Button>

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
