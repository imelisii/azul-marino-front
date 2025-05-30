
import { AppLayout } from "../shared/layouts/AppLayout"
import { Route, Routes } from 'react-router';
import SociosPage from "../socios/pages/SociosPage";
import MaestrosPage from "../maestros/pages/MaestrosPage";
import ActividadesPage from "../maestros/pages/ActividadesPage";
import CajaPage from "../caja/pages/CajaPage";



const Rutas = () => {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/socios" element={<SociosPage />} />
          <Route path="/maestros" element={<MaestrosPage />} />
          <Route path="/maestros/actividades" element={<ActividadesPage />} />
          <Route path="/maestros/caja" element={<CajaPage />} />


        </Routes>
      </AppLayout>
    </>
  )
}

export default Rutas