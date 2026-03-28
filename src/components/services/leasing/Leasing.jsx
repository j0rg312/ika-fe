"use client";
import { CheckCircle, Monitor } from 'lucide-react';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';
import Section from '../../ui/layouts/Section';
import Equipo from '../../../assets/services/equipo.jpeg';

const Leasing = () => {
    return (
        <Section className="bg-white" innerClassName="py-8">
            <MainTitle text="Arrendamiento de Equipo" subtitle="Actualización tecnológica constante sin comprometer tu flujo de efectivo." />

            <div className="flex flex-col gap-12 lg:gap-24 w-full mt-12">
                
                {/* Section 1: ¿Por qué arrendar? */}
                <ScrollableSection className="w-full" index={0}>
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">¿Por qué arrendar?</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Si lo que buscas es el crecimiento, modernización y competitividad de tu empresa, el arrendamiento de equipo de cómputo es una herramienta estratégica ideal, especialmente para pequeñas y medianas empresas.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Sus beneficios van desde ventajas financieras, operativas y fiscales, hasta contar siempre con tecnología de punta. Evitas obsolescencia, mantienes tus equipos actualizados y evitas un alto desembolso inicial.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                                {[
                                    "Totalmente deducible de impuestos",
                                    "Evita alto desembolso inicial",
                                    "Mantenimientos y actualizaciones",
                                    "Garantía incluida y soporte",
                                    "Crecimiento a la medida",
                                    "Proceso fácil y rápido"
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
                                    src={Equipo.src || Equipo}
                                    alt="Arrendamiento de equipo de cómputo"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollableSection>

                {/* Section 2: Catálogo de Equipos */}
                <ScrollableSection className="w-full" index={1}>
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 w-full bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Equipos en Arrendamiento</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                En <strong>IKA</strong> trabajamos con las mejores marcas del mercado y te ofrecemos soporte total, mantenimiento preventivo y cambio de equipo en caso de fallas técnicas críticas.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Nuestro objetivo es que puedas concentrarte en tu negocio, con la tecnología necesaria para mantenerte competitivo.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {[
                                    "Computadoras de Escritorio", "Laptops", "Servidores",
                                    "Switches y Routers", "UPS's", "Conmutadores",
                                    "Telefonía IP", "Impresoras", "Videoconferencias",
                                    "Proyectores", "Firewalls", "Videovigilancia"
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center text-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                        <Monitor className="text-primary" size={24} />
                                        <span className="text-xs font-bold text-gray-700">{item}</span>
                                    </div>
                                ))}
                           </div>
                        </div>
                    </div>
                </ScrollableSection>

            </div>
        </Section>
    );
};

export default Leasing;
