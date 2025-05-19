export interface SocioDetail {
    saldos: Saldo[];
    inscripciones: InscripcionesDetail[];
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
    tipo_movimiento: string;
}
