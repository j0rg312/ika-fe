import ScrollableSection from '../scrollableSection/ScrollableSection';
import './About.css';
import TypingTitle from '../typingTitle/TypingTitle';
const About = () => {
    return (
        <section className="about">
            <TypingTitle text="Quienes Somos" />
            <ScrollableSection index={0}>
            <p>
               <strong>IKA</strong>  es una empresa mexicana que nace en 2001, con la idea de prestar servicios de consultoría y soporte a las empresas de la ciudad de Chihuahua. Está conformada por un grupo de profesionales con más de 20 años de experiencia en distintas áreas de la Tecnología de la Información, con una visión enfocada a apoyar y fomentar el uso de tecnologías libres.
            </p>
            <p>
                Ofrecemos servicios informáticos, consultorías, soporte técnico, desarrollo de proyectos especiales, venta y renta de equipo de cómputo. Nuestro objetivo es ayudar a las empresas a alcanzar sus metas tecnológicas de manera eficiente y sostenible.
            </p>
            <p>
                Contamos con ingenieros capacitados en distintas ramas de la tecnología, lo que nos permite contar con un portafolio de servicios amplio y bases sólidas para satisfacer los estándares de calidad exigidos por nuestros clientes. Participamos activamente en sus proyectos, llevándolos a buen término y cumpliendo cabalmente con sus necesidades.
            </p>
            </ScrollableSection>
            
            
            <ScrollableSection className="values" index={1}>
                <h3>Nuestros Valores</h3>
                <ul>
                    <li><strong>Innovación:</strong> Buscamos constantemente nuevas formas de mejorar nuestros servicios.</li>
                    <li><strong>Compromiso:</strong> Trabajamos codo a codo con nuestros clientes para garantizar el éxito de sus proyectos.</li>
                    <li><strong>Calidad:</strong> Nos esforzamos por ofrecer soluciones que superen las expectativas.</li>
                </ul>
            </ScrollableSection>

            <ScrollableSection className="mission-vision" index={2}>
                <h3>Misión</h3>
                <p>
                    Proveer soluciones tecnológicas personalizadas que impulsen el crecimiento y la eficiencia de nuestros clientes.
                </p>
                <h3>Visión</h3>
                <p>
                    Convertirnos en el socio estratégico líder en innovación tecnológica para empresas de todos los tamaños.
                </p>
            </ScrollableSection>
        </section>
    );
};

export default About;
