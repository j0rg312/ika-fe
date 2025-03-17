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
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false); 
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  return (
    <div className="header-movil">
      <Link to="/home">
        <div className="logo-header">
          <img src={logo} alt="IKA logo" className="logo" />
        </div>
      </Link>

      <div className={`hamburger ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="mobile-nav-link">{link.name}</Link>
            </li>
          ))}

          <li className="mobile-dropdown">
            <Link to="/services" className="mobile-nav-link">Servicios</Link>
            <ul className="mobile-dropdown-menu">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="mobile-dropdown-link">
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
