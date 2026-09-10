import useScrollReveal from "../ScrollReveal/useScrollReveal";
import "./WhyUs.css";
import { Link } from "react-router-dom";

const advantages = [
  {
    icon: "🏆",
    title: "Matrícula CUCICBA",
    description:
      "Operamos con habilitación oficial. Tu inversión, respaldada por la ley.",
  },
  {
    icon: "🔍",
    title: "Búsqueda personalizada",
    description:
      "Analizamos tu perfil y te presentamos solo las opciones que se ajustan a tu necesidad.",
  },
  {
    icon: "📋",
    title: "Gestión legal completa",
    description:
      "Boleto, escritura, certificados y trámites registrales. Nos encargamos de todo.",
  },
  {
    icon: "💼",
    title: "Tasaciones sin cargo",
    description:
      "Evaluamos tu propiedad al precio real de mercado, sin compromiso de exclusividad.",
  },
];

const AdvantageCard = ({ advantage }) => {
  const revealRef = useScrollReveal();

  return (
    <div className="ventaja reveal" ref={revealRef}>
      <div className="ventaja-icon">
        {advantage.icon}
      </div>

      <div>
        <h4>{advantage.title}</h4>
        <p>{advantage.description}</p>
      </div>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className="section-por-que section-dark">
      <div className="wrap">

        <div className="pq-grid">

          <div className="pq-texto">
            <span className="tag tag-light">
              Por qué elegirnos
            </span>

            <h2>
              Más de 20 años
              <br />
              en el mercado
              <br />
              <em>inmobiliario.</em>
            </h2>

            <p>
              En Prime Inmobiliaria combinamos trayectoria, tecnología y un
              equipo de asesores especializados para garantizarte la mejor
              experiencia en cada operación.
            </p>

            <Link to="/nosotros" className="btn btn-outline-light">
              Conocé al equipo
            </Link>
          </div>

          <div className="pq-ventajas">
            {advantages.map((advantage) => (
              <AdvantageCard
                key={advantage.title}
                advantage={advantage}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyUs;