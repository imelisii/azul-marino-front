import { ReactNode } from "react";


export interface SocioDetail {
  id: number;
  numero_socio: string;
  familiar: string;
  nombre: string;
  apellido: string;
  dni: string;
  fecha_nacimiento: Date;
  direccion: string;
  localidad: string;
  telefono: string;
  madre: string;
  telefono_madre: string;
  padre: string;
  telefono_padre: string;
  mail: string;
  celular: string;
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
