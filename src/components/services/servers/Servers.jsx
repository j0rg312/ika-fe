import './Servers.css';
import Section from '../../ui/layouts/Section';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';
import Server from '../../../assets/services/server.jpeg'

const Servers = () => {
    return (
        <Section>
            <MainTitle text="Administración de servidores linux y windows" />
            <ScrollableSection className="service-item" index={1}>
  <div className="content">
    <div className="service-image">
      <img  src={Server} alt="Administración de Servidores" width="570" height="380" />
    </div>
    <div className="service-text">
      <h2>Administración de Servidores Linux y Windows</h2>
      <p>En IKA contamos con una amplia experiencia en la administración, instalación y configuración de servidores Linux y Windows, tanto físicos como virtuales.</p>
      <p>Ofrecemos soluciones integrales que garantizan el rendimiento, seguridad y disponibilidad de tu infraestructura TI, incluyendo:</p>
      <ul>
        <li>Instalación y mantenimiento de servidores on-premise o en la nube.</li>
        <li>Gestión de actualizaciones, parches y configuraciones seguras.</li>
        <li>Monitoreo de recursos y rendimiento de sistemas en tiempo real.</li>
        <li>Implementación de backups automáticos y recuperación ante fallos.</li>
        <li>Accesos remotos seguros con autenticación y cifrado.</li>
        <li>Soporte en virtualización con tecnologías como VMware y Hyper-V.</li>
      </ul>
      <p>Ya sea que tu empresa trabaje en entornos híbridos o completamente locales, nuestro equipo está capacitado para asegurar la estabilidad de tus servicios críticos.</p>
    </div>
  </div>
</ScrollableSection>

        </Section>
    );
};

export default Servers;
