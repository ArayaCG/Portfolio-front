import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";
import Button from "./components/Button/Button";
import Title from "./components/Title/Title";
import Icon from "./components/Icon/Icon";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Button text="Adios"></Button>
            <Title text="hola"></Title>
            <Icon
                name="FaGithub"
                color="#EBFFEE"
                size="40px"
                onClick={() => window.open("https://github.com/yourusername", "_blank")}
            />
        </ThemeProvider>
    );
}

export default App;
