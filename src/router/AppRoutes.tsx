
import { AppLayout } from "../shared/layouts/AppLayout"
import {  Route, Routes } from 'react-router';
import SociosPage from "../socios/pages/SociosPage";



const Rutas = () => {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/socios" element={<SociosPage/>}/>

    
        </Routes>
      </AppLayout>
    </>
  )
}

export default Rutas