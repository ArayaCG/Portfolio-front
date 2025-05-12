export interface Skill {
    name: string;
    image: string;
    description: string;
}

export interface SkillCardProps {
    skill: Skill;
}

export interface CardInnerProps {
  $isFlipped?: boolean; 
}
