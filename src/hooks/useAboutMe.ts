import { useState, useEffect } from "react";
import { getAboutMe } from "../services/aboutMeService";
import { ProfileData } from "../components/AboutMe/AboutMe.type";

export const useAboutMe = () => {
    const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        getAboutMe()
            .then(setProfileData)
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { profileData, loading, error };
};
