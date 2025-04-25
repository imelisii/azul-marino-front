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


