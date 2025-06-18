import './Networks.css';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';
import Section from '../../ui/layouts/Section';
import Redes from '../../../assets/services/redes.jpeg';
import Infraestructura from '../../../assets/services/servidores.jpeg';
import Comunicaion from '../../../assets/services/comunicacion.png';

const Networks = () => {
    return (
        <Section>
            <MainTitle text="Redes"/>

            <ScrollableSection className="network-section" index={0}>
                <div className="section-header">
                    <h2 >Cableado estructurado</h2>
                </div>

            <div className="content">
            <div className="text-content">
                        <p className='service-text'>
                            En IKA contamos con vasta experiencia en la asesoría, planeación e instalación de cableado estructurado
                            apegados siempre a las normas actuales de calidad tanto en los materiales como en procesos y normativas
                            de instalación y configuración de todos los componentes de la red. Siempre con la consigna de que tu
                            experiencia en la red sea rápida, segura y estable.
                        </p>
                        <ul>
                            <li>Diseño y análisis de redes de voz, datos y CCTV.</li>
                            <li>Instalación y organización de cableado UTP y fibra (interior y exterior).</li>
                            <li>Instalación de racks de piso y pared.</li>
                            <li>Implementación de redes y enlaces inalámbricos.</li>
                            <li>Instalación de escalerilla y canalización.</li>
                            <li>Instalación y remate de nodos de red.</li>
                            <li>Instalación y conectorización de patch panel.</li>
                            <li>Implementación de proyectos diversos de redes.</li>
                        </ul>
                    </div>
                    <div className="service-image">
                        <img
                            src={Redes}
                            alt="Cableado estructurado"
                            width="570"
                            height="380"
                        />
                    </div>
            </div>
            </ScrollableSection>

            <ScrollableSection className="network-section" index={1}> 
                <div className="section-header">
                    <h2 >Infraestructura de red</h2>
                </div>
                <div className="content">
                    <div className="service-image">
                        <img
                            src={Infraestructura}
                            alt="Infraestructura de red"
                            width="570"
                            height="380"
                        />
                    </div>
                    <div className="text-content">
                        <p className='service-text'>
                            El equipo de IKA entiende la importancia de contar con una Infraestructura de Red sólida y segura, buscando
                            siempre las mejores soluciones para cada tipo de cliente. Brindamos a nuestros clientes las herramientas
                            necesarias para que su infraestructura cuente con servicios de telefonía, red e internet confiables.
                        </p>
                        <p className='service-text'>
                            <strong>Servicios:</strong>
                            <ul>
                                <li>Instalación y administración de servidores MS Windows y/o GNU/Linux.</li>
                                <li>Instalación y administración de datacenters virtuales.</li>
                                <li>Migración y respaldo de servidores físicos, virtuales o en la nube.</li>
                                <li>Instalación y configuración de servicios de red (bases de datos, compartición de archivos, etc.).</li>
                                <li>Mantenimiento preventivo y correctivo de sites (Cableado, Dispositivos de red y Servidores).</li>
                                <li>Instalación y configuración de redes WiFi y de antenas punto a punto y multipunto.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </ScrollableSection>

            <ScrollableSection className="network-section" index={2}>  
                <div className="section-header">
                    <h2 className='text-center'>Dispositivos de redes y comunicación</h2>
                </div>
                <div className="content">
                    <div className="text-content">
                        <p className='service-text'>
                          Estos dispositivos son la pieza clave para contar con una infraestructura
                            de red adecuada que permita comunicar y conformar la red de tu organización.
                        </p>
                        <ul>
                            <li>Routers.</li>
                            <li>Switches.</li>
                            <li>Conmutadores.</li>
                            <li>Firewalls.</li>
                            <li>Access Points.</li>
                            <li>Antenas.</li>
                        </ul>
                    </div>
                    <div className="column-right">
                        <div className="service-image">
                        <img
                            src={Comunicaion}
                            alt="Dispositivos de comunicación"
                            width="570"
                            height="380"
                        />
                    </div>
                    </div>
                   
                </div>
            </ScrollableSection>
        </Section>
    );
}

export default Networks;
