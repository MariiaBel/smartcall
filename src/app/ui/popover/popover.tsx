import { ReactNode } from 'react';
import styles from './popover.module.css'

type TPopoverProps = {
    id: number | string, 
    btnContent: ReactNode, 
    dialogContent: ReactNode,
    className?: string,
    openLabel: string,
}

export default function Popover({id, btnContent, dialogContent, className, openLabel}: TPopoverProps) {
    return (
        <div className={`${className}`}>
            <button type="button" className={styles.btn} aria-label={openLabel} popoverTarget={`popoverId-${id}`}>{btnContent}</button>
            <dialog className={styles.dialog} id={`popoverId-${id}`} popover="auto">
                <button type="button" aria-label="Закрыть" className={styles.btnClose} popoverTarget={`popoverId-${id}`} popoverTargetAction="hide">✕</button>
                <div className={styles.dialogContent}>{dialogContent}</div>
            </dialog>
        </div>
    )
}