import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutImg from "../assets/beach.jpg";
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={aboutImg} title="About" btnClass="hide" />
    </>
  );
}

export default About;
