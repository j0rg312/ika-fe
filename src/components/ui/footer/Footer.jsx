import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './Footer.css';
import aws from '../../../assets/aws_logo_smile_1200x630.png';
import Huawei from '../../../assets/huawei.png';
import Sangfor from '../../../assets/sangfor.png'
import FooterMovil from '../footerMovil/FooterMovil';




const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth< 940)
  const currentYear = new Date().getFullYear();


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 941);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })

  return (
    <>
     { isMobile ? <FooterMovil/> : 
    <footer>
    <div className="footer-content">
        {/* Contenido completo del footer */}
        <div className="expanded-content">
          <div className="contact-info">
            <h2 style={{color: '#010a1f'}}>Contáctanos</h2>
            <p className="footer-text">Calle Getsemani #9113</p>
            <p className="footer-text">Col. Nuevo Paraiso</p>
            <p className="footer-text">Teléfono: +52 (614) 484 27 11</p>
            <p className="footer-text">
              Email: <a href="mailto:contacto@ika.mx">contacto@ika.mx</a>
            </p>
            <p className="footer-text">
              Email: <a href="mailto:soporte@ika.mx">soporte@ika.mx</a>
            </p>
            </div>
            <div className="container-info">
            <div className="company-info">
              <h2>Internet Knowledge Applied</h2>
              <p className="footer-text">
                En IKA contamos con más de 20 años de experiencia brindando soluciones integrales en sistemas de información, con un enfoque especializado en tecnologías GNU/Linux, redes, firewalls, servidores en la nube, arrendamiento de equipo de cómputo y servicios administrados de impresión. 
              </p>
          </div>
             </div>
          <div className="comercial-aliance">
            <h2 style={{textAlign: 'center', color: '#010a1f'}}>Alianzas Comerciales</h2>
            <ul className='comercial-list'>
              <li><img src={aws} alt="" /></li>
              <li><img src={Huawei} alt="" /></li>
              <li><img src={Sangfor} alt="" /></li>
            </ul>
            </div>
         
          
     
        </div>  

        <div className="compact-content">
          <p className="footer-text">&copy; {currentYear} IKA - Derechos Reservados.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/InternetKnowledgeApplied" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/ikachihuahua/?hl=es" target="_blank" rel="noopener noreferrer">
              <FaInstagram title='Instagram'/>
            </a>
          </div>
          <div className="hover">
            <p className="footer-text">Mas sobre nosotros...</p>
          </div>
          <div className="schedule">
            <p className="footer-text">Horario: Lunes - Viernes 9:00 - 18:00, Sábados 9:00 - 14:00</p>
          </div>
        </div>
      </div>

    </footer>}</>
   
  );
};

export default Footer;
