import React, { useState, useEffect } from "react";
import type { IntroScreenProps, IntroScreenState } from "./IntroPage.type";
import { IntroContainer, ContentWrapper, Name, Role, EnterButton } from "./IntroPage.styles";
import EnhancedBackground from "../../components/Background/Background";
import { logVisit } from "../../services/visitService";
import { getAboutMe } from "../../services/aboutMeService";

const IntroScreen: React.FC<IntroScreenProps> = ({ onEnter }) => {
    const [aboutMeData, setAboutMeData] = useState<IntroScreenState>({ name: "", rol: "" });
    const { name, rol } = aboutMeData;

    useEffect(() => {
        const fetchAboutMe = async () => {
            try {
                const data = await getAboutMe();
                setAboutMeData({ name: data.name, rol: data.rol });
            } catch (error) {
                console.error("Error al obtener los datos de AboutMe:", error);
                setAboutMeData({ name: "Invitado", rol: "Desarrollador" });
            }
        };

        fetchAboutMe();
    }, []);

    const handleEnter = async () => {
        await logVisit();
        onEnter?.();
    };

    return (
        <EnhancedBackground backgroundColor="#121810">
            <IntroContainer>
                <ContentWrapper>
                    <Name>{name}</Name>
                    <Role>{rol}</Role>
                    <EnterButton onClick={handleEnter}>Ver Más</EnterButton>
                </ContentWrapper>
            </IntroContainer>
        </EnhancedBackground>
    );
};

export default IntroScreen;
