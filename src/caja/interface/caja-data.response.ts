export interface CajaDataResponse {
    caja: Caja[];
    total: number;
}

interface Caja {
    id: number;
    tipoMovimiento: string;
    cuenta: Cuenta;
    medioPago: MedioPago;
    fecha: Date;
    descripcion: string;
}




export enum Cuenta {
    Anibal = "anibal",
    CuentaAnibal = "Anibal",
    Empty = "",
    Marcos = "marcos",
}

export enum MedioPago {
    Efectivo = "efectivo",
    Empty = "",
    Mp = "mp",
    Transferencia = "transferencia",
}

