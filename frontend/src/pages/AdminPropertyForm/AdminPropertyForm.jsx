import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SEO from "../../components/SEO/SEO";

const AdminPropertyForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    title: "",
    operation: "venta",
    type: "departamento",
    price: "",
    location: "",
    address: "",
    rooms: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    image: "",
    description: "",
    featured: false,
    active: true,
  });


  useEffect(() => {
    if (!isEditing) return;

    const fetchProperty = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/properties/${id}`
        );

        const data = await response.json();

        setFormData({
          ...data.payload,
          image: data.payload.images?.[0] || "",
        });
      } catch (error) {
        console.error("Error al obtener la propiedad:", error);
      }
    };

    fetchProperty();
  }, [id, isEditing]);


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = isEditing
        ? `http://localhost:3000/api/properties/${id}`
        : "http://localhost:3000/api/properties";

      const method = isEditing ? "PUT" : "POST";

      const propertyData = {
        ...formData,
        images: [formData.image],
      };

      delete propertyData.image;

      const token = localStorage.getItem("token");

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(propertyData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al guardar la propiedad");
      }

      console.log("Propiedad guardada:", data);

      navigate("/admin");
    } catch (error) {
      console.error("Error al guardar la propiedad:", error);
    }
  };


  return (
    <>
      <SEO title="Prime Inmobiliaria | Administrador" />
      <Navbar />
      <div className="admin-page">

        <div className="admin-topbar">
          <div className="wrap admin-topbar-inner">

            <h1>
              {isEditing ? "Editar propiedad" : "Nueva propiedad"}
            </h1>

            <Link
              to="/admin"
              className="btn btn-ghost-sm"
            >
              ← Volver
            </Link>

          </div>
        </div>

        <div className="wrap admin-body">

          <div className="adm-card adm-property-form-card">

            <form
              onSubmit={handleSubmit}
              className="form"
            >

              {/* TÍTULO */}

              <div className="form-row">

                <div className="form-group form-group-full">

                  <label htmlFor="title">Título *</label>

                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="Ej: Departamento 3 amb. con balcón en Palermo"
                  />

                </div>

              </div>

              {/* OPERACIÓN / TIPO */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="operation">Operación *</label>

                  <select
                    id="operation"
                    name="operation"
                    value={formData.operation}
                    onChange={handleChange}
                  >
                    <option value="venta">Venta</option>
                    <option value="alquiler">Alquiler</option>
                  </select>

                </div>

                <div className="form-group">

                  <label htmlFor="type">Tipo *</label>

                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="departamento">Departamento</option>
                    <option value="casa">Casa</option>
                    <option value="ph">PH</option>
                    <option value="local">Local</option>
                    <option value="oficina">Oficina</option>
                    <option value="terreno">Terreno</option>
                  </select>

                </div>

              </div>

              {/* PRECIO */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="price">Precio</label>

                  <input
                    id="price"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Ej: 150000"
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="currency">Moneda</label>

                  <input
                    id="currency"
                    type="text"
                    value={formData.operation === "venta" ? "USD" : "ARS"}
                    readOnly
                    className="input-readonly"
                  />

                </div>

              </div>

              {/* UBICACIÓN */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="location">Zona</label>

                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Ej: Palermo, Belgrano"
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="address">Dirección</label>

                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Ej: Av. Santa Fe 2345"
                  />

                </div>

              </div>

              {/* CARACTERÍSTICAS */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="rooms">Ambientes</label>

                  <input
                    id="rooms"
                    type="number"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                    min="1"
                    max="20"
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="bedrooms">Dormitorios</label>

                  <input
                    type="number"
                    name="bedrooms"
                    id="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    min="0"
                    max="15"
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="bathrooms">Baños</label>

                  <input
                    type="number"
                    name="bathrooms"
                    id="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    min="0"
                    max="10"
                  />

                </div>

              </div>

              {/* SUPERFICIE */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="area">Área (m²)</label>

                  <input
                    type="number"
                    name="area"
                    id="area"
                    value={formData.area}
                    onChange={handleChange}
                    min="1"
                    step="0.1"
                    placeholder="Ej: 68"
                  />

                </div>

              </div>

              {/* IMAGEN */}

              <div className="form-group">

                <label htmlFor="image">Imagen (URL)</label>

                <input
                  type="url"
                  name="image"
                  id="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://images.unsplash.com/..."
                />

              </div>

              {/* DESCRIPCIÓN */}

              <div className="form-group">

                <label htmlFor="description">Descripción *</label>

                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Describí la propiedad..."
                />

              </div>

              {/* OPCIONES */}

              <div className="form-row form-options">

                <label htmlFor="featured" className="check-label">

                  <input
                    type="checkbox"
                    name="featured"
                    id="featured"
                    checked={formData.featured}
                    onChange={handleChange}
                  />

                  <span>Marcar como destacada</span>

                </label>

                <label htmlFor="active" className="check-label">

                  <input
                    type="checkbox"
                    name="active"
                    id="active"
                    checked={formData.active}
                    onChange={handleChange}
                  />

                  <span>Propiedad activa</span>

                </label>

              </div>

              {/* BOTONES */}

              <div className="admin-form-actions">

                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  {isEditing
                    ? "Guardar cambios"
                    : "Publicar propiedad"}
                </button>

                <Link
                  to="/admin"
                  className="btn btn-ghost-sm"
                >
                  Cancelar
                </Link>

              </div>

            </form>

          </div>

        </div>

      </div>
    </>
  );
};

export default AdminPropertyForm;