import './Services.css';
import { FaTools, FaNetworkWired, FaDesktop, FaWifi, FaShieldAlt, FaPrint, FaServer} from 'react-icons/fa';
import { Link } from 'react-router-dom'
import MainTitle from '../ui/ux/MainTitle/MainTitle';
import Section from '../ui/layouts/Section';
import { Helmet } from 'react-helmet-async';


const Services = () => {
  const services = [
    {
      title: 'Soporte Técnico Empresarial',
      description: 'Soluciones rápidas y efectivas para tus problemas técnicos.',
      icon: <FaTools />, 
      path: '/services/support'
    },
    {
      title: 'Redes y Seguridad',
      description: 'Diseño e instalación de redes para garantizar conectividad.',
      icon: <FaNetworkWired />, 
      path: '/services/networks'
    },
    {
      title: 'Servidores Linux y Windows',
      description: 'Especialistas en administración, instalación y configuración de servidores físicos y virtuales.',
      icon: <FaServer />, 
      path: '/services/servers'
    },
    {
      title: 'Equipos y Servicios',
      description: 'Venta y renta de equipos de cómputo y soluciones tecnológicas.',
      icon: <FaDesktop />, 
      path: '/services/leasing'
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
    {
      title: 'Arrendamiento de Impresoras',
      description: '',
      icon: <FaPrint/>,
      path: '/services/printer'
    }
  ];

  return (
    <Section>
                    <Helmet>
                <title>IKA - Soluciones</title>
                <meta name="description" content="IKA es una empresa mexicana especializada en consultoría y soporte de TI." />
            </Helmet>
      <MainTitle text="Servicios"/>
<Section id="services">
      <div className="services-grid">
        {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className='service-text'>{service.description}</p>
            </div>
            <div className="card-back">
              <h4 className='title-back'>{service.title}</h4>
              <p className='text-back'>Descubre más sobre este servicio.</p>
                <Link to={service.path} className="btn-see-more">Vér más</Link>
            </div>
          </div>
        </div>

        ))}
      </div>
    </Section>
    </Section>
   
  );
};

export default Services;
