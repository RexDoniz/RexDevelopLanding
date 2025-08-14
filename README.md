# RexDevelop Landing Page

Landing page profesional desarrollada con **Vue 3**, **TypeScript** y **Vite**.

## Características principales

- Vue 3 con `<script setup>` y composición moderna.
- Ruteo con Vue Router 4.
- Estilos modernos con CSS variables y glassmorphism.
- Componentes reutilizables y responsivos.
- PrimeVue para UI moderna (Botones, iconos y tema Saga Blue). 
- Integración de FontAwesome para iconos.
- Formularios accesibles y validación reactiva.
- Scroll automático a secciones vía hash en la URL.
- Alias `@` configurado para imports limpios.

## Instalación

1. Instalar dependencias
   - npm install
   - Si ya tenías el proyecto instalado previamente, asegúrate de agregar las nuevas dependencias: `npm install primevue primeicons`
2. Ejecutar en desarrollo: `npm run dev`
3. Build de producción: `npm run build`

La configuración de PrimeVue y el tema se hace en `src/main.ts` importando:
- primevue/resources/themes/saga-blue/theme.css
- primevue/resources/primevue.min.css
- primeicons/primeicons.css

Y usando el plugin:
```ts
app.use(PrimeVue, { ripple: true });
app.component('Button', Button);
```

Se actualizaron los CTA principales en Home para usar `<Button>` de PrimeVue con iconos modernos.
