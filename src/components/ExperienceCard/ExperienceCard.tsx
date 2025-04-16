import type React from "react";
import { FiExternalLink } from "react-icons/fi";
import { Experience } from "./ExperienceCard.type";
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
} from "./ExperienceCard.styles";

const ExperienceCard: React.FC<Experience & { isSingleItem?: boolean }> = ({
    id,
    image_url,
    logo_url,
    name,
    description,
    technologies,
    url_deploy,
    type,
    date,
    isSingleItem = false,
}) => {
    const techArray = typeof technologies === "string" ? technologies.split(",").map((tech) => tech.trim()) : [];
    return (
        <CardContainer isSingleItem={isSingleItem}>
            <ExperienceImage src={logo_url} alt={`Imagen del proyecto ${name} (${id} - ${type})`} />
            <Overlay className="overlay" />
            <ContentContainer className="content">
                <ExperienceLogo src={image_url} alt={`Logo de ${name} (${date})`} />
                <Title>{name}</Title>
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
