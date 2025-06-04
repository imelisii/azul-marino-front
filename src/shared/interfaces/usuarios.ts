
export interface Usuario {
    id: number;
    username: string;
    password: string;
    email: string;
    nombre: string;
    apellido: string;
    rol: string;
    activo: boolean;
    token?: string;
   
}


export type AuthStatus = "autorized" | "unauthorized" | "pending" 