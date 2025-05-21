import { DataGrid } from '@mui/x-data-grid';
import useMaestrosActividades from '../hooks/useMaestrosActividades';

const ActividadesPage = () => {
   const {actividadesQuery, columns} = useMaestrosActividades()


  
    return (
        <div>
            <h1>Actividades</h1>
            <hr />
                <div style={{ height: "90vh", width: '100%' }}>
                    <DataGrid
                        rows={actividadesQuery.data ?? []} columns={columns} />
                </div>
            </div>
    )
}

export default ActividadesPage
