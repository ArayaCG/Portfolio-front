import React from "react";
import SkillSection from "../section/SkillSection/SkillSection";
import { LandingPageContainer, LandingPageContainerPadding } from "./LandingPage.styles";
import { fetchSkills } from "../utils/skillService";
import ProjectsSection, { sampleExperiences } from "../section/ExperienceSection/ExperienceSection";
import EducationSection, { EducationData } from "../section/EducationSection/EducationSection";
import ContactMeSection from "../section/ContactMeSection/ContactMeSection";
import AboutMeSection from "../section/AboutMeSection/AboutMeSection";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const LandingPage: React.FC = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact-section");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Header onContactClick={scrollToContact} />
            <LandingPageContainerPadding>
                <AboutMeSection />
            </LandingPageContainerPadding>
            <LandingPageContainer>
                <SkillSection title="Habilidades" fetchSkills={fetchSkills} />
            </LandingPageContainer>
            <LandingPageContainerPadding>
                <ProjectsSection experiences={sampleExperiences} />
                <EducationSection educations={EducationData} />
                <div id="contact-section">
                    <ContactMeSection />
                </div>
            </LandingPageContainerPadding>
            <Footer
                name="Cristian Gabriel Araya Salattino"
                socialLinks={{
                    github: "https://github.com/username",
                    linkedin: "https://linkedin.com/in/username",
                }}
            />
        </>
    );
};

export default LandingPage;
