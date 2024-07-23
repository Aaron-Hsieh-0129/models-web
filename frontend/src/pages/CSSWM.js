import Header from "./Header";
import CsswmVideo from "./csswmVideo";
import { useState } from "react";
import Content from "./csswmContent";

const CSSWM = () => {
    const [chooseCase, setCase] = useState('Barotropic');

    return (
        <div
            style={{
                backgroundImage: "url('home-page@3x.png')",
                backgroundSize: "cover",
                width: "100%",
                minHeight: "100vh",
                fontSize: "24px",
                color: "#002b80",
                fontFamily: "Inter, sans-serif",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "20px",
                boxSizing: "border-box"
            }}
        >
            <Header />

            <b
                style={{
                    fontSize: "2rem",
                    lineHeight: "1.2",
                    color: "#000",
                    margin: "20px 0",
                }}
            >
                Cubed Sphere Shallow Water Model
            </b>

            <div 
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "8px",
                    boxSizing: "border-box"
                }}
            >
                <CsswmVideo setCase={setCase} chooseCase={chooseCase}/>
                
                <Content chooseCase={chooseCase} />
            </div>
        </div>
    );
};

export default CSSWM;
