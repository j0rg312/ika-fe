
import { Link } from 'react-router-dom';
import Section from '../../ui/layouts/Section';
import { History, Monitor, Users, CheckCircle } from 'lucide-react';
import './CompanyIntro.css';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';

const CompanyIntro = () => {
  return (
    <Section>
      <ScrollableSection index={0}>
<div className="intro-header">
        <h1 className="intro-title">
          Bienvenidos a <span className="highlight">IKA</span>
        </h1>
        <div className="intro-underline"></div>
        <p className="intro-subtitle-text">
          Más de 20 años de experiencia en tecnología y consultoría informática
        </p>
      </div>

      <div className="intro-content">
        <div className="intro-card historia-card">
          <div className="card-icon-header">
            <Link to="../about">
              <div className="icon-wrapper history-icon">
              <History className='icons'/>
            </div>
            </Link>

            <h3 className="intro-subtitle">Nuestra Historia</h3>
          </div>
          <p className="intro-paragraph">
            <strong className='highlight'>IKA</strong> es una empresa mexicana que nace en 2001, con la idea de prestar servicios de consultoría y soporte a las empresas de la ciudad de Chihuahua...
          </p>
        </div>

        <div className="intro-grid">
          <div className="grid-card blue">
            <div className="card-header">
              <Link to="../services">
                <div className="icon blue-bg">
                 <Monitor className='icons'/>
              </div>
              </Link>
              <h4 className="card-title blue-text">Nuestros Servicios</h4>
            </div>
            <p className="card-description">
              Ofrecemos servicios informáticos, consultorías, soporte técnico...
            </p>
          </div>

          <div className="grid-card green">
            <div className="card-header">
              <div className="icon green-bg">
                <Users className='icons'/>
              </div>
              <h4 className="card-title green-text">Nuestro Equipo</h4>
            </div>
            <p className="card-description">
              Contamos con ingenieros capacitados en distintas ramas...
            </p>
          </div>
        </div>

        <div className="mission-statement">
          <div className="mission-icon-wrapper">
            <div className="mission-icon">
              <CheckCircle className='icons' />
            </div>
          </div>
          <div className="mission-content">
            <h4>Nuestra Filosofía</h4>
            <p>
             Como empresa nos interesa formar alianzas estratégicas con nuestros clientes que les permita desarrollar y optimizar su crecimineto tecnológico y operativo,
             teniendo siempre en cuenta sus necesidades y garantizando su satisfacción.
            </p>
          </div>
        </div>
      </div>
      </ScrollableSection>
      
    </Section>
  );
};

export default CompanyIntro;
