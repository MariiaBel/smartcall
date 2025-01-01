import Icon from '../icon/icon'
import styles from './header.module.css'
import Button from "../../ui/button/button";

export default function Header() {

    return (
        <header className={styles.header + ' contain' }>
            <Icon className={styles.logo} id="logo" width={40} height={40} />
            <Button className={styles.btn} href="https://docs.google.com/document/d/1TJjPASplxayaZkBXZ2a5MfP4-V-_IUm_52GSav14f3M/edit?usp=sharing" external>
                Резюме 
                <Icon id="download" width={20} height={20} />
            </Button>
        </header>
    )
}