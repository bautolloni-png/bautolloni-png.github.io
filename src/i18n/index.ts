import { en } from './en';
import { es } from './es';

export type Page = 'home' | 'recruiters';

// Dirección de una página en cada idioma, para el cambio de idioma y el hreflang.
export const pathsFor = (page: Page) => ({ es: es.paths[page], en: en.paths[page] });
