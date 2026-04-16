export const projects = [
  // ── DISEÑO UX/UI ────────────────────────────────────────────────────────────

  {
    slug: "letterboxd-redesign",
    title: "Letterboxd redesign",
    category: "design",
    featured: true,
    role: "UX/UI Designer",
    year: "2024",
    shortDescription:
      "Caso de estudio completo aplicando research con usuarios, arquitectura de la información, wireframes y prototipado en Figma.",
    heroImage: "/film_information.webp",
    tags: [
      { iconType: "figma", text: "Figma" },
      { text: "Pruebas de usuario" },
      { text: "Research" },
      { text: "Prototipado" },
    ],
    detail: {
      problem:
        "Letterboxd tiene una interfaz densa que puede resultar confusa para nuevos usuarios. El reto fue replantear los flujos más críticos sin perder la identidad visual de la plataforma.",
      process:
        "Empecé con un análisis heurístico y entrevistas a usuarios para identificar los puntos de fricción. Con esos aprendizajes diseñé wireframes de baja fidelidad, iteré en la arquitectura de la información y llegué a un prototipo navegable en Figma.",
      outcome:
        "El resultado es un caso de estudio completo con toda la metodología documentada, desde el research hasta el prototipo final. Fue el proyecto integrador del curso UX/UI avanzado de Coderhouse.",
      images: [],
      impact: [],
    },
    links: {
      live: null,
      repo: null,
      figma: null,
      behance:
        "https://www.behance.net/gallery/208245225/Letterboxd-redesign-Case-of-study-UXUI",
    },
  },

  {
    slug: "test-phishing-hackmetrix",
    title: "Test de phishing",
    category: "design",
    featured: false,
    role: "UX/UI Designer",
    year: "2024",
    shortDescription:
      "Herramienta para Hackmetrix que pone a prueba a los usuarios frente al phishing y los capacita con un flujo educativo.",
    heroImage: "/test_phishing.webp",
    tags: [
      { iconType: "figma", text: "Figma" },
      { text: "Prototipado" },
    ],
    detail: {
      problem:
        "Los usuarios de las empresas clientes de Hackmetrix eran vulnerables a ataques de phishing por falta de concientización. Se necesitaba una herramienta que los pusiera a prueba de forma práctica.",
      process:
        'Diseñé la interfaz en Figma priorizando claridad y un tono educativo, no punitivo. El flujo guía al usuario desde el "engaño" inicial hasta los consejos concretos de seguridad.',
      outcome:
        "La herramienta está en producción y es usada por empresas de distintos rubros para entrenar a sus equipos en ciberseguridad.",
      images: [],
      impact: [],
    },
    links: {
      live: "https://test-phishing.hackmetrix.com/",
      repo: null,
      figma: null,
      behance: null,
    },
  },

  {
    slug: "modulo-legales-hackmetrix",
    title: "Módulo de legales",
    category: "design",
    featured: false,
    role: "UX/UI Designer",
    year: "2024",
    shortDescription:
      "Rediseño del módulo de documentación legal de Hackmetrix a partir de entrevistas contextuales con usuarios reales del producto.",
    heroImage: "/redesign_legales.webp",
    tags: [
      { iconType: "figma", text: "Figma" },
      { text: "Pruebas de usuario" },
      { text: "Research" },
      { text: "Prototipado" },
    ],
    detail: {
      problem:
        "El módulo de documentación legal dentro del producto era difícil de navegar y tenía una tasa alta de abandono. Los usuarios no encontraban lo que buscaban sin pedir ayuda al equipo.",
      process:
        "Realicé entrevistas contextuales con usuarios reales para entender cómo buscaban y procesaban la información. Los hallazgos guiaron el rediseño de la organización del contenido y los patrones de interacción.",
      outcome:
        "Aprendizaje profundo sobre diseño de producto en un contexto B2B real. La metodología de entrevistas y los reportes generaron valor más allá del rediseño visual.",
      images: [],
      impact: [],
    },
    links: {
      live: null,
      repo: null,
      figma: null,
      behance: null,
    },
  },

  {
    slug: "diagnostico-ciberseguridad-hackmetrix",
    title: "Diagnóstico de ciberseguridad",
    category: "design",
    featured: false,
    role: "UX/UI Designer",
    year: "2025",
    shortDescription:
      "Herramienta de diagnóstico de madurez en ciberseguridad para Hackmetrix, con un flujo guiado que genera un reporte personalizado según el perfil de cada empresa.",
    heroImage: "/diagnostico-ciberseguridad.png",
    tags: [
      { iconType: "figma", text: "Figma" },
      { text: "Producto" },
      { text: "Prototipado" },
    ],
    detail: {
      problem:
        "Las empresas necesitaban una forma rápida de entender en qué nivel de madurez de seguridad estaban sin tener que hablar con un asesor primero. El producto necesitaba un punto de entrada accesible y autónomo.",
      process:
        "Diseñé un flujo de diagnóstico guiado con lógica de branching según las respuestas del usuario. El resultado es un reporte personalizado con recomendaciones concretas adaptadas al perfil de cada empresa.",
      outcome:
        "La herramienta está en producción como parte del ecosistema de Hackmetrix y funciona como punto de entrada para leads calificados.",
      images: [],
      impact: [],
    },
    links: {
      live: "https://diagnostico-de-seguridad.hackmetrix.com/?utm_campaign=21824416-Diagn%C3%B3stico&utm_source=banner&utm_content=sitioweb",
      repo: null,
      figma: null,
      behance: null,
    },
  },

  // ── DESARROLLO FRONT-END ─────────────────────────────────────────────────────

  {
    slug: "la-12-digital",
    title: "La 12 Digital",
    category: "frontend",
    featured: true,
    role: "Frontend Developer", // TODO: ajustar rol si aplica
    year: "2024",
    shortDescription:
      "TODO: completar descripción corta del proyecto La 12 Digital.", // TODO
    heroImage: "/la-12-digital.png", 
    tags: [
      // TODO: completar con las tecnologías del proyecto
    ],
    detail: {
      problem: "TODO: completar con el contexto del proyecto.",
      process: "TODO: completar con el proceso de desarrollo.",
      outcome: "TODO: completar con los resultados.",
      images: [],
      impact: [],
    },
    links: {
      live: "https://la-12-digital.matiasowjordan.workers.dev/", // TODO
      repo: null, // TODO
      figma: null,
      behance: null,
    },
  },

  {
    slug: "gifs-search-app",
    title: "Gifs search app",
    category: "frontend",
    featured: false,
    role: "Frontend Developer",
    year: "2024",
    shortDescription:
      "Aplicación para buscar y visualizar GIFs integrando la API de GIPHY, con estado global en Zustand y testing.",
    heroImage: "/gifs-search-app.webp",
    tags: [
      { iconType: "react", text: "React" },
      { iconType: "zustand", text: "Zustand" },
    ],
    detail: {
      problem:
        "Quería construir algo concreto con React que integrara una API externa y pusiera a prueba el manejo de estado global y las buenas prácticas de testing.",
      process:
        "Integré la API de GIPHY con Zustand para el estado global. Apliqué testing unitario y de integración para cubrir los flujos principales de búsqueda y visualización.",
      outcome:
        "Una app funcional desplegada en Vercel que sirve como referencia práctica de cómo estructurar un proyecto React desde cero.",
      images: [],
      impact: [],
    },
    links: {
      live: "https://gifs-search-app-react-five.vercel.app/",
      repo: "https://github.com/jorditan/gifs-app-react",
      figma: null,
      behance: null,
    },
  },

  {
    slug: "pokegame-pokefinder",
    title: "PokeGame | Pokefinder",
    category: "frontend",
    featured: false,
    role: "Frontend Developer",
    year: "2024",
    shortDescription:
      "Mejora de un juego existente con Vue 3 y Pinia, aplicando criterio UX para optimizar la experiencia y la jugabilidad.",
    heroImage: "/pokegame.webp",
    tags: [
      { iconType: "vue", text: "Vue" },
      { iconType: "pinia", text: "Pinia" },
      { iconType: "tailwind", text: "Tailwind" },
    ],
    detail: {
      problem:
        "El juego original tenía problemas de usabilidad que reducían la jugabilidad. Era una oportunidad para aplicar criterio UX en un proyecto de desarrollo real.",
      process:
        "Analicé los puntos de fricción del juego existente y rediseñé los flujos con Vue 3 y Pinia. Usé Tailwind para iterar rápido en el diseño visual.",
      outcome:
        "Una versión mejorada del juego con una experiencia más fluida, deployada en Netlify.",
      images: [],
      impact: [],
    },
    links: {
      live: "https://pokemonfinder-vue.netlify.app/",
      repo: "https://github.com/jorditan/PokemonGame",
      figma: null,
      behance: null,
    },
  },

  {
    slug: "wollolok",
    title: "Wollolok",
    category: "frontend",
    featured: false,
    role: "Desarrollador",
    year: "2024",
    shortDescription:
      "Proyecto integrador de Programación Orientada a Objetos I en la UNAHUR. Juego en Wollok con herencia, polimorfismo y testing automático.",
    heroImage: "/wollolok.webp",
    tags: [
      { iconType: "unahur", text: "UNAHUR" },
      { iconType: "wollok", text: "Wollok" },
    ],
    hasGif: true,
    gifImage: "/gif-wollolok.gif",
    detail: {
      problem:
        "Proyecto integrador de la materia Programación Orientada a Objetos I en la UNAHUR. El desafío era diseñar un juego aplicando polimorfismo, herencia y testing automático desde cero.",
      process:
        "Desarrollado en Wollok, un entorno pensado para enseñar POO. Estructuré el dominio del juego con clases, herencia y mensajes entre objetos siguiendo los principios de la materia.",
      outcome:
        "Proyecto aprobado con la práctica completa de los conceptos de POO. No puede ser deployado por limitaciones del entorno Wollok, pero puede verse en el GIF.",
      images: [],
      impact: [],
    },
    links: {
      live: null,
      repo: "https://github.com/obj1-unahur-2024s2/TPGameIntegrador-thecoders",
      figma: null,
      behance: null,
    },
  },
];

export const getAllProjects = () => projects;
export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
export const getDesignProjects = () => projects.filter((p) => p.category === "design");
export const getFrontendProjects = () => projects.filter((p) => p.category === "frontend");
