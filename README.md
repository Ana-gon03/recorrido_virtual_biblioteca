# Recorrido Virtual - Biblioteca ESCOM

Recorrido virtual interactivo por las instalaciones de la Biblioteca de la Escuela Superior de Cómputo (ESCOM) del IPN. Construido con React y Vite.

## Requisitos previos

Para ejecutar este proyecto necesitas tener instalado **Node.js** (incluye npm), aunque no tengas React instalado previamente — React se instala automáticamente como dependencia del proyecto.

1. Descarga e instala Node.js (versión 18 o superior) desde:
   [https://nodejs.org/](https://nodejs.org/)
2. Verifica que quedó instalado correctamente abriendo una terminal y ejecutando:

   ```bash
   node -v
   npm -v
   ```

   Ambos comandos deben mostrar un número de versión.

## Instalación del proyecto

1. Clona o descarga este repositorio en tu computadora.
2. Abre una terminal dentro de la carpeta del proyecto:

   ```bash
   cd recorrido-virtual-biblioteca
   ```

3. Instala las dependencias (esto descarga React y todo lo demás que el proyecto necesita):

   ```bash
   npm install
   ```

## Ejecutar el proyecto en modo desarrollo

```bash
npm run dev
```

Esto levanta un servidor local. Abre en tu navegador la dirección que se muestra en la terminal (normalmente [http://localhost:5173](http://localhost:5173)).

## Generar la versión de producción

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`.

Para previsualizar esa versión de producción localmente:

```bash
npm run preview
```

## Scripts disponibles

| Comando           | Descripción                                      |
| ------------------ | ------------------------------------------------- |
| `npm run dev`       | Inicia el servidor de desarrollo con recarga en vivo |
| `npm run build`     | Compila el proyecto para producción                |
| `npm run preview`   | Sirve localmente la build de producción            |

## Tecnologías utilizadas

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/)
- Font Awesome (iconos)

## Estructura del proyecto

```
src/
├── components/   # Componentes de la interfaz (visor, controles, paneles, etc.)
├── data/         # Datos de las escenas del recorrido
├── hooks/        # Lógica del recorrido (useTour)
├── App.jsx       # Componente raíz
└── main.jsx      # Punto de entrada de la aplicación
```
