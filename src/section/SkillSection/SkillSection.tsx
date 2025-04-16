import React from "react";
import Title from "../../components/Title/Title";
import SkillsCarousel from "../../components/SkillCarousel/SkillCarousel";
import { SkillsSection, TitleWrapper } from "./SkillSection.style";
import { useSkills } from "../../hooks/useSkill";

const SkillsView: React.FC = () => {
    const { skills, loading, error } = useSkills();
    

    return (
        <SkillsSection>
            <TitleWrapper>
                <Title text="Habilidades" />
            </TitleWrapper>

            {loading && <p>Cargando habilidades...</p>}
            {error && <p>Error al cargar habilidades: {error.message}</p>}
            {!loading && !error && <SkillsCarousel skills={skills} />}
        </SkillsSection>
    );
};

export default SkillsView;
