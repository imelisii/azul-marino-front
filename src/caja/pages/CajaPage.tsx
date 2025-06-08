import { useNavigate } from "react-router"
import { useAuthStore } from "../../store/auth/auth.store"
import CajaDataGrid from "../components/CajaDataGrid"


const CajaPage = () => {
    const status = useAuthStore(state => state.status)
    const navigate = useNavigate()

    if(status !== "autorized") {
      navigate(-1)
    
    }

    return (
        <CajaDataGrid />
    )
}

export default CajaPage
