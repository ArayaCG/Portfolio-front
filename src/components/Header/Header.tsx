import type React from "react";
import type { HeaderProps } from "./Header.type";
import { HeaderContainer, LogoContainer, SideItem } from "./Header.styles";
import Icon from "../Icon/Icon";

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
    const handleEmailClick = () => {
        if (onContactClick) {
            onContactClick();
        } else {
            const contactSection = document.getElementById("contact-section");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <HeaderContainer>
            <SideItem onClick={handleEmailClick}>
                <Icon name="FaEnvelope" size="32px" />
            </SideItem>

            <LogoContainer onClick={handleLogoClick}>
                <Icon name="FaSun" size="32px" />
            </LogoContainer>

            <SideItem>
                <Icon name="FaLeaf" size="32px" />
            </SideItem>
        </HeaderContainer>
    );
};

export default Header;
