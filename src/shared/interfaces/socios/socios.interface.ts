export interface Socio {
  id: number;
  id_familia: number;
  nombre: string;
  apellido: string;
  dni: string;
  fecha_nacimiento: Date;
  celular: null;
  activo: boolean;
  familias: Familias;
  inscripciones: Inscripciones[];
  saldos: Saldo[];
}

export interface Familias {
  id: number;
  nombre_familia: string;
  fecha_alta: Date;
}

export interface Inscripciones {
  id: number;
  id_socio: number;
  id_actividad: number;
  fecha_inscripcion: Date;
  pagado: boolean;
  fecha_pago: Date;
}

export interface Saldo {
  id: number;
  id_socio: number;
  descripcion: string;
  monto: string;
  fecha: Date;
  tipo_movimiento: string;
}


export interface newSocioInterface {
  id?: number
  nombre: string
  apellido: string
  fecha_nacimiento: Date
  celular: string
  dni: string
  familiar: string
  direccion: string
  localidad: string
  telefono: string
  madre: string
  telefono_madre: string
  padre: string
  telefono_padre: string
  mail: string
}


