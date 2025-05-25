import useActividadQuery from "../../acatividades/hooks/useActividadQuery";
import { useUpdateActivity } from "../../acatividades/hooks/useUpdateActivity";
import { Actividad } from "../../shared/interfaces/actividades/actividades.interface";
import { useMaestroSotre } from "../../store/maestros-store"


const useEditActivity = (id:number) => {
    const openAcitivity = useMaestroSotre(state => state.isOpenEditActivity)
    const setCloseEditActivity = useMaestroSotre(state => state.setCloseEditActivity)
    const setOpenEditActivity = useMaestroSotre(state => state.setOpenEditActivity)
    const {activityQuery} = useActividadQuery(id)
    const {updateActivityQuery} = useUpdateActivity()



    const initialValues:Actividad  = {
        id: id,
        nombre:  activityQuery.data?.nombre || "",
        descripcion: activityQuery.data?.descripcion || "",
        precio:   activityQuery.data?.precio || 0,
        activa: activityQuery.data?.activa || true
    }


    return {
        openAcitivity,
        setCloseEditActivity,
        setOpenEditActivity,
        activityQuery,
        updateActivityQuery,
        initialValues
    }
}

export default useEditActivity
