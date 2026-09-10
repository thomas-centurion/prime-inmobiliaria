import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProperties } from "../../services/api";

import PropertyCard from "../PropertyCard/PropertyCard";

import "./Featured.css";

const Featured = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        const data = await getProperties({
          featured: "true",
        });

        setProperties(data);
      } catch (error) {
        console.error("Error al cargar propiedades destacadas:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFeatured();
  }, []);

  return (
    <section className="featured-properties">
      <div className="wrap">

        <div className="sec-head">
          <div>
            <span className="tag">Selección del mes</span>
            <h2>Propiedades destacadas</h2>
          </div>

          <Link to="/propiedades" className="btn btn-outline">
            Ver todas →
          </Link>
        </div>

        <div className="props-grid">
          {loading && <p>Cargando propiedades...</p>}

          {!loading &&
            properties.map((property, index) => (
              <PropertyCard
                key={property._id}
                property={property}
              />
            ))}
        </div>

      </div>
    </section>
  );
};

export default Featured;