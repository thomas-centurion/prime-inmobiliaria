import Navbar from "../../components/Navbar/Navbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Footer from "../../components/Footer/Footer";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Contacto"
        subtitle="Un asesor te responde en menos de 24 horas"
      />
      <div className="contacto-page wrap">
        <div className="ct-grid">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;