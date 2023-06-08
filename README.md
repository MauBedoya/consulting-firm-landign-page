# Consulting Landing Page

Maquetado de una landing page orientada a consultoras, utilizando multiples características de **Tailwind CSS** como framework UI en conjunto con **Vite**.

### 📌[Live Demo](https://consulting-firm-landign-page.vercel.app/)

## Tecnologías

- HTML, Tailwind CSS.
- JavaScript.
- Vite.

## Características

### Uso de Tailwind CSS con Vite

En la página de [Tailwind CSS Installation](https://tailwindcss.com/docs/installation), se detallan los pasos para la instalación de React y PostCSS con Vite. Sin embargo, en este proyecto,  el enfoque se centra en practicar el maquetado puro sin utilizar una biblioteca como React, y en aprovechar los beneficios de Vite como herramienta de **bundling** y **servidor de desarrollo**.

Para asegurar el correcto funcionamiento de Tailwind con Vite, se realizaron ajustes en los scripts utilizando [concurrently](https://www.npmjs.com/package/concurrently). Esta herramienta permite ejecutar el compilador de CSS y el servidor de desarrollo al mismo tiempo, lo que posibilita ver los cambios en tiempo real al recargar el navegador durante el proceso de desarrollo, sin tener que reiniciar el servidor para visualizar los cambios.

```json
"scripts": {
  "dev:css": "tailwindcss -i ./src/input.css -o ./src/output.css --watch",
  "dev:src": "vite dev src --host",
  "dev": "concurrently \"npm run dev:css\" \"npm run dev:src\"",
  "build": "vite build"
},
```

### Estilos personalizados de TailwindCSS

Se utiliza el archivo de configuración "**tailwind.config.js**" para agregar estilos personalizados como lo son imágenes propias como background, o una fuente de texto externa.
