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
            description: "Web application which helps to do this and that stuff. Very useful, I recommend to click here and view all the details",
            tags: ["Telegram Bot", "JavaScript", "Node.js", "MongoDB", "HTML Parsing", "Heroku"],
            previewImg: "/images/project-placeholder.svg",
            images: []
        },
        { 
            title: 'Web App "Study Buddy"',
            description: "",
            tags: ["Angular 12", "Angular Material", "ApexCharts", "Node.js", "Express", "TypeScript", "JWT", "MongoDB", "Netlify", "Heroku"],
            previewImg: "/images/project-placeholder.svg",
            images: []
        },
        { 
            title: "Money Splitter",
            description: "",
            tags: ["Angular 15", "Angular Material", "Ionic", "Capacitor", "IOS/Android app", "Google Play"],
            previewImg: "/images/project-placeholder.svg",
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
