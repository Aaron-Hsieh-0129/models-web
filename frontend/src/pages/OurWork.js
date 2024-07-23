import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.95, 0.95);
    }
    100% {
        opacity: 1;
        transform: scale(1, 1);
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Container = styled.div`
    background: linear-gradient(135deg, #e0f7fa, #80d8ff);
    width: 100%;
    min-height: 100vh; /* Ensure it covers at least the viewport height */
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    animation: ${fadeIn} 1s ease-in-out;
`;

const Content = styled.div`
    text-align: center;
    font-size: 32px;
    color: #002b80;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    margin-top: 10%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        font-size: 24px;
        padding: 10px;
    }
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5% 0;
    animation: ${pulse} 1.2s ease-in-out;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        margin: 10% 0;
    }
`;

const Description = styled.b`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #002b80;
    text-align: left;
    width: 80%;
    margin: 2% 0;

    @media (max-width: 768px) {
        font-size: 1rem;
        text-align: center;
    }
`;

const ModelCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 30%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 0 1%;
    transition: transform 0.3s, box-shadow 0.3s;
    background: #ffffff;
    border-radius: 10px;
    color: #002b80;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 768px) {
        width: 80%;
        margin: 2% 0;
    }
`;

const ModelTitle = styled.b`
    margin-top: 2%;
    line-height: 1.2;
    text-align: center;
    font-size: 1.2rem;
    color: #007bb6;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const ModelDescription = styled.p`
    font-size: 0.9rem;
    text-align: justify;
    color: #005f99;

    @media (max-width: 768px) {
        font-size: 0.8rem;
        text-align: center;
    }
`;

const Icon = styled.img`
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
    animation: ${pulse} 2s infinite;

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`;

const OurWork = () => {
    const navigate = useNavigate();

    const onFrameContainer1Click = useCallback(() => {
        navigate("/qcm");
    }, [navigate]);

    const onFrameContainer2Click = useCallback(() => {
        navigate("/vvm");
    }, [navigate]);

    const onFrameContainer3Click = useCallback(() => {
        navigate("/csswm");
    }, [navigate]);

    return (
        <Container>
            <Header />
            <Content>
                <StyledDiv>
                    <Description>
                        Here is a gallery featuring one global model and two cloud-resolving models, showcasing various test cases run by these models. For more information about these models, please refer to the documentation or visit the GitHub code pages.
                    </Description>
                </StyledDiv>
                
                <StyledDiv>
                    <ModelCard onClick={onFrameContainer3Click}>
                        <ModelTitle>
                            <p>Cubed Sphere Shallow Water Model</p>
                        </ModelTitle>
                        <ModelDescription>
                            Based on 2nd order in time and 4th order in space finite difference method with A-grid, CSSWM serves as a simplification for GCM.
                        </ModelDescription>
                    </ModelCard>

                    <ModelCard onClick={onFrameContainer2Click}>
                        <ModelTitle>
                            <p>Two-dimensional Cloud Resolving Models</p>
                        </ModelTitle>
                        <ModelDescription>
                            Here includes two 2D cloud resolving models based on the vorticity equation with anelastic approximation and quasi compressible approximation respectively.
                        </ModelDescription>
                    </ModelCard>

                    {/*
                    <ModelCard onClick={onFrameContainer1Click}>
                        <ModelTitle>
                            <p>Two-dimensional</p>
                            <p>Quasi Compressible Model</p>
                        </ModelTitle>
                        <ModelDescription>
                            This is a 2D cloud resolving model based on the pressure momentum equation with quasi compressible approximation and aims to compare with 2DVVM.
                        </ModelDescription>
                    </ModelCard> */}
                </StyledDiv>
            </Content>
        </Container>
    );
};

export default OurWork;
