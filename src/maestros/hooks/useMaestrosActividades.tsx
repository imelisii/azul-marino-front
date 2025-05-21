import { GridColDef } from "@mui/x-data-grid"
import UseActividades from "../../acatividades/hooks/UseActividades"
import { Button } from "@mui/material"



const useMaestrosActividades = () => {
    const { actividadesQuery } = UseActividades()
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'nombre', headerName: 'Nombre', flex: 1 },
        { field: 'descripcion', headerName: 'Descripcion', flex: 1 },
        { field: 'precio', headerName: 'Precio', flex: 1 },
        {
            field: "Acciones", headerName: "Acciones", flex: 1, renderCell: () => {
                return (
                    <div className="flex gap-2 justify-center items-center mt-1">
                        <Button variant="contained" color="primary">Editar</Button>
                    </div>
                )
            }
        }
    ]



    return {
        actividadesQuery,

        columns,
    }
}

export default useMaestrosActividades
