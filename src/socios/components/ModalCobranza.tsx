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
} from "@mui/material";
import UseModalCobranza from "../hooks/UseModalCobranza";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Actividad } from "../../shared/interfaces/actividades/actividades.interface";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect } from "react";
import ModalPagoPartes from "./ModalPagoPartes";
import { useCobranzaStore } from "../../store/cobranza-store";
import ModalPagaParte from "./ModalPagaParte";

export default function ModalCobranza() {
  const { isPaymentOpened, paymentCloser, socioQuery, actividadesQuery, actividadSelected, setActividadSelected, cobranzaMutation } = UseModalCobranza();
  const openCobranzaPartidaValidada = useCobranzaStore(state => state.openCobranzaPartidaValidada)
  const openCobranzaUnaParteValidad = useCobranzaStore(state => state.openCobranzaUnaParteValidad)


  const columns: GridColDef[] = [
    { field: 'fecha', headerName: 'Fecha', flex: 1 },
    { field: 'actividad', headerName: 'Actividad', flex: 1 },
    { field: 'metodo', headerName: 'Método de Pago', flex: 1 },
    { field: 'monto', headerName: 'Monto', flex: 1, type: 'number' },
  ];


  return (






    <Dialog open={isPaymentOpened} fullScreen maxWidth="xl" fullWidth>
      <Grid container spacing={2} columns={12}>
        <Grid size={6}>
          <Formik
            initialValues={{
              actividad: '',
              metodoPago: '',
              aCuentaDe: '',
              monto: 0,

            }}
            onSubmit={(values) => {
              cobranzaMutation.mutate({
                socioId: socioQuery.data?.id!,
                actividadId: actividadSelected!,
                metodoPago: values.metodoPago,
                aCuentaDe: values.aCuentaDe,
                monto: values.monto,
              });
            }}
          >
            {({ values, handleChange, setFieldValue }) => {
              useEffect(() => {
                if (actividadSelected && actividadesQuery.data) {
                  const actividad = actividadesQuery.data.find(a => a.id === actividadSelected);
                  if (actividad) {
                    const nuevoPrecio = Number(actividad.precio)
                    setFieldValue("monto", nuevoPrecio);
                  }
                }
              }, [actividadSelected, actividadesQuery.data]);




              return (
                <Form>
                  <DialogTitle>Cobrar a Socio: {`${socioQuery.data?.nombre!}  ${socioQuery.data?.apellido!}`}</DialogTitle>
                  {socioQuery.isError && "Error al cargar el socio"}
                  <DialogContent dividers>
                    {actividadesQuery.isError && "Error al cargar las actividades"}
                    <FormControl fullWidth margin="normal">
                      <InputLabel id="actividad-label">Actividad</InputLabel>
                      <Field
                        as={Select}
                        labelId="actividad-label"
                        name="actividad"
                        value={values.actividad}
                        onChange={handleChange}
                        label="Actividad"
                      >
                        {actividadesQuery.data?.map((actividad: Actividad) => (
                          <MenuItem onClick={() => setActividadSelected(actividad.id)} key={actividad.id} value={actividad.id}>
                            {`${actividad.nombre}  ${actividad.descripcion}`}
                          </MenuItem>
                        ))}
                      </Field>
                      <ErrorMessage name="actividad" component="div" />
                    </FormControl>

                    <FormControl fullWidth margin="normal">
                      <InputLabel id="metodoPago-label">Método de Pago</InputLabel>
                      <Field
                        as={Select}
                        labelId="metodoPago-label"
                        name="metodoPago"
                        value={values.metodoPago}
                        onChange={handleChange}
                        label="Método de Pago"
                      >
                        <MenuItem value="efectivo">Efectivo</MenuItem>
                        <MenuItem value="transferencia">Transferencia</MenuItem>
                        <MenuItem value="mp">Mercado Pago</MenuItem>
                      </Field>
                      <ErrorMessage name="metodoPago" component="div" />
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
                            onChange={handleChange}
                            label="A cuenta de"
                          >
                            <MenuItem value="anibal">Anibal</MenuItem>
                            <MenuItem value="marcos">Marcos</MenuItem>
                          </Field>
                          <ErrorMessage name="aCuentaDe" component="div" />
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
                      <TextField
                        name="monto"
                        type="number"
                        label={`El socio ${socioQuery.data?.nombre} paga:`}
                        value={values.monto}
                        onChange={handleChange}
                      />
                    </FormControl>

                  </DialogContent>

                  <DialogActions>
                    <Grid spacing={8} justifyContent={"space-evenly"} container>
                      <Button color="success" variant="contained" type="submit">
                        Cobrar
                      </Button>
                      <Button onClick={() => openCobranzaPartidaValidada(actividadSelected ?? undefined)} size="large" variant="contained" color="info" >
                        Paga en 2 partes
                      </Button>
                      <Button onClick={() => openCobranzaUnaParteValidad(actividadSelected ?? undefined, values.metodoPago ?? undefined)} size="large" variant="contained" color="warning" >
                        Paga una parte
                      </Button>
                      <Button size="large" variant="contained" color="error" >
                        No Paga nada
                      </Button>
                      <Button size="large" variant="contained" onClick={paymentCloser}>Cancelar</Button>

                    </Grid>

                  </DialogActions>
                  <ModalPagoPartes socio={socioQuery.data!} />
                  <ModalPagaParte socio={socioQuery.data!} />
                </Form>
              )

            }}
          </Formik>
        </Grid>

        {/* Tabla - 6 columnas */}
        <Grid size={6}>
          <DialogTitle>Historial del socio</DialogTitle>

          <div style={{ height: "50vh", padding: 10, width: '100%' }}>
            <DataGrid rows={[]} columns={columns} disableRowSelectionOnClick />
          </div>
        </Grid>
      </Grid>

    </Dialog>
  );
}
