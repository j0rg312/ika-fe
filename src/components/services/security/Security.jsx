import './Security.css';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import TypingTitle from '../../ui/ux/typingTitle/TypingTitle';
import Section from '../../ui/layouts/Section';

const Security = () => {
    return (
        <Section> 
            <TypingTitle text="Seguridad"/>

            <ScrollableSection className="security-section" index={0}>
                <div className="security-content">
                    <div className="security-text">
                        <h2 className="security-title text-center" >Seguridad perimetral</h2>
                        <p className="security-paragraph">
                            La seguridad perimetral informática es la protección de los sistemas informáticos de una organización contra amenazas externas, como ataques maliciosos, intrusiones y malware.
                        </p>
                        <p className="security-paragraph">
                            Esencialmente, se trata de la primer barrera de protección y la construcción y/o gestión de un muro virtual alrededor de los sistemas informáticos de una empresa u organización. Esta barrera, tiene la finalidad de resguardar y proteger la integridad de la infraestructura lógica de TI de posibles intrusiones no autorizadas y evitar que datos confidenciales sean comprometidos.
                        </p>
                        <p className="security-paragraph">
                            Nuestra empresa cuenta con la solución que tu organización necesita para reforzar la seguridad de tu red y tus sistemas informáticos, realizando un estudio personalizado de tus necesidades y características técnicas para brindarte la mejor solución, con la asesoría profesional de especialistas en el área de la seguridad perimetral.
                        </p>
                    </div>

                    <div className="security-image">
                        <img 
                            src="https://www.ika.mx/wp-content/uploads/2016/11/seguridad-perimetral-570x380.jpg" 
                            alt="Seguridad perimetral" 
                            className="security-img"
                        />
                    </div>
                </div>
            </ScrollableSection>

            <ScrollableSection className="security-section" index={1}>
                <div className="security-content">
                 
                <div className="security-image">
                        <img 
                            src="https://www.ika.mx/wp-content/uploads/2016/11/videovigilancia-570x380.jpg" 
                            alt="Video vigilancia" 
                            className="security-img"
                        />
                    </div>
                    <div className="security-text">
                        <h2 className="security-title text-center">Video vigilancia</h2>
                        <p className="security-paragraph">
                            En la actualidad tanto en los hogares como en las empresas se deben proteger los recursos, tanto materiales como humanos, por lo que implementar un buen sistema de videovigilancia es una de las mejores decisiones que pueden tomar al respecto.
                        </p>
                        <p className="security-paragraph">
                            Este tipo de sistemas son ideales para controlar perímetros y accesos, evitar robos, monitorear personal y/o para disuadir a delincuentes y maleantes, entre otros.
                        </p>
                        <p className="security-paragraph">
                            En el mercado podemos encontrar diversas marcas, modelos y tipos de dispositivos de video vigilancia de diversas características y precios, así como servicios de monitoreo costosos y no siempre tan efectivos. En <strong>IKA</strong> nos preocupamos por la seguridad de nuestros clientes por lo que nos empeñamos en brindar la solución que se adapte mejor a las necesidades técnicas, espacios y presupuesto sin sacrificar la calidad de los productos y materiales con los que realizamos cada uno de nuestros proyectos.
                        </p>
                        <p className="security-paragraph">
                            El monitoreo remoto mediante internet permite a nuestros clientes desde su teléfono móvil o computadora estar pendiente en cualquier momento de cualquier actividad sospechosa sin arriesgar su integridad o la de los suyos, en <strong>IKA</strong> te asesoramos para que aproveches de la mejor manera la tecnología para tu seguridad y la de tu patrimonio.
                        </p>
                    </div>
  
                </div>

            </ScrollableSection>
        </Section>
    );
}

export default Security;
