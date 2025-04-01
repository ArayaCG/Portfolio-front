import type React from "react";
import Title from "../components/Title/Title";
import SkillsCarousel from "../components/SkillCarousel/SkillCarousel";
import type { SkillsViewProps } from "../components/SkillCarousel/SkillCarousel.type";
import { SkillsSection, TitleWrapper } from "./SkillSection.style";

export const SkillsView: React.FC<SkillsViewProps> = ({ title = "Habilidades", fetchSkills }) => {
    return (
        <SkillsSection>
            <TitleWrapper>
                <Title text={title} />
            </TitleWrapper>
            <SkillsCarousel fetchSkills={fetchSkills} />
        </SkillsSection>
    );
};

export default SkillsView;
