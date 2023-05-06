import styles from "./header.module.scss";

export default function Header() {
    return (
      <header>
        <nav className={styles.navbar}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>

        <div className={styles.titleWrapper}>
            <div>
                <h1 className={styles.title}>Hey! <strong>I'm Daniil</strong>, a<br/><strong>Software Engineer</strong></h1>
                <p className={styles.titleDescription}>I've been developing web and mobile apps for over 3 years. I'm into active sports, snowboarding, woodworking and traveling.</p>
            </div>
            <div className={styles.photoWrapper}>
                <img src="/images/my-photo.jpg" alt="Photo of me" className={styles.photo} />
            </div>
        </div>
      </header>
    )
  }
  