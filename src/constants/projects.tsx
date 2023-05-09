export interface Project {
    title: string;
    description: any;
    tags: string[];
    previewImg: string;
    images: string[];
}

export const projects: {[category: string]: Project[]} = {
    top: [
        { 
            title: 'Bot "Study Buddy"',
            description: "Telegram bot whose mission was to make life easier for students. More than 1800 people have used it.",
            tags: ["Telegram Bot", "JavaScript", "Node.js", "MongoDB", "HTML Parsing", "Heroku"],
            previewImg: "/images/projects/study-buddy-bot/preview.png",
            images: []
        },
        { 
            title: 'Web App "Study Buddy"',
            description: 'Web version of the "Study Buddy" bot. Also it has admin page to control the application and view statistics.',
            tags: ["Angular 12", "Angular Material", "ApexCharts", "Node.js", "TypeScript", "Express", "JWT", "MongoDB", "Netlify", "Heroku"],
            previewImg: "/images/projects/study-buddy-web/preview.png",
            images: []
        },
        { 
            title: "Money Splitter",
            description: "Mobile app which helps to split expenses between group of people. Published to Google Play.",
            tags: ["Angular 15", "Angular Material", "Ionic", "Capacitor", "IOS/Android app", "Google Play"],
            previewImg: "/images/projects/money-splitter/preview.png",
            images: []
        },
    ],
    webApps: [
        { 
            title: "Cozy Groups",
            description: "",
            tags: ["React", "Semantic UI", "ApexCharts", "MongoDB", "Netlify", "Heroku"],
            previewImg: "/images/project-placeholder.svg",
            images: []
        },
        { 
            title: 'Web Chat "Жывеграм"',
            description: "",
            tags: ["React", "Semantic UI", "ApexCharts", "MongoDB", "Netlify", "Heroku"],
            previewImg: "/images/project-placeholder.svg",
            images: []
        },
        { 
            title: "Equipment Service System",
            description: "",
            tags: [],
            previewImg: "/images/project-placeholder.svg",
            images: []
        },
        { 
            title: "Job Search App",
            description: "",
            tags: [],
            previewImg: "/images/project-placeholder.svg",
            images: []
        },
        { 
            title: "Restaurant",
            description: "",
            tags: [],
            previewImg: "/images/project-placeholder.svg",
            images: []
        },
        { 
            title: "React Pizza",
            description: "",
            tags: [],
            previewImg: "/images/project-placeholder.svg",
            images: []
        },
    ],
    webGames: [
        { 
            title: "2D Platformer",
            description: "",
            tags: [],
            previewImg: "/images/project-placeholder.svg",
            images: []
        },
        { 
            title: "Tetris",
            description: "",
            tags: [],
            previewImg: "/images/project-placeholder.svg",
            images: []
        },
        { 
            title: "Sea Battle",
            description: "",
            tags: [],
            previewImg: "/images/project-placeholder.svg",
            images: []
        },
        { 
            title: "Ping-Pong",
            description: "",
            tags: [],
            previewImg: "/images/project-placeholder.svg",
            images: []
        },
    ],
    other: [
        { 
            title: "Car Tracker",
            description: "",
            tags: [],
            previewImg: "/images/project-placeholder.svg",
            images: []
        },
        { 
            title: "Salary Calculator",
            description: "",
            tags: [],
            previewImg: "/images/project-placeholder.svg",
            images: []
        },
    ]
};
