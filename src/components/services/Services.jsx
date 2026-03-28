"use client";
import { FaTools, FaNetworkWired, FaDesktop, FaWifi, FaShieldAlt, FaPrint, FaServer} from 'react-icons/fa';
import Link from 'next/link';
import MainTitle from '../ui/ux/MainTitle/MainTitle';
import Section from '../ui/layouts/Section';


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
      title: 'Servicio de impresión administrado',
      description: '',
      icon: <FaPrint/>,
      path: '/services/printer'
    }
  ];

  return (
    <Section>

      <MainTitle 
        text="Nuestros Servicios" 
        subtitle="Soluciones tecnológicas integrales para impulsar el crecimiento y seguridad de su empresa."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 w-full">
        {services.map((service, index) => (
        <div key={index} className="group relative w-full h-[320px] perspective-1000">
          <div className="relative w-full h-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-3xl shadow-sm group-hover:shadow-2xl">
            
            {/* Front Card */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-gray-100">
              <div className="w-20 h-20 bg-gray-50 text-gray-800 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-sm border border-gray-100 group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3 leading-tight">{service.title}</h3>
              <p className="text-gray-500 font-medium text-sm leading-relaxed">{service.description}</p>
            </div>
            
            {/* Back Card */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 flex flex-col items-center justify-center text-center text-white ring-1 ring-primary/50 shadow-inner">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl mb-6 border border-white/20">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-primary-light text-sm font-medium mb-8 opacity-90">Descubra todo lo que este servicio incluye.</p>
              
              <Link 
                href={service.path} 
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-300 w-full max-w-[200px]"
              >
                MÁS DETALLES
              </Link>
            </div>
            
          </div>
        </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
