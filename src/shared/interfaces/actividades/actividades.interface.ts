export interface Actividad {
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        activa: boolean;
}

export interface NewActivity {
        nombre: string;
        descripcion: string;
        precio: number;
        activa: boolean;
}