"use client";
import { CheckCircle } from 'lucide-react';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';
import Section from '../../ui/layouts/Section';
import Redes from '../../../assets/services/redes.jpeg';
import Infraestructura from '../../../assets/services/servidores.jpeg';
import Comunicaion from '../../../assets/services/comunicacion.png';
import BrandSlider from './brandSlider/BrandSlider';

const Networks = () => {
    return (
        <Section className="bg-white" innerClassName="py-8">
            <MainTitle text="Redes" subtitle="Soluciones confiables, seguras y estables para la conectividad de tu empresa." />

            <div className="flex flex-col gap-12 lg:gap-24 w-full mt-12">
                
                {/* Section 1: Cableado estructurado (Text Left, Image Right) */}
                <ScrollableSection className="w-full" index={0}>
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Cableado estructurado</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                En IKA contamos con vasta experiencia en la asesoría, planeación e instalación de cableado estructurado apegados siempre a las normas actuales de calidad tanto en los materiales como en procesos y normativas de instalación y configuración de todos los componentes de la red. Siempre con la consigna de que tu experiencia en la red sea rápida, segura y estable.
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                {[
                                    "Diseño y análisis de redes de voz, datos y CCTV.",
                                    "Instalación y organización de cableado UTP y fibra.",
                                    "Instalación de racks de piso y pared.",
                                    "Implementación de redes y enlaces inalámbricos.",
                                    "Instalación de escalerilla y canalización.",
                                    "Instalación y remate de nodos de red.",
                                    "Instalación y conectorización de patch panel."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle className="text-primary shrink-0 mt-1" size={18} />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                                <img
                                    src={Redes.src || Redes}
                                    alt="Cableado estructurado"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollableSection>

                {/* Section 2: Infraestructura de red (Image Left, Text Right) */}
                <ScrollableSection className="w-full" index={1}>
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Infraestructura de red</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                El equipo de IKA entiende la importancia de contar con una Infraestructura de Red sólida y segura, buscando siempre las mejores soluciones para cada tipo de cliente. Brindamos a nuestros clientes las herramientas necesarias para que su infraestructura cuente con servicios de telefonía, red e internet confiables.
                            </p>
                            <h3 className="text-xl font-bold text-gray-900 mt-4">Servicios Destacados:</h3>
                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    "Instalación y administración de servidores MS Windows y/o GNU/Linux.",
                                    "Instalación y administración de datacenters virtuales.",
                                    "Migración y respaldo de servidores físicos, virtuales o en la nube.",
                                    "Instalación y configuración de servicios de red (bases de datos, compartición de archivos, etc.).",
                                    "Mantenimiento preventivo y correctivo de sites (Cableado, Dispositivos de red y Servidores).",
                                    "Instalación y configuración de redes WiFi y de antenas punto a punto y multipunto."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle className="text-primary shrink-0 mt-1" size={18} />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                                <img
                                    src={Infraestructura.src || Infraestructura}
                                    alt="Infraestructura de red"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollableSection>

                {/* Section 3: Dispositivos de redes (Text Left, Image Right) */}
                <ScrollableSection className="w-full" index={2}>
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Dispositivos de redes y comunicación</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Estos dispositivos son la pieza clave para contar con una infraestructura de red adecuada que permita comunicar y conformar la red de tu organización.
                            </p>
                            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                {[
                                    "Routers", "Switches", "Conmutadores",
                                    "Firewalls", "Access Points", "Antenas"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <CheckCircle className="text-primary shrink-0" size={16} />
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                                <img
                                    src={Comunicaion.src || Comunicaion}
                                    alt="Dispositivos de comunicación"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 bg-gray-50"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollableSection>
            </div>

            <div className="mt-24 w-full">
                <BrandSlider/>
            </div>
        </Section>
    );
};

export default Networks;
