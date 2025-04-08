import type React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyle from "../../styles/globalStyles";
import ContactForm from "../../components/ContactMe/ContactMe";
import { TitleWrapper } from "../SkillSection/SkillSection.style";
import Title from "../../components/Title/Title";
import { FormData } from "../../components/ContactMe/ContactMe.type";

const ContactMeSection: React.FC = () => {
    const handleSubmit = (data: FormData) => {
        console.log("Formulario enviado:", data);
        alert("Mensaje enviado con éxito!");
    };

    return (
        <ThemeProvider theme={theme}>
            <TitleWrapper>
                <Title text="Contactame" />
            </TitleWrapper>
            <GlobalStyle />
            <div style={{ backgroundColor: "#121810", minHeight: "100vh", padding: "20px" }}>
                <ContactForm onSubmit={handleSubmit} />
            </div>
        </ThemeProvider>
    );
};

export default ContactMeSection;
