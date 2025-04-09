import type React from "react";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { ProfileProps } from "./AboutMe.type";
import {
    ButtonContainer,
    ContentContainer,
    Description,
    FirstName,
    HighlightedText,
    ImageContainer,
    LastName,
    NameContainer,
    ProfileContainer,
    ProfileImage,
    Role,
    SocialContainer,
    SocialLink,
} from "./AboutMe.styles";

const ProfileHero: React.FC<ProfileProps> = ({ profileData, onDownloadCV }) => {
    const nameParts = profileData.name.split(" ");
    const firstName = nameParts.slice(0, 2).join(" ");
    const lastName = nameParts.slice(2).join(" ");

    const highlightKeywords = (text: string): React.ReactNode => {
        const keywords = [
            "Full Stack Developer",
            "backend",
            "metodologías ágiles",
            "git",
            "estructuras de datos",
            "algoritmos",
            "frameworks CSS",
            "NestJS",
            "React",
            "Express",
            "PostgreSQL",
            "MongoDB",
            "JavaScript",
            "TypeScript",
        ];

        let highlightedText = text;

        keywords.forEach((keyword) => {
            const regex = new RegExp(`(${keyword})`, "gi");
            highlightedText = highlightedText.replace(regex, (match) => `<highlight>${match}</highlight>`);
        });

        const parts = highlightedText.split(/<highlight>|<\/highlight>/);

        return parts.map((part, index) => {
            return index % 2 === 0 ? part : <HighlightedText key={index}>{part}</HighlightedText>;
        });
    };

    return (
        <ProfileContainer>
            <ImageContainer>
                <ProfileImage src={profileData.image || "/placeholder.svg"} alt={profileData.name} />
            </ImageContainer>

            <ContentContainer>
                <NameContainer>
                    <FirstName>{firstName}</FirstName>
                    <LastName>{lastName}</LastName>
                </NameContainer>

                <Role>{profileData.rol}</Role>

                <SocialContainer>
                    {profileData.socialLinks?.github && (
                        <SocialLink href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer">
                            <Icon name="FaGithub" size="32px" />
                        </SocialLink>
                    )}

                    {profileData.socialLinks?.linkedin && (
                        <SocialLink href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <Icon name="FaLinkedin" size="32px" />
                        </SocialLink>
                    )}

                    <ButtonContainer>
                        <Button text="Descargar CV" onClick={onDownloadCV} />
                    </ButtonContainer>
                </SocialContainer>

                <Description>{highlightKeywords(profileData.description)}</Description>
            </ContentContainer>
        </ProfileContainer>
    );
};

export default ProfileHero;
