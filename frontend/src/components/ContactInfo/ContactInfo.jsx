import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="ct-aside">

      <div className="ct-info-card">

        <h3>Información de contacto</h3>

        <div className="ct-items">

          <div className="ct-item">
            <span className="ct-icon">📍</span>

            <div>
              <strong>Dirección</strong>
              <p>Av. Santa Fe 3421, Piso 3, CABA</p>
            </div>
          </div>

          <div className="ct-item">
            <span className="ct-icon">📞</span>

            <div>
              <strong>Teléfono</strong>

              <p>
                <a href="tel:(011) 4567-8900">
                  (011) 4567-8900
                </a>
              </p>
            </div>
          </div>

          <div className="ct-item">
            <span className="ct-icon">✉️</span>

            <div>
              <strong>Email</strong>

              <p>
                <a href="mailto:ventas@primeinmobiliaria.com.ar">
                  ventas@primeinmobiliaria.com.ar
                </a>
              </p>
            </div>
          </div>

          <div className="ct-item">
            <span className="ct-icon">🕐</span>

            <div>
              <strong>Horarios</strong>

              <p>
                Lun–Vie: 9:00–18:00
                <br />
                Sábados: 10:00–14:00
              </p>
            </div>
          </div>

        </div>
      </div>

      <a
        href="https://wa.me/5491145678900?text=Hola%2C%20quiero%20hacer%20una%20consulta"
        className="btn-wa-big"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬 Escribinos por WhatsApp
      </a>

    </div>
  );
};

export default ContactInfo;