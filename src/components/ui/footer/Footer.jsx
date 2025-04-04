import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import './Footer.css';
import aws from '../../../assets/aws_logo_smile_1200x630.png';
import cloud from '../../../assets/cloundLoginLogo.png';
import google from '../../../assets/google-workspace-logo.svg'
import phone from '../../../assets/net2phone-logo.svg'
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
            <p className="footer-text">Antílope y Cebra #3700</p>
            <p className="footer-text">Col. Lomas del Sol</p>
            <p className="footer-text">Teléfono: +52 (614) 3880755</p>
            <p className="footer-text">
              Email: <a href="mailto:contacto@ika.mx">contacto@ika.mx</a>
            </p>
            <p className="footer-text">
              Email: <a href="mailto:soporte@ika.mx">soporte@ika.mx</a>
            </p>
            <div className="container-info">
            <div className="company-info">
              <h3>Internet Knowledge Applied</h3>
              <p className="footer-text">
                Nuestra compañía está integrada por un grupo de profesionistas con amplia experiencia en el manejo de información, respaldos, soporte técnico, administración de servidores y venta y renta de equipo de cómputo.
              </p>
          </div>
          <div className="comercial-aliance">
            <h2 style={{textAlign: 'center', color: '#010a1f'}}>Alianzas Comerciales</h2>
            <ul className='comercial-list'>
              <li><img src={aws} alt="" /></li>
              <li><img src={cloud} alt="" /></li>
              <li><img src={google} alt="" /></li>
              <li><img src={phone} alt="" /></li>
            </ul>
            </div>
            </div>
          
          </div>
        </div>  

        <div className="compact-content">
          <p className="footer-text">&copy; {currentYear} IKA - Derechos Reservados.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/InternetKnowledgeApplied" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/InternetKnowledgeApplied" target="_blank" rel="noopener noreferrer">
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
