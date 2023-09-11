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
                        marginBottom: "4%"
                    }}
                >
                    <b
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "12px",
                            color: "#b0b0b0",
                            textAlign: "left",
                            width: "55%",
                            height: "120%",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
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
                            // margin: "4%",
                            width: "30%",
                            boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
                            // border: "1px solid #262b47"
                        }}
                        onClick={onFrameContainer3Click}
                    >
                        <b
                            style={{
                                marginTop: "3%",
                                lineHeight: "48px",
                            }}
                        >
                            <p style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}>
                                Cubed Sphere
                            </p>
                            <p style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}>
                                Shallow Water Model
                            </p>
                        </b>
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
                            src="../CSSWM/Cosine Ball/180/0/sphere_cartopy/h+wind.gif"
                        />
                    </div>

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
                        }}
                        onClick={onFrameContainer2Click}
                    >
                        <b
                            style={{
                                marginTop: "2%",
                                lineHeight: "48px",
                            }}
                        >
                            <p style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}>
                                Two-dimensional
                            </p>
                            <p style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}>
                                Vector Vorticity Model
                            </p>
                        </b>
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
                        />
                    </div>


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
                        }}
                        onClick={onFrameContainer1Click}
                    >
                        <b
                            style={{
                                marginTop: "3%",
                                lineHeight: "48px",
                            }}
                        >
                            <p style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}>
                                Two-dimensional
                            </p>
                            <p style={{ marginBlockStart: "0", marginBlockEnd: "0px" }}>
                                Quasi Compressible Model
                            </p>
                        </b>
                        <img
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
                        />
                    </div>
                </div>
                
                
                
            </div>
        </div>
    );
};

export default OurWork;
