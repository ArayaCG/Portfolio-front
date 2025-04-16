import type { Skill } from "../SkillCard/SkillCard.type";

export interface SkillsCarouselProps {
    skills: Skill[];
}

export interface SkillsViewProps {
    title?: string;
    fetchSkills: () => Promise<Skill[]>;
}

export interface CarouselTrackProps {
    direction: "left" | "right";
}
