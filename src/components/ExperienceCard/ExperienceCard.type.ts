import { ReactNode } from "react";

export enum Type {
    PROJECT = "project",
    WORK = "work",
}

export interface Experience {
    id: number;
    name: string;
    description: string;
    technologies: string;
    date: string;
    url_deploy: string;
    image_url: string;
    logo_url: string;
    type: Type;
    isSingleItem?: boolean;
}

export interface ExperiencesSectionProps {
    experiences: Experience[];
    title?: string;
    type?: Type;
}

export interface ExperiencesContainerProps {
    experiences?: Experience[];
    showProjects?: boolean;
    showExperiences?: boolean;
    experiencesTitle?: string;
    projectsTitle?: string;
    children?: ReactNode;
}

export interface CardContainerProps {
    isSingleItem?: boolean;
}

export interface ExperienceGridProps {
    itemCount?: number;
}