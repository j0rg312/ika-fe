import './Support.css';
import { FaTools, FaChalkboardTeacher, FaShieldAlt } from 'react-icons/fa';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import TypingTitle from '../../ui/ux/typingTitle/TypingTitle';
import Section from '../../ui/layouts/Section';
const Support = () => {
    return (
        <Section>
            <TypingTitle text="Soporte Técnico"/>

            <ScrollableSection className="section-soporte-empresarial " index={0}>
                <h2 className='text-center'>Soporte técnico empresarial</h2>
                <p>
                    En <strong>IKA</strong>, el soporte técnico TI está centrado en generar valor dentro de tu compañía a través de la detección y resolución de cualquier incidente en software o hardware.
                </p>
                <p>
                    Nuestra prioridad es buscar soluciones que le permitan ahorrar, mejorar y optimizar los tiempos de operación sin importar el tamaño de la empresa.
                </p>
                <p>
                    Con más de 20 años de experiencia en el mercado, en <strong>IKA</strong> nos preocupamos por que tu negocio siga creciendo. Por eso ofrecemos un amplio portafolio de infraestructuras y servicios de tecnologías de información.
                </p>
            </ScrollableSection>

            <ScrollableSection className="section-videoconferencia " index={1}>
                <h2 className='text-center'>Sistemas de Videoconferencia</h2>
                <p>
                    En la actualidad, los medios y las necesidades de comunicación han cambiado y evolucionado, por lo que la necesidad de estar en constante contacto o realizar reuniones con nuestro personal no siempre es posible lograrlo de manera presencial. Las organizaciones tienen que buscar la manera de seguir con la operativa diaria ya sea presencialmente o remota mediante la tecnología de Internet.
                </p>
                <p>
                    En <strong>IKA</strong>, tenemos los mejores productos para que tus reuniones virtuales evolucionen profesionalmente y tu organización afronte los nuevos retos que la comunicación post-Covid-19 plantea.
                </p>
            </ScrollableSection>

            <ScrollableSection className="support-features " index={2}>
                <div className="feature">
                    <FaChalkboardTeacher className="feature-icon" />
                    <h3 className='text-center'>Help Desk</h3>
                    <p>Proporcionamos asesoría y asistencia de forma eficaz con un apoyo intermedio y seguro.</p>
                </div>

                <div className="feature">
                    <FaChalkboardTeacher className="feature-icon" />
                    <h3 className='text-center'>Coaching TI</h3>
                    <p>Capacitamos a tu personal para un uso correcto de la tecnología en tu empresa.</p>
                </div>

                <div className="feature">
                    <FaTools className="feature-icon" />
                    <h3 className='text-center'>Mantenimiento</h3>
                    <p>Realizamos mantenimientos preventivos y correctivos.</p>
                </div>

                <div className="feature">
                    <FaShieldAlt className="feature-icon" />
                    <h3 className='text-center'>Monitoreo</h3>
                    <p>Monitoreamos tu infraestructura tecnológica, identificando vulnerabilidades y solucionándolas.</p>
                </div>
            </ScrollableSection>

            <ScrollableSection index={3}> 
                <h3 className='text-center'>Póliza de Soporte y Consultoría</h3>
                <h4>¿Por qué tener una póliza de soporte?</h4>
                <p>
                    Tener una Póliza de soporte y mantenimiento con <strong>IKA</strong> es la mejor forma de proteger y extender la vida útil de su infraestructura, ya que gestionamos los tickets personalmente con el fabricante de forma transparente, ágil y rápida.
                </p>
                <p>
                    Tenemos a su disposición diferentes tipos de pólizas, las cuales cuentan con por lo menos dos mantenimientos preventivos al año. Además, incluimos partes y refacciones con su respectiva bitácora de incidentes, de tal forma que mantenemos comunicación clara y una visión concisa de lo que está ocurriendo.
                </p>

                <h4>¿Cuáles son los beneficios?</h4>
                <ul>
                    <li>Con los SLA`S de IKA podemos proteger su inversión.</li>
                    <li>IKA se hace cargo de los trámites de garantías con los fabricantes.</li>
                    <li>Contamos con un grupo de Ingenieros certificados.</li>
                    <li>Mantenimientos preventivos programados.</li>
                    <li>Solución a sus problemas a tiempo.</li>
                </ul>
            </ScrollableSection>

            <ScrollableSection index={4}>
                <table>
                    <thead>
                        <tr> 
                            <th>SERVICIO</th>
                            <th>PÓLIZA PLATINUM</th>
                            <th>PÓLIZA GOLD</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Duración</td>
                            <td>Mínimo 1 año</td>
                            <td>Mínimo 1 año</td>
                        </tr>
                        <tr>
                            <td>Cobertura</td>
                            <td>Lun - Dom, 24 Hrs</td>
                            <td>Lun - Vie, 9:00 - 18:00 Hrs; Sáb, 9:00 - 13:00 Hrs</td>
                        </tr>
                        <tr>
                            <td>Tiempo de respuesta promedio en sitio</td>
                            <td>2 Horas</td>
                            <td>4 Horas</td>
                        </tr>
                        <tr>
                            <td>Mantenimientos preventivos en sitio</td>
                            <td>2 por año</td>
                            <td>2 por año</td>
                        </tr>
                        <tr>
                            <td>Mantenimiento correctivos en sitio</td>
                            <td>Todos los necesarios 7x24</td>
                            <td>Todos los necesarios en días y horarios hábiles</td>
                        </tr>
                        <tr>
                            <td>Soporte telefónico y/o conexión remota</td>
                            <td>Prioritario 7x24</td>
                            <td>En días y horarios hábiles</td>
                        </tr>
                        <tr>
                            <td>Reemplazo de partes (mano de obra)</td>
                            <td>Incluidas</td>
                            <td>Incluidas</td>
                        </tr>
                        <tr>
                            <td>Equipo de reemplazo</td>
                            <td>No incluido / Opcional</td>
                            <td>No incluido / Opcional</td>
                        </tr>
                        <tr>
                            <td>Niveles de servicio (SLAs)</td>
                            <td>Mejor esfuerzo 7x24</td>
                            <td>Mejor esfuerzo en días y horarios hábiles</td>
                        </tr>
                        <tr>
                            <td>Ingeniero en sitio en atención a falla</td>
                            <td>Incluido</td>
                            <td>Incluido en días y horarios hábiles</td>
                        </tr>
                        <tr>
                            <td>Reporte de actividades</td>
                            <td>Bitácora en sistema de tickets</td>
                            <td>Bitácora en sistema de tickets</td>
                        </tr>
                        <tr>
                            <td>Atención de garantías con el fabricante</td>
                            <td>Incluido si el equipo cuenta con garantía</td>
                            <td>Incluido si el equipo cuenta con garantía</td>
                        </tr>
                        <tr>
                            <td>Instalación y configuración HW</td>
                            <td>Incluido</td>
                            <td>Incluido</td>
                        </tr>
                    </tbody>
                </table>
            </ScrollableSection>

            <ScrollableSection className="section-respaldos" index={5}>
                <div className="section-content">
                    <div className="section-header">
                        <h3 className="title-respaldos text-center">Respaldos</h3>
                    </div>
                    <div className="row">
                        <div className="column-left">
                            <p>
                                En <strong>IKA</strong>, nos preocupamos por que tu información esté segura y a tu alcance. Es por eso que contamos con un servicio de respaldo de información.
                            </p>
                            <p>
                                Contar con un sistema de respaldo de información te puede proteger ante un posible ataque o algún tipo de fallo en tus sistemas de información.
                            </p>
                        </div>
                        <div className="column-right">
                            <img src="https://www.ika.mx/wp-content/uploads/2016/11/acronis-570x380.jpg" alt="Acronis" className="image-responsive" />
                        </div>
                    </div>
                    <ScrollableSection className="row section-animation" index={6}>
                        <div className="column-full">
                            <h3 className="accordion-title text-center">Beneficios de un sistema de respaldos</h3>
                            <div className="benefits-list">
                                <div className="benefit-item">
                                    <h4 className="benefit-header">Seguridad de los archivos</h4>
                                    <p>No solo están salvaguardados en todo momento, sino que pueden enviarse de manera segura a los sistemas donde se les requiera.</p>
                                </div>
                                <div className="benefit-item">
                                    <h4 className="benefit-header">Copias de seguridad diarias</h4>
                                    <p>Asegúrate de que todos tus archivos se guardan diariamente en respaldo. La mejor opción para prevenir pérdida de datos.</p>
                                </div>
                                <div className="benefit-item">
                                    <h4 className="benefit-header">Recuperación en caso de desastre</h4>
                                    <p>En caso de un desastre informático, recupera rápidamente tu información para seguir operando sin contratiempos.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollableSection>
                    <ScrollableSection className="section-recuperacion" index={7}>
        <div className="section-content">
            <div className="section-header">
                <h3 className="title-recuperacion text-center">Recuperación de Información</h3>
            </div>
            <div className="row">
                <div className="column-left">
                    <img src="https://www.ika.mx/wp-content/uploads/2016/11/backup-570x380.png" alt="Backup" className="image-responsive" />
                </div>
                <div className="column-right">
                    <p>
                        Somos un grupo de profesionales que realmente se preocupan por la información de sus clientes. Una empresa en la que creemos que la ética y la honestidad son pilares indispensables para ofrecer un trabajo de calidad y responsabilidad.
                    </p>
                    <p>
                        Nuestros servicios de recuperación abarcan diversos medios de almacenamiento, como memorias SD, USB, discos duros externos e internos, NVMe, así como RAID y NAS en servidores. También resolvemos problemas causados por ataques de virus, eliminación accidental o intencional de información, errores en tablas de partición, e incluso daños físicos.
                    </p>
                    <p>
                        Contamos con certificaciones internacionales, como:
                        <ul>
                            <li>CDRP – Certified Data Recovery Professional</li>
                            <li>Diplomados de Seguridad Informática y Análisis de Malware</li>
                            <li>Líneas de Especialización en Cómputo Forense</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </ScrollableSection>
                </div>
            </ScrollableSection>
        </Section>
    );
};

export default Support;
