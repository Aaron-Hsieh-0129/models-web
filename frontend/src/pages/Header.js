import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import styled from 'styled-components';
import { Popper, Paper, MenuList } from '@material-ui/core';
import { Button } from "@mui/material";


const UL = styled.div`
    display:block;
    text-decoration:none;
    color:#000;
    padding:10px 15px;
    border-bottom:3px solid transparent;/*試試把此段拿掉，滑鼠移入選單.header背景會跳動*/
    
    :hover {
        color:#a1bad0;
        border-bottom:3px solid #a1bad0;
    }
`;

const handleButtonOnClick = () => {
    console.log("clicked")
    return;
}

const Header = () => {
    const navigate = useNavigate();
    const onAtmosphericModelsClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    // const onDocCSSWMClick = useCallback(() => {
    //     navigate("/doc-csswm");
    //     setOpen(false);
    //     setAnchorEl(null);
    // }, [navigate]);

    // eslint-disable-next-line
    const onDocCSSWMClick = useCallback(() => {
        window.open('https://aaron-hsieh-0129.github.io/documentation-of-CSSWM/html/index.html');
    })

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        const { currentTarget } = event;
        setHoverNow(currentTarget.innerHTML)
        setOpen(true);
        setAnchorEl(currentTarget);
        return;
    }

    const handleMenuClose = () => {
        setOpen(false);
        setAnchorEl(null);
        return;
    }

    const [hoverNow, setHoverNow] = useState();

    const popperOut = () => {
        if (hoverNow === "Introduction") {
            return (
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Button key={1} onClick={handleMenuClose} style={{color: "black", textTransform: "none"}}>
                        pppp
                    </Button>
                    <Button key={2} onClick={handleMenuClose} style={{color: "black", textTransform: "none"}} >
                        qqqq
                    </Button>
                </div>
            )
        }
        else if (hoverNow === "Documentation") {
            return (
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Button key={3} onClick={onDocCSSWMClick} style={{color: "black", textTransform: "none"}}>
                        Cubed Sphere Shallow Water Model
                    </Button>
                    <Button key={4} onClick={handleMenuClose} style={{color: "black", textTransform: "none"}} >
                        2D Vector Vorticity Model
                    </Button>
                </div>
            )
        }
        else if (hoverNow === "About") {
            return (
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Button key={5} onClick={handleMenuClose} style={{color: "black", textTransform: "none"}} >
                        E
                    </Button>
                    <Button key={6} onClick={handleMenuClose} style={{color: "black", textTransform: "none"}} >
                        F
                    </Button>
                </div>
            )
        }
    }

    return (
        <div
            style={{
                marginTop: "3%",
                display: "flex",
                width: "100%",
                justifyContent: "space-evenly",
            }}
            onMouseLeave={handleMenuClose}
        >
            
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", cursor: "pointer" }} onClick={onAtmosphericModelsClick}><b>Atmospheric Models</b></div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500", fontSize: "19px", color: "#000"}}>
                <UL key="Introduction" onMouseOver={handleMenuOpen}>Introduction</UL>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500", fontSize: "19px", color: "#000"}}>
                <UL key="Documentation" onMouseOver={handleMenuOpen}>Documentation</UL>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500", fontSize: "19px", color: "#000"}}>
                <UL key="About" onMouseOver={handleMenuOpen}>About</UL>
            </div>

            <button style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500", fontSize: "19px", border: "0.1rem solid #32a1ce", borderRadius: "5%", cursor: "pointer"}} onClick={handleButtonOnClick}>
                <div style={{color: "#32a1ce", padding: "10px 15px"}} key="Run">Run Models</div>
            </button>

            <Popper open={open} anchorEl={anchorEl} id="menu-list-grow" onMouseLeave={handleMenuClose}> 
                <Paper>
                    <MenuList>
                        {
                            popperOut()
                        }
                    </MenuList>
                </Paper>
            </Popper>

        </div>
    )
}

export default Header;