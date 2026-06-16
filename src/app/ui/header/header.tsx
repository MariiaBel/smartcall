
import styles from './header.module.css'
import Logo from '../logo/logo';

import Button from '../button/button';
import { NavigationMenuDemo } from '../navigation-menu';

export default function Header() {
    return (
        <header className={styles.header + ' contain w-full flex  gap-4 flex-col sm:flex-row sm:justify-between sm:items-center'}>
            <Logo />

            <ul>
                <Button className={'text-sm'} mode="--link" href="/services/fast-sites">
                    Разработка сайта
                </Button>
                {/* <NavigationMenuDemo /> */}
            </ul>
        </header >
    )
}