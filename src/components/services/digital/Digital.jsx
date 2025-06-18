import './Digital.css';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';
import Section from '../../ui/layouts/Section';
import Email from '../../../assets/services/mail.jpeg';
import Cloud from '../../../assets/services/cloud.jpeg';
import Ecommers from '../../../assets/services/ecommers.png';
import Hosting from '../../../assets/services/hosting.jpeg'
import Domain from '../../../assets/services/domain.jpeg'

const Digital = () => {
  return (
    <Section>
      <MainTitle text="Internet" />

<ScrollableSection index={0}>
  <div className="section-content">
    <div className="row">
      <div className="column-left">
        <div className="service-text">
          <h2>Correo Electrónico</h2>
          <p>El correo electrónico se ha convertido en un canal de comunicación muy utilizado y con una gran aceptación general. Estas son algunas de las utilidades más destacadas que tiene:</p>
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
            En <strong>IKA</strong> te asesoramos, resolvemos tus dudas y recorremos junto contigo el camino hacia tu transformación digital implementando una herramienta de gestión de correo electrónico personalizada para tu institución, asociación o empresa, que optimice la productividad, fomente el desarrollo y mejore el contacto con tus clientes.
          </p>
        </div>
      </div>

      <div className="column-right">
        <div className="service-image">
          <img src={Email} alt="Correo Electrónico" width="570" height="380" />
        </div>
      </div>
    </div>
  </div>
</ScrollableSection>

        <ScrollableSection className="service-item" index={1}>
          <div className="content">
          <div className="service-image">
            <img src={Cloud} alt="Cloud Computing" width="570" height="380" />
          </div>
          <div className="service-text">
            <h2>Administración De Servicios En La Nube</h2>
            <p >La computación en la nube es atractiva para muchas organizaciones debido a su escalabilidad, seguridad, facilidad de administración y bajos costos. La migración a la nube facilita la adopción de la computación en la nube flexible optimizando procesos y servicios.</p>
            <p >El proceso de migración a la nube de una organización a menudo implica fusionar una infraestructura de TI en el sitio con una solución de nube híbrida, a la que se puede acceder a través de Internet por una tarifa. Las soluciones de nube híbrida hacen la transición entre uno o más proveedores de nube y, por lo general, proporcionan servicios, aplicaciones y espacio de servidor aprovisionados y bajo demanda.</p>
            <p >En IKA nos preocupamos por la seguridad, integridad y disponibilidad de la información y servicios digitales de tu organización, por lo que ponemos a tu disposición estrategias efectivas y los mejores proveedores Cloud Services, para que inicies tu proceso de migración y actualización a la nube, ya sea de manera privada, pública o híbrida.</p>
          </div>
          </div>
        </ScrollableSection>
<ScrollableSection className="service-item" index={2}>
  <div className="section-content">
    <div className="row">
      <div className="column-left">
        <div className="service-text">
          <h2>Diseño E-commerce</h2>
          <p>
            El comercio electrónico (E-commerce) es un modelo de negocio que ha tomado gran auge en los últimos años y que consiste en la compra, venta y comercialización de productos y servicios a través de medios digitales por Internet (páginas web, redes sociales, entre otros.)
          </p>
          <p>Ventajas:</p>
          <ul>
            <li>Mayor cobertura y atención a distintos tipos de cliente al mismo tiempo.</li>
            <li>Dar a conocer tu marca y productos para tener mayor oportunidad de ventas.</li>
            <li>Disponibilidad con un horario 24/7 todo el año sin limitaciones geográficas.</li>
            <li>No dependes de tener un local comercial o una ubicación costosa para tu negocio.</li>
            <li>Ofrecer a tus clientes diferentes formas de pago.</li>
            <li>Realizar ventas de tus productos a distintos destinos dentro y fuera del país.</li>
            <li>Implementar y desarrollar estrategias de marketing enfocadas al tipo de clientes a través de descuentos, cupones, promociones especiales.</li>
          </ul>
          <p>
            <strong>IKA</strong> te apoya y te asesora en el proceso de diseño y construcción de tu página o tienda en línea para que tu negocio dé ese salto tecnológico y se desarrolle de una forma rápida, económica y exponencial.
          </p>
        </div>
      </div>

      <div className="column-right">
        <div className="service-image">
          <img src={Ecommers} alt="E-commerce" width="570" height="380" />
        </div>
      </div>
    </div>
  </div>
</ScrollableSection>

<ScrollableSection index={3}>
  <div className="section-content">
    <div className="row">

      <div className="column-left">
        <div className="service-image">
          <img src={Hosting} alt="Hosting Web" width="570" height="380" />
        </div>
      </div>

      <div className="column-right">
        <div className="service-text">
          <h2>Hosting</h2>
          <p>
            El servicio de <strong>hosting</strong> es fundamental para que tu sitio web esté disponible en Internet las 24 horas del día. Consiste en alquilar espacio en un servidor donde se alojan todos los archivos, bases de datos, imágenes y contenido necesario para que tu sitio funcione correctamente.
          </p>
          <p>
            En <strong>IKA</strong>, ofrecemos soluciones de hosting seguras, escalables y de alto rendimiento, adaptadas a las necesidades de tu proyecto web.
          </p>
          <ul>
            <li>Alta disponibilidad y velocidad de carga.</li>
            <li>Copias de seguridad automáticas y seguridad avanzada.</li>
            <li>Soporte técnico especializado.</li>
            <li>Certificados SSL incluidos.</li>
            <li>Compatibilidad con WordPress, tiendas online y aplicaciones personalizadas.</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</ScrollableSection>

  <ScrollableSection index={4}>
  <div className="section-content">
    <div className="row">
        <div className="service-text">
          <h2>Dominios web</h2>
          <p>
            El <strong>dominio web</strong> es la dirección única que tus clientes usan para encontrar tu página en Internet (por ejemplo, <em>www.tunegocio.com</em>). Elegir el dominio correcto es crucial para fortalecer tu marca y facilitar el acceso a tu sitio.
          </p>
          <p>
            En <strong>IKA</strong> te ayudamos a registrar y administrar tu dominio de forma sencilla y segura, garantizando que tu identidad digital esté protegida.
          </p>
          <ul>
            <li>Registro y renovación de dominios nacionales e internacionales (.com, .mx, .org, .shop, etc.).</li>
            <li>Protección contra robo de dominios.</li>
            <li>Configuración de DNS y redirección.</li>
            <li>Asesoría para elegir el mejor nombre de dominio para tu negocio.</li>
          </ul>
        </div>

      <div className="column-right">
        <div className="service-image">
          <img src={Domain} alt="Registro de dominios web" width="570" height="380" />
        </div>
      </div>
    </div>
  </div>
</ScrollableSection>

      </Section>
  );
}

export default Digital;
