import "./AboutIntro.css";

const AboutIntro = () => {
  return (
    <section className="nos-intro">

      <div className="nos-texto">
        <span className="tag">Nuestra historia</span>

        <h2>
          Desde 2005 conectando
          <br />
          personas con propiedades.
        </h2>

        <p>
          Prime Inmobiliaria nació con la convicción de que comprar,
          vender o alquilar una propiedad debe ser una experiencia
          transparente, ágil y segura. Hoy somos una de las
          inmobiliarias de mayor confianza en Buenos Aires y la zona
          norte del GBA.
        </p>

        <p>
          Contamos con un equipo de 18 asesores especializados,
          presencia en los principales portales del país y una red de
          más de 2.500 operaciones cerradas que nos respaldan.
        </p>
      </div>

      <div className="nos-stats">

        <div className="nos-stat">
          <span>+2.500</span>
          <label>Operaciones cerradas</label>
        </div>

        <div className="nos-stat">
          <span>18</span>
          <label>Asesores especializados</label>
        </div>

        <div className="nos-stat">
          <span>+300</span>
          <label>Propiedades activas</label>
        </div>

        <div className="nos-stat">
          <span>20</span>
          <label>Años de trayectoria</label>
        </div>

      </div>

    </section>
  );
};

export default AboutIntro;