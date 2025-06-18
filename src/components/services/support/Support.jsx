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

            {/* ¿Qué es el Soporte Técnico Empresarial? */}
            <ScrollableSection index={0}>
                <div className="section-content">
                    <div className="row">
                        <div className="column-left">
                            <div className="service-text">
                                <h2>¿Qué es el Soporte Técnico Empresarial?</h2>
                                <p>
                                    El soporte técnico empresarial es un servicio especializado que garantiza el correcto funcionamiento, mantenimiento y optimización de los sistemas de información, redes, equipos de cómputo, servidores y demás infraestructura tecnológica de una organización.
                                </p>
                                <p>
                                    Este servicio es esencial para prevenir fallos, minimizar interrupciones operativas y resolver de manera oportuna cualquier incidencia técnica que afecte la productividad del negocio.
                                </p>
                            </div>
                        </div>
                        <div className="column-right">
                            <div className="service-image">
                                <img src={soporteImage} alt="Soporte técnico empresarial" />
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollableSection>

            {/* Ventajas y beneficios */}
            <ScrollableSection index={1}>
                <div className="service-text">
                    <h2 className="text-center">Ventajas y Beneficios</h2>
                    <ul>
                        <li>Mayor disponibilidad y continuidad operativa, al contar con atención especializada y oportuna ante cualquier incidente.</li>
                        <li>Prevención de fallas críticas, mediante mantenimiento proactivo y monitoreo constante.</li>
                        <li>Optimización de recursos tecnológicos, asegurando que los equipos y sistemas trabajen con eficiencia.</li>
                        <li>Seguridad de la información, al implementar buenas prácticas y protocolos actualizados.</li>
                    </ul>
                </div>
            </ScrollableSection>

            {/* Póliza IKA */}
            <ScrollableSection index={2}>
                <div className="section-content">
                    <div className="row">
                        <div className="column-left">
                            <div className="service-image">
                                <img src={soporteImage2} alt="óliza de servicio IKA" />
                            </div>
                        </div>
                        <div className="column-right">
                            <div className="service-text">
                                <h2>¿Por qué elegir una póliza de servicio con IKA?</h2>
                                <p>
                                    Al contratar una póliza de servicio con <strong>IKA</strong>, las empresas acceden a un equipo multidisciplinario de ingenieros altamente capacitados, con más de 20 años de experiencia en el sector.
                                </p>
                                <p>
                                    Esto permite contar con soporte profesional sin asumir los costos y responsabilidades que implica mantener personal técnico en plantilla.
                                </p>
                                <p>
                                    A diferencia de contratar personal interno, una póliza con IKA ofrece:
                                </p>
                                <ul>
                                    <li>Mayor cobertura técnica (diversas especialidades en un solo servicio).</li>
                                    <li>Reducción en costos operativos y administrativos.</li>
                                    <li>Beneficios fiscales al deducirse como gastos operativos.</li>
                                    <li>Flexibilidad y escalabilidad según tus necesidades.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollableSection>

            {/* Servicios incluidos */}
            <ScrollableSection index={3}>
                <div className="section-content">
                    <div className="row">
                        <div className="column-left">
                            <div className="service-text">
                                <h2>Algunos de los servicios que obtendrás con nuestra póliza</h2>
                                <ul>
                                    <li>Mantenimientos preventivos y correctivos.</li>
                                    <li>Respaldo de información.</li>
                                    <li>Monitoreo de tu infraestructura.</li>
                                    <li>Consultoría y asesoramiento para tus proyectos de TI.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="column-right">
                            <div className="service-image">
                                <img src={soporteImage3} alt="Servicios incluidos" />
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollableSection>

            {/* Conclusión */}
            <ScrollableSection index={4}>
                <div className="section-content">
                    <div className="row">
                        <div className="column-left">
                            <div className="service-image">
                                <img src={soporteImage4} alt="Conclusión soporte técnico" />
                            </div>
                        </div>
                        <div className="column-right">
                            <div className="service-text">
                                <h2>Conclusión</h2>
                                <p>
                                    Contar con el respaldo de una empresa especializada como <strong>IKA</strong> no solo garantiza continuidad tecnológica y eficiencia operativa, sino que representa una solución inteligente y rentable para empresas que desean enfocarse en su core business mientras delegan su infraestructura tecnológica en manos expertas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollableSection>
        </Section>
    );
};

export default Support;
