import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Featured from "../../components/Featured/Featured";
import PropertyTypes from "../../components/PropertyTypes/PropertyTypes";
import WhyUs from "../../components/WhyUs/WhyUs";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import "./Home.css";


const Home = () => {
  return (
    <>
      <SEO title="Prime Inmobiliaria | Propiedades en venta y alquiler" />
      <Navbar />

      <main>
        <Hero />
        <Featured />
        <PropertyTypes /> 
        <WhyUs />
        <CTA />
      </main>

       <Footer/>
    </>
  );
};

export default Home;