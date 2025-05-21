
import { AppLayout } from "../shared/layouts/AppLayout"
import { Route, Routes } from 'react-router';
import SociosPage from "../socios/pages/SociosPage";
import MaestrosPage from "../maestros/pages/MaestrosPage";
import ActividadesPage from "../maestros/pages/ActividadesPage";



const Rutas = () => {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/socios" element={<SociosPage />} />
          <Route path="/maestros" element={<MaestrosPage />} />
          <Route path="/maestros/actividades" element={<ActividadesPage />} />


        </Routes>
      </AppLayout>
    </>
  )
}

export default Rutas