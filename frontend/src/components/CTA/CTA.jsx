import "./CTA.css";

const CTA = () => {
  return (
    <section className="section-cta">
      <div className="wrap">

        <div className="cta-box">

          <div className="cta-text">
            <h2>¿Tenés una propiedad para vender o alquilar?</h2>

            <p>
              Tasamos tu propiedad sin cargo y la publicamos en los
              principales portales inmobiliarios del país.
            </p>
          </div>

          <div className="cta-btns">
            <a href="/contacto" className="btn btn-primary">
              Consultá gratis
            </a>

            <a href="tel:(011) 4567-8900" className="btn btn-outline">
              (011) 4567-8900
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;