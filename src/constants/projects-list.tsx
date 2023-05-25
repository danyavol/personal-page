import { ReactImageGalleryItem } from "react-image-gallery";

export interface Project {
    title: string;
    description: string;
    links?: Link[];
    tags: string[];
    previewImg: string;
    images: (string | ReactImageGalleryItem)[];
}

export interface Link {
    url: string;
    label: string;
    icon?: string;
}

export const projects: {[category: string]: Project[]} = {
    top: [
        { 
            title: 'Bot "Study Buddy"',
            description: "Telegram bot whose mission was to make life easier for students. More than 1800 people have used it.",
            tags: ["JavaScript", "Node.js", "telegraf", "MongoDB", "HTML Parsing", "Heroku"],
            links: [
                { url: "https://t.me/mitsoStudentBot", label: "Telegram Bot" },
            ],
            previewImg: "/images/projects/study-buddy-bot/preview.png",
            images: [
                '/images/projects/study-buddy-bot/preview.png',
                {
                    original: "",
                    renderItem: () => {
                        return (
                            <video className="image-gallery-image" controls muted>
                                <source src="/images/projects/study-buddy-bot/demo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        );
                    }
                },
                '/images/projects/study-buddy-bot/screenshot1.png',
            ]
        },
        { 
            title: 'Web App "Study Buddy"',
            description: 'Web version of the "Study Buddy" bot. Also it has admin page to control the application and view statistics.',
            tags: ["Angular 12", "Angular Material", "ApexCharts", "Node.js", "TypeScript", "Express", "JWT", "MongoDB", "Netlify", "Heroku", "Responsive Design"],
            links: [
                { url: "https://github.com/danyavol/mitso-schedule-web", label: "Source Code" },
                { url: "https://mitso.netlify.app", label: "App" },
            ],
            previewImg: "/images/projects/study-buddy-web/preview.png",
            images: [
                "/images/projects/study-buddy-web/preview.png",
                "/images/projects/study-buddy-web/screenshot1.png",
                "/images/projects/study-buddy-web/screenshot2.png",
                "/images/projects/study-buddy-web/screenshot3.png",
                "/images/projects/study-buddy-web/screenshot4.png",
                "/images/projects/study-buddy-web/screenshot5.png",
                "/images/projects/study-buddy-web/screenshot6.png",
                "/images/projects/study-buddy-web/screenshot7.png",
                "/images/projects/study-buddy-web/screenshot8.png",
                "/images/projects/study-buddy-web/screenshot9.png",
            ]
        },
        { 
            title: "Money Splitter",
            description: "Mobile app which helps to split expenses between group of people. Published to Google Play.",
            tags: ["Angular 15", "Angular Material", "Ionic", "Capacitor", "IOS/Android app", "Google Play Console"],
            links: [
                { url: "https://github.com/danyavol/money-splitter", label: "Source Code" },
                { url: "https://play.google.com/store/apps/details?id=danyavol.moneysplitter", label: "Google Play" },
            ],
            previewImg: "/images/projects/money-splitter/preview.png",
            images: [
                "/images/projects/money-splitter/preview.png",
            ]
        },
    ],
    webApps: [
        { 
            title: "Equipment Service",
            description: "A complete application for creating and managing equipment repair requests.",
            tags: ["Angular 14", "Taiga UI", "Node.js", "Express", "Typescript", "JWT", "PostgreSQL", "Docker"],
            links: [
                { url: "https://github.com/danyavol/equipment-service-system", label: "Source Code" },
            ],
            previewImg: "/images/projects/equipment-service/preview.png",
            images: [
                "/images/projects/equipment-service/preview.png"
            ]
        },
        { 
            title: 'Web Messenger "Жывеграм"',
            description: "A complete web-messenger with many features. Unfortunately without WebSockets :(",
            tags: ["Vue.js", "Bootstrap", "Java", "Spring Boot", "MongoDB", "Color Themes"],
            links: [
                { url: "https://github.com/danyavol/web-chat-server", label: "Source Code" },
            ],
            previewImg: "/images/projects/web-chat/preview.png",
            images: [
                "/images/projects/web-chat/preview.png"
            ]
        },
        { 
            title: "Cozy Groups",
            description: "Clone of the Google Classroom. 3 people developed this app. I was the Lead and wrote the Backend part.",
            tags: ["React", "Semantic UI", "ApexCharts", "Node.js", "Express", "MongoDB", "Netlify", "Heroku"],
            links: [
                { url: "https://github.com/danyavol/cozy-groups", label: "Source Code" },
            ],
            previewImg: "/images/projects/cozy-groups/preview.png",
            images: [
                "/images/projects/cozy-groups/preview.png"
            ]
        },
        { 
            title: "Job Search App",
            description: "App for generating a CV in PDF format and job search in Belarus.",
            tags: ["Vue.js", "Bulma (CSS Framework)", "Node.js", "Express", "HTML Parsing", "HTML to PDF"],
            links: [
                { url: "https://github.com/danyavol/job-search-app", label: "Source Code" },
            ],
            previewImg: "/images/projects/job-search-app/preview.png",
            images: [
                "/images/projects/job-search-app/preview.png"
            ]
        },
        { 
            title: "Pizza App",
            description: "Standard pizza site with basket and authorization. Without Backend part.",
            tags: ["React", "Bootstrap", "Webpack"],
            links: [
                { url: "https://github.com/danyavol/react-pizza", label: "Source Code" },
            ],
            previewImg: "/images/projects/pizza-app/preview.png",
            images: [
                "/images/projects/pizza-app/preview.png"
            ]
        },
    ],
    webGames: [
        { 
            title: "2D Platformer",
            description: "My own engine to run 2D games in browser. Automatic camera follow, physics, collision, animations, map config, etc.",
            tags: ["TypeScript", "webpack", "Canvas API", "No libraries"],
            links: [
                { url: "https://github.com/danyavol/2d-platformer", label: "Source Code" },
                { url: "https://2d-platformer.danyavol.dev", label: "Try it!" },
            ],
            previewImg: "/images/projects/2d-platformer/preview.png",
            images: [
                "/images/projects/2d-platformer/preview.png"
            ]
        },
        { 
            title: "Tetris",
            description: "Tetris game with classic rules. But it's me falling inside the blocks :D",
            tags: ["Vanilla JavaScript", "OOP", "Responsive Design"],
            links: [
                { url: "https://github.com/danyavol/tetris", label: "Source Code" },
                { url: "https://tetris.danyavol.dev", label: "Play it!" },
            ],
            previewImg: "/images/projects/tetris/preview.png",
            images: [
                "/images/projects/tetris/preview.png"
            ]
        },
        { 
            title: "Sea Battle",
            description: "Sea battle game. You can play against the other player or computer. There are games statistics.",
            tags: ["Vanilla JavaScript", "Responsive Design"],
            links: [
                { url: "https://github.com/danyavol/sea-battle", label: "Source Code" },
                { url: "https://sea-battle.danyavol.dev", label: "Play it!" },
            ],
            previewImg: "/images/projects/sea-battle/preview.png",
            images: [
                "/images/projects/sea-battle/preview.png"
            ]
        },
        { 
            title: "Ping-Pong",
            description: "Simple ping-pong game. The purpose of creating the game was to learn how to use Canvas API.",
            tags: ["Vanilla JavaScript", "Canvas API", "Responsive Design"],
            links: [
                { url: "https://github.com/danyavol/ping-pong", label: "Source Code" },
                { url: "https://ping-pong.danyavol.dev", label: "Play it!" },
            ],
            previewImg: "/images/projects/ping-pong/preview.png",
            images: [
                "/images/projects/ping-pong/preview.png"
            ]
        },
    ],
    other: [
        { 
            title: "Car Tracker",
            description: "Telegram bot which helps to track changes at car market and catch the best and the cheapest offer. Architected with possibility to add new markets(car selling websites).",
            tags: ["Node.js", "Typescript", "telegraf", "RxJs", "HTML Parsing", "Firebase"],
            links: [
                { url: "https://github.com/danyavol/car-tracker", label: "Source Code" },
                { url: "https://t.me/carsTrackerBot", label: "Telegram Bot" },
            ],
            previewImg: "/images/projects/car-tracker/preview.png",
            images: [
                "/images/projects/car-tracker/preview.png"
            ]
        },
        { 
            title: "Salary Calculator",
            description: "CLI app - Gross/NET salary converter. Written using Dart language.",
            tags: ["Dart"],
            links: [
                { url: "https://github.com/danyavol/salary_calculator", label: "Source Code" },
            ],
            previewImg: "/images/projects/salary-calc/preview.png",
            images: [
                "/images/projects/salary-calc/preview.png"
            ]
        },
    ]
};
