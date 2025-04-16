import type React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyle from "../../styles/globalStyles";
import ContactForm from "../../components/ContactMe/ContactMe";
import { TitleWrapper } from "../SkillSection/SkillSection.style";
import Title from "../../components/Title/Title";
import { FormData } from "../../components/ContactMe/ContactMe.type";
import { PageContainer } from "./ContactMeSection.styles";
import { sendContactForm } from "../../services/contactMeService";

const ContactMeSection: React.FC = () => {
    const handleSubmit = (data: FormData) => {
        sendContactForm(data)
            .then(() => {
                alert("Mensaje enviado con éxito!");
            })
            .catch((error) => {
                console.error("Error al enviar el formulario:", error);
                alert("Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.");
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <TitleWrapper>
                <Title text="Contactame" />
            </TitleWrapper>
            <GlobalStyle />
            <PageContainer>
                <ContactForm onSubmit={handleSubmit} />
            </PageContainer>
        </ThemeProvider>
    );
};

export default ContactMeSection;
