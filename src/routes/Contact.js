import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactImg from "../assets/lake.jpg";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={contactImg}
        title="Contact"
        btnClass="hide"
      />
    </>
  );
}

export default Contact;
