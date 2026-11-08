
/* =========================================================
   LUDOVIC GAYARD — PORTFOLIO
   Fichier central de gestion du contenu
   ========================================================= */


/* =========================
   01 — INFORMATIONS GÉNÉRALES
========================= */

const portfolioContent = {

    identity: {
        firstName: "Ludovic",
        lastName: "GAYARD",
        title: "Producer",
        email: "gayard.ludovic@gmail.com",

        github: "https://github.com/LudoLeBlaireau",
        linkedin: "https://www.linkedin.com/in/ludovic-gayard",

        school: "Brassart",
        education: "Étudiant en deuxième année de Game Design",

        tagline:
            "Faire avancer un projet, c'est permettre à chaque membre de l'équipe d'avancer sereinement dans une direction commune."
    },


    /* =========================
       02 — COMPÉTENCES
    ========================== */

    skills: [

        {
            id: "production",
            title: "Production",
            description:
                "Structurer le travail, organiser les priorités et accompagner l'avancement du projet.",

            items: [
                "Gestion de backlog",
                "Préparation de sprint",
                "Méthodologie Agile",
                "Suivi de production"
            ],

            tools: [
                "Notion",
                "Jira",
                "Figma"
            ]
        },

        {
            id: "communication",
            title: "Communication",
            description:
                "Favoriser la collaboration et assurer la circulation des informations.",

            items: [
                "Coordination d'équipe",
                "Communication inter-pôles",
                "Échanges avec les partenaires",
                "Transmission d'informations"
            ],

            tools: [
                "Discord",
                "Teams",
                "WhatsApp"
            ]
        },

        {
            id: "technique",
            title: "Outils techniques",
            description:
                "Utiliser les outils de développement et de collaboration nécessaires à la production.",

            items: [
                "Suivi de version",
                "Gestion de projet",
                "Environnement Unreal Engine",
                "Collaboration technique"
            ],

            tools: [
                "Unreal Engine",
                "GitHub",
                "Fork"
            ]
        }
    ],


    /* =========================
       03 — PROJETS
    ========================== */

    projects: [

        {
            id: "vorace",

            title: "Vorace",

            subtitle: "Projet collectif",

            category: [
                "team",
                "production"
            ],

            status: "En cours",

            role: [
                "Producer",
                "Coordinateur"
            ],

            description:
                "Un projet de jeu vidéo collectif dans lequel j'interviens sur l'organisation de la production, la coordination de l'équipe et le suivi des tâches.",

            shortDescription:
                "Gestion de production, organisation du backlog et accompagnement de l'équipe.",

            tags: [
                "Production",
                "Coordination",
                "Agile"
            ],

            cover: "assets/images/projects/vorace/cover.jpg",

            thumbnail: "assets/images/projects/vorace/thumbnail.jpg",

            page: "projets/vorace.html",

            contributions: [
                "Gestion et organisation du backlog",
                "Préparation des sprints",
                "Mise en place et suivi de la méthodologie Agile",
                "Accompagnement de l'équipe dans l'avancement du projet"
            ],

            presentation: {
                concept: "À compléter avec le concept de Vorace.",
                context: "À compléter avec le contexte de production.",
                objectives: "À compléter avec les objectifs du projet.",
                team: "Projet collectif — composition de l'équipe à préciser.",
                role: "Producer et coordinateur."
            },

            timeline: [
                {
                    name: "Préproduction",
                    description: "À compléter."
                },
                {
                    name: "Production",
                    description: "À compléter."
                },
                {
                    name: "Finalisation",
                    description: "À compléter."
                }
            ],

            technicalPoints: [
                {
                    title: "Organisation du backlog",
                    description:
                        "À compléter avec ton travail sur la structuration et le suivi des tâches.",
                    image: "assets/images/projects/vorace/backlog.jpg",
                    mediaType: "image"
                },
                {
                    title: "Préparation des sprints",
                    description:
                        "À compléter avec ta méthode de préparation et de suivi des sprints.",
                    image: "assets/images/projects/vorace/sprint.jpg",
                    mediaType: "image"
                }
            ],

            postMortem: {
                positive: "À compléter avec les points positifs du projet.",
                negative: "À compléter avec les difficultés rencontrées.",
                feeling: "À compléter avec ton ressenti personnel.",
                lessons: "À compléter avec tes apprentissages.",
                improvements: "À compléter avec les pistes d'amélioration."
            }
        },


        {
            id: "pouss-plouf",

            title: "Pouss'Plouf!",

            subtitle: "Projet collectif",

            category: [
                "team",
                "production"
            ],

            status: "Projet scolaire",

            role: [
                "Producer",
                "Coordinateur"
            ],

            description:
                "Un jeu multijoueur mettant en scène des animaux arctiques sur une plateforme de glace, où les équipes doivent composer avec les dangers de l'environnement.",

            shortDescription:
                "Coordination de production et échanges avec les partenaires de la mairie.",

            tags: [
                "Production",
                "Coordination",
                "Communication"
            ],

            cover: "assets/images/projects/pouss-plouf/cover.jpg",

            thumbnail: "assets/images/projects/pouss-plouf/thumbnail.jpg",

            page: "projets/pouss-plouf.html",

            contributions: [
                "Gestion et organisation du backlog",
                "Préparation des sprints",
                "Mise en place et suivi de la méthodologie Agile",
                "Coordination avec les interlocuteurs de la mairie",
                "Suivi des besoins liés à la présentation du projet"
            ],

            presentation: {
                concept:
                    "Pouss'Plouf! est un jeu multijoueur dans lequel quatre joueurs incarnent des animaux arctiques évoluant sur une plateforme de glace soumise à différents dangers.",

                context:
                    "Projet scolaire réalisé en équipe dans le cadre de la formation Game Design.",

                objectives:
                    "Développer une expérience multijoueur accessible et dynamique, tout en assurant le suivi de la production et la coordination des différents intervenants.",

                team: "Projet collectif — composition de l'équipe à préciser.",

                role: "Producer et coordinateur, notamment dans les échanges avec les interlocuteurs de la mairie."
            },

            timeline: [
                {
                    name: "Préproduction",
                    description: "À compléter avec les premières étapes du projet."
                },
                {
                    name: "Production",
                    description: "À compléter avec le développement et le suivi de l'équipe."
                },
                {
                    name: "Présentation",
                    description: "À compléter avec les étapes de préparation et de présentation du jeu."
                }
            ],

            technicalPoints: [
                {
                    title: "Gestion du backlog",
                    description:
                        "Organisation des tâches et suivi de leur avancement afin de donner une vision claire du travail à réaliser.",
                    image: "assets/images/projects/pouss-plouf/backlog.jpg",
                    mediaType: "image"
                },
                {
                    title: "Coordination avec la mairie",
                    description:
                        "Suivi des échanges avec les interlocuteurs de la mairie et préparation des éléments nécessaires à la présentation du projet.",
                    image: "assets/images/projects/pouss-plouf/mairie.jpg",
                    mediaType: "image"
                },
                {
                    title: "Préparation des présentations",
                    description:
                        "À compléter avec les documents, les tests et les étapes de préparation de l'événement.",
                    image: "assets/images/projects/pouss-plouf/presentation.jpg",
                    mediaType: "image"
                }
            ],

            postMortem: {
                positive: "À compléter avec les réussites du projet.",
                negative: "À compléter avec les difficultés rencontrées.",
                feeling: "À compléter avec ton ressenti personnel.",
                lessons: "À compléter avec tes apprentissages en production.",
                improvements: "À compléter avec les pistes d'amélioration."
            }
        },


        {
            id: "snow-fall",

            title: "Snow Fall",

            subtitle: "Projet individuel",

            category: [
                "solo"
            ],

            status: "Projet individuel",

            role: [
                "Producer",
                "Game Designer",
                "Développeur",
                "Narrative Designer"
            ],

            description:
                "Un projet individuel dans lequel j'ai pris en charge les différentes étapes de conception et de réalisation d'un jeu vidéo.",

            shortDescription:
                "Un projet solo mêlant production, développement, game design et narration.",

            tags: [
                "Projet solo",
                "Game Design",
                "Développement"
            ],

            cover: "assets/images/projects/snow-fall/cover.jpg",

            thumbnail: "assets/images/projects/snow-fall/thumbnail.jpg",

            page: "projets/snow-fall.html",

            contributions: [
                "Organisation et suivi de la production",
                "Conception des mécaniques de jeu",
                "Développement du jeu",
                "Conception narrative"
            ],

            presentation: {
                concept: "À compléter avec le concept de Snow Fall.",
                context: "Projet individuel.",
                objectives: "À compléter avec les objectifs du projet.",
                team: "Projet réalisé en autonomie.",
                role: "Production, Game Design, développement et Narrative Design."
            },

            timeline: [
                {
                    name: "Préproduction",
                    description: "À compléter."
                },
                {
                    name: "Production",
                    description: "À compléter."
                },
                {
                    name: "Finalisation",
                    description: "À compléter."
                }
            ],

            technicalPoints: [
                {
                    title: "Game Design",
                    description:
                        "À compléter avec les mécaniques et systèmes imaginés.",
                    image: "assets/images/projects/snow-fall/gamedesign.jpg",
                    mediaType: "image"
                },
                {
                    title: "Développement",
                    description:
                        "À compléter avec les aspects techniques et les difficultés rencontrées.",
                    image: "assets/images/projects/snow-fall/developpement.jpg",
                    mediaType: "image"
                },
                {
                    title: "Narrative Design",
                    description:
                        "À compléter avec la construction de l'univers et de la narration.",
                    image: "assets/images/projects/snow-fall/narrative.jpg",
                    mediaType: "image"
                }
            ],

            postMortem: {
                positive: "À compléter avec les réussites du projet.",
                negative: "À compléter avec les difficultés rencontrées.",
                feeling: "À compléter avec ton ressenti personnel.",
                lessons: "À compléter avec tes apprentissages.",
                improvements: "À compléter avec les pistes d'amélioration."
            }
        }

    ]

};


/* =========================
   04 — EXPORT GLOBAL
========================= */

// Permet aux autres scripts d'accéder au contenu.
window.portfolioContent = portfolioContent;
