import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

import "./Filters.css";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Filtros actualmente aplicados (URL)
  const appliedOperation = searchParams.get("operation") || "";
  const appliedType = searchParams.get("type") || "";
  const appliedLocation = searchParams.get("location") || "";
  const appliedMaxPrice = searchParams.get("maxPrice") || "";

  // Filtros que el usuario está seleccionando
  const [filters, setFilters] = useState({
    operation: appliedOperation,
    type: appliedType,
    location: appliedLocation,
    maxPrice: appliedMaxPrice,
  });

  // Cuando se limpia desde fuera, actualizamos los selects
  useEffect(() => {
    setFilters({
      operation: appliedOperation,
      type: appliedType,
      location: appliedLocation,
      maxPrice: appliedMaxPrice,
    });
  }, [
    appliedOperation,
    appliedType,
    appliedLocation,
    appliedMaxPrice,
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    setSearchParams(params);
  };

  const handleClear = () => {
    setSearchParams({});
  };

  const hasFilters =
    appliedOperation ||
    appliedType ||
    appliedLocation ||
    appliedMaxPrice;

  return (
    <aside className="filtros-panel">

      <div className="filtros-head">
        <h3>Filtrar</h3>

        {hasFilters && (
          <Link
            to="/propiedades"
            className="clear-link"
            onClick={handleClear}
          >
            Limpiar
          </Link>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="filtros-form"
      >

        <div className="ff-group">
          <label htmlFor="operation">Operación</label>

          <select
            id="operation"
            name="operation"
            value={filters.operation}
            onChange={handleChange}
          >
            <option value="">Todas</option>
            <option value="venta">Venta</option>
            <option value="alquiler">Alquiler</option>
          </select>
        </div>

        <div className="ff-group">
          <label htmlFor="type">Tipo</label>

          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleChange}
          >
            <option value="">Todos</option>
            <option value="departamento">Departamento</option>
            <option value="casa">Casa</option>
            <option value="ph">PH</option>
            <option value="local">Local</option>
            <option value="oficina">Oficina</option>
            <option value="terreno">Terreno</option>
          </select>
        </div>

        <div className="ff-group">
          <label htmlFor="location">Zona</label>

          <select
            id="location"
            name="location"
            value={filters.location}
            onChange={handleChange}
          >
            <option value="">Todas las zonas</option>
            <option value="Belgrano">Belgrano</option>
            <option value="Microcentro">Microcentro</option>
            <option value="Núñez">Núñez</option>
            <option value="Palermo">Palermo</option>
            <option value="Recoleta">Recoleta</option>
            <option value="San Isidro">San Isidro</option>
          </select>
        </div>

        <div className="ff-group">
          <label htmlFor="maxPrice">Precio máximo</label>

          <select
            id="maxPrice"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
          >
            <option value="">Sin límite</option>
            <option value="100000">USD 100.000</option>
            <option value="200000">USD 200.000</option>
            <option value="350000">USD 350.000</option>
            <option value="500000">USD 500.000</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
        >
          Aplicar filtros
        </button>

      </form>
    </aside>
  );
};

export default Filters;