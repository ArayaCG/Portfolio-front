import { useEffect, useState } from "react";
import { getSkills } from "../services/skillService";
import { Skill } from "../components/SkillCard/SkillCard.type";

export const useSkills = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getSkills()
            .then(setSkills)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    return { skills, loading, error };
};
