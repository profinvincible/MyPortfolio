import HeroSection from "../components/heroSection";
import NavbarSection from "../components/navbarSection";
import AboutMeSection from "../components/AboutmeSection";
import ServiceSection from "../components/servicesSection";
import MySkillsSection from "../components/mySkillsSection";
import LatestProject from "../components/latestProjectSection";

const Home = () => {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutMeSection />
      <ServiceSection />
      <MySkillsSection />
      <LatestProject />
    </>
  );
};

export default Home;
