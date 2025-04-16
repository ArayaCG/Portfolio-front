import api from "./api";
import { Experience } from "../components/ExperienceCard/ExperienceCard.type";

export const getExperiences = async (): Promise<Experience[]> => {
    const response = await api.get("/api/experiences");
    return response.data;
};
