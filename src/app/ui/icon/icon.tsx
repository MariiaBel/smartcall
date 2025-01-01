type TIconProps = {
    id: string;
    className?: string;
    width: number;
    height: number;
}

export default  function Icon({id, className, width, height}:TIconProps) {
    return (
        <svg className={className} width={width} height={height}>
            <use xlinkHref={`/sprite.svg#${id}`}></use>
        </svg>
    )
}