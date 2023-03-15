import { AnimatedSpan } from "./styles";

interface AnimatedElementProps {
    children: React.ReactNode;
}

export const AnimatedElement = ({ children }: AnimatedElementProps) => {
    return (
        <AnimatedSpan>
            {children}
        </AnimatedSpan>
    );
}