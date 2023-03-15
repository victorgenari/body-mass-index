import styled from 'styled-components';
import { black8, black6, white9, blue9 } from '../../themes/colors';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    color: ${white9};
    background: ${black8};

    @media (max-width: 1245px) {
        padding: 1rem;
    }

    @media (max-width: 780px) {
        height: 100%;
        flex-direction: column;
    }
`

export const BodyMassIndexForm = styled.div`
    width: 100%;
    max-width: 800px;

    display: flex;
    flex-direction: column;

    padding: 1rem;
    border-radius: 0.5rem;

    box-shadow: 0 0 0.5rem 0 ${black6};

    h2 {
        margin: 0 0 0.5rem 0;
    }

    @media (max-width: 780px) {
        max-width: 550px;
    }
`