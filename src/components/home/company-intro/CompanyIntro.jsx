"use client";

import Link from 'next/link';
import Section from '../../ui/layouts/Section';
import { History, Monitor, Users, CheckCircle, ChevronRight, Check } from 'lucide-react';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';

const CompanyIntro = () => {
  const serviciosList = [
    "Consultoría IT", "Soporte Empresarial", "Cableado Estructurado",
    "Ciberseguridad", "Videovigilancia", "Arrendamiento de Equipo",
    "Servicios de Impresión", "Servidores en la Nube",
    "Respaldo de Información", "Administración IT"
  ];

  return (
    <Section className="bg-white">
      <ScrollableSection index={0}>
        <div className="text-center w-full mb-20">
          <MainTitle 
            text='Bienvenido a IKA' 
            subtitle="Conocimiento, innovación y tecnología aplicados al crecimiento de tu empresa."
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-16 w-full items-start">
          
          {/* Columna Izquierda: Trayectoria y Filosofía (Textos B2B Limpios) */}
          <div className="lg:w-[55%] flex flex-col gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <History className="text-primary" size={28}/> Nuestra Trayectoria
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                En <strong className="text-primary font-bold">IKA</strong> contamos con más de 20 años de experiencia brindando soluciones integrales en sistemas de información, con un enfoque especializado en tecnologías GNU/Linux, redes, firewalls, servidores en la nube, arrendamiento de equipo de cómputo y servicios administrados de impresión.
                <br/><br/>
                Nuestra trayectoria y compromiso nos han consolidado como aliados estratégicos para empresas del norte del país, a quienes ofrecemos un servicio confiable, personalizado y orientado a la eficiencia tecnológica.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 mt-6 text-primary font-bold hover:text-primary-dark transition-colors group/link w-max">
                Conoce el corporativo <ChevronRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            <hr className="border-gray-100" />

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CheckCircle className="text-primary" size={28}/> Nuestra Filosofía
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                IKA se basa en la excelencia técnica, el compromiso con nuestros clientes y una firme orientación hacia la mejora continua. Trabajamos ofreciendo soluciones que marcan la diferencia. 
                <br/><br/>
                Nos guiamos por <strong className="text-gray-900">la honestidad, la responsabilidad y el respeto</strong>, priorizando en todo momento la plena satisfacción y escalabilidad del cliente.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Equipo y Portafolio (Banners Limpios) */}
          <div className="lg:w-[45%] flex flex-col gap-8">
            
            {/* Banner Nuestro Equipo */}
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Users className="text-primary" size={24}/> Nuestro Equipo
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 flex-grow">
                Conformado por profesionales técnicos con amplia experiencia. Nuestro personal se distingue por su preparación oficial, integridad y verdadera vocación de servicio.
              </p>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-xl text-sm font-bold text-gray-800 border border-gray-200 w-max shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span> Equipo Certificado Nivel 3
              </div>
            </div>

            {/* Banner Portafolio IT */}
            <div className="bg-white border-2 border-primary/10 rounded-3xl p-8 shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Monitor className="text-primary" size={24}/> Portafolio IT
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4 mb-8 flex-grow">
                {serviciosList.map((servicio, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-gray-700 font-medium text-base">
                    <Check size={18} strokeWidth={3} className="text-primary mt-0.5 shrink-0" />
                    <span>{servicio}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/services" className="inline-flex items-center justify-center w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-colors text-base mt-2 shadow-md">
                Explorar Catálogo de Servicios
              </Link>
            </div>

          </div>

        </div>
      </ScrollableSection>
    </Section>
  );
};

export default CompanyIntro;
