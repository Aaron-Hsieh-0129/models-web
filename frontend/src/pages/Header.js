import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import styled from 'styled-components';
import { Popper, Paper, MenuList } from '@material-ui/core';
import { Button } from "@mui/material";

const Navbar = styled.div`
    margin-top: 3%;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    color: #000;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const NavItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    font-size: 19px;
    color: #000;
    margin: 5px 0;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;

    @media (max-width: 768px) {
        margin-top: 10px; /* Adjust margin for smaller screens if needed */
    }
`;

const HeaderTitle = styled.b`
    color: #002b80;
    font-size: 120%;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 100%; /* Adjust font size for smaller screens if needed */
    }
`;

const UL = styled.div`
    display: block;
    text-decoration: none;
    color: #000;
    padding: 10px 15px;
    border-bottom: 3px solid transparent;

    :hover {
        color: #a1bad0;
        border-bottom: 3px solid #a1bad0;
    }
`;

const RunButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 19px;
    border: 0.1rem solid #32a1ce;
    border-radius: 5%;
    cursor: pointer;
    background: none;
    margin: 5px 0;

    @media (max-width: 768px) {
        font-size: 16px;
        padding: 5px 10px;
    }

    div {
        color: #32a1ce;
        padding: 10px 15px;
    }
`;

const handleButtonOnClick = () => {
    console.log("clicked");
    return;
};

const Header = () => {
    const navigate = useNavigate();
    const onAtmosphericModelsClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const onDocCSSWMClick = useCallback(() => {
        window.open('https://aaron-hsieh-0129.github.io/documentation-of-CSSWM/html/index.html');
    });

    const onDoc2DVVMClick = useCallback(() => {
        window.open('https://aaron-hsieh-0129.github.io/2D-Vector-Vorticity-Model/index.html');
    });

    const onReferencesListClick = useCallback(() => {
        navigate("/references"); // Navigate to the References List page
    }, [navigate]);

    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [hoverNow, setHoverNow] = useState();

    const handleMenuOpen = (event) => {
        const { currentTarget } = event;
        setHoverNow(currentTarget.innerHTML);
        setOpen(true);
        setAnchorEl(currentTarget);
    };

    const handleMenuClose = () => {
        setOpen(false);
        setAnchorEl(null);
    };

    const popperOut = () => {
        if (hoverNow === "Introduction") {
            return (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Button key={1} onClick={handleMenuClose} style={{ color: "black", textTransform: "none" }}>
                        Unavailable Now
                    </Button>
                    <Button key={2} onClick={handleMenuClose} style={{ color: "black", textTransform: "none" }}>
                        Unavailable Now
                    </Button>
                </div>
            );
        } else if (hoverNow === "Documentation") {
            return (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Button key={3} onClick={onDocCSSWMClick} style={{ color: "black", textTransform: "none" }}>
                        Cubed Sphere Shallow Water Model
                    </Button>
                    <Button key={4} onClick={onDoc2DVVMClick} style={{ color: "black", textTransform: "none" }}>
                        2D Vector Vorticity Model
                    </Button>
                </div>
            );
        } else if (hoverNow === "References") {
            return (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Button key={5} onClick={onReferencesListClick} style={{ color: "black", textTransform: "none" }}>
                        References List
                    </Button>
                    {/* <Button key={6} onClick={handleMenuClose} style={{ color: "black", textTransform: "none" }}>
                        Unavailable Now
                    </Button> */}
                </div>
            );
        }
    };

    return (
        <Navbar onMouseLeave={handleMenuClose}>
            <NavItem onClick={onAtmosphericModelsClick}>
                <CenteredContainer>
                    <HeaderTitle>NextACC</HeaderTitle>
                </CenteredContainer>
            </NavItem>
            <NavItem>
                <UL key="Introduction" onMouseOver={handleMenuOpen}>Introduction</UL>
            </NavItem>
            <NavItem>
                <UL key="Documentation" onMouseOver={handleMenuOpen}>Documentation</UL>
            </NavItem>
            <NavItem>
                <UL key="References" onMouseOver={handleMenuOpen}>References</UL>
            </NavItem>
            <RunButton onClick={handleButtonOnClick}>
                <div key="Run">Run Models</div>
            </RunButton>
            <Popper open={open} anchorEl={anchorEl} id="menu-list-grow" onMouseLeave={handleMenuClose}>
                <Paper>
                    <MenuList>
                        {popperOut()}
                    </MenuList>
                </Paper>
            </Popper>
        </Navbar>
    );
};

export default Header;
