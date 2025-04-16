import { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";
import LandingPage from "./pages/landing/LandingPage";
import IntroScreen from "./pages/Intro/IntroPage";

function App() {
    const [showIntro, setShowIntro] = useState(true);

    const handleEnter = () => {
        setShowIntro(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {showIntro ? (
                <IntroScreen name="Cristian Gabriel Araya Salattino" role="Desarrollador Web" onEnter={handleEnter} />
            ) : (
                <LandingPage />
            )}
        </ThemeProvider>
    );
}

export default App;
