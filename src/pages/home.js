import HeroSection from "../components/heroSection";
import NavbarSection from "../components/navbarSection";
import AboutMeSection from "../components/AboutmeSection";
import ServiceSection from "../components/servicesSection";
import MySkillsSection from "../components/mySkillsSection";
import LatestProject from "../components/latestProjectSection";
import ContactMeSection from "../components/contactMeSection";
import LastSection from "../components/lastSection";

const Home = () => {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutMeSection />
      <ServiceSection />
      <MySkillsSection />
      <LatestProject />
      <ContactMeSection />
      <LastSection />
    </>
  );
};

export default Home;
