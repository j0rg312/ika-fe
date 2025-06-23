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
                <div className="content">
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
                </div>
               
            </ScrollableSection>

            <ScrollableSection index={1}>
               
            </ScrollableSection>
                <div className="service-text">
                    <h2>Beneficios</h2>
                    <li>Control de costos.</li>
                    <li>Monitoreo remoto y reportes.</li>
                    <li>Optimización de consumibles.</li>
                    <li>Reduce tiempo de inactividad.</li>
                    <li>Soporte técnico especializado.</li>
                    <li>Mejora la productividad.</li> 
                </div>
            <ScrollableSection index={2}>
                <div className="content">
                <div className="service-text">
                    <h2>Ventajas financieras y fiscales</h2>
                    <p>
                        Evita la descapitalización de las empresas en el flujo de efectivo diario, ya que no es necesario hacer un desembolso inicial para contratar el servicio de impresión y copiado, debido a que se empieza a pagar después del primer mes.
                    </p>
                    <p>
                        Debido a la miscelánea fiscal actual de nuestro país, el plan de renta es una gran herramienta que complementa la planeación fiscal. Cada factura emitida durante el plazo del contrato es 100% deducible del impuesto aplicable al momento del pago correspondiente, contrario a la compra de un equipo nuevo que aumenta el valor del activo fijo y solo puede deducirse en un periodo mínimo de 3 años.
                    </p>
                </div>
                </div>
            </ScrollableSection>
        </Section>
    );
};

export default Printer;
