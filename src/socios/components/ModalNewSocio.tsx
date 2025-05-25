import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, TextField } from "@mui/material"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { es } from 'date-fns/locale';
import useNewSocio from "../hooks/useNewSocio"



const ModalNewSocio = () => {
    const { initialValues, isNewOpen, validationSchema, newSocioQuery, newSocioHandler } = useNewSocio()


    return (
        <Dialog open={isNewOpen} maxWidth="md" fullWidth>
            <Grid container columns={12}>
                <Grid size={12} justifyContent={"center"} alignItems={"center"}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            newSocioQuery.mutate({
                                ...values
                            })
                        }}
                    >
                        {({ values, setFieldValue }) => {
                            return (
                                <Form>
                                    <DialogTitle>Crear Socio Nuevo</DialogTitle>
                                    <DialogContent dividers>
                                        {/* Número de socio */}
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                name="numero_socio"
                                                value={values.numero_socio}
                                                label="Número de Socio"
                                            />
                                            <ErrorMessage name="numero_socio" component="div" className="text-red-500" />
                                        </FormControl>
                                        {/* Familiar */}
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                name="familiar"
                                                value={values.familiar}
                                                label="Familiar"
                                            />
                                            <ErrorMessage name="familiar" component="div" className="text-red-500" />
                                        </FormControl>
                                        {/* Dni */}
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                label="D.N.I"
                                                name="dni"
                                                value={values.dni}
                                                type="number"
                                            />
                                            <ErrorMessage name="dni" component="div" className="text-red-500" />
                                        </FormControl>
                                        {/* Apellido */}
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                name="apellido"
                                                value={values.apellido}
                                                label="Apellido"
                                            />
                                            <ErrorMessage name="apellido" component="div" className="text-red-500" />
                                        </FormControl>
                                        {/* Nombre */}
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                name="nombre"
                                                value={values.nombre}
                                                label="Nombre"
                                            />
                                            <ErrorMessage name="nombre" component="div" className="text-red-500" />
                                        </FormControl>
                                        {/* Fecha nacimiento */}
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
                                        {/* Dirección */}
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                name="direccion"
                                                value={values.direccion}
                                                label="Dirección"
                                            />
                                            <ErrorMessage name="direccion" component="div" className="text-red-500" />
                                        </FormControl>
                                        {/* Localidad */}
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                name="localidad"
                                                value={values.localidad}
                                                label="Localidad"
                                            />
                                            <ErrorMessage name="localidad" component="div" className="text-red-500" />
                                        </FormControl>
                                        {/* Teléfono */}
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                name="telefono"
                                                value={values.telefono}
                                                label="Teléfono"
                                            />
                                            <ErrorMessage name="telefono" component="div" className="text-red-500" />
                                        </FormControl>
                                        {/* Madre */}
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                name="madre"
                                                value={values.madre}
                                                label="Madre"
                                            />
                                            <ErrorMessage name="madre" component="div" className="text-red-500" />
                                        </FormControl>
                                        {/* Teléfono Madre */}
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                name="telefono_madre"
                                                value={values.telefono_madre}
                                                label="Teléfono Madre"
                                            />
                                            <ErrorMessage name="telefono_madre" component="div" className="text-red-500" />
                                        </FormControl>
                                        {/* Padre */}
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                name="padre"
                                                value={values.padre}
                                                label="Padre"
                                            />
                                            <ErrorMessage name="padre" component="div" className="text-red-500" />
                                        </FormControl>
                                        {/* Teléfono Padre */}
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                name="telefono_padre"
                                                value={values.telefono_padre}
                                                label="Teléfono Padre"
                                            />
                                            <ErrorMessage name="telefono_padre" component="div" className="text-red-500" />
                                        </FormControl>
                                        {/* Mail */}
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                as={TextField}
                                                name="mail"
                                                value={values.mail}
                                                label="Mail"
                                            />
                                            <ErrorMessage name="mail" component="div" className="text-red-500" />
                                        </FormControl>
                                        {/* Celular */}
                                        <FormControl fullWidth margin="normal">
                                            <Field
                                                type="number"
                                                as={TextField}
                                                name="celular"
                                                value={values.celular}
                                                label="Celular"
                                            >
                                            </Field>
                                            <ErrorMessage name="celular" component="div" className="text-red-500" />
                                        </FormControl>

                                    </DialogContent>

                                    <DialogActions>
                                        <Grid flex={1} justifyContent={"space-between"} container>
                                            <Button onClick={() => newSocioHandler()} size="large" color="error" variant="contained">Cancelar</Button>
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
