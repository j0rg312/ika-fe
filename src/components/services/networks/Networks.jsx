import './Networks.css';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import TypingTitle from '../../ui/ux/typingTitle/TypingTitle';
import Section from '../../ui/layouts/Section';

const Networks = () => {
    return (
        <Section>
            <TypingTitle text="Redes"/>

            <ScrollableSection className="network-section" index={0}>
                <div className="section-header">
                    <h2 className='text-center'>Cableado estructurado</h2>
                </div>

            <div className="content">
            <div className="text-content">
                        <p>
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
                    <div className="image-content">
                        <img
                            src="https://www.ika.mx/wp-content/uploads/2016/11/cable-rack-1-570x380.png"
                            alt="Cableado estructurado"
                            width="570"
                            height="380"
                        />
                    </div>
            </div>
            </ScrollableSection>

            <ScrollableSection className="network-section" index={1}> 
                <div className="section-header">
                    <h2 className='text-center'>Infraestructura de red</h2>
                </div>
                <div className="content">
                    <div className="image-content">
                        <img
                            src="https://www.ika.mx/wp-content/uploads/2016/11/redes-1140x430-2289575453-570x380.jpeg"
                            alt="Infraestructura de red"
                            width="570"
                            height="380"
                        />
                    </div>
                    <div className="text-content">
                        <p>
                            El equipo de IKA entiende la importancia de contar con una Infraestructura de Red sólida y segura, buscando
                            siempre las mejores soluciones para cada tipo de cliente. Brindamos a nuestros clientes las herramientas
                            necesarias para que su infraestructura cuente con servicios de telefonía, red e internet confiables.
                        </p>
                        <p>
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
                    <h2 className='text-center'>Dispositivos de comunicación</h2>
                </div>
                <div className="content">
                    <div className="text-content">
                        <p>
                            Los dispositivos tales como routers, switches, conmutadores, firewalls, acces points, antenas para enlace
                            inalámbrico punto a punto y multipunto, entre otros, son la pieza clave para contar con una infraestructura
                            de red adecuada que permita comunicar y conformar la red de tu organización.
                        </p>
                        <ul>
                            <li>Cisco, Planet, Allied Telesis y Linksys.</li>
                            <li>Fortinet, Ubiquiti, Mikrotik, Sinology.</li>
                            <li>HP, Dell, Lenovo.</li>
                            <li>Hikvision, Epcom e IDIS.</li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <img
                            src="https://www.ika.mx/wp-content/uploads/2016/11/network-net-ethernet-hub-switch-570x380.webp"
                            alt="Dispositivos de comunicación"
                            width="570"
                            height="380"
                        />
                    </div>
                </div>
            </ScrollableSection>
        </Section>
    );
}

export default Networks;
