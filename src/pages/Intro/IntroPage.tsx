import type React from "react";
import type { IntroScreenProps } from "./IntroPage.type";
import { IntroContainer, ContentWrapper, Name, Role, EnterButton } from "./IntroPage.styles";
import EnhancedBackground from "../../components/Background/Background";

const IntroScreen: React.FC<IntroScreenProps> = ({ name, role, onEnter }) => {
    const handleEnter = () => {
        if (onEnter) {
            onEnter();
        }
    };

    return (
        <EnhancedBackground backgroundColor="#121810">
            <IntroContainer>
                <ContentWrapper>
                    <Name>{name}</Name>
                    <Role>{role}</Role>
                    <EnterButton onClick={handleEnter}>Ver Más</EnterButton>
                </ContentWrapper>
            </IntroContainer>
        </EnhancedBackground>
    );
};

export default IntroScreen;
