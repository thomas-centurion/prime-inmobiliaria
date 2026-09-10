import "./PropertyCard.css";
import "../ScrollReveal/ScrollReveal.css";
import { Link } from "react-router-dom";
import useScrollReveal from "../ScrollReveal/useScrollReveal";

const PropertyCard = ({ property, revealDelay = 0 }) => {
  const revealRef = useScrollReveal(revealDelay);

  return (
    <article 
      ref={revealRef}
      className="prop-card reveal"
    >
      <Link to={`/propiedades/${property._id}`} className="prop-card-link">
        <div className="prop-img">
          <img
            src={property.images?.[0]}
            alt={property.title}
            loading="lazy"
          />

          {property.featured && (
            <span className="prop-badge-dest">
              ★ Destacada
            </span>
          )}
        </div>

        <div className="prop-body">
          <div className="prop-tipo-zona">
            <span className="prop-tipo">
              {property.type}
            </span>

            <span className="prop-zona">
              <span>📍</span>
              {property.location}
            </span>
          </div>

          <h3 className="prop-titulo">
            {property.title}
          </h3>

          <div className="prop-specs">
            <span>{property.bedrooms} dorm.</span>
            <span>{property.bathrooms} baños</span>
            <span>{property.area} m²</span>
          </div>

          <div className="prop-footer">

            <div className="prop-precio">
              <span className="moneda">
                {property.operation === "venta" ? "USD" : "ARS"}
              </span>

              <strong>
                {property.price.toLocaleString("es-AR")}
              </strong>
            </div>

            <span className="prop-ver">
              Ver propiedad
            </span>

          </div>
          
        </div>
      </Link>

    </article>
  );
};

export default PropertyCard;