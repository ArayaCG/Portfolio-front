export enum Type {
    Project = "project",
    Experience = "experience",
}

export interface Experience {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    date: string;
    url_deploy: string;
    image_url: string;
    logo_url: string;
    type: Type;
}

export interface ExperiencesSectionProps {
    experiences: Experience[];
    title?: string;
    type?: Type;
}

export interface ExperiencesContainerProps {
    experiences: Experience[];
    showProjects?: boolean;
    showExperiences?: boolean;
    projectsTitle?: string;
    experiencesTitle?: string;
}
