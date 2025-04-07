import React from "react";
import SkillSection from "../section/SkillSection/SkillSection";
import { LandingPageContainer, LandingPageContainerPadding } from "./LandingPage.styles";
import { fetchSkills } from "../utils/skillService";
import ProjectsSection, { sampleExperiences } from "../section/ExperienceSection/ExperienceSection";

const LandingPage: React.FC = () => {
    return (
        <>
            <LandingPageContainer>
                <SkillSection title="Habilidades" fetchSkills={fetchSkills} />
            </LandingPageContainer>
            <LandingPageContainerPadding>
                <ProjectsSection experiences={sampleExperiences} />
            </LandingPageContainerPadding>
        </>
    );
};

export default LandingPage;
