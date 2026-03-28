"use client";
import { CheckCircle } from 'lucide-react';
import Section from '../../ui/layouts/Section';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';
import Server from '../../../assets/services/server.jpeg';

const Servers = () => {
    return (
        <Section className="bg-white" innerClassName="py-8">
            <MainTitle text="Administración de servidores" subtitle="Gestión experta de servidores GNU/Linux y Windows para máximo rendimiento." />

            <div className="flex flex-col gap-12 lg:gap-24 w-full mt-12">
                <ScrollableSection className="w-full" index={0}>
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Soluciones integrales de infraestructura</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                En IKA contamos con una amplia experiencia en la administración, instalación y configuración de servidores GNU/Linux y Windows, tanto físicos como virtuales.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Ofrecemos soluciones integrales que garantizan el rendimiento, seguridad y disponibilidad de tu infraestructura TI. Ya sea que tu empresa trabaje en entornos híbridos o completamente locales, nuestro equipo está capacitado para asegurar la estabilidad de tus servicios críticos.
                            </p>
                            <ul className="grid grid-cols-1 gap-4 mt-4">
                                {[
                                    "Instalación y mantenimiento de servidores on-premise o en la nube.",
                                    "Gestión de actualizaciones, parches y configuraciones seguras.",
                                    "Monitoreo de recursos y rendimiento en tiempo real (Zabbix, Nagios, Cacti).",
                                    "Implementación de backups automáticos y recuperación ante fallos.",
                                    "Accesos remotos seguros con autenticación y cifrado VPN.",
                                    "Soporte en virtualización con tecnologías como Proxmox, AWS, Huawei Cloud."
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
                                    src={Server.src || Server}
                                    alt="Administración de Servidores"
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

export default Servers;
