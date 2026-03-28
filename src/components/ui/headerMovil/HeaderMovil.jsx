"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, services } from "../../../data/header.data";
import logo from "../../../assets/logo.png";


const HeaderMovil = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, mainContent] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = { pathname: usePathname() };


  useEffect(() => {
    setMobileMenuOpen(false);
    mainContent(false);
  }, [location.pathname]);

  useEffect(() => {
    const mainContent = document.querySelector(".main-content");

    if(!mainContent) return;


    const handleScroll = () => {
      setIsScrolled(mainContent.scrollTop > 1);
    };

    mainContent.addEventListener("scroll", handleScroll);

    return () => {
      mainContent.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className={`header-movil ${isScrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <Link href="/home" className="logo-container">
        <img src={logo} alt="IKA logo" className="logo" />
      </Link>
      <button
        className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      <nav className={`mobile-nav ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}

{/*           <li className="mobile-dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => mainContent(!isDropdownOpen)}
            >
              Servicios
            </button>
            <ul className={`mobile-dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.path} className="mobile-dropdown-link" onClick={() => setMobileMenuOpen(false)}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMovil;
