import styles from "./project-card.module.scss";

export default function ProjectCard() {
    return (
        <div className={styles.card}>
            <div className={styles.cardPreview}>
                <img src="/images/my-photo.jpg" />
                <div className={styles.cardPreviewOverlay}>
                    <p>Web application which helps to do this and that stuff. Very useful, I recommend to click here and view all the details</p>
                </div>
            </div>
            <div className={styles.cardDescription}>
                <h3>Study Buddy Web</h3>
            </div>
        </div>
    );
}