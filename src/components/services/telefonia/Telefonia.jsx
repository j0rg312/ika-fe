import './Telefonia.css';
import Section from '../../ui/layouts/Section';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import TypingTitle from '../../ui/ux/typingTitle/TypingTitle';

const Telefonía = () => {
    return (
        <Section>
            <TypingTitle text="Telefonia" />
            <ScrollableSection className="service-ScrollableSection " index={0}>
                <div className="service-item">
                    <div className="service-text">
                        <h2 className='text-center'>Telefonia IP</h2>
                        <p>Los beneficios de la telefonía IP o VoIP en entornos corporativos son numerosos, pero se pueden resumir en costo asociados con la infraestructura y facturas de teléfono mensuales así como en la flexibilidad en la administración técnica.</p>
                        <p>El uso de VoIP y Troncales SIP permite que las facturas de teléfono se reduzcan. Esto se debe a que las empresas pueden conectar oficinas remotas y sucursales en otras ciudades y países, de forma fácil, por lo que las llamadas dentro de la empresa son gratuitas. Los costos de larga distancia se eliminan y en promedio, las tarifas de llamadas son mucho más económicas.</p>
                        <p>En <strong>IKA</strong> te asesoramos y te llevamos de la mano para que evoluciones tu sistema telefónico análogo tradicional a un sistema completo VoIP aprovechando de la mejor manera la tecnología para optimizar la comunicación y la operatividad diaria de tu organización.</p>
                    </div>
                    <div className="service-image">
                        <img src="https://www.ika.mx/wp-content/uploads/2016/11/voip-570x380.jpg" alt="voip" width="570" height="380" />
                    </div>
                </div>
            </ScrollableSection>
            <ScrollableSection className="service-ScrollableSection " index={1}>
                <div className="service-item">
                <div className="service-image">
                        <img src="https://www.ika.mx/wp-content/uploads/2016/11/videoconferencia-570x380.jpeg" alt="videoconferencia" width="570" height="380" />
                    </div>
                    <div className="service-text">
                        <h2 className='text-center'>Sistemas de Videoconferencia</h2>
                        <p>En la actualidad los medios y las necesidades de comunicación han cambiado y evolucionado por lo que la necesidad de estar en constante contacto o realizar reuniones con nuestro personal no siempre es posible lograrlo de manera presencial, por lo que las organizaciones tienen que buscar la manera de seguir con la operativa diaria ya sea presencialmente o remota mediante la tecnología de Internet. Tener un sistema confiable de videoconferencia profesional brinda a tu organización de una herramienta indispensable para optimizar las comunicaciones a distancia en tu organización.</p>
                        <p>En <strong>IKA</strong> tenemos los mejores productos para que tus reuniones virtuales evolucionen profesionalmente y tu organización afronte los nuevos retos que la comunicación post Covid-19 plantea.</p>
                    </div>
 
                </div>
            </ScrollableSection>
        </Section>
    );
};

export default Telefonía;
