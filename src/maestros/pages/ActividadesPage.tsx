import { DataGrid } from '@mui/x-data-grid';
import useMaestrosActividades from '../hooks/useMaestrosActividades';
import { Button } from '@mui/material';
import { useMaestroSotre } from '../../store/maestros-store';
import ModalNewActividad from '../components/ModalNewActivity';
import ModalEditActivity from '../components/ModalEditActivity';

const ActividadesPage = () => {
    const { actividadesQuery, columns } = useMaestrosActividades()
    const openNewActivity = useMaestroSotre(state => state.setOpenNewActivity)
    const selectedActivity = useMaestroSotre(state => state.activityMaestrosSelected)
   


    

    return (
        <div>
            <div className='flex flex-row justify-between items-center p-4'>
                <h1>Actividades</h1>
                <div className='justify-end'>
                    <Button variant='contained'
                        color='success'
                        onClick={() => openNewActivity(true)}>

                        Crear Actividad
                    </Button></div>
            </div>
            <div style={{ height: "90vh", width: '100%' }}>
                <DataGrid
                    rows={actividadesQuery.data ?? []} columns={columns} />
            </div>
            <ModalNewActividad />
            <ModalEditActivity  id={selectedActivity?.id!} />
        </div>
    )
}

export default ActividadesPage
