import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem("token");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">P</span>

          <div className="brand-text">
            <span className="brand-name">PRIME</span>
            <span className="brand-sub">INMOBILIARIA</span>
          </div>
        </Link>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`} aria-label="Navegación principal">
          <Link to="/" onClick={closeMenu}>
            Inicio
          </Link>

          <Link to="/propiedades" onClick={closeMenu}>
            Propiedades
          </Link>

          <Link to="/nosotros" onClick={closeMenu}>
            Nosotros
          </Link>

          <Link to="/contacto" onClick={closeMenu}>
            Contactar
          </Link>
        </nav>

        <div className="navbar-actions">
          {token ? (
            <Link
              to="/admin"
              className="navbar-login"
              onClick={closeMenu}
            >
              Panel de administración
            </Link>
          ) : (
            <Link
              to="/admin/login"
              className="navbar-login"
              onClick={closeMenu}
            >
              Iniciar sesión
            </Link>
          )}
        </div>

        <button
          type="button"
          className={`nav-burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  );
};

export default Navbar;