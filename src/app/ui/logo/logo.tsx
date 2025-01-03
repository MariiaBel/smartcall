import Icon from '../icon/icon'
import styles from './logo.module.css'

export const Logo = () => (
    <div className={styles.logo}>
        {/* <Icon className={styles.logo} id="logo" width={40} height={40} /> */}
        <span className={styles.icon}></span>
        <span className="h2 --bold">SmartCall</span>
    </div>
)