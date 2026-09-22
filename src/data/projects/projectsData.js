const projects = [
    {
        id: "streamflix",
        slug: "streamflix",
        title: "StreamFlix",
        category: "Streaming Platform",

        description:
            "A live full-stack streaming platform under active development, combining a responsive media interface with a Node.js backend, MongoDB data layer, and asynchronous job infrastructure.",

        status: "Live · In Active Development",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vite",
            "Node.js",
            "Express",
            "MongoDB",
        ],

        featured: true,

        image: "/assets/images/projects/streamflix/preview.png",

        links: {
            live: "https://streamflix-sand.vercel.app/",
            source: "https://github.com/JTech-del/StreamFlix",
        },

        caseStudy: {
            overview:
                "StreamFlix is a live full-stack entertainment platform currently under active development. The project combines a Vite-based frontend with a separate Node.js and Express backend, with MongoDB and RabbitMQ forming part of the backend foundation.",

            problem: null,

            solution:
                "The application is being developed as a structured streaming-platform product rather than a static movie interface. The frontend and backend are separated into distinct application areas, while external movie data is integrated alongside StreamFlix-owned application data.",

            features: [
                "Responsive streaming-platform interface",
                "Movie discovery and presentation",
                "Interactive media rails and navigation",
                "Movie-focused viewing experience",
                "Backend-powered application flow",
            ],

            architecture: [
                "Vite-based frontend application",
                "Separate Node.js and Express backend",
                "MongoDB data layer through Mongoose",
                "RabbitMQ integration for asynchronous processing",
                "TMDB integration for external movie metadata",
                "Environment-based configuration",
                "Separate frontend and backend application structure",
            ],

            challenges: [
                {
                    title: "Managing external and application-owned data",
                    description:
                        "StreamFlix integrates movie metadata from TMDB while also maintaining application-owned movie data. A key architectural concern was preventing synchronization with external metadata from unintentionally overwriting data that belongs to StreamFlix.",

                    approach:
                        "StreamFlix separates application-owned fields from external TMDB metadata. For example, StreamFlix maintains its own movie genres while TMDB genre information is stored as external metadata. This establishes clear ownership boundaries between the application and its external data source.",
                },

                {
                    title: "Designing reliable background processing",
                    description:
                        "As StreamFlix expanded beyond a simple frontend application, some backend operations needed a way to run independently from the user's request-response cycle. This introduced the need for a dedicated asynchronous processing layer.",

                    approach:
                        "RabbitMQ was introduced as part of the backend architecture to support asynchronous job processing. The project is being developed toward a more durable job model where work can be acknowledged, retried, and recovered independently from the original HTTP request.",
                },
            ],

            lessons: [
                "External APIs should not automatically become the source of truth for application-owned data. Clear ownership boundaries make synchronization safer and easier to reason about.",

                "As an application grows, separating user-facing request handling from background processing can create a more reliable architecture and provide room for retries, recovery, and future scaling.",

                "A project can evolve from a frontend-focused interface into a full-stack system without requiring the entire architecture to be designed upfront. StreamFlix is being developed incrementally, with architectural decisions introduced as real requirements emerge.",
            ],

            development: {
                currentState:
                    "A working version of StreamFlix is publicly deployed and available to explore. The current application represents an active stage of development rather than the final production architecture.",

                inProgress: [
                    "Continued backend and data-layer development",
                    "Improving asynchronous job processing and reliability",
                    "Strengthening synchronization and reconciliation workflows",
                    "Expanding the platform toward a more production-ready architecture",
                ],

                futureDirection: [
                    "More durable background job infrastructure",
                    "Improved caching and performance infrastructure",
                    "Expanded media delivery architecture",
                    "Authentication and role-based access control",
                    "Production observability and operational tooling",
                    "CI/CD and automated testing improvements",
                ],
            },

            media: {
                hero: "/assets/images/projects/streamflix/preview.png",
                gallery: [],
            },
        },
    },

    {
        id: "chops",
        slug: "chops",
        title: "Chops",
        category: "Restaurant Ordering Platform",

        description:
            "A polished restaurant ordering experience designed as a modern business demo, focused on food discovery, responsive interaction, and a complete frontend ordering flow.",

        status: "Live · Business Demo",

        technologies: [
            "React",
            "Vite",
            "JavaScript",
            "CSS",
        ],

        featured: true,

        image: "/assets/images/projects/chops/preview.png",

        links: {
            live: "https://chops-sepia.vercel.app/",
            source: "https://github.com/JTech-del/chops",
        },

        caseStudy: {
            overview:
                "Chops is a live restaurant ordering business demo designed to explore a modern food-discovery and ordering experience across desktop and mobile.",

            problem: null,

            solution:
                "The interface is structured around food discovery, category browsing, product details, cart interaction, checkout, and a responsive mobile experience.",

            features: [
                "Responsive restaurant interface",
                "Food category browsing",
                "Food detail presentation",
                "Shopping cart flow",
                "Checkout experience",
                "Responsive mobile navigation",
            ],

            architecture: [
                "React frontend",
                "Vite development and build tooling",
                "Reusable component-based interface",
                "Responsive CSS architecture",
                "Client-side ordering flow",
            ],

            challenges: [],

            lessons: [
                "A restaurant ordering interface needs to keep discovery, product information, cart interaction, and checkout visually connected.",

                "Responsive behavior needs to be considered as part of the ordering experience rather than treated as a separate mobile version.",
            ],

            development: {
                currentState:
                    "A working version of the restaurant business demo is publicly deployed and available to explore.",

                inProgress: [],

                futureDirection: [
                    "Backend integration",
                    "Persistent orders and customer data",
                    "Production payment integration",
                    "Restaurant administration workflows",
                ],
            },

            media: {
                hero: "/assets/images/projects/chops/preview.png",
                gallery: [],
            },
        },
    },

    {
        id: "real-estate-business-demo",
        slug: "real-estate-business-demo",
        title: "Real Estate Business Demo",
        category: "Real Estate Platform",

        description:
            "A polished real-estate business website focused on property discovery, detailed property presentation, responsive layouts, and a modern premium visual experience.",

        status: "Live · Business Demo",

        technologies: [
            "React",
            "Vite",
            "JavaScript",
            "React Router",
            "CSS",
        ],

        featured: true,

        image: "/assets/images/projects/real-estate-business-demo/preview.png",

        links: {
            live: "https://real-estate-buisness-demo.vercel.app/",
            source: "https://github.com/JTech-del/Real-Estate-Buisness-Demo",
        },

        caseStudy: {
            overview:
                "A polished real-estate business demo focused on property discovery, detailed property presentation, responsive layouts, and a premium visual experience.",

            problem: null,

            solution:
                "The experience is organized around property discovery and detailed property presentation, using dedicated routes for properties and property details with responsive layouts throughout.",

            features: [
                "Property discovery",
                "Property detail pages",
                "Slug-based property URLs",
                "Responsive property galleries",
                "Property information presentation",
                "Responsive navigation",
            ],

            architecture: [
                "React frontend",
                "Vite development and build tooling",
                "React Router for application routes",
                "Reusable component-based interface",
                "Structured property data",
                "Responsive CSS architecture",
            ],

            challenges: [],

            lessons: [
                "Property websites need strong visual hierarchy because users evaluate imagery and information together.",

                "Slug-based property URLs create a cleaner structure for individual property pages.",

                "Responsive gallery and information layouts are essential when property presentation depends heavily on visual content.",
            ],

            development: {
                currentState:
                    "A working real-estate business demo is publicly deployed and available to explore.",

                inProgress: [],

                futureDirection: [
                    "Backend property management",
                    "Persistent property data",
                    "Lead and inquiry management",
                    "CMS or administrative workflows",
                ],
            },

            media: {
                hero: "/assets/images/projects/real-estate-business-demo/preview.png",
                gallery: [],
            },
        },
    },

    {
        id: "e-max",
        slug: "e-max",
        title: "E-max",
        category: "E-commerce Platform",

        description:
            "An ongoing full-stack e-commerce platform being developed around product discovery, shopping flows, responsive UI, and a scalable backend architecture.",

        status: "In Active Development",

        technologies: [
            "React",
            "Vite",
            "JavaScript",
            "Node.js",
            "Express",
            "MongoDB",
        ],

        featured: true,

    image: "/assets/images/projects/e-max/e-max.jpg",

        links: {
            live: null,
            source: null,
        },

        caseStudy: {
            overview:
                "E-max is an ongoing full-stack e-commerce platform being developed around product discovery, shopping flows, responsive interfaces, and a Node.js, Express, and MongoDB backend.",

            problem: null,

            solution:
                "The project is being structured as a complete e-commerce application, with a React and Vite frontend separated from a Node.js and Express backend connected to MongoDB.",

            features: [
                "Responsive e-commerce interface",
                "Product discovery experience",
                "Shopping-focused user flows",
                "Structured frontend application",
                "Backend API foundation",
            ],

            architecture: [
                "React frontend",
                "Vite development and build tooling",
                "JavaScript application layer",
                "Separate Node.js and Express backend",
                "MongoDB data layer through Mongoose",
                "Environment-based configuration",
                "Frontend and backend separation",
            ],

            challenges: [
                {
                    title: "Structuring the application for full-stack development",
                    description:
                        "E-max is being developed beyond a frontend-only shopping interface, requiring a clear separation between the user-facing application and backend services.",

                    approach:
                        "The project uses a React/Vite frontend alongside a separate Node.js and Express backend. This structure allows the frontend experience and backend data layer to evolve independently while remaining connected through an API.",
                },

                {
                    title: "Preparing the data layer for future growth",
                    description:
                        "An e-commerce application needs a reliable data foundation for products, customers, orders, and other business entities as development progresses.",

                    approach:
                        "MongoDB is being used as the database layer with Mongoose providing the application data-modeling layer. The backend structure is being developed incrementally so additional e-commerce capabilities can be introduced without restructuring the entire application.",
                },
            ],

            lessons: [
                "A full-stack e-commerce application benefits from clear separation between the frontend experience, backend services, and data layer.",

                "Building the architecture incrementally allows real requirements to guide technical decisions instead of introducing unnecessary complexity too early.",

                "A polished shopping interface needs to be supported by a backend structure capable of handling real application data as the project develops.",
            ],

            development: {
                currentState:
                    "E-max is currently in active development. The project is not publicly deployed yet, but its frontend and backend foundations are being developed as a full-stack e-commerce application.",

                inProgress: [
                    "Continued frontend shopping experience development",
                    "Backend API and data-layer development",
                    "Connecting product and shopping flows",
                    "Expanding the application toward a complete e-commerce experience",
                ],

                futureDirection: [
                    "Public deployment",
                    "Authentication and user accounts",
                    "Persistent shopping and order management",
                    "Production payment integration",
                    "Administrative e-commerce workflows",
                    "Production observability and security improvements",
                ],
            },

            media: {
                hero: "/assets/images/projects/e-max/e-max.jpg",
                gallery: [],
            },
        },
    },
];

export { projects };
