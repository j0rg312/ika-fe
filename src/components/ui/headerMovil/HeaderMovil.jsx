import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HeaderMovil.css";
import logo from "../../../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "Nosotros", path: "/about" },
  { name: "Nuestro Trabajo", path: "/OurWork" },
  { name: "Tienda", path: "/ECommers" },
  { name: "Contacto", path: "/contact" },
];

const services = [
  { name: "Redes", path: "/services/networks" },
  { name: "Soporte Técnico", path: "/services/support" },
  { name: "Seguridad", path: "/services/security" },
  { name: "Transformación Digital", path: "/services/digital" },
  { name: "Telefonía", path: "/services/telefonia" },
  { name: "Equipos y Servicios", path: "/services/equipment" },
];

const HeaderMovil = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Cierra el menú cuando se cambia de página
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <div className="header-movil">
      {/* Logo */}
      <Link to="/home" className="logo-container">
        <img src={logo} alt="IKA logo" className="logo" />
      </Link>

      {/* Botón menú hamburguesa */}
      <button
        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      {/* Menú de navegación móvil */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}

          {/* Dropdown de servicios */}
          <li className="mobile-dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              Servicios
            </button>
            <ul className={`mobile-dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="mobile-dropdown-link" onClick={() => setMobileMenuOpen(false)}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMovil;
