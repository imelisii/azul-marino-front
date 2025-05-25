import { GridColDef } from "@mui/x-data-grid"
import UseActividades from "../../acatividades/hooks/UseActividades"
import { Button } from "@mui/material"
import { useMaestroSotre } from "../../store/maestros-store"
import * as Yup from 'yup';
import { NewActivity } from "../../shared/interfaces/actividades/actividades.interface";
import useNewActivityQuery from "../../acatividades/hooks/useNewActivity";


const useMaestrosActividades = () => {
    const { actividadesQuery } = UseActividades()
    const isOpenNewActivity = useMaestroSotre(state => state.isOpenNewActivity)
    const closeOpenNewActivity = useMaestroSotre(state => state.setCloseNewActivity)
    const { actividadesMutation } = useNewActivityQuery()
    const setEditActivity = useMaestroSotre(state => state.setACtividadMaestrosSelected)

    const initialValues: NewActivity = {
        nombre: "",
        descripcion: "",
        precio: 0,
        activa: true
    };




    const columns: GridColDef[] = [
        { field: 'nombre', headerName: 'Nombre', flex: 1 },
        { field: 'descripcion', headerName: 'Descripcion', flex: 1 },
        { field: 'precio', headerName: 'Precio', flex: 1 },
        {
            field: "Acciones", headerName: "Acciones", flex: 1, renderCell: (params) => {
                return (
                    <div className="flex gap-2 mt-1">
                        <Button variant="contained" color="primary" onClick={() => setEditActivity(params.row)}>Editar</Button>
                    </div>
                )
            }
        }
    ]


    const validationSchema = Yup.object({
        nombre: Yup.string().required("El nombre es obligatorio"),
        descripcion: Yup.string().nullable(),
        precio: Yup.number()
            .typeError("Debe ser un número")
            .positive("Debe ser positivo")
            .required("El precio es obligatorio"),
        activa: Yup.boolean().required("Campo requerido")
    });



    return {
        actividadesQuery,
        validationSchema,
        initialValues,
        columns,
        isOpenNewActivity,
        actividadesMutation,
        closeOpenNewActivity
    }
}

export default useMaestrosActividades
