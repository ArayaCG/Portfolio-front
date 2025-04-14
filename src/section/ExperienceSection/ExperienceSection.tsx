import React from "react";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { Experience, ExperiencesContainerProps, Type } from "../../components/ExperienceCard/ExperienceCard.type";
import Title from "../../components/Title/Title";
import { ExperienceGrid, SectionContainer, TitleWrapper } from "./ExperienceSection.styles";
import SectionDivider from "../../components/SectionDivider/SectionDivider";

export const sampleExperiences: Experience[] = [
    {
        id: 1,
        name: "CatTasks",
        description:
            "Proyecto final del bootcamp de Henry, enfocado en desarrollar una plataforma de gestión y estimación de tareas para equipos de desarrollo de software. Esta solución ofrece una experiencia más integrada y colaborativa, permitiendo la creación y seguimiento de tareas.",
        technologies: [
            "NestJS",
            "TypeScript",
            "TypeORM",
            "Swagger",
            "Docker",
            "Cloudinary",
            "Mailchimp",
            "Nodemailer",
            "PostgreSQL",
            "Jira",
            "Git",
        ],
        date: "2024-03",
        url_deploy: "https://github.com/",
        image_url: "/public/Screenshot 2025-03-27 at 3.37.47 PM.png",
        logo_url: "/public/SharpPixAI 1.png",
        type: Type.Project,
    },
    {
        id: 2,
        name: "Pixel Art Studio",
        description: "Editor de pixel art con herramientas avanzadas y exportación en múltiples formatos.",
        technologies: ["JavaScript", "Canvas API", "Firebase"],
        date: "2024-02",
        url_deploy: "https://codepen.io/",
        image_url: "/public/Screenshot 2025-03-27 at 3.37.47 PM.png",
        logo_url: "/public/SharpPixAI 1.png",
        type: Type.Project,
    },
    {
        id: 2,
        name: "Pixel Art Studio",
        description: "Editor de pixel art con herramientas avanzadas y exportación en múltiples formatos.",
        technologies: ["JavaScript", "Canvas API", "Firebase"],
        date: "2024-02",
        url_deploy: "https://codepen.io/",
        image_url: "/public/Screenshot 2025-03-27 at 3.37.47 PM.png",
        logo_url: "/public/SharpPixAI 1.png",
        type: Type.Project,
    },
    {
        id: 3,
        name: "EcoTracker",
        description: "Aplicación para monitorear y reducir tu huella de carbono con recomendaciones personalizadas.",
        technologies: ["React Native", "GraphQL", "AWS"],
        date: "2024-01",
        url_deploy: "https://gitlab.com/",
        image_url: "/public/Screenshot 2025-03-27 at 3.37.47 PM.png",
        logo_url: "/public/SharpPixAI 1.png",
        type: Type.Experience,
    },
];

const ExperiencesContainer: React.FC<ExperiencesContainerProps> = ({
    experiences = sampleExperiences,
    showProjects = true,
    showExperiences = true,
    experiencesTitle = "Experiencia Laboral",
    projectsTitle = "Proyectos",
}) => {
    const projects = experiences.filter((exp) => exp.type === Type.Project);
    const workExperiences = experiences.filter((exp) => exp.type === Type.Experience);

    return (
        <>
            {showExperiences && workExperiences.length > 0 && (
                <SectionContainer>
                    <TitleWrapper>
                        <Title text={experiencesTitle} />
                    </TitleWrapper>
                    <ExperienceGrid itemCount={workExperiences.length}>
                        {workExperiences.map((experience) => (
                            <ExperienceCard
                                key={experience.id}
                                id={experience.id}
                                image_url={experience.image_url}
                                logo_url={experience.logo_url}
                                name={experience.name}
                                description={experience.description}
                                technologies={experience.technologies}
                                url_deploy={experience.url_deploy}
                                date={experience.date}
                                type={experience.type}
                                isSingleItem={workExperiences.length === 1}
                            />
                        ))}
                    </ExperienceGrid>
                </SectionContainer>
            )}
            <SectionDivider />
            {showProjects && projects.length > 0 && (
                <SectionContainer>
                    <TitleWrapper>
                        <Title text={projectsTitle} />
                    </TitleWrapper>
                    <ExperienceGrid itemCount={projects.length}>
                        {projects.map((project) => (
                            <ExperienceCard
                                key={project.id}
                                id={project.id}
                                image_url={project.image_url}
                                logo_url={project.logo_url}
                                name={project.name}
                                description={project.description}
                                technologies={project.technologies}
                                url_deploy={project.url_deploy}
                                date={project.date}
                                type={project.type}
                                isSingleItem={projects.length === 1}
                            />
                        ))}
                    </ExperienceGrid>
                </SectionContainer>
            )}
        </>
    );
};

export default ExperiencesContainer;
