import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid,
    TextField
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useMaestrosActividades from "../hooks/useMaestrosActividades";








const ModalNewActividad = () => {
    const { initialValues, validationSchema, isOpenNewActivity, actividadesMutation } = useMaestrosActividades()



    return (
        <Dialog open={isOpenNewActivity} maxWidth="sm" fullWidth>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => actividadesMutation.mutate({ ...values })}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <DialogTitle>Crear Nueva Actividad</DialogTitle>
                        <DialogContent dividers>
                            <FormControl fullWidth margin="normal">
                                <Field
                                    as={TextField}
                                    name="nombre"
                                    label="Nombre"
                                />
                                <ErrorMessage name="nombre" component="div" className="text-red-500" />
                            </FormControl>

                            <FormControl fullWidth margin="normal">
                                <Field
                                    as={TextField}
                                    name="descripcion"
                                    label="Descripción"
                                    multiline
                                    rows={3}
                                />
                                <ErrorMessage name="descripcion" component="div" className="text-red-500" />
                            </FormControl>

                            <FormControl fullWidth margin="normal">
                                <Field
                                    as={TextField}
                                    name="precio"
                                    label="Precio"
                                    type="number"
                                />
                                <ErrorMessage name="precio" component="div" className="text-red-500" />
                            </FormControl>

                            <FormControl fullWidth margin="normal">
                                <label className="block text-sm text-gray-700 mb-1">¿Está activa?</label>
                                <select
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    value={values.activa ? "true" : "false"}
                                    onChange={(e) => setFieldValue("activa", e.target.value === "true")}
                                >
                                    <option value="true">Sí</option>
                                    <option value="false">No</option>
                                </select>
                                <ErrorMessage name="activa" component="div" className="text-red-500" />
                            </FormControl>
                        </DialogContent>

                        <DialogActions>
                            <Grid container justifyContent="space-between">
                                <Button onClick={() => console.log("close")} color="error" variant="contained">
                                    Cancelar
                                </Button>
                                <Button type="submit" color="success" variant="contained">
                                    Guardar
                                </Button>
                            </Grid>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </Dialog>
    );
};

export default ModalNewActividad;
