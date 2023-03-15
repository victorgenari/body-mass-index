import { ChangeEvent } from 'react';
import { Input } from './styles'

interface InputFieldProps {
    type: string,
    placeholder: string,
    value?: number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputModel = ({ type, placeholder, value, onChange }: InputFieldProps) => {
    return (
        <Input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}