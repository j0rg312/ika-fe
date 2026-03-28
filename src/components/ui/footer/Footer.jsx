"use client";
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import aws from '../../../assets/aws_logo_smile_1200x630.png';
import Huawei from '../../../assets/huawei.png';
import Sangfor from '../../../assets/sangfor.png';
import GoogleCloud from '../../../assets/google-cloud.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1120] text-gray-300 pt-16 lg:pt-24 pb-8 border-t border-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand & Intro */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">IKA<span className="text-primary-light">.</span></h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluciones integrales en sistemas de información con más de 20 años de experiencia técnica. Especialistas en eficiencia estructural basada en Linux, Redes y Cloud.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/InternetKnowledgeApplied" target="_blank" rel="noopener noreferrer" className="bg-gray-800/80 p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 ring-1 ring-white/10 hover:ring-primary">
                <FaFacebook size={18} />
              </a>
              <a href="https://www.instagram.com/ikachihuahua/?hl=es" target="_blank" rel="noopener noreferrer" className="bg-gray-800/80 p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 ring-1 ring-white/10 hover:ring-primary">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Contacto */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white mb-2">Contáctanos</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-4 group">
                <FaMapMarkerAlt className="text-primary-light mt-1 shrink-0 group-hover:scale-110 transition-transform" size={16} />
                <span className="text-gray-400 leading-relaxed">Calle Getsemani #9113<br/>Col. Nuevo Paraiso</span>
              </li>
              <li className="flex items-center gap-4 group">
                <FaPhoneAlt className="text-primary-light shrink-0 group-hover:scale-110 transition-transform" size={16} />
                <span className="text-gray-400">+52 (614) 484 27 11</span>
              </li>
              <li className="flex flex-col gap-3 mt-1">
                <a href="mailto:contacto@ika.mx" className="flex items-center gap-4 group text-gray-400 hover:text-white transition-colors">
                  <FaEnvelope className="text-primary-light shrink-0 group-hover:scale-110 transition-transform" size={16} /> contacto@ika.mx
                </a>
                <a href="mailto:soporte@ika.mx" className="flex items-center gap-4 group text-gray-400 hover:text-white transition-colors">
                  <FaEnvelope className="text-primary-light shrink-0 group-hover:scale-110 transition-transform" size={16} /> soporte@ika.mx
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Horario */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white mb-2">Horario de Atención</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-4">
                <FaClock className="text-primary-light mt-0.5 shrink-0" size={16} />
                <span className="text-gray-400">Lunes - Viernes:<br/><span className="text-white font-medium">9:00 AM - 18:00 PM</span></span>
              </li>
              <li className="flex items-start gap-4">
                <FaClock className="text-primary-light mt-0.5 shrink-0" size={16} />
                <span className="text-gray-400">Sábados:<br/><span className="text-white font-medium">9:00 AM - 14:00 PM</span></span>
              </li>
            </ul>
            <Link href="/about" className="text-primary-light hover:text-white text-sm font-medium mt-4 transition-colors flex items-center gap-2">
              Conoce más sobre la empresa &rarr;
            </Link>
          </div>

          {/* Col 4: Alianzas Comerciales */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white mb-2">Alianzas Comerciales</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl border border-white/5 h-16 flex items-center justify-center p-3 hover:bg-white/10 transition-colors">
                <img src={aws.src || aws} alt="AWS" className="max-w-full max-h-full object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white/5 rounded-xl border border-white/5 h-16 flex items-center justify-center p-3 hover:bg-white/10 transition-colors">
                <img src={Huawei.src || Huawei} alt="Huawei" className="max-w-full max-h-full object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white/5 rounded-xl border border-white/5 h-16 flex items-center justify-center p-3 hover:bg-white/10 transition-colors">
                <img src={Sangfor.src || Sangfor} alt="Sangfor" className="max-w-full max-h-full object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div className="bg-white/5 rounded-xl border border-white/5 h-16 flex items-center justify-center p-3 hover:bg-white/10 transition-colors">
                <img src={GoogleCloud.src || GoogleCloud} alt="Google Cloud" className="max-w-full max-h-full object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-500">
          <p>&copy; {currentYear} Internet Knowledge Applied (IKA). Todos los derechos reservados.</p>
          <div className="flex gap-6 font-medium">
             Desarrollado en Chihuahua, MX
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
