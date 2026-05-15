type TIconProps = {
    id: string;
    className?: string;
    width: number;
    height: number;
    decorative?: boolean;
    title?: string;
}

export default function SvgIcon({id, className, width, height, decorative = true, title}: TIconProps){
    return (
        <svg
            className={className}
            width={width}
            height={height}
            aria-hidden={decorative ? true : undefined}
            role={decorative ? undefined : 'img'}
            focusable={decorative ? false : undefined}
        >
            {title ? <title>{title}</title> : null}
            <use href={`/sprite.svg#${id}`} />
        </svg>
    )
}