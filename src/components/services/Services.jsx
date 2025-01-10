import './Services.css';
import { FaTools, FaNetworkWired, FaPhone, FaDesktop, FaWifi, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import TypingTitle from '../typingTitle/TypingTitle';

const Services = () => {
  const services = [
    {
      title: 'Soporte Técnico',
      description: 'Soluciones rápidas y efectivas para tus problemas técnicos.',
      icon: <FaTools />, 
      path: '/services/support'
    },
    {
      title: 'Redes',
      description: 'Diseño e instalación de redes para garantizar conectividad.',
      icon: <FaNetworkWired />, 
      path: '/services/networks'
    },
    {
      title: 'Telefonía',
      description: 'Implementamos sistemas de telefonía modernos y efectivos.',
      icon: <FaPhone />, 
      path: '/services/telefonia'
    },
    {
      title: 'Equipos y Servicios',
      description: 'Venta y renta de equipos de cómputo y soluciones tecnológicas.',
      icon: <FaDesktop />, 
      path: '/services/equipment'
    },
    {
      title: 'Internet',
      description: 'Ofrecemos servicios de internet confiables y de alta velocidad.',
      icon: <FaWifi />,
      path: '/services/digital'
    },
    {
      title: 'Seguridad',
      description: 'Sistemas avanzados para proteger tu infraestructura tecnológica.',
      icon: <FaShieldAlt />, 
      path:'/services/security'
    },
  ];

  return (
    <section id="services">
      <TypingTitle text="Servicios"/>
      <div className="services-grid">
        {services.map((service, index) => (
            <Link to={service.path} key={index} className="service-card">
            <img src={service.icon} alt={service.title} className="service-icon" />
            <div className="service-info">
              <p>{service.description}</p>
              <div className="service-icon">{service.icon}</div>
            </div>
            </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
