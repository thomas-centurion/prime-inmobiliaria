import { useEffect, useState } from "react";

import { getProperties } from "../../services/api";
import PropertyCard from "../PropertyCard/PropertyCard";

import "./RelatedProperties.css";

const RelatedProperties = ({ property }) => {
  const [relatedProperties, setRelatedProperties] = useState([]);

  useEffect(() => {
    const loadRelatedProperties = async () => {
      try {
        const data = await getProperties({
          type: property.type,
        });

        const filtered = data
          .filter((item) => item._id !== property._id)
          .slice(0, 3);

        setRelatedProperties(filtered);
      } catch (error) {
        console.error(
          "Error al obtener propiedades similares:",
          error
        );
      }
    };

    if (property?.type) {
      loadRelatedProperties();
    }
  }, [property]);

  if (relatedProperties.length === 0) {
    return null;
  }

  return (
    <section className="relacionadas">

      <h2>
        Propiedades similares
      </h2>

      <div className="props-grid">

        {relatedProperties.map((relatedProperty) => (
          <PropertyCard
            key={relatedProperty._id}
            property={relatedProperty}
          />
        ))}

      </div>

    </section>
  );
};

export default RelatedProperties;