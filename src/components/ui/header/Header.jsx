import { useState, useEffect, use } from "react";
import { Link } from "react-router-dom";
import { navLinks, services } from "../../../data/header.data";
import "./Header.css";
import logo from "../../../assets/logo.png";
import HeaderMovil from "../headerMovil/HeaderMovil";


const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
 

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
              {navLinks.map((link, index) =>
                link.isDropdown ? (
                  <li
                    key={index}
                    className="dropdown"
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                  >
                    <Link to={link.path} className="nav-link">Servicios</Link>
                    <ul className={`dropdown-menu ${isDropdownVisible ? "visible" : ""}`}>
                      {services.map((service, i) => (
                        <li key={i} className="dropdown-item">
                          <Link to={service.path} className="dropdown-link">
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={index}>
                    <Link to={link.path} className={`nav-link ${link.className || ""}`}>
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
