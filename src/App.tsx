import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <LandingPage />
        </ThemeProvider>
    );
}

export default App;
