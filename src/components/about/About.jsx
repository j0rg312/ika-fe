import ScrollableSection from '../ui/ux/scrollableSection/ScrollableSection';
import './About.css';
import MainTitle from '../ui/ux/MainTitle/MainTitle';
import Section from '../ui/layouts/Section';
import { Helmet } from 'react-helmet-async';
import { Lightbulb, Handshake, Star, Target, Rocket, Wrench, Laptop, Hammer, ShieldCheck, Users, TrendingUp} from 'lucide-react';
import Security from '../../assets/certificates/Security.png'
import Data from '../../assets/certificates/Data.png'

const About = () => {
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
          <div className="certification-card">
            <div className="certification-icon">
                <img src={Data} alt="Respaldo Profesional y Técnico Especializado" />
            </div>
            <h4>Recuperación Avanzada de Datos</h4>
            <p>Certified Data Recovery Professional (CDRP) de la Asociación ARDA e IACRB</p>
          </div>
          
          <div className="certification-card">
            <div className="certification-icon">
                <img src={Security} alt="Recuperación Avanzada de Datos" />
            </div>
            <h4>Seguridad en Cómputo</h4>
            <p>Certificación Práctica Avanzada de Seguridad en Computo (HAURI Latinoamérica)</p>
          </div>
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