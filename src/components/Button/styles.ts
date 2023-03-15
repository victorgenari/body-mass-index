import styled from 'styled-components';
import { blue8, blue9, white9 } from '../../themes/colors';

export const Button = styled.button`
    width: 100%;

    font-size: 1.1rem;
    padding: 0.5rem 0;
    border-radius: 0.5rem;

    transition: letter-spacing .3s, background .3s;

    color: ${white9};
    background: ${blue9};

    :hover {
        letter-spacing: 0.1rem;
        background: ${blue8};
    }
`