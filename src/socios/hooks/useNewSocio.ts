import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useSociosStore } from "../../store/socios-store"
import { newSocio } from "../services/new-socio"
import toast from "react-hot-toast"
import { AxiosError } from "axios"
import { NestErrorResponse } from "../../shared/interfaces/axios-err-response"
import { newSocioInterface } from "../../shared/interfaces/socios/socios.interface"
import * as Yup from 'yup';


const useNewSocio = () => {
    const isNewOpen = useSociosStore(state => state.isNewOpened)
    const newSocioHandler = useSociosStore(state => state.newHandler)

    const queryClient = useQueryClient()




    const initialValues = {
        nombre: "",
        apellido: "",
        dni: "",
        fecha_nacimiento: new Date(),
        celular: "",
        numero_socio: "",
        familiar: "",
        direccion: "",
        localidad: "",
        telefono: "",
        madre: "",
        telefono_madre: "",
        padre: "",
        telefono_padre: "",
        mail: ""
    }



    const validationSchema = Yup.object({
        nombre: Yup.string().required("Campo Requerido").min(2, "Caracteres minimos deben ser 2"),
        apellido: Yup.string().required("Campo Requerido").min(2, "Caracteres minimos deben ser 2") ,
        dni: Yup.string().required("Campo Requerido").length(8, "Deben ser 8 números"),
        fecha_nacimiento: Yup.date().required("Campo Requerido"),
        celular: Yup.string().required("Campo Requerido").length(8, "Deben ser 8 números"),
        numero_socio: Yup.string().required("Campo Requerido"),
        familiar: Yup.string().required("Campo Requerido"),
        direccion: Yup.string().required("Campo Requerido"),
        localidad: Yup.string().required("Campo Requerido"),
        telefono: Yup.string().required("Campo Requerido"),
        madre: Yup.string().required("Campo Requerido"),
        telefono_madre: Yup.string().required("Campo Requerido"),
        padre: Yup.string().required("Campo Requerido"),
        telefono_padre: Yup.string().required("Campo Requerido"),
        mail: Yup.string().email("Debe ser un email válido").required("Campo Requerido"),
    })

    const newSocioQuery = useMutation({
        mutationKey: ["newSocio"],
        mutationFn: (socioData: newSocioInterface) => newSocio(socioData),
        onSuccess: (data) => {
            toast.success(`Se creo el socio ${data.nombre} ${data.apellido} `)
            newSocioHandler()
            queryClient.invalidateQueries({ queryKey: ["socios"] })

        },
        onError: (err: AxiosError<NestErrorResponse>) => {
            toast.error(`${err.response?.data.message}`)
        }



    })





    return {
        isNewOpen,

        initialValues,
        validationSchema,


        newSocioQuery,
        newSocioHandler
    }





}

export default useNewSocio
