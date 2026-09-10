import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getProperties } from "../../services/api";

import Navbar from "../../components/Navbar/Navbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import Filters from "../../components/Filters/Filters";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";

import "./Properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();

  const operation = searchParams.get("operation") || "";
  const type = searchParams.get("type") || "";
  const location = searchParams.get("location") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  const loadProperties = async (filters = {}) => {
    try {
      setLoading(true);
      setError(null);

      const data = await getProperties(filters);

      setProperties(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProperties({
      operation,
      type,
      location,
      maxPrice,
    });
  }, [operation, type, location, maxPrice]);

  const handleFilter = (filters) => {
    loadProperties(filters);
  };

  return (
    <>
      <SEO title="Prime Inmobiliaria | Propiedades" />
      <Navbar />

      <PageHeader
        count={properties.length}
        operation={operation}
      />

      <div className="props-layout wrap">

        <Filters onFilter={handleFilter} />

        <div className="props-results">

          {loading && <p>Cargando propiedades...</p>}

          {error && <p>{error}</p>}

          {!loading && !error && (
            properties.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">🏠</div>

                <h3>No encontramos propiedades</h3>

                <p>
                  No hay propiedades que coincidan con los filtros
                  seleccionados. Probá modificando alguno de los filtros.
                </p>
              </div>
            ) : (
              <div className="props-grid props-grid--list">
                {properties.map((property) => (
                  <PropertyCard
                    key={property._id}
                    property={property}
                  />
                ))}
              </div>
            )
          )}

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Properties;