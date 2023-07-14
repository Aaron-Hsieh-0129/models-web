import Header from "./Header";
import { useState } from "react";
import Content from "./csswmContent";
import VVMVideo from "./vvmVideo";

const CSSWM = () => {
    const [chooseCaseVVM, setCaseVVM] = useState('Dry');

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
                    2-D Vector Vorticity Model
            </b>

            <div 
                style={{
                    top: "100%",
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px"
                }}
            >
                <VVMVideo setCase={setCaseVVM} chooseCase={chooseCaseVVM}/>
                {/* <CsswmVideo setCase={setCase} chooseCase={chooseCase}/> */}
                
                {/* <Content chooseCase={chooseCase} /> */}
                
            </div>
        </div>
    );
};

export default CSSWM;
