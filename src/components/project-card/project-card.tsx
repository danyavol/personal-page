import { Project } from "@/constants/projects";
import styles from "./project-card.module.scss";
import LinkIcon from "../../../public/images/icons/link.svg";

export default function ProjectCard(params: { project: Project }) {
    const { title, description, tags, images, previewImg, links } = params.project;
    return (
        <div className={styles.card} tabIndex={0}>
            <div className={styles.cardPreview}>
                <img src={previewImg} />
            </div>
            <div className={styles.cardDescription}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>

                <div className={styles.links}>
                    { links?.map((link, index) => (
                        <a className={styles.link} href={link.url} target="_blank" key={index}>
                            <LinkIcon />
                            {link.label}
                        </a>
                    )) }
                </div>
                
                <div className={styles.tags}>
                    {tags.map((tag, index) => <span className={styles.tag} key={index}>{tag}</span>)}
                </div>
            </div>
        </div>
    );
}