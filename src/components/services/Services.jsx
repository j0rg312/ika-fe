import './Services.css';
import ScrollableSection from '../ui/ux/scrollableSection/ScrollableSection';
import { FaTools, FaNetworkWired, FaPhone, FaDesktop, FaWifi, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import TypingTitle from '../ui/ux/typingTitle/TypingTitle';
import Section from '../ui/layouts/Section';
import { Helmet } from 'react-helmet-async';

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
    <Section>
                    <Helmet>
                <title>IKA - Soluciones</title>
                <meta name="description" content="IKA es una empresa mexicana especializada en consultoría y soporte de TI." />
            </Helmet>
      <TypingTitle text="Servicios"/>
<ScrollableSection id="services">
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
    </ScrollableSection>
    </Section>
   
  );
};

export default Services;
