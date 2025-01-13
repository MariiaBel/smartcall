import { ReactNode } from 'react';
import styles from './popover.module.css'

type TPopoverProps = {
    id: number | string, 
    btnContent: ReactNode, 
    dialogContent: ReactNode,
    className?: string
}

export default function Popover({id, btnContent, dialogContent, className}: TPopoverProps) {
    return (
        <div className={`${className}`}>
            <button className={styles.btn} aria-label="open Module" popoverTarget={`popoverId-${id}`}>{btnContent}</button>
            <dialog className={styles.dialog} id={`popoverId-${id}`} popover="auto">
                <button aria-label="close Module" className={styles.btnClose} popoverTarget={`popoverId-${id}`} popoverTargetAction="hide">✕</button>
                <div className={styles.dialogContent}>{dialogContent}</div>
            </dialog>
        </div>
    )
}