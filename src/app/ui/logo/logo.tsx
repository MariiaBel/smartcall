import styles from './logo.module.css'

export default function Logo(){
    return (
        <div className={styles.logo}>
            <span className={styles.icon}></span>
            <span className="h2 --bold">SmartCall</span>
        </div>
    )
}