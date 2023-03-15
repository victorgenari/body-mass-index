import styled from 'styled-components';
import { blue9, black6, white9 } from '../../themes/colors';

export const Input = styled.input`
    width: 100%;

    font-size: 1.1rem;
    font-weight: 600;

    margin: 0 0 1rem 0;
    padding: 0.5rem;
    border-radius: 0.5rem;

    transition: box-shadow .3s, border .3s;

    border: 2px solid transparent;
    color: ${white9};
    background: ${black6};

    :hover {
        border: 2px solid ${blue9};
    }

    :focus {
        box-shadow: 0 0 0.5rem 0 ${blue9};
        border: 2px solid ${blue9};
    }

    ::placeholder {
        font-style: italic;
        font-weight: normal;
        color: #C1C1C1;
    }
`