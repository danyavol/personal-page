import { projects } from "@/constants/projects";
import ProjectCard from "./project-card/project-card";
import styles from "./projects.module.scss";

export default function Projects() {
    return (
        <section id="projects">
            <img src="/images/curve-line.svg" className="section-separator" />

            <h2 className="section-title">Projects</h2>

            <h3 className={styles.subsection}>TOP Projects</h3>
            <div className={styles.projects}>
                {
                    projects.top.map((p, index) => <ProjectCard project={p} key={index} />)
                }
            </div>

            <h3 className={styles.subsection}>Web Apps</h3>
            <div className={styles.projects}>
                {
                    projects.webApps.map((p, index) => <ProjectCard project={p} key={index} />)
                }
            </div>
            
            <h3 className={styles.subsection}>Web Games</h3>
            <div className={styles.projects}>
                {
                    projects.webGames.map((p, index) => <ProjectCard project={p} key={index} />)
                }
            </div>

            <h3 className={styles.subsection}>Others</h3>
            <div className={styles.projects}>
                {
                    projects.other.map((p, index) => <ProjectCard project={p} key={index} />)
                }
            </div>
        </section>
    );
}
