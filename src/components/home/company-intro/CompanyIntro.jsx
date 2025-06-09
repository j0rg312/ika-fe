import React from 'react';
import './CompanyIntro.css';

const CompanyIntro = () => {
  return (
    <div className="company-intro-container">
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
            <div className="icon-wrapper history-icon">
              <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="intro-subtitle">Nuestra Historia</h3>
          </div>
          <p className="intro-paragraph">
            <strong className='highlight'>IKA</strong> es una empresa mexicana que nace en 2001, con la idea de prestar servicios de consultoría y soporte a las empresas de la ciudad de Chihuahua. Está conformada por un grupo de profesionales con más de 20 años de experiencia en distintas áreas de la Tecnología de la Información, con una visión enfocada a apoyar y fomentar el uso de tecnologías libres.
          </p>
        </div>

        <div className="intro-grid">
          <div className="grid-card blue">
            <div className="card-header">
              <div className="icon blue-bg">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h4 className="card-title blue-text">Nuestros Servicios</h4>
            </div>
            <p className="card-description">
              Ofrecemos servicios informáticos, consultorías, soporte técnico, desarrollo de proyectos especiales, venta y renta de equipo de cómputo, adaptándonos a las necesidades específicas de cada cliente.
            </p>
          </div>

          <div className="grid-card green">
            <div className="card-header">
              <div className="icon green-bg">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h4 className="card-title green-text">Nuestro Equipo</h4>
            </div>
            <p className="card-description">
              Contamos con ingenieros capacitados en distintas ramas de la tecnología, lo que nos permite contar con un portafolio de servicios amplio y especializado para cada sector.
            </p>
          </div>
        </div>

        <div className="mission-statement">
          <div className="mission-icon-wrapper">
            <div className="mission-icon">
              <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
          <div className="mission-content">
            <h4>Nuestro Compromiso</h4>
            <p>
              Participamos activamente en los proyectos de nuestros clientes, llevándolos a buen término y cumpliendo cabalmente con sus necesidades tecnológicas, garantizando soluciones innovadoras y de calidad.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CompanyIntro;