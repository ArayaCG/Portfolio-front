import type React from "react";
import { useState } from "react";
import type { IconType } from "react-icons";
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";
import * as Di from "react-icons/di";
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

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const getIconComponent = (iconName: string): IconType | null => {
        const iconCollections = { ...Fa, ...Si, ...Di };
        return iconCollections[iconName as keyof typeof iconCollections] || null;
    };

    const IconComponent = getIconComponent(skill.nombreIcono);

    return (
        <CardContainer onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <CardInner isFlipped={isFlipped}>
                <CardFront>
                    <IconWrapper>{IconComponent ? <IconComponent /> : null}</IconWrapper>
                </CardFront>
                <CardBack>
                    <ImageWrapper>
                        <img
                            src={skill.imagen || "/placeholder.svg"}
                            alt={skill.nombre}
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                        />
                    </ImageWrapper>
                    <SkillName>{skill.nombre}</SkillName>
                </CardBack>
            </CardInner>
        </CardContainer>
    );
};

export default SkillCard;
