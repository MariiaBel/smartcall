"use client";

import { ReactNode, MouseEventHandler, useMemo } from 'react';
import styles from './button.module.css'
import Link from 'next/link';

type TButtonProp = {
    children: ReactNode;
    className: string;
    href?: string;
    onClick?: MouseEventHandler;
    external?: boolean;
    modificator?: string;
}

export default function Button({children, href, external= false, onClick, className, modificator = ''}: TButtonProp) {
    const btnClass = useMemo(() => [className,styles.button, styles[modificator]].join(' '), [])

    if (href && external ) return (
        <a href={href} target="_blank" className={btnClass}>{children}</a>
    ) 

    if (href ) return (
        <Link href={href} className={btnClass}>{children}</Link>
    ) 

    return (
        <button onClick={onClick} className={btnClass}>{children}</button>
    )
}