
import styles from './header.module.css'
import Button from "../../ui/button/button";
import Logo from '../logo/logo';
import SvgIcon from './../svgIcon/svgIcon';

export default function Header() {
    return (
        <header className={styles.header + ' contain' }>
            <Logo />
        </header>
    )
}