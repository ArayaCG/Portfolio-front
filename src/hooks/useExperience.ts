import { useState, useEffect } from "react";
import { getExperiences } from "../services/experienceService";
import { Experience } from "../components/ExperienceCard/ExperienceCard.type";

export const useExperiences = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getExperiences()
            .then(setExperiences)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    return { experiences, loading, error };
};
