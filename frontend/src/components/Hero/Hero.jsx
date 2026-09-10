import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      if (value) {
        params.append(key, value);
      }
    }

    navigate(`/propiedades?${params.toString()}`);
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=2000&q=85"
          alt="Propiedad inmobiliaria"
          fetchPriority="high"
        />

        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          <span>Buenos Aires · Zona Norte · GBA</span>
        </div>

        <h1 className="hero-title">
          Encontrá tu próxima
          <br />
          <em>propiedad ideal.</em>
        </h1>

        <p className="hero-sub">
          Más de 300 propiedades en venta y alquiler. Asesoramiento
          personalizado desde 2005.
        </p>

        <div className="hero-search">
          <form onSubmit={handleSearch} className="search-bar">
            <div className="search-tabs">
              <label className="tab-label">
                <input
                  type="radio"
                  name="operation"
                  value="venta"
                  defaultChecked
                />
                <span>Venta</span>
              </label>

              <label className="tab-label">
                <input
                  type="radio"
                  name="operation"
                  value="alquiler"
                />
                <span>Alquiler</span>
              </label>
            </div>

            <div className="search-fields">
              <div className="sf-field">
                <label htmlFor="hero-type">Tipo</label>

                <select id="hero-type" name="type" defaultValue="">
                  <option value="">Todos</option>
                  <option value="departamento">Departamento</option>
                  <option value="casa">Casa</option>
                  <option value="ph">PH</option>
                  <option value="local">Local</option>
                  <option value="oficina">Oficina</option>
                  <option value="terreno">Terreno</option>
                </select>
              </div>

              <div className="sf-field">
                <label htmlFor="hero-location">Zona</label>

                <input
                  id="hero-location"
                  type="text"
                  name="location"
                  placeholder="Ej: Palermo, Belgrano…"
                />
              </div>

              <div className="sf-field">
                <label htmlFor="hero-max-price">Precio máx.</label>

                <select
                  id="hero-max-price"
                  name="maxPrice"
                  defaultValue=""
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
                className="btn btn-primary search-btn"
              >
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hstat">
          <span>+300</span>
          <small>Propiedades</small>
        </div>

        <div className="hstat">
          <span>+20</span>
          <small>Años en el mercado</small>
        </div>

        <div className="hstat">
          <span>+2.500</span>
          <small>Operaciones cerradas</small>
        </div>
      </div>
    </section>
  );
};

export default Hero;