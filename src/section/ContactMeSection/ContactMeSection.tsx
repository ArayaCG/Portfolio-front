import type React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyle from "../../styles/globalStyles";
import ContactForm from "../../components/ContactMe/ContactMe";
import { TitleWrapper } from "../SkillSection/SkillSection.style";
import Title from "../../components/Title/Title";
import { PageContainer } from "./ContactMeSection.styles";

const ContactMeSection: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <TitleWrapper>
                <Title text="Contactame" />
            </TitleWrapper>
            <GlobalStyle />
            <PageContainer>
                <ContactForm />
            </PageContainer>
        </ThemeProvider>
    );
};

export default ContactMeSection;
