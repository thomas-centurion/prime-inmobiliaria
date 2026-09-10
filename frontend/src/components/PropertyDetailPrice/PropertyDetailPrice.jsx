import { Link } from "react-router-dom";

import "./PropertyDetailPrice.css";

const PropertyDetailPrice = ({ property }) => {
  const formattedPrice = new Intl.NumberFormat("es-AR").format(
    property.price
  );

  const contactUrl = `/contacto?interes=${encodeURIComponent(
    property.title
  )}&property=${property._id}&operation=${property.operation}`;

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa la propiedad: ${property.title}`
  );

  const whatsappUrl = `https://wa.me/5491145678900?text=${whatsappMessage}`;

  return (
    <div className="detalle-precio-box">

      <div className="detalle-precio-row">

        <div>

          <span className="dp-label">
            Precio
          </span>

          <div className="dp-valor">

            <span className="dp-moneda">
              {property.operation === "venta" ? "USD" : "ARS"}
            </span>

            <strong>
              {formattedPrice}
            </strong>

          </div>

        </div>

      </div>

      <Link
        to={contactUrl}
        className="btn btn-primary w-full"
      >
        Consultar por esta propiedad
      </Link>

      <a
        href={whatsappUrl}
        className="btn btn-wa w-full"
        target="_blank"
        rel="noreferrer"
      >
        💬 Consultar por WhatsApp
      </a>

      <div className="detalle-contacto-rapido">

        <p>
          📞{" "}
          <a href="tel:(011) 4567-8900">
            (011) 4567-8900
          </a>
        </p>

        <p>
          ✉️{" "}
          <a href="mailto:ventas@primeinmobiliaria.com.ar">
            ventas@primeinmobiliaria.com.ar
          </a>
        </p>

      </div>

    </div>
  );
};

export default PropertyDetailPrice;