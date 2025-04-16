import React from "react";
import SkillCard from "../SkillCard/SkillCard";
import type { SkillsCarouselProps } from "./SkillCarousel.type";
import {
    CarouselContainer,
    CarouselTrack,
    CarouselSection,
    CarouselInner,
    CarouselWrapper,
} from "./SkillCarousel.styles";

const SkillsCarousel: React.FC<SkillsCarouselProps> = ({ skills }) => {
    const midpoint = Math.ceil(skills.length / 2);
    const firstHalf = skills.slice(0, midpoint);
    const secondHalf = skills.slice(midpoint);

    const createInfiniteGroup = (skillsSubset: typeof skills) => [...skillsSubset, ...skillsSubset, ...skillsSubset];

    return (
        <CarouselContainer>
            <CarouselInner>
                <CarouselSection>
                    <CarouselWrapper>
                        <CarouselTrack direction="left">
                            {createInfiniteGroup(firstHalf).map((skill, index) => (
                                <SkillCard key={`${skill.name}-${index}`} skill={skill} />
                            ))}
                        </CarouselTrack>
                    </CarouselWrapper>
                </CarouselSection>

                <CarouselSection>
                    <CarouselWrapper>
                        <CarouselTrack direction="right">
                            {createInfiniteGroup(secondHalf).map((skill, index) => (
                                <SkillCard key={`${skill.name}-${index}`} skill={skill} />
                            ))}
                        </CarouselTrack>
                    </CarouselWrapper>
                </CarouselSection>
            </CarouselInner>
        </CarouselContainer>
    );
};

export default SkillsCarousel;
