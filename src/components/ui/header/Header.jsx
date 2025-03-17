import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../assets/logo.png";
import HeaderMovil from "../headerMovil/HeaderMovil";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "Nosotros", path: "/about" },
  { name: "Servicios", path: "/services", isDropdown: true },
  { name: "Nuestro Trabajo", path: "/OurWork" },
  { name: "Tienda", path: "/ECommers", className: "store" },
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

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 950); 
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950); // Simplifiqué la lógica para que dependa solo del ancho
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`header ${isMobile ? 'header-movil' : ''}`}>
      <Link to="/home">
        <div className="logo-header">
          <img src={logo} alt="IKA logo" className="logo" />
        </div>
      </Link>

      {isMobile ? (
        <HeaderMovil />
      ) : (
        <nav className="nav">
         <ul className="nav-list">
  {navLinks.map((link, index) => (
    link.isDropdown ? (
      <li
        key={index}
        className="dropdown"
        onMouseEnter={() => setDropdownVisible(true)}
        onMouseLeave={() => setDropdownVisible(false)}
      >
        <Link to={link.path} className="nav-link">Servicios</Link>
        {isDropdownVisible && (
          <ul className="dropdown-menu">
            {services.map((service, i) => (
              <li key={i} className="dropdown-item">
                <Link to={service.path} className="dropdown-link">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    ) : (
      <li key={index}>
        <Link to={link.path} className={`nav-link ${link.className || ""}`}>
          {link.name}
        </Link>
      </li>
    )
  ))}
</ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
