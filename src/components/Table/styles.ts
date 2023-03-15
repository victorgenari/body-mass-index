import styled from 'styled-components';
import { black6, blue9 } from '../../themes/colors';

export const Table = styled.table`
    width: 100%;
    max-width: 350px;

    overflow: hidden;

    border-radius: 0.5rem;
    border-collapse: collapse;
    box-shadow: 0 0 0.5rem 0 ${black6};

    thead {
        background: ${blue9};

        tr {
            th {
                padding: 0.5rem 0;
            }
        }
    }

    tbody {
        tr:nth-child(odd) {
            background: #000;
        }

        td {
            padding: 0.5rem 1rem;
        }
    }
`