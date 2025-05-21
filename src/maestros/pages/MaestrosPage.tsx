
import { FaPersonSwimming } from "react-icons/fa6";
import { NavLink } from "react-router";
import { WhiteCard } from "../../shared/cards/WhiteCard";



const MaestrosPage = () => {
    return (
        <>
            <h1>Maestros</h1>

            <hr />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                {/* <NavLink to={"/maestros/camiones"}>
                    <WhiteCard centered>
                        <FaTruckMoving size={50} color={Color.primary} />
                        <h2>Camiones</h2>
                        <p>Información</p>
                    </WhiteCard>
                </NavLink> */}

                <NavLink to={"/maestros/actividades"}>
                    <WhiteCard centered>
                        <FaPersonSwimming size={50} color="#01427f" />
                        <h2 className="font-semibold text-blue-900">Actividades</h2>
                        <p className="font-semibold text-blue-900">Creacion / Edicion de Actividades</p>
                    </WhiteCard>
                </NavLink>

                {/* <NavLink to={"/maestros/campos"}>
                    <WhiteCard centered>
                        <GiField size={50} color={Color.primary} />
                        <h2>Campos</h2>
                        <p>Información</p>
                    </WhiteCard>
                </NavLink> */}

                {/* <NavLink to={"/maestros/usuarios"}>
                    <WhiteCard centered>
                        <IoLockClosedOutline size={50} color={Color.primary} />
                        <h2>Usuarios</h2>
                        <p>Información</p>
                    </WhiteCard>
                </NavLink> */}



            </div>

        </>
    )
}

export default MaestrosPage
