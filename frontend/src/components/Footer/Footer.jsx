import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-top">

          <div className="footer-brand-col">
            <Link to="/" className="brand footer-brand">
              <span className="brand-mark">P</span>

              <div className="brand-text">
                <span className="brand-name">PRIME</span>
                <span className="brand-sub">INMOBILIARIA</span>
              </div>
            </Link>

            <p>
              Conectamos personas con propiedades desde 2005.
              Transparencia, confianza y resultados.
            </p>

            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                IG
              </a>

              <a href="#" aria-label="Facebook">
                FB
              </a>

              <a href="#" aria-label="LinkedIn">
                LI
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Propiedades</h4>

            <ul>
              <li>
                <Link to="/propiedades?operation=venta">
                  En venta
                </Link>
              </li>

              <li>
                <Link to="/propiedades?operation=alquiler">
                  En alquiler
                </Link>
              </li>

              <li>
                <Link to="/propiedades?type=departamento">
                  Departamentos
                </Link>
              </li>

              <li>
                <Link to="/propiedades?type=casa">
                  Casas
                </Link>
              </li>

              <li>
                <Link to="/propiedades?type=ph">
                  PH
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Empresa</h4>

            <ul>
              <li>
                <Link to="/nosotros">
                  Quiénes somos
                </Link>
              </li>

              <li>
                <Link to="/contacto">
                  Contacto
                </Link>
              </li>

              <li>
                <Link to="/login">
                  Acceso admin
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>

            <address>
              <p>Av. Santa Fe 3421, Piso 3, CABA</p>

              <p>
                <a href="tel:(011) 4567-8900">
                  (011) 4567-8900
                </a>
              </p>

              <p>
                <a href="mailto:ventas@primeinmobiliaria.com.ar">
                  ventas@primeinmobiliaria.com.ar
                </a>
              </p>

              <p>Lun–Vie: 9:00–18:00</p>
              <p>Sáb: 10:00–14:00</p>
            </address>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2024 Prime Inmobiliaria S.A. · CUCICBA Matrícula N.º 7892
          </p>

          <p>
            Precios en USD. Sujeto a disponibilidad y verificación.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;