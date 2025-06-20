import './Support.css';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';
import Section from '../../ui/layouts/Section';

// Imágenes
import soporteImage from '../../../assets/services/soporte3.jpeg';
import soporteImage2 from '../../../assets/services/soporte4.jpeg';
import soporteImage3 from '../../../assets/services/soporte5.jpeg';
import soporteImage4 from '../../../assets/services/soporte6.jpeg';

const Support = () => {
    return (
        <Section>
            <MainTitle text="Soporte Técnico Empresarial" />

            <ScrollableSection index={0}>
                <div className="section-header">
                    <h2>¿Qué es el Soporte Técnico Empresarial?</h2>
                </div>
                <div className="content">
                    <div className="text-content">
                        <p>
                            El soporte técnico empresarial es un servicio especializado que garantiza el correcto funcionamiento, mantenimiento y optimización de los sistemas de información, redes, equipos de cómputo, servidores y demás infraestructura tecnológica de una organización.
                        </p>
                        <p>
                            Este servicio es esencial para prevenir fallos, minimizar interrupciones operativas y resolver de manera oportuna cualquier incidencia técnica que afecte la productividad del negocio.
                        </p>
                    </div>
                    <div className="service-image">
                        <img src={soporteImage} alt="Soporte técnico empresarial" />
                    </div>
                </div>
            </ScrollableSection>

            <ScrollableSection index={1}>
                <div className="section-header">
                    <h2 className="text-center">Ventajas y Beneficios</h2>
                </div>
                <div className="content">
                    <div className="text-content">
                        <ul>
                            <li>Mayor disponibilidad y continuidad operativa.</li>
                            <li>Prevención de fallas críticas mediante mantenimiento proactivo.</li>
                            <li>Optimización de recursos tecnológicos.</li>
                            <li>Seguridad de la información con buenas prácticas y protocolos.</li>
                        </ul>
                    </div>
                </div>
            </ScrollableSection>

            <ScrollableSection index={2}>
                <div className="section-header">
                    <h2>¿Por qué elegir una póliza de servicio con IKA?</h2>
                </div>
                <div className="content">
                    <div className="service-image">
                        <img src={soporteImage2} alt="Póliza de servicio IKA" />
                    </div>
                    <div className="text-content">
                        <p>
                            Al contratar una póliza con <strong>IKA</strong>, accedes a un equipo multidisciplinario con más de 20 años de experiencia.
                        </p>
                        <p>
                            Es una solución más rentable y flexible que contratar personal interno.
                        </p>
                        <ul>
                            <li>Cobertura técnica en varias áreas.</li>
                            <li>Reducción de costos operativos.</li>
                            <li>Beneficios fiscales.</li>
                            <li>Flexibilidad y escalabilidad.</li>
                        </ul>
                    </div>
                </div>
            </ScrollableSection>

            <ScrollableSection index={3}>
                <div className="section-header">
                    <h2>Servicios incluidos en la póliza</h2>
                </div>
                <div className="content">
                    <div className="text-content">
                        <ul>
                            <li>Mantenimientos preventivos y correctivos.</li>
                            <li>Respaldo de información.</li>
                            <li>Monitoreo de infraestructura.</li>
                            <li>Consultoría y asesoramiento de TI.</li>
                        </ul>
                    </div>
                    <div className="service-image">
                        <img src={soporteImage3} alt="Servicios incluidos" />
                    </div>
                </div>
            </ScrollableSection>

            <ScrollableSection index={4}>
                <div className="section-header">
                    <h2>Conclusión</h2>
                </div>
                <div className="content">
                    <div className="service-image">
                        <img src={soporteImage4} alt="Conclusión soporte técnico" />
                    </div>
                    <div className="text-content">
                        <p>
                            Con <strong>IKA</strong> tienes respaldo experto, continuidad tecnológica y eficiencia operativa sin preocuparte por la infraestructura.
                        </p>
                    </div>
                </div>
            </ScrollableSection>
        </Section>
    );
};

export default Support;
