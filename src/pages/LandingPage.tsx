import React from "react";
import SkillSection from "../section/SkillSection";
import { LandingPageContainer } from "./LandingPage.styles";
import { fetchSkills } from "../utils/skillService";

const LandingPage: React.FC = () => {
    return (
        <LandingPageContainer>
            <SkillSection title="Habilidades" fetchSkills={fetchSkills} />
        </LandingPageContainer>
    );
};

export default LandingPage;
