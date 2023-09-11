import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import QCM from "./pages/QCM";
import CSSWM from "./pages/CSSWM";
import VVM from "./pages/VVM";
import OurWork from "./pages/OurWork";
import DocCSSWM from "./pages/Documentation/DocCSSWM";
import { useEffect } from "react";

function App() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
    if (action !== "POP") {
        window.scrollTo(0, 0);
    }
    }, [action, pathname]);

    useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
        case "/":
            title = "";
            metaDescription = "";
            break;
        case "/qcm":
            title = "";
            metaDescription = "";
            break;
        case "/csswm":
            title = "";
            metaDescription = "";
            break;
        case "/vvm":
            title = "";
            metaDescription = "";
            break;
        case "/our-work":
            title = "";
            metaDescription = "";
            break;
        default:
            break;
    }

    if (title) {
        document.title = title;
    }

    if (metaDescription) {
        const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
        );
        if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
        }
    }
    }, [pathname]);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/qcm" element={<QCM />} />

            <Route path="/csswm" element={<CSSWM />} />

            <Route path="/vvm" element={<VVM />} />

            <Route path="/our-work" element={<OurWork />} />

            <Route path="/doc-csswm" element={<DocCSSWM />} />
        </Routes>
    );
}
export default App;