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
                <div className="printer-content">
                    <div className="service-text">
                        <h2>Moderniza tu impresión</h2>
                        <p>
                            Las impresoras forman parte esencial de la operación diaria en muchas empresas. A través del arrendamiento, puedes contar siempre con equipos modernos, eficientes y en perfecto estado, sin los gastos de mantenimiento o reemplazo.
                        </p>
                        <p>
                            En <strong>IKA</strong> te ofrecemos las mejores marcas de impresoras para renta mensual, con mantenimiento preventivo y correctivo incluido, asesoría especializada y soporte técnico continuo.
                        </p>
                        <p>
                            Disfruta de una solución práctica, deducible de impuestos, sin gastos ocultos y con la tecnología que tu empresa necesita.
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
        </Section>
    );
};

export default Printer;
