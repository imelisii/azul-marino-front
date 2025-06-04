import { FaPersonSwimming } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router";
import { WhiteCard } from "../../shared/cards/WhiteCard";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useAuthStore } from "../../store/auth/auth.store";
import { Formik, Form, Field } from "formik";



const MaestrosPage = () => {
    const [loading, setLoading] = useState(false);
    const loginUser = useAuthStore(state => state.loginUser);
    const navigate = useNavigate();

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

                <WhiteCard centered>
                    <FaPersonSwimming size={50} color="#01427f" />
                    <h2 className="font-semibold text-blue-900">Caja</h2>
                    <Formik
                        initialValues={{ usuario: "", clave: "" }}
                        onSubmit={async (values) => {
                            setLoading(true);
                            try {
                                await loginUser(values.usuario, values.clave);
                                navigate("/maestros/caja", { replace: true });
                            } catch {
                                // error
                            } finally {
                                setLoading(false);
                            }
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
                                <Field
                                    as={TextField}
                                    size="small"
                                    placeholder="Usuario"
                                    variant="outlined"
                                    name="usuario"
                                    sx={{ minWidth: 120 }}
                                />
                                <Field
                                    as={TextField}
                                    size="small"
                                    placeholder="Clave"
                                    variant="outlined"
                                    name="clave"
                                    type="password"
                                    sx={{ minWidth: 120 }}
                                />
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={loading || isSubmitting}
                                >
                                    {loading || isSubmitting ? "Ingresando..." : "Ingresar"}
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </WhiteCard>




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
