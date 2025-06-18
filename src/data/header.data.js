// src/data/navLinks.js

import { classNames } from "primereact/utils";

export const navLinks = [
  { name: "Home", path: "/home" },
  { name: "Nosotros", path: "/about" },
  { name: "Soluciones",
    path: "/services",
    isDropdown: true },
 /*  { name: "Nuestro Trabajo", path: "/OurWork" }, */
  { name: "Contacto", path: "/contact", className: "contact"},
];

export const services = [
  { name: "Redes", path: "/services/networks" },
  { name: "Soporte Técnico", path: "/services/support" },
  { name: "Seguridad", path: "/services/security" },
  { name: "Transformación Digital", path: "/services/digital" },
  { name: "Administración de Servidores", path: "/services/servers" },
  { name: "Equipos y Servicios", path: "/services/leasing" },
  { name: "Servicio de impresión administrado", path: "/services/printer"}
];
