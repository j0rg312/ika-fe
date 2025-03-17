import './Digital.css';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import TypingTitle from '../../ui/ux/typingTitle/TypingTitle';
import Section from '../../ui/layouts/Section';

const Digital = () => {
  return (
    <Section>
      <TypingTitle text="Internet" />
      <Section >
        <ScrollableSection className="service-item" index={0}>
            <div className="content">
            <div className="service-text">
            <h3 className="service-title text-center">Correo Electrónico</h3>
            <p>El correo electrónico se ha convertido en un canal de comunicación muy utilizado y con una gran aceptación general. Estas son algunas de las utilidades más destacadas que tiene:</p>
            <ul>
              <li>Medio de Comunicación.</li>
              <li>Envío de Información General.</li>
              <li>Método de Autenticación.</li>
              <li>Enviar y Compartir Fotos y Archivos.</li>
              <li>Gestiones Comerciales y/o Marketing.</li>
              <li>Registro en Blogs y Redes Sociales.</li>
            </ul>
            <p>En la actualidad, el uso de la tecnología en los medios de comunicación son indispensables y el correo electrónico se ha convertido en una herramienta imprescindible en la educación, industria, comercio, salud y en el ámbito empresarial. En IKA te asesoramos, resolvemos tus dudas y recorremos junto contigo el camino hacia tu transformación digital implementando una herramienta de gestión de correo electrónico personalizada para tu institución, asociación o empresa, que optimice la productividad, fomente el desarrollo y mejore el contacto con tus clientes.</p>
          </div>
          <div className="service-image">
            <img src="https://www.ika.mx/wp-content/uploads/2016/11/correo-570x380.jpg" alt="Correo Electrónico" width="570" height="380" />
          </div>
            </div>
        </ScrollableSection>
        <ScrollableSection className="service-item" index={1}>
          <div className="content">
          <div className="service-image">
            <img src="https://www.ika.mx/wp-content/uploads/2016/11/estrategia-empresarial-cloud-computing-681x454-1-570x380.jpg" alt="Cloud Computing" width="570" height="380" />
          </div>
          <div className="service-text">
            <h3 className="service-title text-center">Administración De Servicios En La Nube</h3>
            <p>La computación en la nube es atractiva para muchas organizaciones debido a su escalabilidad, seguridad, facilidad de administración y bajos costos. La migración a la nube facilita la adopción de la computación en la nube flexible optimizando procesos y servicios.</p>
            <p>El proceso de migración a la nube de una organización a menudo implica fusionar una infraestructura de TI en el sitio con una solución de nube híbrida, a la que se puede acceder a través de Internet por una tarifa. Las soluciones de nube híbrida hacen la transición entre uno o más proveedores de nube y, por lo general, proporcionan servicios, aplicaciones y espacio de servidor aprovisionados y bajo demanda.</p>
            <p>En IKA nos preocupamos por la seguridad, integridad y disponibilidad de la información y servicios digitales de tu organización, por lo que ponemos a tu disposición estrategias efectivas y los mejores proveedores Cloud Services, para que inicies tu proceso de migración y actualización a la nube, ya sea de manera privada, pública o híbrida.</p>
          </div>

          </div>

        </ScrollableSection>
        <ScrollableSection className="service-item" index={2}>
          <div className="content">


          <div className="service-text">
            <h3 className="service-title text-center">Diseño E-commerce</h3>
            <p>El comercio electrónico (E-commerce) es un modelo de negocio que ha tomado gran auge en los últimos años y que consiste en la compra, venta y comercialización de productos y servicios a través de medios digitales por Internet (páginas web, redes sociales, entre otros.)</p>
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
            <p>IKA te apoya y te asesora en el proceso de diseño y construcción de tu página o tienda en línea para que tu negocio dé ese salto tecnológico y se desarrolle de una forma rápida, económica y exponencial.</p>
          </div>
          </div>
          <div className="service-image">
            <img src="https://www.ika.mx/wp-content/uploads/2016/11/ecommerce-570x380.webp" alt="E-commerce" width="570" height="380" />
          </div> 
        </ScrollableSection>
      </Section>
    </Section>
  );
}

export default Digital;
