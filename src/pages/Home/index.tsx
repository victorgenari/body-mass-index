import { useState } from "react";
import { BoxDirection } from "../../components/BoxDirection";
import { TitleModel } from "../../components/Title";
import { ParagraphModel } from "../../components/Paragraph";
import { AnimatedElement } from "../../components/AnimatedElement";
import { FormModel } from "../../components/Form";
import { LabelModel } from "../../components/Label";
import { InputModel } from "../../components/Input";
import { ButtonModel } from "../../components/Button";
import { TableModel } from "../../components/Table";
import { toast } from 'react-toastify';
import { Container, BodyMassIndexForm } from "./styles";


export const Home = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [result, setResult] = useState('');

    const handleBodyMassIndex = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            if (!weight || !height) {
                toast.error('Ops, algo deu errado!');
                toast.error('Provavelmente os valores informados não são válidos!');
                return
            }

            if (weight !== undefined && height !== undefined) {
                const bodyMassIndex = weight / (height * height);
                const formattedBodyMassIndex = `O resultado do seu IMC é: ${bodyMassIndex.toFixed(2)}`;

                setResult(formattedBodyMassIndex);
                setWeight(0);
                setHeight(0);
            }
        } catch (error) {
            console.log(error);
            toast.error('Ops, algo deu errado!');
        }
    }

    return (
        <Container>
            <BodyMassIndexForm>

                <BoxDirection style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <TitleModel title="Índice de Massa Corporal" />
                    <AnimatedElement>📈</AnimatedElement>
                </BoxDirection>

                <ParagraphModel>Preenchendo os campos abaixo, será detalhado o resultado do seu IMC logo abaixo. Além disso, fique de olho nas dicas baseadas em seu resultado.</ParagraphModel>

                <FormModel onSubmit={handleBodyMassIndex}>
                    <LabelModel>Peso:</LabelModel>
                    <InputModel
                        type="number"
                        placeholder="Digite seu peso"
                        value={weight}
                        onChange={(event) => setWeight(+event.target.value)}
                    />
                    <LabelModel>Altura:</LabelModel>
                    <InputModel
                        type="number"
                        placeholder="Digite sua altura"
                        value={height}
                        onChange={(event) => setHeight(+event.target.value)}
                    />
                    <ButtonModel
                        type="submit"
                        buttonText="Realizar cálculo"
                    />
                </FormModel>

                <ParagraphModel>{result}</ParagraphModel>

            </BodyMassIndexForm>

            <TableModel />
        </Container>
    )
}