import useScrollReveal from "../ScrollReveal/useScrollReveal";
import "./Team.css";

const advisors = [
  {
    id: 1,
    name: "Martín Castellano",
    role: "Director General · CUCICBA M.N. 7892",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    description:
      "Licenciado en Administración. 20 años en el mercado. Especializado en propiedades premium y desarrollos inmobiliarios.",
  },
  {
    id: 2,
    name: "Valeria Romero",
    role: "Directora Comercial",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    description:
      "Martillera pública y corredora inmobiliaria. Especialista en ventas residenciales en Palermo, Belgrano y Recoleta.",
  },
  {
    id: 3,
    name: "Facundo Ibáñez",
    role: "Asesor Senior — Zona Norte",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    description:
      "Especializado en zona norte del GBA (San Isidro, Vicente López, Olivos). 10 años en el sector.",
  },
];

const Team = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="nos-equipo">

      <div className="sec-head centered">
        <span className="tag">El equipo</span>
        <h2>Nuestros asesores</h2>
      </div>

      <div
        className="equipo-grid reveal"
        ref={revealRef}
      >

        {advisors.map((advisor) => (
          <article
            className="asesor-card"
            key={advisor.id}
          >
            <div
              className="asesor-img"
              style={{
                backgroundImage: `url(${advisor.image})`,
              }}
            />

            <div className="asesor-info">
              <h3>{advisor.name}</h3>

              <span>{advisor.role}</span>

              <p>{advisor.description}</p>
            </div>
          </article>
        ))}

      </div>

    </section>
  );
};

export default Team;