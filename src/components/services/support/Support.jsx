"use client";
import { CheckCircle } from 'lucide-react';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';
import Section from '../../ui/layouts/Section';

import soporteImage from '../../../assets/services/soporte3.jpeg';
import soporteImage2 from '../../../assets/services/soporte4.jpeg';
import soporteImage3 from '../../../assets/services/soporte5.jpeg';
import soporteImage4 from '../../../assets/services/soporte6.jpeg';

const Support = () => {
    return (
        <Section className="bg-white" innerClassName="py-8">
            <MainTitle text="Soporte Técnico Empresarial" subtitle="Mantenimiento y optimización de tu infraestructura tecnológica para máxima disponibilidad." />

            <div className="flex flex-col gap-12 lg:gap-24 w-full mt-12">
                
                {/* Section 1: ¿Qué es el Soporte Técnico? */}
                <ScrollableSection className="w-full" index={0}>
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">¿Qué es el Soporte Técnico Empresarial?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Es un servicio especializado que garantiza el correcto funcionamiento, mantenimiento y optimización de los sistemas de información, redes, equipos de cómputo, servidores y demás infraestructura tecnológica de una organización.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Este servicio es esencial para prevenir fallos, minimizar interrupciones operativas y resolver de manera oportuna cualquier incidencia técnica que afecte la productividad de tu negocio.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                                <img
                                    src={soporteImage.src || soporteImage}
                                    alt="Soporte técnico empresarial"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollableSection>

                {/* Section 2: Beneficios */}
                <ScrollableSection className="w-full" index={1}>
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 w-full">
                         <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">¿Por qué elegir una póliza con IKA?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Al contratar una póliza con <strong>IKA</strong>, accedes a un equipo multidisciplinario con más de 20 años de experiencia. Es una solución más rentable y flexible que contratar personal interno dedicado.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                {[
                                    "Mayor disponibilidad y continuidad",
                                    "Prevención proactiva de fallas",
                                    "Optimización de recursos TI",
                                    "Seguridad de la información",
                                    "Reducción de costos",
                                    "Beneficios fiscales deducibles"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                                <img
                                    src={soporteImage2.src || soporteImage2}
                                    alt="Póliza de servicio IKA"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollableSection>

                {/* Section 3: Servicios incluidos */}
                <ScrollableSection className="w-full" index={2}>
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">¿Qué incluye tu póliza de servicio?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Con <strong>IKA</strong> tienes respaldo experto, continuidad tecnológica y eficiencia operativa sin preocuparte por tu infraestructura. Nos encargamos de todo el ecosistema de tu red.
                            </p>
                            <ul className="flex flex-col gap-4 mt-2">
                                {[
                                    "Mantenimientos preventivos y correctivos de emergencia.",
                                    "Respaldo de información corporativa periódica.",
                                    "Monitoreo constante de servidores y redes críticas.",
                                    "Consultoría y asesoramiento para transformación TI."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <CheckCircle className="text-primary shrink-0 mt-0.5" size={20} />
                                        <span className="text-base text-gray-800">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col gap-8">
                             <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                                <img
                                    src={soporteImage3.src || soporteImage3}
                                    alt="Servicios incluidos en la póliza IKA"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollableSection>

            </div>
        </Section>
    );
};

export default Support;
