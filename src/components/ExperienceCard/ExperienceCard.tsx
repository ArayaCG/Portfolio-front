import type React from "react";
import { FiExternalLink } from "react-icons/fi";
import { Experience } from "./ExperienceCard.type";
import {
    CardContainer,
    ContentContainer,
    Description,
    Overlay,
    ProjectImage,
    ProjectLink,
    ProjectLogo,
    StackContainer,
    StackTag,
    Title,
} from "./ExperienceCard.styles";

const ProjectCard: React.FC<Experience> = ({
    id,
    image_url,
    logo_url,
    name,
    description,
    technologies,
    url_deploy,
    type,
    date,
}) => {
    return (
        <CardContainer>
            <ProjectImage src={image_url} alt={name + " " + id + " " + type} />
            <Overlay className="overlay" />
            <ContentContainer className="content">
                <ProjectLogo src={logo_url} alt={`${name} logo ${date}`} />
                <Title>{name}</Title>
                <Description>{description}</Description>
                <StackContainer>
                    {technologies.map((tech, index) => (
                        <StackTag key={index}>{tech}</StackTag>
                    ))}
                </StackContainer>
                <ProjectLink href={url_deploy} target="_blank" rel="noopener noreferrer">
                    Ver proyecto <FiExternalLink />
                </ProjectLink>
            </ContentContainer>
        </CardContainer>
    );
};

export default ProjectCard;
