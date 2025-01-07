
import styles from './header.module.css'
import Logo from '../logo/logo';

export default function Header() {
    return (
        <header className={styles.header + ' contain' }>
            <Logo />
        </header>
    )
}