

import { FaFacebook, FaInstagram } from "react-icons/fa";
/* import aws from '../../../assets/aws_logo_smile_1200x630.png';
import cloud from '../../../assets/cloundLoginLogo.png';
import google from '../../../assets/google-workspace-logo.svg'
import phone from '../../../assets/net2phone-logo.svg' */
import './FooterMovil.css'
const FooterMovil = () => {

   const currentYear = new Date().getFullYear();
   
    return (
        <div className="footer-movil-content">
          <div className="essencial-information">
              <p className="footer-text">&copy; {currentYear} IKA - Derechos Reservados.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/InternetKnowledgeApplied" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/InternetKnowledgeApplied" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
          <div className="schedule">
            <p className="footer-text">Horario: Lunes - Viernes 9:00 - 18:00, Sábados 9:00 - 14:00</p>
          </div>

          </div>
         
        </div>
      );

}

export default FooterMovil;