import type React from "react";
import type { FooterProps } from "./Footer.type";
import { FooterContainer, Copyright, Name, SocialContainer, SocialLink } from "./Footer.styles";
import Icon from "../Icon/Icon";

const Footer: React.FC<FooterProps> = ({ name, year = new Date().getFullYear(), socialLinks }) => {
    return (
        <FooterContainer>
            <Copyright>© {year} PORFOLIO. All rights reserved</Copyright>

            <Name>{name}</Name>

            <SocialContainer>
                {socialLinks?.github && (
                    <SocialLink href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                        <Icon name="FaGithub" size="28px" />
                    </SocialLink>
                )}

                {socialLinks?.linkedin && (
                    <SocialLink href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <Icon name="FaLinkedin" size="28px" />
                    </SocialLink>
                )}
            </SocialContainer>
        </FooterContainer>
    );
};

export default Footer;
