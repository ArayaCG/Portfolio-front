import React from "react";
import SkillSection from "../section/SkillSection/SkillSection";
import { LandingPageContainer, LandingPageContainerPadding } from "./LandingPage.styles";
import { fetchSkills } from "../utils/skillService";
import ProjectsSection, { sampleExperiences } from "../section/ExperienceSection/ExperienceSection";
import EducationSection, { EducationData } from "../section/EducationSection/EducationSection";
import ContactMeSection from "../section/ContactMeSection/ContactMeSection";
import AboutMeSection from "../section/AboutMeSection/AboutMeSection";

const LandingPage: React.FC = () => {
    return (
        <>
            <LandingPageContainerPadding>
                <AboutMeSection />
            </LandingPageContainerPadding>
            <LandingPageContainer>
                <SkillSection title="Habilidades" fetchSkills={fetchSkills} />
            </LandingPageContainer>
            <LandingPageContainerPadding>
                <ProjectsSection experiences={sampleExperiences} />
                <EducationSection educations={EducationData} />
                <ContactMeSection />
            </LandingPageContainerPadding>
        </>
    );
};

export default LandingPage;
