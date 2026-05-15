import Link from 'next/link';
import styles from './logo.module.css'

export default function Logo(){
    return (
        <Link href="/" className={styles.logo} aria-label="SmartCall — на главную">
            <span className={styles.icon} aria-hidden="true"></span>
            <span className="h2 --bold">SmartCall</span>
        </Link>
    )
}