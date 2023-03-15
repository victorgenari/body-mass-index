import styled from 'styled-components';

export const AnimatedSpan = styled.span`
    animation: animatedspan 1.5s linear infinite;

    @keyframes animatedspan {
        50% {
            transform: translateY(-30%);
        }
    }
`