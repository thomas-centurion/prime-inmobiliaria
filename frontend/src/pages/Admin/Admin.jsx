import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Admin.css";

const getUserRole = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.role;
  } catch {
    return null;
  }
};

const Admin = () => {
  const navigate = useNavigate();

  const isDemo = getUserRole() === "demo";

  const handleDemoAction = () => {
    alert("Esta es una demo. Las modificaciones están deshabilitadas.");
  };

  const [properties, setProperties] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const [selectedConsultation, setSelectedConsultation] = useState(null);

  const fetchProperties = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/properties"
      );

      const data = await response.json();

      setProperties(data.payload);
    } catch (error) {
      console.error("Error al obtener propiedades:", error);
    }
  };

  const fetchInquiries = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:3000/api/inquiries",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Error al obtener las consultas"
        );
      }

      setConsultations(data.payload);
    } catch (error) {
      console.error("Error al obtener consultas:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
    fetchInquiries();
  }, []);

  const stats = {
    total: properties.length,

    venta: properties.filter(
      (property) => property.operation === "venta"
    ).length,

    alquiler: properties.filter(
      (property) => property.operation === "alquiler"
    ).length,

    consultas: consultations.filter(
      (consultation) => consultation.status !== "resuelta"
    ).length,
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "¿Seguro que querés dar de baja esta propiedad?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:3000/api/properties/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Error al eliminar la propiedad"
        );
      }

      console.log("Propiedad eliminada:", data);

      fetchProperties();
    } catch (error) {
      console.error("Error al eliminar la propiedad:", error);
    }
  };

  const handleDeleteInquiry = async (id) => {
    const confirmDelete = window.confirm(
      "¿Seguro que querés eliminar esta consulta?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:3000/api/inquiries/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Error al eliminar la consulta"
        );
      }

      console.log("Consulta eliminada:", data);

      fetchInquiries();
    } catch (error) {
      console.error("Error al eliminar la consulta:", error);
    }
  };

  const handleToggleInquiryStatus = async (id, currentStatus) => {
    const newStatus =
      currentStatus === "resuelta" ? "pendiente" : "resuelta";

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:3000/api/inquiries/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Error al actualizar la consulta"
        );
      }

      setConsultations((currentConsultations) =>
        currentConsultations.map((consultation) =>
          consultation._id === id
            ? { ...consultation, status: newStatus }
            : consultation
        )
      );

      if (selectedConsultation?._id === id) {
        setSelectedConsultation((current) => ({
          ...current,
          status: newStatus,
        }));
      }
    } catch (error) {
      console.error(
        "Error al actualizar estado de la consulta:",
        error
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };


  return (
    <>
      <Navbar />

      <div className="admin-page">

        <div className="admin-topbar">
          <div className="wrap admin-topbar-inner">
            <h1>Panel de Administración</h1>

            <div className="admin-topbar-actions">
              {isDemo ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleDemoAction}
                >
                  + Nueva propiedad
                </button>
              ) : (
                <Link
                  to="/admin/propiedades/nueva"
                  className="btn btn-primary"
                >
                  + Nueva propiedad
                </Link>
              )}

              <button
                type="button"
                className="btn btn-ghost-sm"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>

        <div className="wrap admin-body">

          <div className="adm-stats">

            <div className="adm-stat">
              <span>{stats.total}</span>
              <label>Propiedades activas</label>
            </div>

            <div className="adm-stat">
              <span>{stats.venta}</span>
              <label>En venta</label>
            </div>

            <div className="adm-stat">
              <span>{stats.alquiler}</span>
              <label>En alquiler</label>
            </div>

            <div className="adm-stat">
              <span>{stats.consultas}</span>
              <label>Consultas pendientes</label>
            </div>

          </div>

          <div className="adm-card">

            <div className="adm-card-head">

              <h2>Propiedades</h2>

              {isDemo ? (
                <button
                  type="button"
                  className="btn btn-primary adm-new-btn"
                  onClick={handleDemoAction}
                >
                  + Nueva
                </button>
              ) : (
                <Link
                  to="/admin/propiedades/nueva"
                  className="btn btn-primary adm-new-btn"
                >
                  + Nueva
                </Link>
              )}

            </div>

            <div className="adm-table-wrap">

              <table className="adm-table adm-inquiries-table">

                <thead>
                  <tr>
                    <th>#</th>
                    <th>Título</th>
                    <th>Operación</th>
                    <th>Tipo</th>
                    <th>Zona</th>
                    <th>Precio</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>

                  {properties.length > 0 ? (

                    [...properties]
                      .reverse()
                      .map((property) => (

                        <tr key={property._id}>

                          <td>{property._id}</td>

                          <td className="adm-title-cell">
                            {property.title}
                          </td>

                          <td>
                            <span
                              className={`prop-badge prop-badge--${property.operation}`}
                            >
                              {property.operation === "venta"
                                ? "Venta"
                                : "Alquiler"}
                            </span>
                          </td>

                          <td>{property.type}</td>

                          <td>{property.location}</td>

                          <td className="adm-price-cell">
                            {property.operation === "venta"
                              ? "USD"
                              : "ARS"}{" "}
                            {property.price
                              ? Number(property.price).toLocaleString(
                                  "es-AR"
                                )
                              : "—"}
                          </td>

                          <td>
                            <span className="status-badge status-activa">
                              Activa
                            </span>
                          </td>

                          <td>
                            <div className="adm-actions">

                              {isDemo ? (
                                <button
                                  type="button"
                                  className="adm-btn"
                                  onClick={handleDemoAction}
                                >
                                  Editar
                                </button>
                              ) : (
                                <Link
                                  to={`/admin/propiedades/${property._id}/editar`}
                                  className="adm-btn"
                                >
                                  Editar
                                </Link>
                              )}

                              <button
                                type="button"
                                className="adm-btn adm-btn-danger"
                                onClick={
                                  isDemo
                                    ? handleDemoAction
                                    : () => handleDelete(property._id)
                                }
                              >
                                Baja
                              </button>

                            </div>
                          </td>

                        </tr>

                      ))

                  ) : (

                    <tr>
                      <td
                        colSpan="8"
                        className="adm-empty-cell"
                      >
                        Sin propiedades todavía.{" "}

                        <Link to="/admin/propiedades/nueva">
                          Agregar la primera →
                        </Link>
                      </td>
                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

          <div className="adm-card">

            <h2>Últimas consultas</h2>

            <div className="adm-table-wrap">

              <table className="adm-table adm-inquiries-table">

                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Propiedad</th>
                    <th>Interés</th>
                    <th>Mensaje</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>

                  {consultations.length > 0 ? (

                    [...consultations]
                      .reverse()
                      .map((consultation) => {

                        const isResolved =
                          consultation.status === "resuelta";

                        return (
                          <tr key={consultation._id}>

                            <td>
                              {consultation.name}
                            </td>

                            <td>
                              {consultation.email}
                            </td>

                            <td className="adm-title-cell">

                              {consultation.property ? (

                                <Link
                                  to={`/propiedades/${consultation.property._id}`}
                                >
                                  {consultation.property.title}
                                </Link>

                              ) : (

                                "Consulta general"

                              )}

                            </td>

                            <td>
                              {consultation.type || "—"}
                            </td>

                            <td className="adm-message-cell">
                              {consultation.message}
                            </td>

                            <td>
                              {formatDate(
                                consultation.createdAt
                              )}
                            </td>

                            <td>

                              <span
                                className={`status-badge ${
                                  isResolved
                                    ? "status-resuelta"
                                    : "status-pendiente"
                                }`}
                              >
                                {isResolved
                                  ? "Resuelta"
                                  : "Pendiente"}
                              </span>

                            </td>

                            <td>

                              <div className="adm-actions">

                                <button
                                  type="button"
                                  className="adm-btn"
                                  onClick={() =>
                                    setSelectedConsultation(
                                      consultation
                                    )
                                  }
                                >
                                  Ver detalle
                                </button>

                                <button
                                  type="button"
                                  className="adm-btn"
                                  onClick={
                                    isDemo
                                      ? handleDemoAction
                                      : () =>
                                          handleToggleInquiryStatus(
                                            consultation._id,
                                            consultation.status
                                          )
                                  }
                                >
                                  {isResolved ? "Reabrir" : "Resolver"}
                                </button>

                                <button
                                  type="button"
                                  className="adm-btn adm-btn-danger"
                                  onClick={
                                    isDemo
                                      ? handleDemoAction
                                      : () => handleDeleteInquiry(consultation._id)
                                  }
                                >
                                  Eliminar
                                </button>

                              </div>

                            </td>

                          </tr>
                        );
                      })

                  ) : (

                    <tr>
                      <td
                        colSpan="8"
                        className="adm-empty-cell"
                      >
                        Sin consultas todavía.
                      </td>
                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

      {selectedConsultation && (

        <div
          className="adm-modal-overlay"
          onClick={() => setSelectedConsultation(null)}
        >

          <div
            className="adm-modal"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="adm-modal-head">

              <h2>Detalle de la consulta</h2>

              <button
                type="button"
                className="adm-modal-close"
                onClick={() => setSelectedConsultation(null)}
              >
                ×
              </button>

            </div>

            <div className="adm-modal-body">

              <div className="adm-detail-row">
                <span>Nombre</span>
                <strong>
                  {selectedConsultation.name}
                </strong>
              </div>

              <div className="adm-detail-row">
                <span>Email</span>
                <strong>
                  {selectedConsultation.email}
                </strong>
              </div>

              <div className="adm-detail-row">
                <span>Propiedad</span>

                {selectedConsultation.property ? (

                  <Link
                    to={`/propiedades/${selectedConsultation.property._id}`}
                    onClick={() =>
                      setSelectedConsultation(null)
                    }
                  >
                    {selectedConsultation.property.title}
                  </Link>

                ) : (

                  <strong>
                    Consulta general
                  </strong>

                )}

              </div>

              <div className="adm-detail-row">
                <span>Interés</span>
                <strong>
                  {selectedConsultation.type || "—"}
                </strong>
              </div>

              <div className="adm-detail-row">
                <span>Fecha</span>
                <strong>
                  {formatDate(
                    selectedConsultation.createdAt
                  )}
                </strong>
              </div>

              <div className="adm-detail-row">
                <span>Estado</span>

                <span
                  className={`status-badge ${
                    selectedConsultation.status === "resuelta"
                      ? "status-resuelta"
                      : "status-pendiente"
                  }`}
                >
                  {selectedConsultation.status === "resuelta"
                    ? "Resuelta"
                    : "Pendiente"}
                </span>

              </div>

              <div className="adm-detail-message">

                <span>Mensaje</span>

                <p>
                  {selectedConsultation.message}
                </p>

              </div>

            </div>

            <div className="adm-modal-footer">

              <button
                type="button"
                className="adm-btn"
                onClick={
                  isDemo
                    ? handleDemoAction
                    : () =>
                        handleToggleInquiryStatus(
                          selectedConsultation._id,
                          selectedConsultation.status
                        )
                }
              >
                {selectedConsultation.status === "resuelta"
                  ? "Reabrir consulta"
                  : "Marcar como resuelta"}
              </button>

              <button
                type="button"
                className="adm-btn adm-btn-danger"
                onClick={
                  isDemo
                    ? handleDemoAction
                    : () => {
                        setSelectedConsultation(null);
                        handleDeleteInquiry(selectedConsultation._id);
                      }
                }
              >
                Eliminar
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
};

export default Admin;