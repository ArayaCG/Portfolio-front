import type React from "react";
import { BoldText, RegularText } from "../../styles/typography";
import { CardContainer, ContentContainer, Logo, LogoContainer, YearText } from "./EducationCard.styles";
import type { Education } from "./EducationCard.type";

const EducationCard: React.FC<Education> = ({ name, description, year, image_url }) => {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.src = "/placeholder.svg?height=80&width=80";
        target.classList.add("image-error");
    };

    return (
        <CardContainer>
            <LogoContainer>
                <Logo
                    src={image_url}
                    alt={`Logo de ${name}`}
                    onError={handleImageError}
                    loading="lazy"
                />
            </LogoContainer>
            <ContentContainer>
                <BoldText>{name}</BoldText>
                <RegularText>{description}</RegularText>
                <YearText>{year}</YearText>
            </ContentContainer>
        </CardContainer>
    );
};

export default EducationCard;
