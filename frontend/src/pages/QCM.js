import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const QCM = () => {
    const navigate = useNavigate();

    const onAtmosphericScienceModelsClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <div
        style={{
            position: "relative",
            width: "100%",
            height: "820px",
            overflow: "hidden",
            backgroundImage: "url('home-page@3x.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            textAlign: "left",
            fontSize: "24px",
            color: "#002b80",
            fontFamily: "Inter",
        }}
        >
        <div
            style={{
            position: "absolute",
            top: "62px",
            left: "111px",
            width: "1214px",
            height: "41px",
            }}
        >
            <b
            style={{
                position: "absolute",
                top: "2.44%",
                left: "-0.33%",
                cursor: "pointer",
            }}
            onClick={onAtmosphericScienceModelsClick}
            >
            Atmospheric Science Models
            </b>
            <div
            style={{
                position: "absolute",
                height: "85.37%",
                width: "35.75%",
                top: "0%",
                right: "34.76%",
                bottom: "14.63%",
                left: "29.49%",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                padding: "9px 34px 9px 16px",
                boxSizing: "border-box",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "19px",
                color: "#000",
            }}
            >
            <div style={{ position: "relative", fontWeight: "500" }}>
                Introduction
            </div>
            <div style={{ position: "relative", fontWeight: "500" }}>About</div>
            <div style={{ position: "relative", fontWeight: "500" }}>
                Documentations
            </div>
            </div>
            <Button
            style={{
                position: "absolute",
                height: "97.56%",
                width: "12.77%",
                top: "2.44%",
                right: "0%",
                bottom: "0%",
                left: "87.23%",
            }}
            sx={{ width: 155 }}
            variant="outlined"
            color="primary"
            >
            Run Models
            </Button>
        </div>
        <div
            style={{
            position: "absolute",
            top: "146px",
            left: "0px",
            backgroundColor: "#fff",
            width: "1438px",
            height: "1830px",
            }}
        />
        <b
            style={{
            position: "absolute",
            top: "737px",
            left: "167px",
            fontSize: "12px",
            lineHeight: "20px",
            display: "inline-block",
            color: "#b0b0b0",
            width: "1163px",
            height: "105px",
            }}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
        </b>
        <b
            style={{
            position: "absolute",
            top: "173px",
            left: "214px",
            fontSize: "45px",
            lineHeight: "65px",
            display: "inline-block",
            color: "#000",
            width: "1012px",
            height: "68px",
            }}
        >
            Two-dimensional Quasi Compressible Model
        </b>
        <img
            style={{
            position: "absolute",
            top: "270px",
            left: "0px",
            width: "1440px",
            height: "407px",
            overflow: "hidden",
            objectFit: "cover",
            }}
            alt=""
            src="../frame-8@2x.png"
        />
        </div>
    );
};

export default QCM;
