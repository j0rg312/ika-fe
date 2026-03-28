"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, services } from "../../../data/header.data";
import logo from "../../../assets/logo.png";
import { Menu, X, ChevronDown, PhoneCall } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Filtramos "Contacto" para colocarlo como CTA separado a la derecha
  const mainNavLinks = navLinks.filter(link => link.name !== "Contacto");
  const contactLink = navLinks.find(link => link.name === "Contacto") || { path: '/contact', name: 'Contacto' };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-gray-200/60 shadow-sm py-2' 
          : 'bg-white border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          
          {/* 1. Logo (Izquierda) */}
          <div className="flex-shrink-0 w-48 md:w-56 flex items-center">
            <Link href="/home" className="group flex items-center">
              <img 
                src={logo.src || logo} 
                alt="IKA logo" 
                className={`transition-all duration-500 object-contain ${isScrolled ? 'h-11' : 'h-14'} group-hover:scale-105`} 
              />
            </Link>
          </div>

          {/* 2. Navegación (Centro) */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-10">
              {mainNavLinks.map((link, index) => (
                <li 
                  key={index}
                  className="relative group py-6"
                  onMouseEnter={() => link.name === "Soluciones" && setActiveDropdown(index)}
                  onMouseLeave={() => link.name === "Soluciones" && setActiveDropdown(null)}
                >
                  <Link 
                    href={link.path} 
                    className={`flex items-center gap-1.5 text-[15px] font-semibold tracking-wide transition-all duration-300 relative ${
                      pathname === link.path 
                        ? 'text-primary' 
                        : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    {link.name}
                    {link.name === "Soluciones" && (
                      <ChevronDown size={18} className={`transition-transform duration-300 text-gray-400 group-hover:text-primary ${activeDropdown === index ? 'rotate-180' : ''}`} />
                    )}
                    
                    {/* Indicador inferior animado */}
                    <span 
                      className={`absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} 
                    />
                  </Link>
                  
                  {/* Dropdown Soluciones */}
                  {link.name === "Soluciones" && (
                    <div 
                      className={`absolute top-full left-1/2 -translate-x-1/2 transition-all duration-300 origin-top ${
                        activeDropdown === index 
                          ? 'opacity-100 visible scale-100 translate-y-0' 
                          : 'opacity-0 invisible scale-95 translate-y-2'
                      }`}
                    >
                      <ul className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-2xl w-72 overflow-hidden py-3">
                        {services.map((service, i) => (
                          <li key={i}>
                            <Link 
                              href={service.path} 
                              className="block px-6 py-3 text-[14px] font-medium text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors border-l-2 border-transparent hover:border-primary"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. CTA Contacto (Derecha) */}
          <div className="hidden lg:flex w-48 md:w-56 justify-end items-center">
            <Link 
              href={contactLink.path} 
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
               <span>Contactar</span>
            </Link>
          </div>

          {/* Menú Hamburguesa Móvil */}
          <div className="lg:hidden flex items-center justify-end w-48 flex-shrink-0">
            <button 
              className="flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Alternar menú"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Overlay */}
      <div 
        className={`fixed inset-0 top-[76px] bg-white z-40 lg:hidden overflow-y-auto transition-transform duration-500 ease-in-out border-t border-gray-100 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-6 py-8 flex flex-col h-full bg-gray-50/50">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <li key={index} className="flex flex-col">
                <Link 
                  href={link.path} 
                  className={`flex items-center justify-between py-4 px-4 rounded-xl text-lg font-bold transition-colors ${
                    pathname === link.path 
                      ? 'bg-primary/10 text-primary' 
                      : link.name === "Contacto"
                        ? 'bg-primary text-white mt-4 shadow-md'
                        : 'text-gray-800 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  {link.name}
                  {link.name === "Contacto" && <PhoneCall size={20} className="opacity-80" />}
                </Link>

                {/* Submenú Móvil Soluciones */}
                {link.name === "Soluciones" && (
                  <ul className="mt-2 mb-4 pr-4 pl-8 flex flex-col gap-1 border-l-2 border-primary/20 ml-6">
                    {services.map((service, i) => (
                      <li key={i}>
                        <Link 
                          href={service.path} 
                          className="block py-2.5 px-4 rounded-lg text-base font-medium text-gray-600 hover:text-primary hover:bg-white transition-colors"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;