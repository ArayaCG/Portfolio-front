import { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";
import LandingPage from "./pages/landing/LandingPage";
import IntroScreen from "./pages/Intro/IntroPage";
import { AnimatePresence, motion } from "framer-motion";

function App() {
    const [showIntro, setShowIntro] = useState(true);

    const handleEnter = () => {
        setShowIntro(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    >
                        <IntroScreen
                            name="Cristian Gabriel Araya Salattino"
                            role="Desarrollador Web"
                            onEnter={handleEnter}
                        />
                    </motion.div>
                )}
                {!showIntro && (
                    <motion.div
                        key="landing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
                    >
                        <LandingPage />
                    </motion.div>
                )}
            </AnimatePresence>
        </ThemeProvider>
    );
}

export default App;
