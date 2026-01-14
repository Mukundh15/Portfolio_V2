import Hero from "../sections/Hero";
import About from "../sections/About";
import EducationTimeline from "../sections/EducationTimeline";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects"
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <EducationTimeline />
      <Skills />
      <Projects/>
      <Experience />
      <Contact />
    </>
  );
};

export default Home;