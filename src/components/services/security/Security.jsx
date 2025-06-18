import './Security.css';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';
import Section from '../../ui/layouts/Section';
import Seguridad from '../../../assets/services/vigilancia.jpeg';
import Ciberseguridad from '../../../assets/services/ciberseguridad.jpeg';
import Perimetral from '../../../assets/services/security.jpg';


const Security = () => {
    return (
        <Section> 
            <MainTitle text="Seguridad"/>

            <ScrollableSection index={0}>

                <div className="security-content">
                       
                    <div className="service-text">
                        <h2  >Seguridad perimetral</h2>
                        <p>
                            La seguridad perimetral informática es la protección de los sistemas informáticos de una organización contra amenazas externas, como ataques maliciosos, intrusiones y malware.
                        </p>
                        <p>
                            Esencialmente, se trata de la primer barrera de protección y la construcción y/o gestión de un muro virtual alrededor de los sistemas informáticos de una empresa u organización. Esta barrera, tiene la finalidad de resguardar y proteger la integridad de la infraestructura lógica de TI de posibles intrusiones no autorizadas y evitar que datos confidenciales sean comprometidos.
                        </p>
                        
                    </div>

                    <div className="service-image">
                        <img 
                            src={Perimetral}
                            alt="Seguridad perimetral" 
                            className="security-img"
                        />
                    </div>
                </div>
            </ScrollableSection>

            <ScrollableSection className="security-section" index={1}>
                <div className="security-content">
                   <div className="service-image">
                        <img 
                            src={Seguridad}
                            alt="Video vigilancia" 
                            className="security-img"
                        />
                    </div>

                    <div className="service-text">
                        <h2>Video vigilancia</h2>
                            <p>
                                La instalación de cámaras de seguridad es una de las medidas más demandadas para proteger tanto hogares como negocios. Un sistema de vigilancia brinda la tranquilidad de poder monitorear en todo momento qué ocurre en nuestra propiedad.
                            </p>
                            <p>
                                En la actualidad, tanto en los hogares como en las empresas es fundamental proteger los recursos, tanto materiales como humanos. Implementar un buen sistema de videovigilancia es una de las decisiones más efectivas en este sentido.
                            </p>
                            <p>
                                Este tipo de sistemas son ideales para controlar perímetros y accesos, evitar robos, monitorear al personal y disuadir a delincuentes, entre otras funciones clave.
                            </p>
                            <p>
                                En el mercado existen diversas marcas, modelos y dispositivos de videovigilancia con distintas características y precios. Sin embargo, no todos los servicios de monitoreo son realmente efectivos o accesibles. En <strong>IKA</strong> nos enfocamos en ofrecer soluciones adaptadas a las necesidades técnicas, al espacio y al presupuesto de cada cliente, sin comprometer la calidad de nuestros productos y materiales.
                            </p>
                            <p>
                                Gracias al monitoreo remoto por internet, nuestros clientes pueden supervisar sus propiedades desde su teléfono móvil o computadora en cualquier momento y lugar. En <strong>IKA</strong>, te asesoramos para que aproveches al máximo la tecnología y garantices la seguridad de lo que más te importa.
                            </p>
                    </div>
  
                </div>

            </ScrollableSection>
            <ScrollableSection index={2}>
                <MainTitle text='Ciberseguridad'/>
        <div className="security content">
            <div className="service-text">

                       <p>
                        La ciberseguridad es el conjunto de prácticas, tecnologías y procesos diseñados para proteger sistemas informáticos, redes, dispositivos y datos contra accesos no autorizados, ataques, daños o robos. Su objetivo es garantizar la confidencialidad, integridad y disponibilidad de la información digital, asegurando un entorno seguro para usuarios y organizaciones.
                       </p>
                    <div className="service-list">
                    <ul>
                          <h3>Prácticas</h3>
                        <li>Gestión de contraseñas seguras.</li>
                        <li>Actualización y parcheo de sistemas.</li>
                        <li>Políticas de acceso.</li>
                        <li>Educación y concientización.</li>
                        <li>Copias de seguridad periódicas.</li>
                        <li>Monitoreo constante.</li>
                        <li>Auditorías de seguridad.</li>
                        <li>Respuestas a incidentes.</li>
                    </ul>

                  
                    <ul className="tecnology">
                          <h3>Tecnologías</h3>
                        <li>Firewalls.</li>
                        <li>Antivirus y antimalware.</li>
                        <li>IDS/IPS.</li>
                        <li>VPN.</li>
                        <li>Cifrado de datos.</li>
                        <li>Soluciones SIEM.</li>
                        <li>Autenticación multifactor.</li>
                        <li>Sandboxing.</li>
                    </ul>
                    </div>
            </div>
             <div className="service-image">
                        <img 
                            src={Ciberseguridad}
                            alt="Video vigilancia" 
                            className="security-img"
                        />

                    </div>
        </div>
            </ScrollableSection>
        </Section>
    );
}

export default Security;
