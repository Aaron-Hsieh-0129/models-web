import Header from "./Header";
import { useState } from "react";
import Content from "./vvmContent";
import QCMVideo from "./qcmVideo";

const QCM = () => {
    const [chooseCaseQCM, setCaseQCM] = useState('Dry');

    return (
        <div
            style={{
                position: "absolute",
                backgroundImage: "url('home-page@3x.png')",
                backgroundSize: "100%",
                width: "100%",
                height: "23%",
                fontSize: "24px",
                color: "#002b80",
                fontFamily: "Inter",
            }}
        >
            <Header />

            <b
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2%",
                    fontSize: "200%",
                    lineHeight: "100%",
                    color: "#000",
                    marginBottom: "2%",
                    
                }}
            >
                    2-D Quasi Compressible Model
            </b>

            <div 
                style={{
                    top: "100%",
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px",
                    width: "100%"
                }}
            >
                <QCMVideo setCase={setCaseQCM} chooseCase={chooseCaseQCM}/>
                
                <Content chooseCase={chooseCaseQCM} />
                
            </div>
        </div>
    );
};

export default QCM;
