import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, TextField } from "@mui/material"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { es } from 'date-fns/locale';
import useNewSocio from "../hooks/useNewSocio"



const ModalNewSocio = () => {
    const { initialValues, isNewOpen, validationSchema, newSocioQuery, setNewState } = useNewSocio()


    return (
        <Dialog open={isNewOpen} maxWidth="md" fullWidth>
            <Grid container columns={12}>
                <Grid size={12} justifyContent={"center"} alignItems={"center"}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            newSocioQuery.mutate({
                                nombre: values.nombre,
                                apellido: values.apellido,
                                fecha_nacimiento: values.fecha_nacimiento,
                                celular: values.celular,
                                dni: values.dni,
                            })
                        }}
                    >
                        {({ values, setFieldValue }) => {

                            return (
                                <Form>
                                    <DialogTitle>Crear Socio Nuevo</DialogTitle>
                                    <DialogContent dividers>
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                labelId="actividad-label"
                                                name="nombre"
                                                value={values.nombre}
                                                label="Nombre"
                                               
                                              
                                               

                                            >
                                            </Field>
                                            <ErrorMessage name="nombre" component="div" className="text-red-500" />
                                        </FormControl>


                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                name="apellido"
                                                value={values.apellido}
                                                label="apellido"
                                            />
                                            <ErrorMessage name="apellido" component="div" className="text-red-500" />
                                        </FormControl>


                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                label="D.N.I"
                                                name="dni"
                                                value={values.dni}
                                                type="number"
                                            >
                                            </Field>
                                            <ErrorMessage name="dni" component="div" className="text-red-500" />
                                        </FormControl>



                                        <FormControl fullWidth margin="normal">
                                            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
                                                <FormControl fullWidth margin="normal">
                                                    <DatePicker
                                                        label={"Fecha Nacimiento"}
                                                        value={values.fecha_nacimiento}
                                                        onChange={(val) => setFieldValue("fecha_nacimiento", val)}
                                                        format="dd/MM/yyyy"

                                                    />

                                                </FormControl>
                                            </LocalizationProvider>
                                        </FormControl>
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                type="number"
                                                as={TextField}
                                                labelId="metodoPago-label"
                                                name="celular"
                                                value={values.celular}
                                                label="celular"
                                            >
                                            </Field>
                                            <ErrorMessage name="celular" component="div" className="text-red-500" />
                                        </FormControl>



                                    </DialogContent>

                                    <DialogActions>
                                        <Grid flex={1} justifyContent={"space-between"} container>
                                            <Button onClick={() => setNewState()} size="large" color="error" variant="contained">Cancelar</Button>
                                            <Button size="large" color="success" variant="contained" type="submit">Agregar</Button>

                                        </Grid>

                                    </DialogActions>
                                </Form>
                            )

                        }}
                    </Formik>
                </Grid>
            </Grid>
        </Dialog>


    )
}

export default ModalNewSocio
