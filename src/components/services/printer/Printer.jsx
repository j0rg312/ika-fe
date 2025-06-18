import './Printer.css';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';
import Section from '../../ui/layouts/Section';
import Impresora from '../../../assets/services/impresora.jpeg';

const Printer = () => {
    return (
        <Section>
            <MainTitle text="Arrendamiento de Impresoras" />

            <ScrollableSection index={0}>
                    <div className="service-text">
                        <h2>Moderniza tu impresión</h2>
                       <p>
                        Un servicio administrado de impresión es una solución integral que se encarga de gestionar, optimizar y dar soporte a todo el entorno de impresión de tu empresa. Incluye el suministro de equipos, mantenimiento, consumibles y monitoreo continuo, lo que reduce costos, mejora la eficiencia y permite a tu negocio enfocarse en lo realmente importante.
                       </p>
                    </div>

                    <div className="service-image">
                        <img 
                            src={Impresora}
                            alt="Arrendamiento de impresoras"
                            className="printer-img"
                        />
                </div>
            </ScrollableSection>
            <ScrollableSection index={1}>
                <div className="service-text">
                    <h2>Beneficios</h2>
                    <li>Control de costos.</li>
                    <li>Monitoreo remoto y reportes.</li>
                    <li>Optimización de consumibles.</li>
                    <li>Reduce tiempo de inactividad.</li>
                    <li>Soporte técnico especializado.</li>
                    <li>Mejora la productividad.</li>
                    
                </div>
            </ScrollableSection>
        </Section>
    );
};

export default Printer;
