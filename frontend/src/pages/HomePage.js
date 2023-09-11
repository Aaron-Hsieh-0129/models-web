import { useCallback, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import styled, { keyframes } from 'styled-components';
import { CardMedia } from "@mui/material";

const pulse = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.5, 0.5);
    }

    100% {
        opacity: 1;
        transform: scale(1, 1);
    }
`;

const StyledDiv = styled("div")`
    animation: ${pulse} 1.2s ease-in-out;
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

    const randomVideos = ['https://www.youtube.com/embed/69U_2NUdaQM', 'https://www.youtube.com/embed/CUv1pX163pQ', 'https://www.youtube.com/embed/G4hVWNGEAEc', 'https://www.youtube.com/embed/zSepHC5psAc', 'https://www.youtube.com/embed/CRdPHsxJojw']
    // eslint-disable-next-line no-unused-vars
    const [videoPath, setVideoPath] = useState(randomVideos[Math.floor(Math.random()*randomVideos.length)]);
    
    return (
        <div
            style={{
                position: "absolute",
                backgroundImage: "url('home-page@3x.png')",
                backgroundSize: "100%",
                width: "100%",
                height: "100%",
                fontSize: "24px",
                color: "#002b80",
                fontFamily: "Inter",
            }}
        >
            <Header />

            {/* body */}
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", marginTop: "2%"}}>
                <StyledDiv style={{width: "39%"}}>
                    <b
                        style={{
                            fontSize: "200%",
                            lineHeight: "130%",
                            color: "#000",                            
                        }}  
                    >{`SWM on Cubed Sphere & 2D Cloud Resolving Models`}</b>
                    <hr style={{border: "2.5px solid rgb(6, 44, 123)", borderRadius: "7px 7px 7px 7px"}} />
                </StyledDiv>
                
                <CardMedia
                    component="iframe"
                    style={{height: "400px", width: "45%"}}
                    autoPlay 
                    controls 
                    allowFullScreen
                    src={videoPath}
                />
                
            </div>

            {/* footer */}
            <Link to="https://github.com/Aaron-Hsieh-0129" target="_blank" rel="noopener noreferrer">
            <div
                style={{
                    position: "absolute",
                    bottom: "0%",
                    backgroundColor: "#dcccbc",
                    width: "50%",
                    height: "28%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                
            >
            
                <div
                    style={{
                        borderRadius: "14px",
                        backgroundColor: "rgba(255, 255, 255, 0.89)",
                        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
                        width: "32%",
                        height: "65%",
                        display: "flex",
                        flexDirection: "column",
                        boxSizing: "border-box",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#3c3c3c",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column"

                        }}
                    >
                        <div>
                            <img alt="" src="../frame-5.svg" />
                        </div>
                        <b
                            style={{
                                fontSize: "24px",
                                color: "#002b80",
                            }}
                        >
                            Aaron Hsieh
                        </b>
                        <div style={{fontSize: "14px"}}>
                            National Taiwan University Atmospheric Science
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            </Link>
            
            <div
                style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "0%",
                    backgroundColor: "#55678a",
                    width: "50%",
                    height: "28%",
                    cursor: "pointer",
                    opacity: isHovering ? "1" : "0.8",
                    // borderRadius: isHovering ? "10%" : "",
                    transition: "0.5s",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={onRectangle1Click}
            >
                <b
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "50px",
                        // lineHeight: "39px",
                        color: "rgba(255, 255, 255, 0.89)",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    Gallery
                </b>
            </div>
        </div>
    );
};

export default HomePage;
