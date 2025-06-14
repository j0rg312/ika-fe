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
        <title>IKA - Nosotroos</title>
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
              Somos una empresa mexicana fundada en 2001 con la misión de brindar servicios de consultoría y soporte tecnológico de excelencia a las empresas de Chihuahua y más allá.
            </p>
            
            <div className="expertise-grid">
              <div className="expertise-item">
                <div className="expertise-icon">
                    <Wrench size={36}/>
                </div>
                <h4>Consultoría Especializada</h4>
                <p>Servicios informáticos y consultorías técnicas personalizadas</p>
              </div>
              
              <div className="expertise-item">
                <div className="expertise-icon">
                    <Laptop size={36} />
                </div>
                <h4>Desarrollo de Proyectos</h4>
                <p>Soluciones a medida y proyectos especiales</p>
              </div>
              
              <div className="expertise-item">
                <div className="expertise-icon">
                    <Hammer size={36} />
                </div>
                <h4>Soporte Integral</h4>
                <p>Venta, renta y mantenimiento de equipos</p>
              </div>
            </div>
            
            <p className="commitment-text">
              Nuestro equipo de ingenieros especializados cuenta con más de <strong>20 años de experiencia</strong> en diversas áreas de Tecnología de la Información, con un enfoque particular en el fomento de <strong>tecnologías libres</strong> y soluciones sostenibles.
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
            <h4>Excelencia</h4>
            <p>Nos esforzamos por superar expectativas en cada entrega, manteniendo los más altos estándares de calidad en todos nuestros servicios.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <ShieldCheck color="black" size={36} />
            </div>
            <h4>Confianza</h4>
            <p>Construimos relaciones sólidas y duraderas basadas en la confianza mutua, la responsabilidad y la transparencia.</p>
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
            <p>Promovemos el desarrollo continuo tanto de nuestro equipo como de nuestros clientes, impulsando el progreso conjunto.</p>
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
                <Target color="white" size={28} />
              </div>
              <h3>Nuestra Misión</h3>
            </div>
            <p>
              Proveer soluciones tecnológicas personalizadas e innovadoras que impulsen el crecimiento, la eficiencia y la competitividad de nuestros clientes, contribuyendo al desarrollo tecnológico de México.
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
              Ser reconocidos como el socio estratégico líder en innovación tecnológica para empresas de todos los tamaños, expandiendo nuestra presencia a nivel nacional e internacional.
            </p>
          </div>
        </div>
      </ScrollableSection>
    </Section>
  );
};

export default About;