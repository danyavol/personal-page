import styles from "./header.module.scss";

export default function Header() {
    return (
      <header className={styles.header}>
        <nav className={styles.navbar}>
            <a href="#about" title="About">About</a>
            <a href="#projects" title="My Projects">Projects</a>
            <a href="#contact" title="Contact">Contact</a>
        </nav>

        <div className={styles.titleWrapper}>
            <div>
                <h1 className={styles.title}>Hey! <strong>I'm Daniil</strong>, a<br/><strong>Software Engineer</strong></h1>
                <p className={styles.titleDescription}>I've been developing web and mobile apps for over 3 years. I like active sports, snowboarding, woodworking and traveling.</p>
            </div>
            <div className={styles.photoWrapper}>
                <img src="/images/my-photo.jpg" alt="Photo of me" className={styles.photo} />
            </div>
        </div>

        <img src="/images/curve-line.svg" style={{marginLeft: "45px"}} />
        
      </header>
    )
  }
  