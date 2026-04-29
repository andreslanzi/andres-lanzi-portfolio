export type Localized<T = string> = { en: T; es: T };

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  name: string;
  role: Localized;
  status?: 'in-progress';
  image: string;
  imageFit?: 'cover' | 'contain';
  tagline: Localized;
  description: Localized;
  bullets: Localized<string[]>;
  stack: string[];
  links: { demo: string | null; repo: string | null };
};

export type Experience = {
  company: string;
  role: Localized;
  period: Localized;
  mode: Localized;
  summary: Localized;
  bullets: Localized<string[]>;
};

export const profile = {
  name: 'Andres Lanzi',
  initials: 'AL',
  role: {
    en: 'Software Engineer',
    es: 'Software Engineer',
  },
  focus: {
    en: 'Frontend focus',
    es: 'Foco en Frontend',
  },
  location: 'Buenos Aires, Argentina',
  email: 'aandreslanzi@gmail.com',
  github: 'https://github.com/andreslanzi',
  linkedin: 'https://linkedin.com/in/andreslanzi',
  bio: {
    en: "Frontend-focused Software Engineer with 5+ years of experience building scalable, high-performance web applications using React, TypeScript, and modern frontend architectures. Strong product mindset: I don't just build features — I identify user pain points, propose solutions, and drive them from idea to production. Experienced working in cross-functional teams, owning features end-to-end, and delivering measurable improvements in performance, usability, and developer experience.",
    es: "Software Engineer enfocado en frontend con 5+ años de experiencia construyendo aplicaciones web escalables y de alto rendimiento usando React, TypeScript y arquitecturas modernas. Fuerte mentalidad de producto: no solo construyo features — identifico puntos de dolor del usuario, propongo soluciones, y las llevo de idea a producción. Experiencia trabajando en equipos cross-funcionales, siendo dueño de features end-to-end, y entregando mejoras medibles en performance, usabilidad y developer experience.",
  },
};

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'TanStack Query'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Dev & Tools',
    items: ['Git', 'Docker', 'Vercel', 'Render', 'Sentry', 'Datadog', 'Storybook'],
  },
  {
    category: 'Other',
    items: ['UI/UX Design', 'Performance Optimization', 'Product Thinking', 'A/B Testing'],
  },
];

