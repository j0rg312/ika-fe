import './Digital.css';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';
import Section from '../../ui/layouts/Section';

import Email from '../../../assets/services/mail.jpeg';
import Cloud from '../../../assets/services/cloud.jpeg';
import Ecommers from '../../../assets/services/ecommers.png';
import Hosting from '../../../assets/services/hosting.jpeg';
import Domain from '../../../assets/services/domain.jpeg';

const Digital = () => {
  return (
    <Section>
      <MainTitle text="Internet" />

      <ScrollableSection index={0}>
        <div className="section-header">
          <h2>Correo Electrónico</h2>
        </div>
        <div className="content">
          <div className="text-content">
            <p>
              El correo electrónico se ha convertido en un canal de comunicación muy utilizado y con una gran aceptación general. Estas son algunas de las utilidades más destacadas que tiene:
            </p>
            <ul>
              <li>Medio de Comunicación.</li>
              <li>Envío de Información General.</li>
              <li>Método de Autenticación.</li>
              <li>Enviar y Compartir Fotos y Archivos.</li>
              <li>Gestiones Comerciales y/o Marketing.</li>
              <li>Registro en Blogs y Redes Sociales.</li>
            </ul>
            <p>
              En la actualidad, el uso de la tecnología en los medios de comunicación son indispensables y el correo electrónico se ha convertido en una herramienta imprescindible en la educación, industria, comercio, salud y en el ámbito empresarial.
              En <strong>IKA</strong> te asesoramos, resolvemos tus dudas y recorremos contigo el camino hacia tu transformación digital implementando una herramienta de gestión de correo electrónico personalizada para tu institución, asociación o empresa.
            </p>
          </div>
          <div className="service-image">
            <img src={Email} alt="Correo Electrónico" />
          </div>
        </div>
      </ScrollableSection>

      <ScrollableSection index={1}>
        <div className="section-header">
          <h2>Administración De Servicios En La Nube</h2>
        </div>
        <div className="content">
          <div className="service-image">
            <img src={Cloud} alt="Cloud Computing" />
          </div>
          <div className="text-content">
            <p>
              La computación en la nube es atractiva por su escalabilidad, seguridad, facilidad de administración y bajos costos.
              La migración a la nube optimiza procesos y servicios de manera flexible.
            </p>
            <p>
              En IKA nos preocupamos por la seguridad, integridad y disponibilidad de la información y servicios digitales de tu organización.
              Te ofrecemos estrategias efectivas con los mejores proveedores para tu transición a la nube: privada, pública o híbrida.
            </p>
          </div>
        </div>
      </ScrollableSection>

      <ScrollableSection index={2}>
        <div className="section-header">
          <h2>Diseño E-commerce</h2>
        </div>
        <div className="content">
          <div className="text-content">
            <p>
              El comercio electrónico permite comprar y vender productos a través de medios digitales como páginas web y redes sociales.
            </p>
            <p>Ventajas:</p>
            <ul>
              <li>Cobertura y atención a múltiples clientes simultáneamente.</li>
              <li>Mayor visibilidad para tu marca y productos.</li>
              <li>Operación 24/7 sin límite geográfico.</li>
              <li>No necesitas un local físico costoso.</li>
              <li>Ofreces distintos métodos de pago.</li>
              <li>Ventas locales e internacionales.</li>
              <li>Estrategias de marketing con promociones, descuentos y cupones.</li>
            </ul>
            <p>
              <strong>IKA</strong> te asesora para lanzar tu tienda en línea de forma profesional, eficiente y escalable.
            </p>
          </div>
          <div className="service-image">
            <img src={Ecommers} alt="E-commerce" />
          </div>
        </div>
      </ScrollableSection>

      <ScrollableSection index={3}>
        <div className="section-header">
          <h2>Hosting</h2>
        </div>
        <div className="content">
          <div className="service-image">
            <img src={Hosting} alt="Hosting Web" />
          </div>
          <div className="text-content">
            <p>
              El servicio de <strong>hosting</strong> permite que tu sitio esté disponible 24/7. Consiste en alojar todos tus archivos, base de datos e imágenes en un servidor seguro.
            </p>
            <p>
              En <strong>IKA</strong> ofrecemos hosting seguro, escalable y con soporte técnico.
            </p>
            <ul>
              <li>Alta disponibilidad y velocidad.</li>
              <li>Copias de seguridad automáticas.</li>
              <li>Certificados SSL incluidos.</li>
              <li>Soporte técnico especializado.</li>
              <li>Compatibilidad con CMS, e-commerce y más.</li>
            </ul>
          </div>
        </div>
      </ScrollableSection>

      <ScrollableSection index={4}>
        <div className="section-header">
          <h2>Dominios web</h2>
        </div>
        <div className="content">
          <div className="text-content">
            <p>
              El <strong>dominio web</strong> es la dirección única de tu sitio, como <em>www.tunegocio.com</em>. Es esencial para posicionar tu marca.
            </p>
            <p>
              En <strong>IKA</strong> te ayudamos con el registro, renovación y configuración de dominios.
            </p>
            <ul>
              <li>Dominios nacionales e internacionales (.com, .mx, .org...)</li>
              <li>Protección contra robo de dominios.</li>
              <li>Configuración de DNS y redirecciones.</li>
              <li>Asesoría para elegir tu dominio ideal.</li>
            </ul>
          </div>
          <div className="service-image">
            <img src={Domain} alt="Dominios web" />
          </div>
        </div>
      </ScrollableSection>
    </Section>
  );
};

export default Digital;
