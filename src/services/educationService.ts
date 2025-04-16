import api from "./api";
import { Education } from "../components/EducationCard/EducationCard.type"; 

export const getEducations = (): Promise<Education[]> => {
    return api.get("/api/educations").then(res => res.data);
};
