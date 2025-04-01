import type React from "react";
import { useEffect, useState } from "react";
import SkillCard from "../SkillCard/SkillCard";
import type { SkillsCarouselProps } from "./SkillCarousel.type";
import {
    CarouselContainer,
    CarouselTrack,
    CarouselSection,
    CarouselInner,
    CarouselWrapper,
} from "./SkillCarousel.styles";
import { Skill } from "../SkillCard/SkillCard.type";

const SkillsCarousel: React.FC<SkillsCarouselProps> = ({ fetchSkills }) => {
    const [firstHalf, setFirstHalf] = useState<Skill[]>([]);
    const [secondHalf, setSecondHalf] = useState<Skill[]>([]);

    useEffect(() => {
        const loadSkills = async () => {
            try {
                const data = await fetchSkills();

                const midpoint = Math.ceil(data.length / 2);
                setFirstHalf(data.slice(0, midpoint));
                setSecondHalf(data.slice(midpoint));
            } catch (error) {
                console.error("Error cargando habilidades:", error);
            }
        };

        loadSkills();
    }, [fetchSkills]);

    const createInfiniteGroup = (skills: Skill[]) => {
        return [...skills, ...skills, ...skills];
    };

    return (
        <CarouselContainer>
            <CarouselInner>
                <CarouselSection>
                    <CarouselWrapper>
                        <CarouselTrack direction="left">
                            {createInfiniteGroup(firstHalf).map((skill, index) => (
                                <SkillCard key={`${skill.nombre}-${index}`} skill={skill} />
                            ))}
                        </CarouselTrack>
                    </CarouselWrapper>
                </CarouselSection>

                <CarouselSection>
                    <CarouselWrapper>
                        <CarouselTrack direction="right">
                            {createInfiniteGroup(secondHalf).map((skill, index) => (
                                <SkillCard key={`${skill.nombre}-${index}`} skill={skill} />
                            ))}
                        </CarouselTrack>
                    </CarouselWrapper>
                </CarouselSection>
            </CarouselInner>
        </CarouselContainer>
    );
};

export default SkillsCarousel;
