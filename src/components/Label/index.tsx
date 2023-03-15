interface LabelProps {
    children: React.ReactNode;
}

export const LabelModel = ({ children }: LabelProps) => {
    return (
        <label>
            {children}
        </label>
    )
}