interface TitleProps {
    title: string;
}

export const TitleModel = ({ title }: TitleProps) => {
    return (
        <h2>{title}</h2>
    )
}