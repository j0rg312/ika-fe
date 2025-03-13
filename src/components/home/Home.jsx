import './Home.css';
import CallToAction from '../calltoaction/CallToAction'
import ScrollableSection from '../ui/ux/scrollableSection/ScrollableSection';
import TypingTitle from '../ui/ux/typingTitle/TypingTitle';
import Section from '../ui/layouts/Section';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        
        <Section>
              <Helmet defer={false}>
                <title>IKA - Home</title>
                <meta name="description" content="IKA es una empresa mexicana especializada en consultoría y soporte de TI." />
            </Helmet>
              <TypingTitle text="Bienvenidos a IKA" className="typing-title"/>
          
        <ScrollableSection className="home-container" index={0}>
          
            
            <p>
               <strong className='ika'>IKA</strong>  es una empresa mexicana que nace en 2001, con la idea de prestar servicios de consultoría y soporte a las empresas de la ciudad de Chihuahua. Está conformada por un grupo de profesionales con más de 20 años de experiencia en distintas áreas de la Tecnología de la Información, con una visión enfocada a apoyar y fomentar el uso de tecnologías libres.
            </p>
            <p>
                Ofrecemos servicios informáticos, consultorías, soporte técnico, desarrollo de proyectos especiales, venta y renta de equipo de cómputo. Nuestro objetivo es ayudar a las empresas a alcanzar sus metas tecnológicas de manera eficiente y sostenible.
            </p>
            <p>
                Contamos con ingenieros capacitados en distintas ramas de la tecnología, lo que nos permite contar con un portafolio de servicios amplio y bases sólidas para satisfacer los estándares de calidad exigidos por nuestros clientes. Participamos activamente en sus proyectos, llevándolos a buen término y cumpliendo cabalmente con sus necesidades.
            </p>
           

        
        <button className="request">
            <CallToAction content="Solicita una consulta"/>
            </button>
            </ScrollableSection>
        </Section>
        
        

    );
};

export default Home;
