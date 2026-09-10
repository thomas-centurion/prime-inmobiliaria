import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getPropertyById } from "../../services/api";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import PropertyDetailInfo from "../../components/PropertyDetailInfo/PropertyDetailInfo";
import PropertyDetailPrice from "../../components/PropertyDetailPrice/PropertyDetailPrice";
import RelatedProperties from "../../components/RelatedProperties/RelatedProperties";

import "./PropertyDetail.css";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProperty = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getPropertyById(id);

        setProperty(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProperty();
  }, [id]);

  if (loading) {
    return (
      <>
        <SEO title="Prime Inmobiliaria | Propiedades" />
        <Navbar />

        <main className="detalle-page wrap">
          <p>Cargando propiedad...</p>
        </main>

        <Footer />
      </>
    );
  }

  if (error || !property) {
    return (
      <>
        <Navbar />

        <main className="detalle-page wrap">
          <div className="property-error">
            <h1>Propiedad no encontrada</h1>

            <p>
              La propiedad que estás buscando no existe o ya no está
              disponible.
            </p>

            <button
              className="btn btn-primary"
              onClick={() => navigate("/propiedades")}
            >
              Ver propiedades
            </button>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="detalle-page wrap">

        <nav className="breadcrumb">
          <button onClick={() => navigate("/")}>
            Inicio
          </button>

          <span>/</span>

          <button
            onClick={() =>
              navigate(`/propiedades?operation=${property.operation}`)
            }
          >
            {property.operation === "venta" ? "Venta" : "Alquiler"}
          </button>

          <span>/</span>

          <span>{property.title}</span>
        </nav>

        <div className="detalle-grid">

          <div className="detalle-media">
            {property.images?.length > 0 ? (
              <img
                src={property.images[0]}
                alt={property.title}
                className="detalle-img"
              />
            ) : (
              <div className="detalle-img-ph">
                🏠
              </div>
            )}
          </div>

          <div className="detalle-info">

            <PropertyDetailInfo
              property={property}
            />

            <PropertyDetailPrice
              property={property}
            />

          </div>

        </div>

        <RelatedProperties
          property={property}
        />

      </main>

      <Footer />
    </>
  );
};

export default PropertyDetail;