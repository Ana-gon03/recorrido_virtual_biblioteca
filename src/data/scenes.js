// Definición de todas las escenas del recorrido virtual.
// Cada escena representa un "stop" dentro de la ruta de la biblioteca.
export const scenes = [
  {
    id: "edificio_principal",
    title: "Edificio Principal",
    description: "Vista exterior desde el Edificio de Gobierno.",
    image: "/imagenes/Edificio_principal_biblio.jpeg",
    thumbnail: "/imagenes/Edificio_principal_biblio.jpeg",
    hotspots: [
      { x: 85, y: 50, target: "entrada", info: "Ir a la entrada de la biblioteca" }
    ]
  },
  {
    id: "entrada",
    title: "Entrada Principal",
    description: "Vista exterior de la entrada principal de la Biblioteca ESCOM.",
    image: "/imagenes/Entrada.jpg",
    thumbnail: "/imagenes/Entrada.jpg",
    hotspots: [
      { x: 15, y: 50, target: "edificio_principal", info: "Volver al edificio principal" },
      { x: 85, y: 50, target: "entrada_biblioteca", info: "Entrar a la biblioteca" }
    ]
  },
  {
    id: "entrada_biblioteca",
    title: "Entrada a la Biblioteca",
    description: "Puerta de acceso principal al interior de la biblioteca.",
    image: "/imagenes/entrada_principal.jpg",
    thumbnail: "/imagenes/entrada_principal.jpg",
    hotspots: [
      { x: 15, y: 50, target: "entrada", info: "Volver a la entrada principal" },
      { x: 85, y: 50, target: "recepcion", info: "Ir a la recepción" }
    ]
  },
  {
    id: "recepcion",
    title: "Recepción",
    description: "Área de recepción donde el personal bibliotecario atiende consultas.",
    image: "/imagenes/recepcion.jpeg",
    thumbnail: "/imagenes/recepcion.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "entrada_biblioteca", info: "Volver a la entrada" },
      { x: 85, y: 50, target: "lockers", info: "Ir a los lockers" }
    ]
  },
  {
    id: "lockers",
    title: "Lockers",
    description: "Armarios personales donde los estudiantes pueden guardar sus pertenencias.",
    image: "/imagenes/lockers.jpeg",
    thumbnail: "/imagenes/lockers.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "recepcion", info: "Volver a recepción" },
      { x: 85, y: 50, target: "mesa_lockers", info: "Ver mesa junto a lockers" },
      { x: 50, y: 30, target: "vista_general", info: "Vista general desde la entrada" }
    ]
  },
  {
    id: "mesa_lockers",
    title: "Mesa junto a los Lockers",
    description: "Mesa de uso temporal ubicada junto a los lockers.",
    image: "/imagenes/mesa_junto_lockers.jpeg",
    thumbnail: "/imagenes/mesa_junto_lockers.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "lockers", info: "Volver a los lockers" },
      { x: 85, y: 50, target: "vista_general", info: "Vista general" }
    ]
  },
  {
    id: "vista_general",
    title: "Vista General desde la Entrada",
    description: "Perspectiva general del interior de la biblioteca.",
    image: "/imagenes/vista_general_entrada.jpeg",
    thumbnail: "/imagenes/vista_general_entrada.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "mesa_lockers", info: "Volver a área de lockers" },
      { x: 85, y: 50, target: "segunda_recepcion", info: "Ir a segunda recepción" },
      { x: 50, y: 70, target: "sillones", info: "Ver área de sillones" }
    ]
  },
  {
    id: "segunda_recepcion",
    title: "Segunda Recepción",
    description: "Área adicional de atención al usuario.",
    image: "/imagenes/segunda_recepcion.jpeg",
    thumbnail: "/imagenes/segunda_recepcion.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "vista_general", info: "Volver a vista general" },
      { x: 85, y: 50, target: "sillones", info: "Ir a área de sillones" }
    ]
  },
  {
    id: "sillones",
    title: "Sillones con Mueble de Libros",
    description: "Zona de lectura informal con sillones cómodos.",
    image: "/imagenes/sillon_con_libros.jpeg",
    thumbnail: "/imagenes/sillon_con_libros.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "segunda_recepcion", info: "Volver a segunda recepción" },
      { x: 85, y: 50, target: "primer_librero", info: "Ir al primer librero" }
    ]
  },
  {
    id: "primer_librero",
    title: "Primer Librero",
    description: "Primera sección de estanterías con libros especializados.",
    image: "/imagenes/primer_librero.jpeg",
    thumbnail: "/imagenes/primer_librero.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "sillones", info: "Volver a área de sillones" },
      { x: 85, y: 50, target: "mesas_entre_libreros", info: "Ver mesas entre libreros" }
    ]
  },
  {
    id: "mesas_entre_libreros",
    title: "Mesas de Estudio entre Libreros",
    description: "Mesas de estudio individual entre los estantes de libros.",
    image: "/imagenes/mesas_entre_libros.jpeg",
    thumbnail: "/imagenes/mesas_entre_libros.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "primer_librero", info: "Volver al primer librero" },
      { x: 85, y: 50, target: "segundo_librero", info: "Ir al segundo librero" }
    ]
  },
  {
    id: "segundo_librero",
    title: "Segundo Estante de Libreros",
    description: "Segunda sección de estanterías con material bibliográfico.",
    image: "/imagenes/segundo_librero.jpeg",
    thumbnail: "/imagenes/segundo_librero.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "mesas_entre_libreros", info: "Volver a mesas entre libreros" },
      { x: 85, y: 50, target: "salas_estudio", info: "Ir a salas de estudio" }
    ]
  },
  {
    id: "salas_estudio",
    title: "Salas de Estudio",
    description: "Espacios reservados para estudio en grupo o individual.",
    image: "/imagenes/salas_de_estudio.jpeg",
    thumbnail: "/imagenes/salas_de_estudio.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "segundo_librero", info: "Volver al segundo librero" },
      { x: 85, y: 50, target: "vista_mesas_segundo_librero", info: "Ver vista desde segundo librero" }
    ]
  },
  {
    id: "vista_mesas_segundo_librero",
    title: "Vista de Mesas desde el Segundo Librero",
    description: "Perspectiva de las mesas de estudio.",
    image: "/imagenes/vista_de_las_mesas_de_estudio_desde_el_segundo_librero.jpeg",
    thumbnail: "/imagenes/vista_de_las_mesas_de_estudio_desde_el_segundo_librero.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "salas_estudio", info: "Volver a salas de estudio" },
      { x: 85, y: 50, target: "pasillo_mesas", info: "Ir al pasillo de mesas individuales" }
    ]
  },
  {
    id: "pasillo_mesas",
    title: "Pasillo de Mesas Individuales",
    description: "Corredor con mesas individuales para estudio concentrado.",
    image: "/imagenes/pasillo_mesas.jpeg",
    thumbnail: "/imagenes/pasillo_mesas.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "vista_mesas_segundo_librero", info: "Volver a vista desde segundo librero" },
      { x: 85, y: 50, target: "otra_parte", info: "Ver otra parte de la biblioteca" }
    ]
  },
  {
    id: "otra_parte",
    title: "Vista a Otra Parte de la Biblioteca",
    description: "Perspectiva hacia una sección diferente de la biblioteca.",
    image: "/imagenes/vista_segunda_parte.jpeg",
    thumbnail: "/imagenes/vista_segunda_parte.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "pasillo_mesas", info: "Volver al pasillo de mesas" },
      { x: 85, y: 50, target: "mesas_computadoras", info: "Ir a mesas con computadoras" }
    ]
  },
  {
    id: "mesas_computadoras",
    title: "Mesas con Computadoras",
    description: "Área equipada con computadoras de uso público.",
    image: "/imagenes/mesas_computadoras.jpeg",
    thumbnail: "/imagenes/mesas_computadoras.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "otra_parte", info: "Volver a vista general" },
      { x: 85, y: 50, target: "vista_general_pasillo", info: "Vista general desde el pasillo" }
    ]
  },
  {
    id: "vista_general_pasillo",
    title: "Vista General desde el Pasillo",
    description: "Panorámica completa de la biblioteca desde el pasillo.",
    image: "/imagenes/vista_general_desde_el_pasillo.jpeg",
    thumbnail: "/imagenes/vista_general_desde_el_pasillo.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "mesas_computadoras", info: "Volver a mesas con computadoras" },
      { x: 85, y: 50, target: "tercer_librero", info: "Ir al tercer librero" }
    ]
  },
  {
    id: "tercer_librero",
    title: "Tercer Estante de Libros",
    description: "Tercera sección de estanterías con colecciones especializadas.",
    image: "/imagenes/tercer_estante_de_libros.jpeg",
    thumbnail: "/imagenes/tercer_estante_de_libros.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "vista_general_pasillo", info: "Volver a vista general" },
      { x: 85, y: 50, target: "sala_grupos", info: "Ir a sala para grupos grandes" }
    ]
  },
  {
    id: "sala_grupos",
    title: "Sala de Estudio para Grupos",
    description: "Espacio amplio para trabajo colaborativo.",
    image: "/imagenes/sala_de_estudio_para_grupos_mas_grandes_de_personas.jpeg",
    thumbnail: "/imagenes/sala_de_estudio_para_grupos_mas_grandes_de_personas.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "tercer_librero", info: "Volver al tercer librero" },
      { x: 85, y: 50, target: "vista_tercer_librero", info: "Otra vista del tercer librero" }
    ]
  },
  {
    id: "vista_tercer_librero",
    title: "Otra Vista del Tercer Librero",
    description: "Perspectiva alternativa del tercer estante de libros.",
    image: "/imagenes/otra_vista_del_tercer_estante_de_libros.jpeg",
    thumbnail: "/imagenes/otra_vista_del_tercer_estante_de_libros.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "sala_grupos", info: "Volver a sala para grupos" },
      { x: 85, y: 50, target: "palapas", info: "Ver palapas de estudio" }
    ]
  },
  {
    id: "palapas",
    title: "Palapas de Estudio",
    description: "Estructuras tipo palapa para espacios semiprivados.",
    image: "/imagenes/vista_de_las_palapas_de_estudio_de_la_biblioteca.jpeg",
    thumbnail: "/imagenes/vista_de_las_palapas_de_estudio_de_la_biblioteca.jpeg",
    hotspots: [
      { x: 15, y: 50, target: "vista_tercer_librero", info: "Volver al tercer librero" },
      { x: 85, y: 50, target: "edificio_principal", info: "Volver al inicio" }
    ]
  }
];
