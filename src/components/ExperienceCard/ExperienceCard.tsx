import type React from "react";
import { FiExternalLink } from "react-icons/fi";
import type { Experience } from "./ExperienceCard.type";
import {
    CardContainer,
    ContentContainer,
    Description,
    Overlay,
    ExperienceImage,
    ExperienceLink,
    ExperienceLogo,
    StackContainer,
    StackTag,
    Title,
    ImageWrapper,
    HeaderContainer,
} from "./ExperienceCard.styles";

const ExperienceCard: React.FC<Experience & { $isSingleItem?: boolean }> = ({
    id,
    image_url,
    logo_url,
    name,
    description,
    technologies,
    url_deploy,
    type,
    date,
    $isSingleItem = false,
}) => {
    const techArray = typeof technologies === "string" ? technologies.split(",").map((tech) => tech.trim()) : [];
    return (
        <CardContainer $isSingleItem={$isSingleItem}>
            <ImageWrapper>
                <ExperienceImage
                    src={logo_url || "/placeholder.svg"}
                    alt={`Imagen del proyecto ${name} (${id} - ${type})`}
                />
                <Overlay className="overlay" />
            </ImageWrapper>
            <ContentContainer className="content">
                <HeaderContainer>
                    <ExperienceLogo src={image_url} alt={`Logo de ${name} (${date})`} />
                    <Title>{name}</Title>
                </HeaderContainer>
                <Description>{description}</Description>
                <StackContainer>
                    {techArray.map((tech, index) => (
                        <StackTag key={`${tech}-${index}`}>{tech}</StackTag>
                    ))}
                </StackContainer>
                <ExperienceLink href={url_deploy} target="_blank" rel="noopener noreferrer">
                    Ver proyecto <FiExternalLink />
                </ExperienceLink>
            </ContentContainer>
        </CardContainer>
    );
};

export default ExperienceCard;
