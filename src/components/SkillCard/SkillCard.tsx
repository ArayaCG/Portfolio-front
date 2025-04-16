import React, { useState } from "react";
import type { IconType } from "react-icons";
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";
import * as Di from "react-icons/di";
import { FaQuestion } from "react-icons/fa"; 
import type { SkillCardProps } from "./SkillCard.type";
import {
    CardContainer,
    CardInner,
    CardFront,
    CardBack,
    SkillName,
    IconWrapper,
    ImageWrapper,
} from "./SkillCard.styles";

const defaultImage = "/src/assets/nestjs.svg";

const getIconComponent = (iconName: string): IconType | null => {
    const iconCollections = { ...Fa, ...Si, ...Di };
    return iconCollections[iconName as keyof typeof iconCollections] || null;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const IconComponent = getIconComponent(skill.description);

    return (
        <CardContainer onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <CardInner isFlipped={isFlipped}>
                <CardFront>
                    <IconWrapper>{IconComponent ? <IconComponent /> : <FaQuestion />}</IconWrapper>
                </CardFront>
                <CardBack>
                    <ImageWrapper>
                        <img
                            src={skill.image || defaultImage}
                            alt={skill.name}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = defaultImage;
                            }}
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                        />
                    </ImageWrapper>
                    <SkillName>{skill.name}</SkillName>
                </CardBack>
            </CardInner>
        </CardContainer>
    );
};

export default SkillCard;
