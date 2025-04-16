
import api from "./api";
import { Skill } from "../components/SkillCard/SkillCard.type";

export const getSkills = async (): Promise<Skill[]> => {
    const response = await api.get("/api/skills");
    return response.data;
};
