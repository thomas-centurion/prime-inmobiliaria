import useScrollReveal from "../ScrollReveal/useScrollReveal";
import "./Values.css";

const values = [
  {
    icon: "🤝",
    title: "Transparencia",
    description:
      "Información clara y honesta en cada etapa de la operación.",
  },
  {
    icon: "🎯",
    title: "Compromiso",
    description:
      "Nos involucramos de principio a fin para alcanzar tus objetivos.",
  },
  {
    icon: "💡",
    title: "Innovación",
    description:
      "Tecnología y herramientas modernas al servicio del cliente.",
  },
  {
    icon: "❤️",
    title: "Cercanía",
    description:
      "Un trato personalizado, porque cada operación es única.",
  },
];

const Values = () => {
  const revealRef = useScrollReveal();

  return (
    <section
      className="nos-valores reveal"
      ref={revealRef}
    >

      {values.map((value) => (
        <div
          className="valor-item"
          key={value.title}
        >
          <div className="valor-icon">
            {value.icon}
          </div>

          <h4>{value.title}</h4>

          <p>{value.description}</p>
        </div>
      ))}

    </section>
  );
};

export default Values;