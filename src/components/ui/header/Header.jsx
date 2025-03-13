import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../../../assets/logo.png";

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); 
    const services = [
        { name: "Redes", path: "/services/networks" },
        { name: "Soporte Técnico", path: "/services/support" },
        { name: "Seguridad", path: "/services/security" },
        { name: "Transformación Digital", path: "/services/digital" },
        { name: "Telefonía", path: "/services/telefonia" },
        { name: "Equipos y Servicios", path: "/services/equipment" }
    ];


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="header">
            {/* Logo */}

            <Link to="home">
            <div className="logo-header">
                <img src={logo} alt="IKA logo" className="logo" />
            </div>
            </Link>
            {/* Menú de navegación */}
            {!isMobile ? (
                <nav className="nav">
                    <ul className="nav-list">
                        <li><Link to="/home" className="nav-link">Home</Link></li>
                        <li><Link to="/about" className="nav-link">Nosotros</Link></li>
                        <li 
                            className="dropdown" 
                            onMouseEnter={() => setDropdownVisible(true)} 
                            onMouseLeave={() => setDropdownVisible(false)}
                        >
                           <li><Link className="nav-link" to="/services" >Servicios</Link></li>
                            {isDropdownVisible && (
                                <ul className="dropdown-menu">
                                    {services.map((service, index) => (
                                        <li key={index} className="dropdown-item">
                                            <Link to={service.path} className="dropdown-link">
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li><Link to="/OurWork" className="nav-link">Nuestro trabajo</Link></li>
                        <li><Link to="/ECommers" className="nav-link store">Tienda</Link></li>
                        <li><Link to="/contact" className="nav-link">Contacto</Link></li>
                    </ul>
                </nav>
            ) : (
                <div className="hamburger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            )}

            {/* Menú móvil */}
            {isMobile && isMobileMenuOpen && (
                <nav className="mobile-nav">
                    <ul className="mobile-nav-list">
                        <li><Link to="/home" className="mobile-nav-link">Home</Link></li>
                        <li><Link to="/about" className="mobile-nav-link">Nosotros</Link></li>
                        <li className="mobile-dropdown">
                            <li><Link to="/services" className='mobile-nav-link'>Servicios</Link></li>
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
                        <li><Link to="/OurWork" className="mobile-nav-link">Nuestro trabajo</Link></li>
                        <li><Link to="/ECommers" className="mobile-nav-link">Tienda</Link></li>
                        <li><Link to="/contact" className="mobile-nav-link">Contacto</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
