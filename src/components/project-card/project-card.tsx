import { Project } from "@/constants/projects";
import styles from "./project-card.module.scss";

export default function ProjectCard(params: { project: Project }) {
    const { title, description, tags, images, previewImg } = params.project;
    return (
        <div className={styles.card} tabIndex={0}>
            <div className={styles.cardPreview}>
                <img src={previewImg} />
                <div className={styles.cardPreviewOverlay}>
                    <div className={styles.description}>{description}</div>
                </div>
            </div>
            <div className={styles.cardDescription}>
                <h3>{title}</h3>
                <div className={styles.tags}>
                    {tags.map((tag, index) => <span className={styles.tag} key={index}>{tag}</span>)}
                </div>
            </div>
        </div>
    );
}