
import { Link } from 'react-router-dom';
import Section from '../../ui/layouts/Section';
import { History, Monitor, Users, CheckCircle } from 'lucide-react';
import './CompanyIntro.css';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';

const CompanyIntro = () => {
  return (
    <Section>
      <ScrollableSection index={0}>
    <MainTitle text='Bienvenido a Ika' className='home-title'/>
      <div className="intro-content">
        <div className="intro-card historia-card">
          <div className="card-icon-header">
            <Link to="../about">
{/*               <div className="icon-wrapper history-icon">
              <History className='icons'/>
            </div> */}
            </Link>

            
          </div>
          <p className="intro-paragraph history-paragraph">
           En <strong>IKA</strong> contamos con más de 20 años de experiencia brindando soluciones integrales en sistemas de información, con un enfoque especializado en tecnologías GNU/Linux, redes, firewalls, servidores en la nube, arrendamiento de equipo de cómputo y servicios administrados de impresión. Nuestra trayectoria y compromiso nos han consolidado como aliados estratégicos para empresas del norte del país, a quienes ofrecemos un servicio confiable, personalizado y orientado a la eficiencia tecnológica.
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
             <ul>
              <li>Consultoría en Sistemas de Información</li>
              <li>Soporte Técnico Empresarial</li>
              <li>Cableado Estructurado</li>
              <li>Ciberseguridad</li>
              <li>Cámaras de Videovigilancia</li>
              <li>Arrendamiento de Equipo de Cómputo</li>
              <li>Servicios Administrados de Impresión</li>
              <li>Arrendamiento de Servidores en la Nube</li>
              <li>Respaldo de Información</li>
              <li>Administración de Infraestructura</li>
             </ul>
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
              En <strong>IKA</strong> contamos con un equipo de trabajo altamente calificado y comprometido, conformado por profesionales con amplia experiencia en tecnologías de la información. Nuestro personal se distingue no solo por su preparación técnica, sino también por su integridad, responsabilidad y vocación de servicio. Trabajamos con pasión, ética y dedicación, enfocados siempre en entender y superar las expectativas de nuestros clientes, brindando soluciones eficientes y a la medida de cada necesidad.
            </p>
          </div>
        </div>

        <div className="mission-statement">
          <div className="mission-icon-wrapper">
            <div className="mission-icon">
              <CheckCircle className='icons' />
            </div>

              <h3 className='filosofia-title'>Nuestra Filosofía</h3>
          </div>
          <div className="mission-content">
          
            <p>
             IKA se basa en la excelencia técnica, el compromiso con nuestros clientes y una firme orientación hacia la mejora continua. Creemos que la tecnología debe ser una herramienta para potenciar el crecimiento y la eficiencia de las empresas, por eso trabajamos con profesionalismo, ética y cercanía, ofreciendo soluciones personalizadas que realmente marcan la diferencia. Nos guiamos por valores sólidos como la honestidad, la responsabilidad y el respeto, y fomentamos un ambiente de colaboración donde el conocimiento, la innovación y la satisfacción del cliente son siempre nuestra prioridad.
            </p>
          </div>
        </div>
      </div>
      </ScrollableSection>
      
    </Section>
  );
};

export default CompanyIntro;
