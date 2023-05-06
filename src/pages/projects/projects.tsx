import ProjectCard from "./project-card";

export function Projects() {
    return (
        <section id="projects" style={{height: "800px"}}>
            <img src="/images/curve-line.svg" className="section-separator" />

            <h2 className="section-title">Projects</h2>

            <ProjectCard />
        </section>
    );
}

/**

_____PROJECTS LIST_____

    TOP Projects:
Study Buddy Bot
Study Buddy Web
Money Splitter

    Web Apps:
Cozy Groups
Жывеграм
Equipment Service System
Job Search App
Restaurant
React Pizza

    Web Games:
2D Platformer
Tetris
Sea Battle
Ping-Pong

    Other:
Car Tracker
Salary Calculator

 */