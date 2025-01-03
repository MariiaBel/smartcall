import Logo from '../logo/logo'
import styles from './footer.module.css'

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.content + ' contain' }>
                <Logo />
                <p>@2025 SmartCall <br />разработано <a href="https://t.me/MariiaBel" target="_blank">@MariiaBel</a></p>
            </div>
        </footer>
    )
}