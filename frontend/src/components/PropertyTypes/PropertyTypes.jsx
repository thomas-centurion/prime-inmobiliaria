import { Link } from "react-router-dom";
import useScrollReveal from "../ScrollReveal/useScrollReveal";
import "./PropertyTypes.css";

const PropertyTypeCard = ({ type, icon, name }) => {
  const revealRef = useScrollReveal();

  return (
    <Link
      to={`/propiedades?type=${type}`}
      className="tipo-card reveal"
      ref={revealRef}
    >
      <div className="tipo-icon">{icon}</div>
      <span>{name}</span>
    </Link>
  );
};

const PropertyTypes = () => {
  const tipos = [
    { type: "departamento", icon: "🏢", name: "Departamento" },
    { type: "casa", icon: "🏠", name: "Casa" },
    { type: "ph", icon: "🏙️", name: "PH" },
    { type: "oficina", icon: "🏛️", name: "Oficina" },
    { type: "local", icon: "🏪", name: "Local" },
    { type: "terreno", icon: "🌿", name: "Terreno" },
  ];

  return (
    <section className="section-tipos">
      <div className="wrap">

        <div className="sec-head centered">
          <span className="tag">Buscá por tipo</span>
          <h2>¿Qué estás buscando?</h2>
        </div>

        <div className="tipos-grid">
          {tipos.map((tipo) => (
            <PropertyTypeCard
              key={tipo.type}
              {...tipo}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PropertyTypes;