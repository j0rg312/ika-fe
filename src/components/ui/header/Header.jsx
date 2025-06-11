import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks, services } from "../../../data/header.data"; // Asegúrate que esta ruta es correcta
import "./Header.css";
import logo from "../../../assets/logo.png";
import HeaderMovil from "../headerMovil/HeaderMovil";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <HeaderMovil />
      ) : (
        <header className="header">
          <Link to="/home">
            <div className="logo-header">
              <img src={logo} alt="IKA logo" className="logo" />
            </div>
          </Link>

          <nav className="nav">
            <ul className="nav-list">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={link.name === "Soluciones" ? "dropdown" : ""}
                  onMouseEnter={() => link.name === "Soluciones" && setActiveDropdown(index)}
                  onMouseLeave={() => link.name === "Soluciones" && setActiveDropdown(null)}
                >
                  <Link to={link.path} className={`nav-link ${link.className || ""}`}>
                    {link.name}
                  </Link>
                  
                  {link.name === "Soluciones" && (
                    <ul className={`dropdown-menu ${activeDropdown === index ? "visible" : ""}`}>
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
              ))}
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;