import type React from "react";
import { useAboutMe } from "../../hooks/useAboutMe";
import ProfileHero from "../../components/AboutMe/AboutMe";

const AboutMeSection: React.FC = () => {
    const { profileData, loading, error } = useAboutMe();

    const handleDownloadCV = () => {
        const cvUrl = import.meta.env.VITE_CV_URL;
        window.open(cvUrl, "_blank");
    };

    if (loading) return <p>Cargando...</p>;
    if (error || !profileData) return <p>Ocurrió un error 😢</p>;

    return <ProfileHero profileData={profileData} onDownloadCV={handleDownloadCV} />;
};

export default AboutMeSection;
