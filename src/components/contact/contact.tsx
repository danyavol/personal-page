import GithubIcon from "../../../public/images/icons/github.svg";
import MailIcon from "../../../public/images/icons/mail.svg";
import LinkedinIcon from "../../../public/images/icons/linkedin.svg";
import TelegramIcon from "../../../public/images/icons/telegram.svg";
import styles from "./contact.module.scss";

export default function Contact() {
    return (
        <ul className={styles.contactsList}>
            <li>
                <a className={styles.contactLink} href="mailto:daniil.volosyuk@gmail.com" target="_blank">
                    <MailIcon />
                    daniil.volosyuk@gmail.com
                </a>
            </li>
            <li>
                <a className={styles.contactLink} href="https://github.com/danyavol" target="_blank">
                    <GithubIcon />
                    GitHub
                </a>
            </li>
            <li>
                <a className={styles.contactLink} href="https://www.linkedin.com/in/danyavol/" target="_blank">
                    <LinkedinIcon />
                    LinkedIn
                </a>
            </li>
            <li>
                <a className={styles.contactLink} href="https://t.me/d4nvol" target="_blank">
                    <TelegramIcon />
                    Telegram
                </a>
            </li>
        </ul>
    );
}