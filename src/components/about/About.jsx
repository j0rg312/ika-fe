import ScrollableSection from '../ui/ux/scrollableSection/ScrollableSection';
import './About.css';
import MainTitle from '../ui/ux/MainTitle/MainTitle';
import Section from '../ui/layouts/Section';
import { Helmet } from 'react-helmet-async';
import { Lightbulb, Handshake, Star, Target, Rocket, Wrench, Laptop, Hammer, ShieldCheck, Users, TrendingUp} from 'lucide-react';
import Security from '../../assets/certificates/Security.png';
import Data from '../../assets/certificates/Data.png';
import Fortinet from '../../assets/certificates/fortinet.png';
import Cisco from '../../assets/certificates/cisco.jpeg';
import CCNA from '../../assets/certificates/CCNA.jpeg';
import Dahua from '../../assets/certificates/dahua.jpeg';
import Dahua2 from '../../assets/certificates/dahua2.jpeg';
import Intellinet from '../../assets/certificates/intellinet.jpeg';
import Intellinet2 from '../../assets/certificates/intellinet2.jpeg';
import GoogleCloud from '../../assets/certificates/googleCloud.png'


const About = () => {
  const certificates = [
  {
    image: Data,
    alt: "Respaldo Profesional y Técnico Especializado",
    title: "Recuperación Avanzada de Datos",
    description: "Certified Data Recovery Professional (CDRP) de la Asociación ARDA e IACRB"
  },
  {
    image: Security,
    alt: "Recuperación Avanzada de Datos",
    title: "Seguridad en Cómputo",
    description: "Certificación Práctica Avanzada de Seguridad en Computo (HAURI Latinoamérica)"
  },
  {
    image: Fortinet,
    alt: "Fortinet Certified Associate in Cybersecurity",
    title: "Ciberseguridad – Nivel Asociado",
    description: "Fortinet Certified Associate in Cybersecurity (NSE 1). Fundamentos de ciberseguridad, amenazas comunes y buenas prácticas de protección en redes."  
  },
  {
    image: Cisco,
    alt: "Introduction to Networks – Cisco",
    title: "Introducción a Redes",
    description: "Curso Introduction to Networks (CCNA) de Cisco. Fundamentos de redes, modelos OSI/TCP-IP, direccionamiento IP, y conectividad de red básica."
  },
  {
    image: CCNA,
    alt: "Switching, Routing and Wireless Essentials – Cisco",
    title: "Switching, Routing & Wireless",
    description: "Curso CCNA: Switching, Routing and Wireless Essentials de Cisco. Conceptos de redes LAN, VLAN, routing estático, protocolos y conectividad inalámbrica."
  },
  { 
    image: Dahua,
    alt: "Dahua Certified Associate – Video Intercom System",
    title: "Dahua DHCA-VIS",
    description: "Certificación DHCA-VIS (Dahua Certified Associate) en Sistemas de Videoportero. Instalación, configuración y operación de soluciones de intercomunicación Dahua."
  },
  {
    image: Intellinet,
    alt: "Certificación Intellinet en Cableado Estructurado",
    title: "Cableado Estructurado",
    description: "Certificación en Cableado Estructurado de Intellinet. Principios, instalación y estándares de redes físicas con infraestructura de alto desempeño."
  },
  {
    image: Intellinet2,
    alt: "Integrador Certificado – Intellinet Network Solutions",
    title: "Integrador Certificado",
    description: "Certificación como Integrador Certificado por Intellinet Network Solutions. Competencias en diseño, implementación y soporte de soluciones de conectividad de la marca."
  },
   { 
    image: Dahua2,
    alt: "Dahua DHSA – Mobile Vehicle System",
    title: "Dahua DHSA-MOVIE",
    description: "Certificación DHSA-MOVIE (Dahua High-level Security Associate) en Sistemas de Videovigilancia Móvil. Soluciones para vehículos con cámaras, grabadores móviles y gestión remota de flotas."
},
{
  image: GoogleCloud,
  alt: "Google Cloud – G Suite Administrator Fundamentals",
  title: "Administrador G Suite",
  description: "Certificación de Google Cloud en G Suite Administrator Fundamentals. Fundamentos para la administración de usuarios, servicios, seguridad y configuración de G Suite en organizaciones."
}



  ]
  return (
    <Section>
      <Helmet>
        <title>IKA - Nosotros</title>
        <meta name="description" content="IKA es una empresa mexicana especializada en consultoría y soporte de TI con más de 20 años de experiencia." />
      </Helmet>
      
      <MainTitle text="Quiénes Somos" />

      <ScrollableSection index={0}>
        <div className="about-intro">
          <div className="company-highlight">
            <span className="establishment-year">Desde 2001</span>
            <h2 className="company-name">IKA</h2>
            <p className="company-tagline">Innovación tecnológica mexicana</p>
          </div>
          
          <div className="about-content">
            <p className="intro-paragraph">
                En <strong>IKA</strong> contamos con más de 20 años de experiencia brindando soluciones integrales en sistemas de información, con un enfoque especializado en tecnologías GNU/Linux, redes, firewalls, servidores en la nube, arrendamiento de equipo de cómputo y servicios administrados de impresión. Nuestra trayectoria y compromiso nos han consolidado como aliados estratégicos para empresas del norte del país, a quienes ofrecemos un servicio confiable, personalizado y orientado a la eficiencia tecnológica.
            </p>
            
            <div className="expertise-grid">
              <div className="expertise-item">
                <div className="expertise-icon">
                    <Wrench size={36}/>
                </div>
                <h4>Consultoría Especializada</h4>
                <p>Servicios informáticos y consultorías técnicas personalizadas.</p>
              </div>
              
              <div className="expertise-item">
                <div className="expertise-icon">
                    <Laptop size={36} />
                </div>
                <h4>Desarrollo de Proyectos</h4>
                <p>Soluciones a medida y proyectos especiales.</p>
              </div>
              
              <div className="expertise-item">
                <div className="expertise-icon">
                    <Hammer size={36} />
                </div>
                <h4>Equipamiento Tecnológico</h4>
                <p>Venta, renta y mantenimiento de equipos. </p>
              </div>
            </div>
            
            <p className="commitment-text">
              Nuestro equipo En <strong>IKA</strong> contamos con un equipo de trabajo altamente calificado y comprometido, conformado por profesionales con amplia experiencia en tecnologías de la información. Nuestro personal se distingue no solo por su preparación técnica, sino también por su integridad, responsabilidad y vocación de servicio. Trabajamos con pasión, ética y dedicación, enfocados siempre en entender y superar las expectativas de nuestros clientes, brindando soluciones eficientes y a la medida de cada necesidad.
            </p>
          </div>
        </div>
      </ScrollableSection>

      <ScrollableSection  index={1}>
        <div className="section-header">
          <h3>Nuestros Valores</h3>
          <p className="section-subtitle">Los principios que guían nuestro trabajo</p>
        </div>
        
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
                <Lightbulb color="black" size={36} />
            </div>
            <h4>Innovación</h4>
            <p>Exploramos constantemente nuevas tecnologías y metodologías para ofrecer soluciones de vanguardia que agreguen valor real a nuestros clientes.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
                <Handshake color="black" size={36} />
            </div>
            <h4>Compromiso</h4>
            <p>Trabajamos como socios estratégicos, comprometiéndonos con el éxito de cada proyecto y manteniendo una comunicación transparente.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon">
                <Star color="black" size={36} />
            </div>
            <h4>Profesionalismo</h4>
            <p>
              Actuamos con responsabilidad, conocimiento y excelencia, manteniendo los más altos estándares de calidad en todos nuestros servicios.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <ShieldCheck color="black" size={36} />
            </div>
            <h4>Integridad</h4>
            <p>
              Operamos con ética, transparencia  y respeto, construyendo relaciones solidas y duraderas,
              basadas en la confianza mutua y la resposabilidad.
              
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <Users color="black" size={36} />
            </div>
            <h4>Colaboración</h4>
            <p>Fomentamos un entorno de trabajo en equipo donde el conocimiento y la creatividad se combinan para lograr resultados impactantes.</p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <TrendingUp color="black" size={36} />
            </div>
            <h4>Crecimiento</h4>
            <p>Promovemos el desarrollo continuo tanto de nuestro equipo como de nuestros clientes, impulsando el progreso mutuo.</p>
          </div>
        </div>
      </ScrollableSection>

      <ScrollableSection  index={2}>
        <div className="section-header">
          <h3>Nuestras Certificaciones</h3>
          <p className="section-subtitle">Respaldo profesional y técnico especializado</p>
        </div>
        
        <div className="certifications-grid">
          {certificates.map((certificacion, i) => (
            <div className="certification-card" key={i}>
              <div className="certification-icon">
                  <img src={certificacion.image} alt={certificacion.alt} />
              </div>
              <h4>{certificacion.title}</h4>
              <p>{certificacion.description}</p>
            </div>
          ))}
        </div>
      </ScrollableSection>

      <ScrollableSection  index={3}>
        <div className="mission-vision-container">
          <div className="mission-card">
            <div className="card-header">
              <div className="card-icon mission-icon">
                <Target  size={40} />
              </div>
              <h3>Nuestra Misión</h3>
            </div>
            <p>
              Proveer servicios de consultoría y soluciones tecnológicas de alto nivel, con un enfoque en la eficiencia operativa, la seguridad y la continuidad del negocio. Nos comprometemos a acompañar a nuestros clientes en sus procesos de transformación digital, mediante un equipo de expertos altamente calificados y una atención orientada a la excelencia y la satisfacción total.
            </p>
          </div>
          
          <div className="vision-card">
            <div className="card-header">
              <div className="card-icon vision-icon">
                <Rocket color="white" size={28} />
              </div>
              <h3>Nuestra Visión</h3>
            </div>

            <p>
              Ser la empresa líder en consultoría y servicios tecnológicos en el norte del país, reconocida por nuestra experiencia, innovación, compromiso con la calidad y cercanía con nuestros clientes, contribuyendo activamente a la transformación digital de las organizaciones.
            </p>
          </div>
        </div>
      </ScrollableSection>
    </Section>
  );
};

export default About;