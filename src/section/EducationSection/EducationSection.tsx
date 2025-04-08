import EducationCard from "../../components/EducationCard/EducationCard";
import Title from "../../components/Title/Title";
import { SectionContainer } from "../ExperienceSection/ExperienceSection.styles";
import { TitleWrapper } from "../SkillSection/SkillSection.style";
import { CardsGrid } from "./EducationSection.styles";
import { EducationSectionProps } from "./EducationSection.type";

export const EducationData = [
    {
      id: 1,
      name: "Full Stack Web Developer",
      description: "Henry Bootcamp",
      year: "2024",
      image_url: "/public/SharpPixAI 1.png",
    },
    {
      id: 2,
      name: "Full Stack Web Developer",
      description: "Henry Bootcamp",
      year: "2024",
      image_url: "/public/SharpPixAI 1.png",
    },
    {
      id: 3,
      name: "Full Stack Web Developer",
      description: "Henry Bootcamp",
      year: "2024",
      image_url: "/public/SharpPixAI 1.png",
    },
    {
      id: 4,
      name: "Full Stack Web Developer",
      description: "Henry Bootcamp",
      year: "2024",
      image_url: "/public/SharpPixAI 1.png",
    },
  ]

const EducationSection: React.FC<EducationSectionProps> = ({ title = "Educación", educations }) => {
    return (
        <SectionContainer>
            <TitleWrapper>
                <Title text={title} />
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
