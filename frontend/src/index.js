import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import {
    CssBaseline,
    ThemeProvider,
    createTheme,
    StyledEngineProvider,
} from "@mui/material";

const muiTheme = createTheme();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <HashRouter>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={muiTheme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