export const projects: Project[] = [
  {
    name: 'StrafeLab',
    role: { en: 'Owner', es: 'Owner' },
    status: 'in-progress',
    image: '/projects/strafelab.png',
    tagline: {
      en: 'Competitive Gaming Platform (CS2)',
      es: 'Plataforma competitiva de gaming (CS2)',
    },
    description: {
      en: 'Building a competitive platform for structured matchmaking and live draft-based tournaments.',
      es: 'Construyendo una plataforma competitiva para matchmaking estructurado y torneos en vivo basados en draft.',
    },
    bullets: {
      en: [
        'Designing and implementing ELO-based skill balancing systems for fair matchmaking',
        'Developing real-time draft flows for team creation and match organization',
        'Architecting systems for matches, teams, and tournament lifecycle management',
        'Solving trust, fairness, and automation challenges in competitive gaming ecosystems',
        'Defining product strategy, UX flows, and technical architecture end-to-end',
      ],
      es: [
        'Diseñando e implementando sistemas de balance de skill basados en ELO para matchmaking justo',
        'Desarrollando flujos de draft en tiempo real para creación de equipos y organización de partidas',
        'Arquitectando sistemas para gestión de partidas, equipos y ciclo de vida de torneos',
        'Resolviendo desafíos de confianza, fairness y automatización en ecosistemas competitivos',
        'Definiendo estrategia de producto, flujos de UX y arquitectura técnica end-to-end',
      ],
    },
    stack: ['React', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'Socket.io'],
    links: { demo: 'https://www.strafe-lab.com/', repo: null },
  },
  {
    name: 'Lutely',
    role: { en: 'Frontend Engineer', es: 'Frontend Engineer' },
    image: '/projects/lutely.png',
    tagline: {
      en: 'Music Marketplace for Creators',
      es: 'Marketplace de música para creadores',
    },
    description: {
      en: 'Built a marketplace platform for music creators to upload, showcase, and sell their content.',
      es: 'Construí una plataforma marketplace para que creadores musicales suban, muestren y vendan su contenido.',
    },
    bullets: {
      en: [
        'Developed dynamic artist profiles with real-time theming based on uploaded assets',
        'Implemented track discovery, filtering, and search experiences',
        'Designed scalable frontend architecture using React + TypeScript + Vite',
        'Integrated backend services with Prisma and PostgreSQL for data management',
        'Focused on UX, performance, and visual identity to improve creator presentation',
      ],
      es: [
        'Desarrollé perfiles de artista dinámicos con theming en tiempo real basado en assets subidos',
        'Implementé experiencias de descubrimiento, filtrado y búsqueda de tracks',
        'Diseñé una arquitectura frontend escalable usando React + TypeScript + Vite',
        'Integré servicios backend con Prisma y PostgreSQL para gestión de datos',
        'Foco en UX, performance e identidad visual para mejorar la presentación del creador',
      ],
    },
    stack: ['React', 'TypeScript', 'Vite', 'Prisma', 'PostgreSQL'],
    links: { demo: 'https://lutely.com/', repo: null },
  },
  {
    name: 'Meticulate',
    role: { en: 'Frontend Engineer', es: 'Frontend Engineer' },
    image: '/projects/meticulate.png',
    tagline: {
      en: 'AI-powered Research Platform',
      es: 'Plataforma de research potenciada por IA',
    },
    description: {
      en: 'Contributed to a platform that automates deep market and company research using AI agents.',
      es: 'Contribuí a una plataforma que automatiza research profundo de mercados y empresas usando agentes de IA.',
    },
    bullets: {
      en: [
        'Built frontend features for AI-driven research workflows and report generation',
        'Implemented complex data visualizations and structured outputs from agent runs',
        'Designed reusable UI patterns for long-running async tasks and streamed responses',
        'Collaborated closely with product to ship features end-to-end with quick iteration cycles',
      ],
      es: [
        'Construí features frontend para workflows de research con IA y generación de reportes',
        'Implementé visualizaciones de datos complejas y outputs estructurados de las corridas de agentes',
        'Diseñé patrones de UI reutilizables para tareas async de larga duración y respuestas streameadas',
        'Colaboré con producto para entregar features end-to-end con ciclos de iteración cortos',
      ],
    },
    stack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    links: { demo: 'https://meticulate.ai/', repo: null },
  },
  {
    name: 'Platform Finder AR',
    role: { en: 'Owner', es: 'Owner' },
    image: '/projects/platform-finder.png',
    imageFit: 'contain',
    tagline: {
      en: 'Streaming Availability for Argentina',
      es: 'Disponibilidad de streaming en Argentina',
    },
    description: {
      en: 'A web app that tells you which streaming services available in Argentina (Netflix, Prime Video, Disney+, HBO Max, etc.) carry a specific movie or TV show — so you stop hopping between apps to find what to watch.',
      es: 'Una webapp que te dice en qué servicios de streaming disponibles en Argentina (Netflix, Prime Video, Disney+, HBO Max, etc.) podés ver una película o serie — para dejar de saltar entre apps buscando dónde mirar.',
    },
    bullets: {
      en: [
        'Built a search-driven UI to query titles and surface live streaming providers for the AR region',
        'Integrated the Streaming Availability API (RapidAPI) with Axios and typed all responses end-to-end with TypeScript',
        'Designed a responsive interface with Tailwind CSS, lazy-loaded posters, and loading states for slow networks',
        'Owned the project end-to-end — idea, UX, implementation and deploy on Netlify',
      ],
      es: [
        'Construí una UI con búsqueda para consultar títulos y mostrar los servicios de streaming disponibles en AR en tiempo real',
        'Integré la Streaming Availability API (RapidAPI) con Axios y tipé todas las responses end-to-end con TypeScript',
        'Diseñé una interfaz responsive con Tailwind CSS, posters con lazy-load y loading states para conexiones lentas',
        'Owner del proyecto end-to-end — idea, UX, implementación y deploy en Netlify',
      ],
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Axios', 'Netlify'],
    links: { demo: 'https://platform-finder.netlify.app/', repo: null },
  },
];

export const experience: Experience[] = [
  {
    company: 'Xometry',
    role: { en: 'Software Engineer', es: 'Software Engineer' },
    period: { en: 'March 2022 — March 2026', es: 'Marzo 2022 — Marzo 2026' },
    mode: { en: 'Remote', es: 'Remoto' },
    summary: {
      en: 'Led the development of scalable, high-impact frontend features using React and TypeScript, improving core marketplace workflows and reducing friction across key user experiences.',
      es: 'Lideré el desarrollo de features frontend escalables y de alto impacto usando React y TypeScript, mejorando workflows core del marketplace y reduciendo fricción en experiencias clave.',
    },
    bullets: {
      en: [
        'Built and maintained reusable component systems, accelerating feature delivery and ensuring UI consistency at scale',
        'Improved application performance through code-splitting, memoization, and optimized data-fetching (React Query), reducing load times by ~30%',
        'Collaborated cross-functionally with product and design to define requirements, shape solutions, and deliver features end-to-end',
        'Translated client and business needs into technical solutions, directly impacting product decisions and user experience',
        'Contributed to code quality through peer reviews and by enforcing best practices in architecture, scalability, and maintainability',
        'Improved developer experience by refining component architecture and reducing complexity across the codebase',
      ],
      es: [
        'Construí y mantuve sistemas de componentes reutilizables, acelerando la entrega de features y asegurando consistencia de UI a escala',
        'Mejoré la performance de la aplicación mediante code-splitting, memoization y data-fetching optimizado (React Query), reduciendo tiempos de carga ~30%',
        'Colaboré cross-funcional con producto y diseño para definir requirements, dar forma a soluciones y entregar features end-to-end',
        'Traduje necesidades de cliente y negocio en soluciones técnicas, impactando directamente decisiones de producto y experiencia de usuario',
        'Contribuí a la calidad del código a través de peer reviews y aplicando best practices de arquitectura, escalabilidad y mantenibilidad',
        'Mejoré el developer experience refinando la arquitectura de componentes y reduciendo complejidad del codebase',
      ],
    },
  },
  {
    company: 'W3 IT Solutions',
    role: { en: 'Full-stack Developer', es: 'Full-stack Developer' },
    period: { en: 'June 2021 — March 2022', es: 'Junio 2021 — Marzo 2022' },
    mode: { en: 'On-site', es: 'Presencial' },
    summary: {
      en: 'Delivered full-stack features across multiple client projects using React and Node.js, owning development from requirements to deployment.',
      es: 'Entregué features full-stack en múltiples proyectos de cliente usando React y Node.js, siendo dueño del desarrollo desde requirements hasta deployment.',
    },
    bullets: {
      en: [
        'Worked directly with clients to define requirements and translate business needs into technical solutions',
        'Built and shipped end-to-end features, ensuring performance, scalability, and maintainability',
        'Improved UI/UX by identifying pain points and implementing interface enhancements',
        'Participated in code reviews and contributed to improving team development standards',
      ],
      es: [
        'Trabajé directamente con clientes para definir requirements y traducir necesidades de negocio en soluciones técnicas',
        'Construí y entregué features end-to-end, asegurando performance, escalabilidad y mantenibilidad',
        'Mejoré UI/UX identificando puntos de dolor e implementando mejoras de interfaz',
        'Participé en code reviews y contribuí a mejorar los estándares de desarrollo del equipo',
      ],
    },
  },
  {
    company: 'UMA Health AI',
    role: { en: 'Frontend Developer', es: 'Frontend Developer' },
    period: { en: 'January 2021 — June 2021', es: 'Enero 2021 — Junio 2021' },
    mode: { en: 'On-site', es: 'Presencial' },
    summary: {
      en: 'Contributed to the development of healthcare-focused web applications with an emphasis on usability and clean UI.',
      es: 'Contribuí al desarrollo de aplicaciones web orientadas al sector salud, con énfasis en usabilidad y UI limpia.',
    },
    bullets: {
      en: [
        'Built frontend features using React, focusing on clarity, accessibility, and user experience',
        'Collaborated with designers and senior engineers to translate product requirements into functional interfaces',
        'Participated in testing and release processes, gaining experience with modern frontend workflows',
      ],
      es: [
        'Construí features frontend usando React, enfocándome en claridad, accesibilidad y experiencia de usuario',
        'Colaboré con diseñadores e ingenieros senior para traducir requirements de producto en interfaces funcionales',
        'Participé en procesos de testing y release, ganando experiencia con workflows modernos de frontend',
      ],
    },
  },
];

export const values: Array<{ title: Localized; iconKey: 'sparkles' | 'gauge' | 'rocket' | 'zap' }> = [
  {
    iconKey: 'sparkles',
    title: { en: 'Clean, intuitive UX', es: 'UX limpia e intuitiva' },
  },
  {
    iconKey: 'gauge',
    title: { en: 'Performance as a feature', es: 'Performance como feature' },
  },
  {
    iconKey: 'rocket',
    title: { en: 'Building real products, not just features', es: 'Construir productos reales, no solo features' },
  },
  {
    iconKey: 'zap',
    title: { en: 'Shipping fast, iterating faster', es: 'Shippear rápido, iterar más rápido' },
  },
];
