import DataGridSocios from "../components/DataGridSocios"
import ModalCobranza from "../../cobranza/components/ModalCobranza"
import SearchSocios from "../components/SearchSocios"
import ModalNewSocio from "../components/ModalNewSocio"
import ModalEditSocio from "../components/ModalEditSocio"




const SociosPage = () => {

  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <SearchSocios />
      <DataGridSocios />
      <ModalNewSocio />
      <ModalCobranza />
      <ModalEditSocio />
      


    </div>
  )
}

export default SociosPage
