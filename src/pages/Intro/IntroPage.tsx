import type React from "react";
import type { IntroScreenProps } from "./IntroPage.type";
import { IntroContainer, ContentWrapper, Name, Role, EnterButton, BackgroundPattern } from "./IntroPage.styles";

const IntroScreen: React.FC<IntroScreenProps> = ({ name, role, onEnter }) => {
    const handleEnter = () => {
        if (onEnter) {
            onEnter();
        }
    };

    return (
        <IntroContainer>
            <BackgroundPattern />
            <ContentWrapper>
                <Name>{name}</Name>
                <Role>{role}</Role>
                <EnterButton onClick={handleEnter}>Ver Más</EnterButton>
            </ContentWrapper>
        </IntroContainer>
    );
};

export default IntroScreen;
