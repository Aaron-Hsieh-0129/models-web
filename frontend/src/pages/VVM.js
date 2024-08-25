import Header from "./Header";
import { useState } from "react";
import Content from "./vvmContent";
import VVMVideo from "./vvmVideo";
import styled from 'styled-components';
import QCMVideo from "./qcmVideo";

const Container = styled.div`
    background-image: url('home-page@3x.png');
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    font-size: 24px;
    color: #002b80;
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        font-size: 18px;
        padding: 10px;
    }
`;

const Title = styled.b`
    display: flex;
    justify-content: center;
    margin-top: 2%;
    font-size: 2rem;
    line-height: 1.2;
    color: #000;
    margin-bottom: 2%;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    box-sizing: border-box;
`;

const ButtonGroup = styled.div`
    margin-bottom: 20px;
`;

const Button = styled.button`
    background-color: ${props => props.active ? '#0056b3' : '#007bff'};
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin: 0 10px;
    border-radius: 5px;
    opacity: ${props => props.active ? 1 : 0.6};

    &:hover {
        background-color: #0056b3;
    }

    &:focus {
        outline: none;
    }
`;

const VVM = () => {
    const [chooseCloud, setCloud] = useState('VVM');
    const [chooseCaseQCM, setCaseQCM] = useState('Dry');
    const [chooseCaseVVM, setCaseVVM] = useState('Dry');

    return (
        <Container>
            <Header />

            <Title>
                2-D Cloud Resolving Models
            </Title>

            <ButtonGroup>
                <Button active={chooseCloud === 'VVM'} onClick={() => setCloud('VVM')}>Vector Vorticity Model (VVM)</Button>
                <Button active={chooseCloud === 'QCM'} onClick={() => setCloud('QCM')}>Quasi Compressible Model (QCM)</Button>
            </ButtonGroup>

            <ContentWrapper>
                {
                    chooseCloud === 'QCM' 
                    ?
                        <div>
                            <QCMVideo setCase={setCaseQCM} chooseCase={chooseCaseQCM} />
                            <Content chooseCase={chooseCaseQCM} />
                        </div>    
                    : 
                        <div>
                            <VVMVideo setCase={setCaseVVM} chooseCase={chooseCaseVVM} />
                            <Content chooseCase={chooseCaseVVM} />
                        </div>
                }
            </ContentWrapper>
        </Container>
    );
};

export default VVM;
