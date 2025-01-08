import Hero from "../components/heroSection";
import Navbar from "../components/navbar";
import AboutMe from "../components/AboutmeSection";
import ServiceSection from "../components/servicesSection";
import MySkills from "../components/mySkills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <ServiceSection />
      <MySkills />
    </>
  );
};

export default Home;
