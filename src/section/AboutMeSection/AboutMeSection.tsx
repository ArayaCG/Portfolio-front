import type React from "react";
import { ProfileData } from "../../components/AboutMe/AboutMe.type";
import ProfileHero from "../../components/AboutMe/AboutMe";

const AboutMeSection: React.FC = () => {
    const profileData: ProfileData = {
        name: "Cristian Gabriel Araya Salattino",
        rol: "Desarrollador backend",
        description:
            "Full Stack Developer con enfoque en backend. Experiencia en metodologías ágiles, git, estructuras de datos, algoritmos y frameworks CSS. Trabajo con NestJS, React, Express, PostgreSQL, MongoDB, JavaScript y TypeScript. Busco seguir aprendiendo y explorando nuevas oportunidades en programación, aportando trabajo en equipo y un buen ambiente colaborativo.",
        image: "/public/Screenshot 2025-03-27 at 3.37.47 PM.png",
        socialLinks: {
            github: "https://github.com/username",
            linkedin: "https://linkedin.com/in/username",
        },
    };

    const handleDownloadCV = () => {
        console.log("Descargando CV...");
    };

    return <ProfileHero profileData={profileData} onDownloadCV={handleDownloadCV} />;
};

export default AboutMeSection;
