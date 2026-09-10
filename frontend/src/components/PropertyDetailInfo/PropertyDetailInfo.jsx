import "./PropertyDetailInfo.css";

const PropertyDetailInfo = ({ property }) => {
  return (
    <div className="property-detail-info">

      <div className="detalle-badges">

        <span
          className={`prop-badge prop-badge--${property.operation}`}
        >
          {property.operation === "venta"
            ? "Venta"
            : "Alquiler"}
        </span>

        {property.featured && (
          <span className="prop-badge-dest">
            ★ Destacada
          </span>
        )}

      </div>

      <span className="detalle-tipo">
        {property.type}
      </span>

      <h1 className="detalle-titulo">
        {property.title}
      </h1>

      <p className="detalle-dir">
        📍 {property.address}, {property.location}
      </p>

      <div className="detalle-specs-grid">

        {property.rooms !== undefined && (
          <div className="dspec">
            <span className="dspec-label">Ambientes</span>
            <span className="dspec-val">{property.rooms}</span>
          </div>
        )}

        {property.bedrooms !== undefined && (
          <div className="dspec">
            <span className="dspec-label">Dormitorios</span>
            <span className="dspec-val">{property.bedrooms}</span>
          </div>
        )}

        {property.bathrooms !== undefined && (
          <div className="dspec">
            <span className="dspec-label">Baños</span>
            <span className="dspec-val">{property.bathrooms}</span>
          </div>
        )}

        {property.area !== undefined && (
          <div className="dspec">
            <span className="dspec-label">Área</span>
            <span className="dspec-val">{property.area} m²</span>
          </div>
        )}

      </div>

      {property.description && (
        <div className="detalle-desc">

          <h3>
            Descripción
          </h3>

          <p>
            {property.description}
          </p>

        </div>
      )}

    </div>
  );
};

export default PropertyDetailInfo;