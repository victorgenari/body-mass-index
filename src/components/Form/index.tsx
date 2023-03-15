import { Form } from './styles'

interface FormProps {
    action?: string;
    children: React.ReactNode;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const FormModel = ({ action, children, onSubmit }: FormProps) => {
    return (
        <Form
            action={action}
            onSubmit={onSubmit}
        >
            {children}
        </Form>
    )
}