import React from "react";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { Type } from "../../components/ExperienceCard/ExperienceCard.type";
import Title from "../../components/Title/Title";
import { ExperienceGrid, SectionContainer, TitleWrapper } from "./ExperienceSection.styles";
import SectionDivider from "../../components/SectionDivider/SectionDivider";
import { useExperiences } from "../../hooks/useExperience";

const ExperiencesContainer: React.FC = () => {
    const { experiences, loading, error } = useExperiences();

    if (loading) return <p>Cargando experiencias...</p>;
    if (error) return <p>Hubo un error 😢</p>;

    const projects = experiences.filter((exp) => exp.type === Type.PROJECT);
    const workExperiences = experiences.filter((exp) => exp.type === Type.WORK);

    return (
        <>
            {workExperiences.length > 0 && (
                <SectionContainer>
                    <TitleWrapper>
                        <Title text="Experiencia Laboral" />
                    </TitleWrapper>
                    <ExperienceGrid $itemCount={workExperiences.length}>
                        {workExperiences.map((experience) => (
                            <ExperienceCard
                                key={experience.id}
                                {...experience}
                                $isSingleItem={workExperiences.length === 1}
                            />
                        ))}
                    </ExperienceGrid>
                </SectionContainer>
            )}
            <SectionDivider />
            {projects.length > 0 && (
                <SectionContainer>
                    <TitleWrapper>
                        <Title text="Proyectos" />
                    </TitleWrapper>
                    <ExperienceGrid $itemCount={projects.length}>
                        {projects.map((project) => (
                            <ExperienceCard key={project.id} {...project} $isSingleItem={projects.length === 1} />
                        ))}
                    </ExperienceGrid>
                </SectionContainer>
            )}
        </>
    );
};

export default ExperiencesContainer;
