import { useCallback, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import styled, { keyframes } from 'styled-components';
import { CardMedia } from "@mui/material";

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

const HomePageContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(#ffffff, #e0f7fa, #80d8ff);
    font-size: 24px;
    color: #002b80;
    font-family: "Inter", sans-serif;
    animation: ${fadeIn} 1s ease-in-out;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const BodyContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 5%;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 10%;
    }
`;

const StyledDiv = styled.div`
    animation: ${pulse} 1.2s ease-in-out;
    width: 50%;
    font-size: 2rem;
    line-height: 1.3;
    color: #002b80;
    text-align: center;

    @media (max-width: 768px) {
        width: 90%;
        font-size: 1.5rem;
    }

    b {
        display: block;
    }

    hr {
        border: 2.5px solid #062c7b;
        border-radius: 7px;
    }
`;

const StyledCardMedia = styled(CardMedia)`
    height: 400px;
    width: 45%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 90%;
        height: auto;
    }
`;

const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    bottom: 0;
`;

const FooterSection = styled(Link)`
    flex: 1;
    background-color: #e0f7fa;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 20px 0;
    transition: background-color 0.3s;

    &:hover {
        background-color: #80d8ff;
    }
`;

const FooterSectionGallery = styled.div`
    flex: 1;
    background-color: #005f99;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: ${({ isHovering }) => (isHovering ? "1" : "0.8")};
    transition: opacity 0.3s;
    padding: 20px 0;

    &:hover {
        opacity: 1;
    }
`;

const FooterContent = styled.div`
    border-radius: 14px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    color: #3c3c3c;
    padding: 20px;

    img {
        margin-bottom: 10px;
    }

    b {
        font-size: 24px;
        color: #002b80;
    }

    div {
        font-size: 14px;

        @media (max-width: 768px) {
            font-size: 12px;
        }
    }
`;

const HomePage = () => {
    const navigate = useNavigate();

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const onRectangle1Click = useCallback(() => {
        navigate("/our-work");
    }, [navigate]);

    const randomVideos = ['https://www.youtube.com/embed/69U_2NUdaQM', 'https://www.youtube.com/embed/CUv1pX163pQ', 'https://www.youtube.com/embed/G4hVWNGEAEc', 'https://www.youtube.com/embed/zSepHC5psAc', 'https://www.youtube.com/embed/CRdPHsxJojw', 'https://www.youtube.com/embed/rdzmJJ8HzHc'];
    const [videoPath] = useState(randomVideos[Math.floor(Math.random() * randomVideos.length)]);
    
    return (
        <HomePageContainer>
            <Header />

            {/* body */}
            <BodyContainer>
                <StyledDiv>
                    <b>{`Next-Generation Adaptive Convection-Circulation Coupling Framework`}</b>
                    {`Cubed-Sphere Shallow Water Model & \n`}
	    	    <br />
                    {`2D Cloud Resolving Models`}
                    <hr />
                </StyledDiv>
                
                <StyledCardMedia
                    component="iframe"
                    autoPlay 
                    controls 
                    allowFullScreen
                    src={videoPath}
                />
            </BodyContainer>

            {/* footer */}
            <FooterContainer>
                <FooterSection to="https://github.com/Aaron-Hsieh-0129" target="_blank" rel="noopener noreferrer">
                    <FooterContent>
                        <img alt="" src="../frame-5.svg" />
                        <b>Aaron Hsieh</b>
                        <div>National Taiwan University Atmospheric Science</div>
                    </FooterContent>
                </FooterSection>
                
                <FooterSectionGallery
                    isHovering={isHovering}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={onRectangle1Click}
                >
                    <b style={{color: "#ffffff", fontSize: "1.5rem"}}>Gallery</b>
                </FooterSectionGallery>
            </FooterContainer>
        </HomePageContainer>
    );
};

export default HomePage;
