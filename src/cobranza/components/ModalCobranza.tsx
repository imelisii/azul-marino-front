import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  TextField,
  Box,
} from "@mui/material";
import UseModalCobranza from "../hooks/UseModalCobranza";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Actividad } from "../../shared/interfaces/actividades/actividades.interface";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import ModalPagoPartes from "./ModalPagoPartes";
import ModalPagaParte from "./ModalPagaParte";
import ModalNoPagaNada from "./ModalNoPagaNada";


export default function ModalCobranza() {
  const { isPaymentOpened,
    paymentCloser,
    socioSelected,
    actividadesQuery,
    actividadSelected,
    setActividadSelected,
    cobranzaMutation,
    validationSchema,
    columnsHisotrial,
    socioQuery,
    initialValues,
    openCobranzaNoPagaNada,
    openCobranzaPartidaValidada,
    openCobranzaUnaParteValidad,
    columnSaldos,
  } = UseModalCobranza();



  if (!socioSelected) return null


  return (
    <Dialog open={isPaymentOpened} fullScreen maxWidth="xl">
      <Grid container spacing={2} columns={12}>
        <Grid size={6}>
          <Formik initialValues={initialValues} validationSchema={validationSchema}
            onSubmit={(values) => {
              cobranzaMutation.mutate({
                socioId: socioSelected?.id!,
                actividadId: actividadSelected?.id!,
                metodoPago: values.metodoPago,
                aCuentaDe: values.aCuentaDe,
                monto: Number(values.monto),
              });
            }}
          >
            {({ values, setFieldValue }) => {
              useEffect(() => {
                if (actividadSelected && actividadesQuery.data) {
                  if (actividadSelected) {
                    const nuevoPrecio = actividadSelected.precio
                    setFieldValue("monto", nuevoPrecio);
                  }
                }
              }, [actividadSelected, actividadesQuery.data]);

              return (
                <Form>
                  <DialogTitle>
                    <Box display="flex" alignItems="center">
                      <Button
                        size="small"
                        variant="contained"
                        color="error"
                        onClick={paymentCloser}
                        sx={{ mr: 2 }}
                      >
                        Cerrar
                      </Button>
                      <span>
                        Cobrar a Socio: {`${socioSelected.nombre}  ${socioSelected.apellido} `}
                         {socioQuery.data?.saldos && socioQuery.data.saldos.length >= 1 && (<span className="text-red-400">Saldo: {socioQuery.data.deudas}</span>)}
                      </span>
                    </Box>
                  </DialogTitle>
                  <DialogContent dividers>
                    <FormControl fullWidth margin="normal">
                      <InputLabel id="actividad-label">Actividad</InputLabel>
                      <Field
                        as={Select}
                        labelId="actividad-label"
                        name="actividad"
                        value={values.actividad}
                        label="Actividad"
                      >
                        {actividadesQuery.data?.map((actividad: Actividad) => (
                          <MenuItem onClick={() => setActividadSelected(actividad)} key={actividad.id} value={actividad.id}>
                            {`${actividad.nombre}  ${actividad.descripcion}`}
                          </MenuItem>
                        ))}
                      </Field>
                      <ErrorMessage name="actividad" component="div" className="text-red-500" />
                    </FormControl>

                    <FormControl fullWidth margin="normal">
                      <InputLabel id="metodoPago-label">Método de Pago</InputLabel>
                      <Field
                        as={Select}
                        labelId="metodoPago-label"
                        name="metodoPago"
                        value={values.metodoPago}
                        label="Método de Pago"
                      >
                        <MenuItem value="efectivo">Efectivo</MenuItem>
                        <MenuItem value="transferencia">Transferencia</MenuItem>
                        <MenuItem value="mp">Mercado Pago</MenuItem>
                      </Field>
                      <ErrorMessage name="metodoPago" component="div" className="text-red-500" />
                    </FormControl>

                    {
                      values.metodoPago !== "efectivo" && (
                        <FormControl fullWidth margin="normal">
                          <InputLabel id="aCuentaDe-label">A cuenta de</InputLabel>
                          <Field
                            as={Select}
                            labelId="aCuentaDe-label"
                            name="aCuentaDe"
                            value={values.aCuentaDe}
                            label="A cuenta de"
                          >
                            <MenuItem value="anibal">Anibal</MenuItem>
                            <MenuItem value="marcos">Marcos</MenuItem>
                          </Field>
                          <ErrorMessage name="aCuentaDe" component="div" className="text-red-500" />
                        </FormControl>
                      )


                    }


                    {values.actividad && values.metodoPago && (
                      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <h3>Resumen de la cobranza</h3>
                        <p><strong>Método de Pago:</strong> {values.metodoPago}</p>
                        {values.aCuentaDe && (<p><strong>A cuenta de:</strong> {values.aCuentaDe}</p>)}
                        <p><strong>Precio Final:</strong> {values.monto}</p>


                      </div>
                    )}

                    <FormControl margin="normal" fullWidth>
                      <Field
                        as={TextField}
                        name="monto"
                        type="number"
                        label={`El socio ${socioSelected.nombre} paga:`}
                        value={values.monto}
                      >
                      </Field>
                      <ErrorMessage name="monto" component="div" className="text-red-500" />
                    </FormControl>

                  </DialogContent>

                  <DialogActions>
                    <Grid flex={1} spacing={3} justifyContent={"space-between"} container>
                      <Button onClick={() => openCobranzaNoPagaNada()} size="large" variant="contained" color="error" >
                        No Paga nada
                      </Button>
                      <Button onClick={() => openCobranzaPartidaValidada(actividadSelected?.id!)} size="large" variant="contained" color="info" >
                        Paga en 2 partes
                      </Button>
                      <Button onClick={() => openCobranzaUnaParteValidad(actividadSelected?.id!, values.metodoPago, values.aCuentaDe)} size="large" variant="contained" color="warning" >
                        Paga una parte
                      </Button>

                      <Button color="success" variant="contained" type="submit">
                        Cobrar
                      </Button>


                    </Grid>

                  </DialogActions>
                  <ModalPagoPartes />
                  <ModalPagaParte metodoPago={values.metodoPago} aCuentaDe={values.aCuentaDe} />
                  <ModalNoPagaNada />
                </Form>
              )

            }}
          </Formik>
        </Grid>

        {/* Tabla - 6 columnas */}
        <Grid size={6}>
          <DialogTitle>Historial del socio</DialogTitle>

          <div style={{ height: "50vh", padding: 10, width: '100%' }}>
            <DataGrid rows={socioQuery.data?.inscripciones} columns={columnsHisotrial} disableRowSelectionOnClick />
          </div>
          <div style={{ height: "40vh", padding: 10, width: '100%' }}>
            <DataGrid rows={socioQuery.data?.saldos} columns={columnSaldos} disableRowSelectionOnClick />

          </div>
        </Grid>
      </Grid>

    </Dialog>
  );
}
