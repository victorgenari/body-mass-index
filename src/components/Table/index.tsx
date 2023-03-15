import { Table } from './styles'

export const TableModel = () => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>IMC</th>
                    <th>Estado Nutricional</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>&lt; 10</td>
                    <td>Desnutrição Grau V</td>
                </tr>
                <tr>
                    <td>de 10 a 12,9</td>
                    <td>Desnutrição Grau IV</td>
                </tr>
                <tr>
                    <td>de 13 a 15,9</td>
                    <td>Desnutrição Grau III</td>
                </tr>
                <tr>
                    <td>de 16 a 16,9</td>
                    <td>Desnutrição Grau II</td>
                </tr>
                <tr>
                    <td>de 17 a 18,4</td>
                    <td>Desnutrição Grau I</td>
                </tr>
                <tr>
                    <td>de 18,5 a 24,9</td>
                    <td>Normal</td>
                </tr>
                <tr>
                    <td>de 25 a 29,9</td>
                    <td>Pré-obesidade</td>
                </tr>
                <tr>
                    <td>de 30 a 34,5</td>
                    <td>Obesidade Grau I</td>
                </tr>
                <tr>
                    <td>35 a 39,9</td>
                    <td>Obesidade Grau II</td>
                </tr>
                <tr>
                    <td>&gt; 40</td>
                    <td>Obesidade Grau III</td>
                </tr>
            </tbody>
        </Table>
    )
}