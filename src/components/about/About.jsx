"use client";
import ScrollableSection from '../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../ui/ux/MainTitle/MainTitle';
import Section from '../ui/layouts/Section';
import { Lightbulb, Handshake, Star, Target, Rocket, Wrench, Laptop, Hammer, ShieldCheck, Users, TrendingUp} from 'lucide-react';
import Security from '../../assets/certificates/Security.png';
import Data from '../../assets/certificates/Data.png';
import Fortinet from '../../assets/certificates/fortinet.png';
import Cisco from '../../assets/certificates/cisco.jpeg';
import CCNA from '../../assets/certificates/CCNA.jpeg';
import Dahua from '../../assets/certificates/dahua.jpeg';
import Dahua2 from '../../assets/certificates/dahua2.jpeg';
import Intellinet from '../../assets/certificates/intellinet.jpeg';
import Intellinet2 from '../../assets/certificates/intellinet2.jpeg';
import GoogleCloud from '../../assets/certificates/googleCloud.png'


const About = () => {
  const certificates = [
  {
    image: Data,
    alt: "Respaldo Profesional y Técnico Especializado",
    title: "Recuperación Avanzada de Datos",
    description: "Certified Data Recovery Professional (CDRP) de la Asociación ARDA e IACRB"
  },
  {
    image: Security,
    alt: "Recuperación Avanzada de Datos",
    title: "Seguridad en Cómputo",
    description: "Certificación Práctica Avanzada de Seguridad en Computo (HAURI Latinoamérica)"
  },
  {
    image: Fortinet,
    alt: "Fortinet Certified Associate in Cybersecurity",
    title: "Ciberseguridad – Nivel Asociado",
    description: "Fortinet Certified Associate in Cybersecurity (NSE 1). Fundamentos de ciberseguridad, amenazas comunes y buenas prácticas de protección en redes."  
  },
  {
    image: Cisco,
    alt: "Introduction to Networks – Cisco",
    title: "Introducción a Redes",
    description: "Curso Introduction to Networks (CCNA) de Cisco. Fundamentos de redes, modelos OSI/TCP-IP, direccionamiento IP, y conectividad de red básica."
  },
  {
    image: CCNA,
    alt: "Switching, Routing and Wireless Essentials – Cisco",
    title: "Switching, Routing & Wireless",
    description: "Curso CCNA: Switching, Routing and Wireless Essentials de Cisco. Conceptos de redes LAN, VLAN, routing estático, protocolos y conectividad inalámbrica."
  },
  { 
    image: Dahua,
    alt: "Dahua Certified Associate – Video Intercom System",
    title: "Dahua DHCA-VIS",
    description: "Certificación DHCA-VIS (Dahua Certified Associate) en Sistemas de Videoportero. Instalación, configuración y operación de soluciones de intercomunicación Dahua."
  },
  {
    image: Intellinet,
    alt: "Certificación Intellinet en Cableado Estructurado",
    title: "Cableado Estructurado",
    description: "Certificación en Cableado Estructurado de Intellinet. Principios, instalación y estándares de redes físicas con infraestructura de alto desempeño."
  },
  {
    image: Intellinet2,
    alt: "Integrador Certificado – Intellinet Network Solutions",
    title: "Integrador Certificado",
    description: "Certificación como Integrador Certificado por Intellinet Network Solutions. Competencias en diseño, implementación y soporte de soluciones de conectividad de la marca."
  },
   { 
    image: Dahua2,
    alt: "Dahua DHSA – Mobile Vehicle System",
    title: "Dahua DHSA-MOVIE",
    description: "Certificación DHSA-MOVIE (Dahua High-level Security Associate) en Sistemas de Videovigilancia Móvil. Soluciones para vehículos con cámaras, grabadores móviles y gestión remota de flotas."
},
{
  image: GoogleCloud,
  alt: "Google Cloud – G Suite Administrator Fundamentals",
  title: "Administrador G Suite",
  description: "Certificación de Google Cloud en G Suite Administrator Fundamentals. Fundamentos para la administración de usuarios, servicios, seguridad y configuración de G Suite en organizaciones."
}



  ]
  return (
    <Section>
      <MainTitle text="Quiénes Somos" />

      <ScrollableSection index={0}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 w-full space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase shadow-sm">
              Desde 2001
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight">IKA</h2>
            <p className="text-xl md:text-2xl text-gray-500 font-medium pb-4 border-b border-gray-100">Innovación tecnológica mexicana</p>
          </div>
          
          <div className="flex-[2] w-full text-gray-600 space-y-8 leading-relaxed">
            <p className="text-lg">
                En <strong className="text-primary">IKA</strong> contamos con más de 20 años de experiencia brindando soluciones integrales en sistemas de información, con un enfoque especializado en tecnologías GNU/Linux, redes, firewalls, servidores en la nube, arrendamiento de equipo de cómputo y servicios administrados de impresión. Nuestra trayectoria y compromiso nos han consolidado como aliados estratégicos para empresas del norte del país, a quienes ofrecemos un servicio confiable, personalizado y orientado a la eficiencia tecnológica.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    <Wrench size={24}/>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Consultoría Especializada</h4>
                <p className="text-sm">Servicios informáticos y consultorías técnicas personalizadas.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                 <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    <Laptop size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Desarrollo de Proyectos</h4>
                <p className="text-sm">Soluciones a medida y proyectos especiales.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    <Hammer size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Equipamiento Tecnológico</h4>
                <p className="text-sm">Venta, renta y mantenimiento de equipos. </p>
              </div>
            </div>
            
            <p className="pt-6 border-t border-gray-100">
              En <strong className="text-primary">IKA</strong> contamos con un equipo de trabajo altamente calificado y comprometido, conformado por profesionales con amplia experiencia en tecnologías de la información. Nuestro personal se distingue no solo por su preparación técnica, sino también por su integridad, responsabilidad y vocación de servicio. Trabajamos con pasión, ética y dedicación, enfocados siempre en entender y superar las expectativas de nuestros clientes, brindando soluciones eficientes y a la medida de cada necesidad.
            </p>
          </div>
        </div>
      </ScrollableSection>

      <ScrollableSection index={1} className="mt-32">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h3>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Los principios que guían nuestro trabajo y definen nuestra identidad como empresa</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Lightbulb size={28}/>, title: "Innovación", text: "Exploramos constantemente nuevas tecnologías y metodologías para ofrecer soluciones de vanguardia que agreguen valor real a nuestros clientes." },
            { icon: <Handshake size={28}/>, title: "Compromiso", text: "Trabajamos como socios estratégicos, comprometiéndonos con el éxito de cada proyecto y manteniendo una comunicación transparente." },
            { icon: <Star size={28}/>, title: "Profesionalismo", text: "Actuamos con responsabilidad, conocimiento y excelencia, manteniendo los más altos estándares de calidad en todos nuestros servicios." },
            { icon: <ShieldCheck size={28}/>, title: "Integridad", text: "Operamos con ética, transparencia y respeto, construyendo relaciones solidas y duraderas, basadas en la confianza mutua y la resposabilidad." },
            { icon: <Users size={28}/>, title: "Colaboración", text: "Fomentamos un entorno de trabajo en equipo donde el conocimiento y la creatividad se combinan para lograr resultados impactantes." },
            { icon: <TrendingUp size={28}/>, title: "Crecimiento", text: "Promovemos el desarrollo continuo tanto de nuestro equipo como de nuestros clientes, impulsando el progreso mutuo." }
          ].map((val, i) => (
          <div key={i} className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-gray-100 group-hover:border-primary">
                {val.icon}
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h4>
            <p className="text-gray-600 leading-relaxed">{val.text}</p>
          </div>
          ))}
        </div>
      </ScrollableSection>

      <ScrollableSection index={2} className="mt-32">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestras Certificaciones</h3>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Respaldo profesional y técnico especializado avalado por la industria tecnológica global</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((certificacion, i) => (
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group" key={i}>
              <div className="w-28 h-28 mb-6 rounded-2xl overflow-hidden bg-white p-4 flex items-center justify-center shadow-inner border border-gray-50 group-hover:scale-105 transition-transform duration-300">
                  <img src={certificacion.image.src || certificacion.image} alt={certificacion.alt} className="max-w-full max-h-full object-contain filter drop-shadow-sm" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3 line-clamp-2">{certificacion.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">{certificacion.description}</p>
            </div>
          ))}
        </div>
      </ScrollableSection>

      <ScrollableSection index={3} className="mt-32 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-lg border border-gray-100 group">
            <div className="absolute -right-10 -top-10 text-primary/5 opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
              <Target size={240} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200/50">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-md">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">Nuestra Misión</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Proveer servicios de consultoría y soluciones tecnológicas de alto nivel, con un enfoque en la eficiencia operativa, la seguridad y la continuidad del negocio. Nos comprometemos a acompañar a nuestros clientes en sus procesos de transformación digital, mediante un equipo de expertos altamente calificados y una atención orientada a la excelencia y la satisfacción total.
              </p>
            </div>
          </div>
          
          <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-white rounded-3xl p-10 shadow-xl group">
             <div className="absolute -right-10 -bottom-10 text-white/5 opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                <Rocket size={240} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-md text-white border border-white/20">
                  <Rocket size={32} />
                </div>
                <h3 className="text-3xl font-extrabold text-white">Nuestra Visión</h3>
              </div>
              <p className="text-lg leading-relaxed font-medium text-blue-50">
                Ser la empresa líder en consultoría y servicios tecnológicos en el norte del país, reconocida por nuestra experiencia, innovación, compromiso con la calidad y cercanía con nuestros clientes, contribuyendo activamente a la transformación digital de las organizaciones.
              </p>
            </div>
          </div>
        </div>
      </ScrollableSection>
    </Section>
  );
};

export default About;