# Recorrido Virtual · Biblioteca ESCOM IPN (versión React)

Rediseño completo del recorrido virtual original (HTML/CSS/JS) migrado a **React + Vite**,
con una dirección visual propia: lenguaje de "cédula de recinto" — placas y directorios de
señalización institucional (papel cálido, tinta guinda/azul del IPN, acentos en latón) y un
elemento distintivo llamado **Línea de Recorrido** (Route Rail): una línea de wayfinding tipo
plano de metro que muestra las 20 paradas del tour y tu progreso a través de ellas.

## Estructura de carpetas

```
recorrido-virtual-biblioteca/
├── index.html                 # HTML raíz de Vite
├── package.json
├── vite.config.js
├── public/
│   └── imagenes/              # ⚠️ Copia aquí TODAS tus fotos (mismo nombre que en data original)
└── src/
    ├── main.jsx                # Punto de entrada
    ├── App.jsx                 # Ensambla toda la vista
    ├── index.css                # Sistema de diseño (tokens + estilos)
    ├── data/
    │   └── scenes.js            # Las 20 escenas (antes data.js)
    ├── hooks/
    │   └── useTour.js           # Todo el estado: navegación, zoom, autoplay, fullscreen, teclado
    └── components/
        ├── Header.jsx
        ├── ImageViewer.jsx       # Visor principal + hotspots + zoom
        ├── Hotspot.jsx
        ├── ViewNavigation.jsx    # Botones anterior/siguiente
        ├── RouteRail.jsx         # ⭐ Elemento distintivo: línea de wayfinding
        ├── InfoPlaque.jsx        # Placa lateral con título/descripción/conexiones
        ├── ControlPanel.jsx      # Autoplay / reiniciar / ayuda
        ├── ThumbnailPanel.jsx    # Miniaturas
        ├── HelpModal.jsx
        └── Footer.jsx
```

## Cómo correrlo

1. Copia todas tus imágenes (`entrada.jpg`, `recepcion.jpeg`, etc.) a `public/imagenes/`.
   Los logos van ahí también: `logo_ipn3.png` y `logo_escom.png`.
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Modo desarrollo (recarga en caliente):
   ```bash
   npm run dev
   ```
4. Build de producción:
   ```bash
   npm run build
   ```
   Esto genera la carpeta `dist/` lista para subir a cualquier hosting estático.

## Qué cambió respecto a la versión original

- **Arquitectura**: de scripts sueltos manipulando el DOM a componentes de React con un solo
  hook (`useTour`) que centraliza todo el estado (índice actual, zoom, autoplay, pantalla
  completa, modal de ayuda) — más fácil de mantener y extender.
- **Diseño**: nueva paleta y tipografía (Fraunces + Inter + JetBrains Mono) inspirada en placas
  de señalización de recintos, en vez del estilo de dashboard genérico anterior.
- **Elemento nuevo — Línea de Recorrido**: un mapa de progreso horizontal tipo plano de ruta,
  con cada una de las 20 paradas como nodo clickeable; sustituye la lista plana de puntos del
  mapa original.
- **Panel lateral tipo placa**: el título/descripción de cada escena ahora se presenta como una
  cédula informativa oscura con acentos en latón, y muestra a qué escenas conecta cada hotspot
  por nombre real (antes solo aparecía en el tooltip).
- Se conserva toda la funcionalidad original: hotspots, zoom, autoplay cada 5s, pantalla
  completa, navegación por teclado (`← → espacio + - 0 h esc`), miniaturas, impresión.

## Notas

- Las rutas de imagen en `src/data/scenes.js` ahora empiezan con `/imagenes/...` (carpeta
  `public/imagenes`), como lo espera Vite para archivos estáticos.
- Si una imagen no carga, se muestra automáticamente un placeholder con el nombre de la escena,
  igual que en la versión original.
