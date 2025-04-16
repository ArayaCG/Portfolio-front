import EducationCard from "../../components/EducationCard/EducationCard";
import Title from "../../components/Title/Title";
import { SectionContainer } from "../ExperienceSection/ExperienceSection.styles";
import { TitleWrapper } from "../SkillSection/SkillSection.style";
import { CardsGrid } from "./EducationSection.styles";
import { useEducations } from "../../hooks/useEducations";

const EducationSection: React.FC = () => {
    const { educations, loading, error } = useEducations();

    if (loading) return <p>Cargando educación...</p>;
    if (error) return <p>Error al cargar educación 😢</p>;

    return (
        <SectionContainer>
            <TitleWrapper>
                <Title text="Educación" />
            </TitleWrapper>
            <CardsGrid>
                {educations.map((education) => (
                    <EducationCard key={education.id} {...education} />
                ))}
            </CardsGrid>
        </SectionContainer>
    );
};

export default EducationSection;
