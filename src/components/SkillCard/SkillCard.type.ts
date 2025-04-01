export interface Skill {
    nombre: string;
    imagen: string;
    nombreIcono: string;
}

export interface SkillCardProps {
    skill: Skill;
}

export interface CardInnerProps {
    isFlipped: boolean;
}
