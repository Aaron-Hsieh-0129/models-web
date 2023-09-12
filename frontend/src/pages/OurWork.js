import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import styled, { keyframes } from 'styled-components';

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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4%;
    animation: ${pulse} 1.2s ease-in-out;
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
        <div
            style={{
                position: "absolute",
                backgroundImage: "url('home-page@3x.png')",
                backgroundSize: "100%",
                height: "20%",
                width: "100%",
                fontSize: "24px",
                color: "#002b80",
                fontFamily: "Inter",
                flexDirection: "column",
            }}
        >

            <Header />

            {/* Body */}
            <div
                style={{
                    position: "absolute",
                    top: "100%",
                    textAlign: "center",
                    fontSize: "32px",
                    color: "#000",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <StyledDiv
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "5%",
                        gap: "15%",
                        marginBottom: "1.5%"
                    }}
                >
                    <b
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "50%",
                            color: "#b0b0b0",
                            textAlign: "left",
                            width: "55%",
                            height: "120%",
                        }}
                    >
                        Here are the gallery of one global model and two cloud-resolving models, which aims to demonstrate different test cases run by these models. 
                        <br/>
                        If you want to know more about these models, please click the documentation or see the github code pages.
                        
                    </b>
                </StyledDiv>
                
                <StyledDiv 
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "4%",
                    }}
                >
                    <img alt="" style={{}} src="../vector-11.svg"/>
                </StyledDiv>
                <div 
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "8%",
                            cursor: "pointer",
                            // marginBottom: "4%",
                            width: "30%",
                            boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
                            padding: "1%"
                        }}
                        onClick={onFrameContainer3Click}
                    >
                        <b
                            style={{
                                marginTop: "2%",
                                lineHeight: "100%",
                                textAlign: "center"
                            }}
                        >
                            <p style={{ marginBlockStart: "0", marginBlockEnd: "0px", fontSize: "80%"}}>
                                Cubed Sphere
                            </p>
                            <p style={{ marginBlockStart: "0", marginBlockEnd: "0px", fontSize: "80%"}}>
                                Shallow Water Model
                            </p>
                        </b>

                        <p style={{fontSize: "50%", textAlign: "justify"}}>
                            Based on 2nd order in time and 4th order in space finite difference method with A-grid, CSSWM is used to test different cases and will be used to construct more complicated GCM.
                        </p>
                        {/* <img
                            style={{
                                // position: "relative",
                                width: "80%",
                                // height: "30%",
                                flexShrink: "0",
                                overflow: "hidden",
                                objectFit: "cover",
                            }}
                            alt=""
                            src="../CSSWM/Cosine Ball/180/0/sphere_cartopy/h+wind.gif"
                        /> */}
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8%",
                            cursor: "pointer",
                            // marginBottom: "4%",
                            width: "30%",
                            boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
                            padding: "1%"
                        }}
                        onClick={onFrameContainer2Click}
                    >
                        <b
                            style={{
                                marginTop: "2%",
                                lineHeight: "100%",
                                textAlign: "center"
                            }}
                        >
                            <p style={{ marginBlockStart: "0", marginBlockEnd: "0px", fontSize: "80%" }}>
                                Two-dimensional
                            </p>
                            <p style={{ marginBlockStart: "0", marginBlockEnd: "0px", fontSize: "80%" }}>
                                Vector Vorticity Model
                            </p>
                        </b>

                        <p style={{fontSize: "50%", textAlign: "justify"}}>
                            This is a 2D cloud resolving model based on the vorticity equation with anelastic approximation and aims to combine with CSSWM.
                        </p>
                    
                        {/* 
                        <img
                            style={{
                                // position: "relative",
                                width: "80%",
                                // height: "30%",
                                flexShrink: "0",
                                overflow: "hidden",
                                objectFit: "cover",
                            }}
                            alt=""
                            src="../2DVVM/Water/qc+qr+th+u+w.gif"
                        /> */}
                    </div>


                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8%",
                            cursor: "pointer",
                            // marginBottom: "4%",
                            width: "30%",
                            boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
                            padding: "1%"
                        }}
                        onClick={onFrameContainer1Click}
                    >
                        <b
                            style={{
                                marginTop: "2%",
                                lineHeight: "100%",
                                textAlign: "center"
                            }}
                        >
                            <p style={{ marginBlockStart: "0", marginBlockEnd: "0px", fontSize: "80%" }}>
                                Two-dimensional
                            </p>
                            <p style={{ marginBlockStart: "0", marginBlockEnd: "0px", fontSize: "80%" }}>
                                Quasi Compressible Model
                            </p>
                        </b>

                        <p style={{fontSize: "50%", textAlign: "justify"}}>
                            This is a 2D cloud resolving model based on the pressure momentum equation with quasi compressible approximation and aims to compare with 2DVVM.
                        </p>

                        {/* <img
                            style={{
                                // position: "relative",
                                width: "80%",
                                // height: "165px",
                                flexShrink: "0",
                                overflow: "hidden",
                                objectFit: "cover",
                            }}
                            alt=""
                            src="../CSSWM/Cosine Ball/180/0/sphere_cartopy/h+wind.gif"
                        /> */}
                    </div>
                </div>
                
                
                
            </div>
        </div>
    );
};

export default OurWork;
