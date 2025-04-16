import { useEffect, useState } from "react";
import { getEducations } from "../services/educationService";
import { Education } from "../components/EducationCard/EducationCard.type";

export const useEducations = () => {
    const [educations, setEducations] = useState<Education[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getEducations()
            .then((data) => setEducations(data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { educations, loading, error };
};
