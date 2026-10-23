// Los envíos del formulario llegan por correo a bautolloni@gmail.com a través de Web3Forms.
// La clave es pública por diseño (viaja en el HTML) y se pide en https://web3forms.com con ese correo.
export const WEB3FORMS_ACCESS_KEY = '1c36b5c5-a76b-44ea-9de5-64bb4dd18bfd';
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export const LIMITES = {
  nombre: 80,
  empresa: 120,
  correo: 160,
  mensajeMin: 10,
  mensajeMax: 2000,
};

const CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type Motivo = 'project' | 'job';

export interface Datos {
  name: string;
  company: string;
  email: string;
  motive: string;
  message: string;
}

export type Campo = 'name' | 'email' | 'motive' | 'message';

// Devuelve los campos con error, en el orden en que aparecen en el formulario.
export function validar(d: Datos): Campo[] {
  const errores: Campo[] = [];
  if (d.name.trim().length < 2) errores.push('name');
  if (!CORREO.test(d.email.trim())) errores.push('email');
  if (d.motive !== 'project' && d.motive !== 'job') errores.push('motive');
  if (d.message.trim().length < LIMITES.mensajeMin) errores.push('message');
  return errores;
}
