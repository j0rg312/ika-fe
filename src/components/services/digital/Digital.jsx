"use client";
import { CheckCircle } from 'lucide-react';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';
import Section from '../../ui/layouts/Section';

import Email from '../../../assets/services/mail.jpeg';
import Cloud from '../../../assets/services/cloud.jpeg';
import Ecommers from '../../../assets/services/ecommers.png';
import Hosting from '../../../assets/services/hosting.jpeg';
import Domain from '../../../assets/services/domain.jpeg';

const Digital = () => {
    return (
        <Section className="bg-white" innerClassName="py-8">
            <MainTitle text="Soluciones Digitales" subtitle="Transforma tu presencia en línea y optimiza la comunicación de tu empresa." />

            <div className="flex flex-col gap-12 lg:gap-24 w-full mt-12">
                
                {/* Section 1: Correo Electrónico (Image Right) */}
                <ScrollableSection className="w-full" index={0}>
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Correo Electrónico Corporativo</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                El correo electrónico se ha convertido en una herramienta imprescindible en el ámbito empresarial para proyectar profesionalismo y consolidar la confianza de los clientes.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                En <strong>IKA</strong> te asesoramos e implementamos una herramienta de gestión de correo electrónico personalizada para tu institución, dotada de calendarios compartidos y alta seguridad.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                                {[
                                    "Identidad corporativa formal",
                                    "Comunicaciones encriptadas",
                                    "Gestión comercial y Marketing",
                                    "Protección antispam avanzada"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                                <img
                                    src={Email.src || Email}
                                    alt="Correo Electrónico"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollableSection>

                {/* Section 2: Cloud Computing (Image Left) */}
                <ScrollableSection className="w-full" index={1}>
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Administración Dde Servicios en la Nube</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                La computación en la nube es atractiva por su excepcional escalabilidad, seguridad rigurosa, facilidad de administración remota y reducción dramática de costos operativos.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                En <strong>IKA</strong> nos preocupamos por la integridad y disponibilidad de tu información. Te ofrecemos estrategias efectivas con los mejores proveedores para tu transición segura hacia una nube privada, pública o híbrida.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                                <img
                                    src={Cloud.src || Cloud}
                                    alt="Cloud Computing"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollableSection>

                {/* Section 3: E-commerce (Image Right) */}
                <ScrollableSection className="w-full" index={2}>
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Diseño de E-commerce</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                El comercio electrónico expande las fronteras de tu negocio, permitiendo comprar y vender productos 24/7 de forma automatizada y sin limitaciones geográficas.
                            </p>
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-2">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Ventajas de vender en línea:</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Operación 24/7 ininterrumpida",
                                        "Cobertura local e internacional",
                                        "Múltiples pasarelas de pago",
                                        "Reducción de costos fijos",
                                        "Visibilidad masiva de marca",
                                        "Estrategias de cupones y SEO"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-700">
                                            <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                                            <span className="text-xs font-semibold">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-gray-600 text-sm italic font-medium">
                                En IKA te asesoramos para lanzar tu tienda en línea de forma profesional, segura y altamente escalable.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                                <img
                                    src={Ecommers.src || Ecommers}
                                    alt="E-commerce"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 bg-gray-50 p-4"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollableSection>

                {/* Section 4: Hosting y Dominios (Combine for better structure) */}
                <ScrollableSection className="w-full" index={3}>
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Hosting Web y Dominios</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                El servicio de <strong>hosting</strong> permite que tu sitio esté disponible 24/7 en un servidor veloz y seguro. El <strong>dominio</strong> es tu identificador único en internet, esencial para posicionar tu marca.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                En <strong>IKA</strong> ofrecemos infraestructura de alto rendimiento y te ayudamos con el registro, protección y configuración de tus dominios.
                            </p>
                            <ul className="flex flex-col gap-3 mt-2">
                                {[
                                    "Alta velocidad y disponibilidad garantizada (SLA).",
                                    "Certificados SSL incluidos y copias automáticas.",
                                    "Dominios nacionales (.mx) e internacionales (.com).",
                                    "Protección contra robo de dominios y privacidad WHOIS."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle className="text-primary shrink-0 mt-1" size={18} />
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col gap-8">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                                <img
                                    src={Hosting.src || Hosting}
                                    alt="Hosting Web"
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

export default Digital;
