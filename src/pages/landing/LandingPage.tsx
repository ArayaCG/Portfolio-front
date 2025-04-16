import type React from "react";
import SkillSection from "../../section/SkillSection/SkillSection";
import { LandingPageContainer, LandingPageContainerPadding } from "./LandingPage.styles";
import ProjectsSection from "../../section/ExperienceSection/ExperienceSection";
import EducationSection from "../../section/EducationSection/EducationSection";
import ContactMeSection from "../../section/ContactMeSection/ContactMeSection";
import AboutMeSection from "../../section/AboutMeSection/AboutMeSection";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import EnhancedBackground from "../../components/Background/Background";
import SectionDivider from "../../components/SectionDivider/SectionDivider";

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
            <EnhancedBackground>
                <LandingPageContainerPadding>
                    <AboutMeSection />
                    <SectionDivider />
                </LandingPageContainerPadding>
                <LandingPageContainer>
                    <SkillSection/>
                    <SectionDivider />
                </LandingPageContainer>
                <LandingPageContainerPadding>
                    <ProjectsSection/>
                    <SectionDivider />
                    <EducationSection />
                    <SectionDivider />
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
            </EnhancedBackground>
        </>
    );
};

export default LandingPage;
