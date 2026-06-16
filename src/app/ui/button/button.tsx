"use client";

import { ReactNode, MouseEventHandler, useMemo } from 'react';
import styles from './button.module.css'
import Link from 'next/link';

type TButtonProp = {
    children: ReactNode;
    className?: string;
    href?: string;
    onClick?: MouseEventHandler;
    external?: boolean;
    mode?: string;
}

export default function Button({ children, href, external = false, onClick, className, mode = '' }: TButtonProp) {
    const btnClass = useMemo(() => ['text-md', styles.button, styles[mode], className].join(' '), [mode, className])

    if (href && external) return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={btnClass}>{children}</a>
    )

    if (href) return (
        <Link href={href} className={btnClass}>{children}</Link>
    )

    return (
        <button onClick={onClick} className={btnClass}>{children}</button>
    )
}