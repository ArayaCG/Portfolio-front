import { BoldText, RegularText } from "../../styles/typography";
import { CardContainer, ContentContainer, LinkText, Logo, LogoContainer, YearText } from "./EducationCard.styles";
import { Education } from "./EducationCard.type";

const EducationCard: React.FC<Education> = ({ name, description, year, image_url }) => {
    return (
        <CardContainer>
            <LogoContainer>
                <Logo src={image_url} alt={name} />
            </LogoContainer>
            <ContentContainer>
                <BoldText>{name}</BoldText>
                <RegularText>{description}</RegularText>
                <YearText>{year}</YearText>
                <LinkText>LINK (certificado)</LinkText>
            </ContentContainer>
        </CardContainer>
    );
};

export default EducationCard;
