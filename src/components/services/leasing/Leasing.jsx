import './Leasing.css';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';
import Section from '../../ui/layouts/Section';
import Equipo from '../../../assets/services/equipo.jpeg';

const Leasing = () => {
    return (
        <Section>
            <MainTitle text="Arrendamiento de Equipo de Cómputo" />

            <ScrollableSection index={0}>
                <div className="leasing-content">
                    <div className="service-text">
                        <h2>¿Por qué arrendar?</h2>
                        <p>
                            Si lo que buscas es el crecimiento, modernización y competitividad de tu empresa, el arrendamiento de equipo de cómputo es una herramienta estratégica ideal, especialmente para pequeñas y medianas empresas.
                        </p>
                        <p>
                            Sus beneficios van desde ventajas financieras, operativas y fiscales, hasta contar siempre con tecnología de punta. Además, es completamente deducible de impuestos.
                        </p>
                        <p>
                            Equipos obsoletos pueden causar lentitud, vulnerabilidad ante virus e incluso pérdida de información, lo que se traduce en baja productividad y pérdidas económicas.
                        </p>
                        <p>
                            Al arrendar evitas obsolescencia, mantienes tus equipos actualizados, y evitas un alto desembolso inicial, con la tranquilidad de contar con soporte y mantenimiento incluido.
                        </p>
                        <ul>
                            <li>Evita obsolescencia de equipos.</li>
                            <li>Es totalmente deducible de impuestos.</li>
                            <li>Evita un alto desembolso inicial.</li>
                            <li>Incluye mantenimientos, reparaciones y actualizaciones.</li>
                            <li>Garantía incluida.</li>
                            <li>Crecimiento a la medida.</li>
                            <li>Proceso fácil y rápido.</li>
                        </ul>
                    </div>

                    <div className="service-image">
                        <img 
                            src={Equipo}
                            alt="Arrendamiento de equipo de cómputo"
                            className="leasing-img"
                        />
                    </div>
                </div>
            </ScrollableSection>

            <ScrollableSection index={1}>
                <div className="leasing-content">
                    <div className="service-text">
                        <h2>Equipos en arrendamiento</h2>
                        <ul>
                            <li>Computadoras de Escritorio.</li>
                            <li>Laptops.</li>
                            <li>Servidores.</li>
                            <li>Switches.</li>
                            <li>UPS's.</li>
                            <li>Conmutadores.</li>
                            <li>Telefonía IP.</li>
                            <li>Impresoras.</li>
                            <li>Equipo de Videoconferencias.</li>
                            <li>Proyectores.</li>
                            <li>Firewalls.</li>
                            <li>Access Points.</li>
                            <li>Cámaras de Videovigilancia.</li>
                        </ul>
                        <p>
                            En <strong>IKA</strong> trabajamos con las mejores marcas del mercado y te ofrecemos soporte total, mantenimiento preventivo, y cambio de equipo en caso de fallas. 
                        </p>
                        <p>
                            Nuestro objetivo es que puedas concentrarte en tu negocio, con la tecnología necesaria para mantenerte competitivo, sin tener que invertir en activos que pronto se vuelven obsoletos.
                        </p>
                    </div>
                </div>
            </ScrollableSection>
        </Section>
    );
};

export default Leasing;
