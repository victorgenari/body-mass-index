interface BoxDirectionProps {
    style: React.CSSProperties;
    children: React.ReactNode;
}

export function BoxDirection({ style, children }: BoxDirectionProps) {
    return (
        <div
            style={style}
        >
            {children}
        </div>
    )
}