import Navbar from "../../components/Navbar/Navbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import AboutIntro from "../../components/AboutIntro/AboutIntro";
import Team from "../../components/Team/Team";
import Values from "../../components/Values/Values";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";

import "./About.css";

const About = () => {
  return (
    <>
      <SEO title="Prime Inmobiliaria | Nosotros" />
      <Navbar />

      <PageHeader
        title="Quiénes somos"
        subtitle="20 años construyendo confianza en el mercado inmobiliario"
      />

      <main className="nosotros-page wrap">
        <AboutIntro />
        <Team />
        <Values />
      </main>

      <Footer />
    </>
  );
};

export default About;