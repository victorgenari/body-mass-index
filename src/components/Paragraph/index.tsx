import { Paragraph } from './styles'

interface ParagraphProps {
    children: React.ReactNode;
}

export const ParagraphModel = ({ children }: ParagraphProps) => {
    return (
        <Paragraph>
            {children}
        </Paragraph>
    )
}