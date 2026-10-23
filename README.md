# bautistatolloni-web

Web de marca personal de Bautista Tolloni: servicios de CRM, automatización y email B2B, más portfolio.

- Astro 7 + Tailwind 4, estática. Publicada en https://bautolloni-png.github.io/ : cada push a `main` la compila y la sube con GitHub Actions (`.github/workflows/deploy.yml`).
- Español en `/` y en inglés en `/en/`. Todo el texto vive en `src/i18n/es.ts` y `src/i18n/en.ts`; los componentes no tienen texto propio.
- Tokens de color en `src/styles/global.css` (claro y oscuro según el sistema).
- Los CV que se descargan están en `public/cv/` (copias de `~/CV Final`; regenerarlas si cambia el CV).

```
npm run dev     # http://localhost:4321
npm run build   # genera dist/
```
