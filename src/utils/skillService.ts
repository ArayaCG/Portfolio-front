import type { Skill } from "../components/SkillCard/SkillCard.type";
import skillsData from "./data.json";

export const fetchSkills = async (): Promise<Skill[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(skillsData.skills);
        }, 300);
    });
};

export const fetchSkillsBackend = async (): Promise<Skill[]> => {
    try {
        const response = await fetch("https://localhost:3000/skills");

        if (!response.ok) {
            throw new Error("Error al obtener las habilidades");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en el servicio de habilidades:", error);
        return [];
    }
};
