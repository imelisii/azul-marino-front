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
        celular: ""
    }



    const validationSchema = Yup.object({
        nombre: Yup.string().required("Campo Requerido").min(2, "Caracteres minimos deben ser 2"),
        apellido: Yup.string().required("Campo Requerido").min(2, "Caracteres minimos deben ser 2") ,
        dni: Yup.number().required("Campo Requerido").min(8, "Minimo deben ser 8  numeros"),
        celular: Yup.string().required("Campo Requerido").length(8, "Deben ser 8 numeros"),
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
