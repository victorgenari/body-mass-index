import { Button } from './styles'
interface ButtonProps {
    type: 'button' | 'reset' | 'submit';
    buttonText: string;
    style?: React.CSSProperties;
}

export const ButtonModel = ({ type, buttonText, style }: ButtonProps) => {
    return (
        <Button
            type={type}
            style={style}
        >
            {buttonText}
        </Button>
    )
}