export const projects = [
  {
    slug: "letterboxd-redesign",
    title: "Rediseño de Letterboxd",
    category: "design",
    featured: true,
    role: "UX/UI Designer",
    year: "Junio 2024 - Septiembre 2024",
    shortDescription:
      "Caso de estudio completo de UX/UI aplicando investigación de usuarios, reestructuración de arquitectura de información, wireframing y prototipado interactivo en Figma.",
    heroImage: "/images/projects/film_information.webp",
    tags: [
      { iconType: "figma", text: "Figma" },
      { text: "UX Research" },
      { text: "Pruebas de usuario" },
      { text: "Prototipado" },
    ],
    detail: {
      problem:
        "Letterboxd posee una comunidad apasionada, pero su interfaz original presenta una alta densidad de información y flujos de navegación complejos que generan sobrecarga cognitiva y fricción en la incorporación de nuevos cinéfilos.",
      process:
        "Realicé un análisis heurístico exhaustivo y entrevistas en profundidad con usuarios (frecuentes y esporádicos). Los hallazgos guiaron la reorganización de la arquitectura de la información, el diseño de wireframes de baja fidelidad y el desarrollo de un prototipo navegable de alta fidelidad con un sistema de componentes escalable en Figma.",
      outcome:
        "Un caso de estudio integral publicado en Behance con toda la metodología de producto documentada, desde el research inicial hasta las pruebas de usabilidad del prototipo. Proyecto integrador galardonado en el curso UX/UI Avanzado de Coderhouse.",
      images: [],
      impact: [
        "Proyecto integrador galardonado en el curso UX/UI Avanzado de Coderhouse.",
        "Caso de estudio publicado en Behance con la metodología completa documentada: research, arquitectura de información, wireframes y testing de usabilidad.",
        "Sistema de componentes escalable construido en Figma para facilitar futuras iteraciones del diseño.",
      ],
    },
    linkLabel: "Ver caso de estudio",
    link: "https://www.behance.net/gallery/208245225/Letterboxd-redesign-Case-of-study-UXUI",
  },

  {
    slug: "la-12-digital",
    title: "La 12 Digital",
    category: "frontend",
    featured: true,
    role: "Product Designer & Frontend Dev",
    year: "Enero 2026 - Actualidad",
    shortDescription:
      "Hub digital y dashboard en tiempo real para hinchas de Boca Juniors que centraliza partidos, tabla de posiciones, noticias, clima en La Bombonera y minijuegos.",
    heroImage: "/images/projects/la-12-digital.webp",
    tags: [
      { iconType: "figma", text: "Figma" },
      { iconType: "react", text: "React" },
      { iconType: "typescript", text: "TypeScript" },
      { iconType: "tailwind", text: "Tailwind" },
    ],
    detail: {
      problem:
        "Seguir la actualidad de Boca Juniors requería abrir más de 5 aplicaciones distintas: prensa oficial para noticias, X para la conversación en vivo, Promiedos para estadísticas, apps de clima antes de ir al estadio y YouTube para los resúmenes. La información estaba fragmentada y requería demasiado tiempo de consulta.",
      process:
        "Definí los perfiles de usuario y sus Jobs-To-Be-Done, creando el producto bajo la premisa de 'información escaneable en menos de 30 segundos'. Diseñé la interfaz en Figma con un Design System propio en azul y oro cumpliendo accesibilidad WCAG AA. Desarrollé la aplicación en React con TypeScript y Tailwind CSS como un dashboard modular de widgets, integrando Supabase y consumiendo APIs externas protegidas mediante un Cloudflare Worker Proxy.",
      outcome:
        "Aplicación web en producción que reúne en una sola pantalla interactiva todo lo que un hincha necesita en tiempo real. Un proyecto de punta a punta que combina definición de producto, UI accesible, desarrollo frontend robusto y arquitectura de microservicios.",
      images: [],
      impact: [
        "Aplicación en producción que centraliza en una sola pantalla todo lo que un hincha necesita en tiempo real.",
        "Design System propio en azul y oro con accesibilidad WCAG AA.",
        "Arquitectura completa de punta a punta: React + TypeScript, Supabase y APIs externas protegidas mediante un Cloudflare Worker Proxy.",
      ],
    },
    linkLabel: "Visitar La 12 Digital",
    link: "https://la12digital.dev/",
  },

  {
    slug: "test-phishing-hackmetrix",
    title: "Test de Phishing",
    category: "design",
    featured: false,
    role: "UX/UI Designer",
    year: "Octubre 2024 - Diciembre 2024",
    shortDescription:
      "Herramienta interactiva de ciberseguridad que evalúa y capacita a colaboradores de empresas ante simulaciones de ingeniería social.",
    heroImage: "/images/projects/test_phishing.webp",
    tags: [
      { iconType: "figma", text: "Figma" },
      { text: "Diseño B2B" },
      { text: "Prototipado" },
    ],
    detail: {
      problem:
        "Las organizaciones clientes de Hackmetrix registraban una alta vulnerabilidad ante ataques de phishing por falta de concientización y entrenamiento práctico e instructivo para colaboradores no técnicos.",
      process:
        "Diseñé la experiencia de evaluación en Figma priorizando un tono educativo e inclusivo en lugar de uno punitivo. El flujo guía progresivamente al usuario desde la simulación del 'correo trampa' hasta explicaciones visuales de las señales de peligro y buenas prácticas de seguridad.",
      outcome:
        "Producto implementado en producción y utilizado activamente por empresas de múltiples industrias en Latinoamérica para medir y fortalecer su cultura organizacional de ciberseguridad.",
      images: [],
      impact: [
        "Producto en producción utilizado activamente por empresas de múltiples industrias en Latinoamérica.",
        "Tono educativo (no punitivo) validado con usuarios, clave para la adopción en equipos no técnicos.",
        "Pieza activa para medir y fortalecer la cultura de ciberseguridad de los clientes de Hackmetrix.",
      ],
    },
    linkLabel: "Probar la herramienta",
    link: "https://test-phishing.hackmetrix.com/",
  },

  {
    slug: "modulo-legales-hackmetrix",
    title: "Módulo de Legales",
    category: "design",
    featured: false,
    role: "UX Researcher & Product Designer",
    year: "Abril 2024 - Mayo 2024",
    shortDescription:
      "Rediseño de arquitectura de información y UX Research para la gestión y auditoría de documentos legales y cumplimiento normativo B2B.",
    heroImage: "/images/projects/redesign_legales.webp",
    tags: [
      { iconType: "figma", text: "Figma" },
      { text: "UX Research" },
      { text: "Pruebas de usuario" },
      { text: "Diseño SaaS" },
    ],
    detail: {
      problem:
        "El módulo de documentación legal dentro de la plataforma SaaS de Hackmetrix presentaba una elevada tasa de abandono y fricción operativa. Los oficiales de cumplimiento y líderes técnicos requerían asistencia constante para subir y validar evidencias normativas.",
      process:
        "Conduje entrevistas contextuales y sesiones de pruebas de usabilidad con usuarios reales en empresas B2B. Los hallazgos permitieron reestructurar la jerarquía de navegación, simplificar los estados de aprobación documental y diseñar nuevos patrones de interacción claros en Figma.",
      outcome:
        "Caso de estudio publicado en Behance. El rediseño incrementó notablemente la autonomía de los usuarios durante los procesos de auditoría y sirvió como patrón estándar para la evolución del producto.",
      images: [],
      impact: [
        "El rediseño incrementó notablemente la autonomía de los usuarios durante los procesos de auditoría.",
        "Los nuevos patrones de interacción se adoptaron como estándar para la evolución del producto.",
        "Caso de estudio publicado en Behance con la metodología de research documentada.",
      ],
    },
    linkLabel: "Ver caso de estudio",
    link: "https://www.behance.net/gallery/230272939/SaaS-Legal-Module-UX-Research-Product-Discovery",
  },

  {
    slug: "diagnostico-ciberseguridad-hackmetrix",
    title: "Diagnóstico de Seguridad",
    category: "design",
    featured: false,
    role: "Product Designer",
    year: "Junio 2025 - Septiembre 2025",
    shortDescription:
      "Plataforma autoguiada de evaluación de madurez en ciberseguridad que genera reportes de diagnóstico personalizados e instantáneos.",
    heroImage: "/images/projects/diagnostico-ciberseguridad.webp",
    tags: [
      { iconType: "figma", text: "Figma" },
      { text: "Diseño de Producto" },
      { text: "Prototipado" },
    ],
    detail: {
      problem:
        "PyMEs y startups necesitaban conocer el estado de madurez de su seguridad informática de forma autónoma, sin depender de llamadas comerciales o asesorías extensas en una etapa inicial.",
      process:
        "Diseñé en Figma una experiencia de evaluación intuitiva con lógica de ramificación (branching) basada en las respuestas del usuario. El flujo desemboca en la generación automática de un reporte con diagnósticos visuales y recomendaciones accionables según el perfil de cada empresa.",
      outcome:
        "Herramienta desplegada en producción en el ecosistema de Hackmetrix, funcionando como uno de los canales principales de inbound marketing e integración de leads cualificados.",
      images: [],
      impact: [
        "Herramienta desplegada en producción dentro del ecosistema de Hackmetrix.",
        "Uno de los canales principales de inbound marketing y captación de leads cualificados.",
        "Reportes personalizados instantáneos que eliminaron la fricción comercial en la etapa de descubrimiento.",
      ],
    },
    linkLabel: "Hacer el diagnóstico",
    link:
      "https://diagnostico-de-seguridad.hackmetrix.com/?utm_campaign=21824416-Diagn%C3%B3stico&utm_source=banner&utm_content=sitioweb",
  },

  {
    slug: "marki-landing-page",
    title: "Marki Landing Page",
    category: "frontend",
    featured: false,
    role: "Frontend Developer",
    year: "Abril 2026 - Actualidad",
    shortDescription:
      "Landing page de alta conversión desarrollada en Astro para un SaaS que automatiza la creación de calendarios de contenido y marketing para emprendedores.",
    heroImage: "/images/projects/marki-landing-page.webp",
    tags: [
      { iconType: "astro", text: "Astro" },
      { iconType: "tailwind", text: "Tailwind" },
    ],
    detail: {
      problem:
        "Un nuevo SaaS enfocado en simplificar el marketing para emprendedores ('tu amigo CM') requería un sitio web institucional y de conversión rápido, accesible y con un copy claro que convirtiera visitas en solicitudes de demo agendadas.",
      process:
        "Desarrollé la plataforma con Astro 5 y Tailwind CSS aprovechando la generación estática para maximizar la velocidad y el SEO. Estructuré la experiencia en secciones estratégicas (propuesta de valor, comparativa antes/después, funcionamiento en 3 pasos, testimonios, simulador de planes y preguntas frecuentes), cuidando las animaciones y la responsividad.",
      outcome:
        "Landing page en producción desplegada en Vercel con rendimiento de 100/100 en Lighthouse y una experiencia de navegación fluida que refleja fielmente la personalidad cercana de la marca.",
      images: [],
      impact: [
        "Puntaje 100/100 en Lighthouse gracias a la generación estática de Astro.",
        "Landing en producción desplegada en Vercel con navegación fluida fiel a la personalidad de la marca.",
        "Estructura orientada a conversión: simulador de planes, comparativa antes/después y CTAs a demo.",
      ],
    },
    linkLabel: "Visitar la landing",
    link: "https://marki-landing-page.vercel.app/",
  },

  {
    slug: "wollolok",
    title: "Wollolok",
    category: "frontend",
    featured: false,
    role: "Desarrollador",
    year: "Agosto 2024 - Noviembre 2024",
    shortDescription:
      "Videojuego de estrategia en tiempo real desarrollado en Wollok aplicando arquitectura orientada a objetos, polimorfismo y testing automatizado.",
    heroImage: "/images/projects/wollolok.webp",
    tags: [
      { iconType: "unahur", text: "UNAHUR" },
      { iconType: "wollok", text: "Wollok" },
    ],
    hasGif: true,
    gifImage: "/images/projects/gif-wollolok.gif",
    detail: {
      problem:
        "Proyecto integrador de la materia Programación Orientada a Objetos I en la Universidad Nacional de Hurlingham (UNAHUR). El reto consistía en modelar un juego complejo aplicando polimorfismo, herencia y testing automatizado sin motores gráficos prehechos.",
      process:
        "Diseñamos en equipo la lógica de dominio completa con Wollok (entorno pedagógico de POO). Inspirado en Age of Empires II y Clash Royale, estructuramos una economía automatizada de oro, tres tipos de unidades militares con comportamientos propios (monjes que convierten enemigos, arqueros a distancia) y niveles de dificultad.",
      outcome:
        "Juego funcional con repositorio completo en GitHub que cuenta con una suite de pruebas unitarias automatizadas que validan todas las reglas y comportamientos del dominio del software.",
      images: [],
      impact: [
        "Proyecto aprobado modelando un juego complejo con polimorfismo, herencia y delegación, sin motores gráficos prehechos.",
        "Suite de pruebas unitarias automatizadas que validan todas las reglas y comportamientos del dominio.",
        "Tres tipos de unidades con comportamientos propios, economía de oro automatizada y niveles de dificultad.",
      ],
    },
    linkLabel: "Ver repositorio en GitHub",
    link: "https://github.com/obj1-unahur-2024s2/TPGameIntegrador-thecoders",
  },
];

export const categoryLabels = {
  design: "Diseño UX/UI",
  frontend: "Desarrollo Front-End",
};

export const getAllProjects = () => projects;
export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
export const getCategoryLabel = (category) =>
  categoryLabels[category] ?? category;

// Orden de display: destacados primero, luego el resto
export const getProjectsSorted = () => [
  ...projects.filter((p) => p.featured),
  ...projects.filter((p) => !p.featured),
];
