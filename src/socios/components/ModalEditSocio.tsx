import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { es } from 'date-fns/locale';
import * as Yup from "yup";
import { UseSocioQuery } from "../hooks/UseSocioQuery";
import { useSociosStore } from "../../store/socios-store";


// Yup validation schema
const validationSchema = Yup.object({
    dni: Yup.string().required("Campo Requerido").length(8, "Deben ser 8 números"),
    apellido: Yup.string().required("Campo Requerido").min(2, "Caracteres mínimos deben ser 2"),
    nombre: Yup.string().required("Campo Requerido").min(2, "Caracteres mínimos deben ser 2"),
    fecha_nacimiento: Yup.date().required("Campo Requerido"),
    direccion: Yup.string().required("Campo Requerido"),
    localidad: Yup.string().required("Campo Requerido"),
    telefono: Yup.string().required("Campo Requerido"),
    madre: Yup.string().required("Campo Requerido"),
    telefono_madre: Yup.string().required("Campo Requerido"),
    padre: Yup.string().required("Campo Requerido"),
    telefono_padre: Yup.string().required("Campo Requerido"),
    mail: Yup.string().email("Debe ser un email válido").required("Campo Requerido"),
    celular: Yup.string().required("Campo Requerido").length(8, "Deben ser 8 números"),
});










const ModalEditSocio = () => {
    const socioSelected = useSociosStore(state => state.socioSelected)



    const { socioQuery } = UseSocioQuery(socioSelected?.id!)

   

    const initualValues: any = {
        dni: socioQuery.data?.dni || "",
        apellido: socioQuery.data?.apellido || "",
        nombre: socioQuery.data?.nombre || "",
        fecha_nacimiento: socioQuery.data?.fecha_nacimiento || null,
        direccion: socioQuery.data?.direccion || "",
        localidad: socioQuery.data?.localidad || "",
        telefono: socioQuery.data?.telefono || "",
        madre: socioQuery.data?.madre || "",
        telefono_madre: socioQuery.data?.telefono_madre || "",
        padre: socioQuery.data?.padre || "",
        telefono_padre: socioQuery.data?.telefono_padre || "",
        mail: socioQuery.data?.mail || "",
        celular: socioQuery.data?.celular || ""
    }



    const open = useSociosStore(state => state.isEditOpened);
    const onClose = useSociosStore(state => state.closeHandler);
    return (
        <Dialog open={open} maxWidth="md" fullWidth>
            <Grid container>
                <Grid size={12} justifyContent={"center"} alignItems={"center"}>
                    <Formik
                        initialValues={initualValues}
                        validationSchema={validationSchema}
                        enableReinitialize
                        onSubmit={(values) => console.log(values)}
                    >
                        {({ values, setFieldValue, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <DialogTitle>Editar Socio</DialogTitle>
                                <DialogContent dividers>
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
                                        />
                                        <ErrorMessage name="celular" component="div" className="text-red-500" />
                                    </FormControl>
                                </DialogContent>
                                <DialogActions>
                                    <Grid flex={1} justifyContent={"space-between"} container>
                                        <Button onClick={() => onClose()} size="large" color="error" variant="contained">Cancelar</Button>
                                        <Button size="large" color="success" variant="contained" type="submit">Guardar Cambios</Button>
                                    </Grid>
                                </DialogActions>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </Dialog>
    );
};

export default ModalEditSocio;
