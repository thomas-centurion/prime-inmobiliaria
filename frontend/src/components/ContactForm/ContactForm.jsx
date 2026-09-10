import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./ContactForm.css";

const ContactForm = () => {
  const [searchParams] = useSearchParams();

  const propertyId = searchParams.get("property");
  const interes = searchParams.get("interes");
  const operation = searchParams.get("operation");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        "http://localhost:3000/api/inquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            property: propertyId || null,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Error al enviar la consulta"
        );
      }

      setSuccess(
        "¡Consulta enviada correctamente! Te responderemos en menos de 24 horas."
      );

      setFormData({
        name: "",
        email: "",
        type: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar consulta:", error);

      setError(
        error.message || "No se pudo enviar la consulta."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ct-form-col">
      <div className="form-card">
        <h2>Envianos tu consulta</h2>

        {interes && (
          <p>
            Propiedad seleccionada: <strong>{interes}</strong>
          </p>
        )}

        <form onSubmit={handleSubmit} className="form">

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="name">Nombre completo *</label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>

              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="interest">¿Qué te interesa?</label>

              <select
                id="interest"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">Seleccioná</option>

                {operation === "venta" && (
                  <>
                    <option value="comprar">
                      Comprar una propiedad
                    </option>

                    <option value="vender">
                      Vender mi propiedad
                    </option>

                    <option value="otra">
                      Otro
                    </option>
                  </>
                )}

                {operation === "alquiler" && (
                  <>
                    <option value="alquilar">
                      Alquilar una propiedad
                    </option>

                    <option value="alquilar_propiedad">
                      Alquilar mi propiedad
                    </option>

                    <option value="otra">
                      Otro
                    </option>
                  </>
                )}

                {!operation && (
                  <>
                    <option value="comprar">
                      Comprar una propiedad
                    </option>

                    <option value="alquilar">
                      Alquilar una propiedad
                    </option>

                    <option value="vender">
                      Vender mi propiedad
                    </option>

                    <option value="alquilar_propiedad">
                      Alquilar mi propiedad
                    </option>

                    <option value="otra">
                      Otro
                    </option>
                  </>
                )}
              </select>
            </div>

          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje *</label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Contanos en qué podemos ayudarte…"
            />
          </div>

          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}

          {success && (
            <p aria-live="polite">
              {success}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar consulta"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;