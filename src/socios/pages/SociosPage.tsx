import DataGridSocios from "../components/DataGridSocios"
import ModalCobranza from "../components/ModalCobranza"
import SearchSocios from "../components/SearchSocios"




const SociosPage = () => {

  return (
    <div className=" flex flex-col gap-4 items-center p-4">
      <SearchSocios />
      <DataGridSocios />
      <ModalCobranza />


    </div>
  )
}

export default SociosPage
