import { ReactNode } from "react";

export interface SocioDetail {
    saldos: Saldo[];
    inscripciones: InscripcionesDetail[];
    deudas: number;
}

export interface InscripcionesDetail {
    id: number;
    actividadId: number;
    nombre: string;
    descripcion: string;
    fecha: Date;
    monto: number;
}

export interface Saldo {
    id: number;
    monto: string;
    descripcion: string;
    fecha: Date;
    acciones: ReactNode;
}
