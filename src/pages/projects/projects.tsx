import { projects } from "@/constants/projects-list";
import styles from "./projects.module.scss";
import dynamic from "next/dynamic";

const ProjectCard = dynamic(() => import("../../components/project-card/project-card"), { ssr: false });

export default function Projects() {
    return (
        <section>
            <img src="/images/curve-line.svg" className="section-separator" />

            <h2 className="section-title">Personal Projects</h2>

            <h3 className={styles.subsection}>TOP Projects</h3>
            <div className={styles.projects}>
                {
                    projects.top.map((p, index) => <ProjectCard project={p} key={index} top={true} />)
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
