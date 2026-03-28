"use client";
import { CheckCircle } from 'lucide-react';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';
import Section from '../../ui/layouts/Section';
import Seguridad from '../../../assets/services/vigilancia.jpeg';
import Ciberseguridad from '../../../assets/services/ciberseguridad.jpeg';
import Perimetral from '../../../assets/services/security.jpg';

const Security = () => {
    return (
        <Section className="bg-white" innerClassName="py-8">
            <MainTitle text="Seguridad" subtitle="Protección proactiva para tu infraestructura, personal y datos críticos." />

            <div className="flex flex-col gap-12 lg:gap-24 w-full mt-12">
                
                {/* Section 1: Seguridad Perimetral */}
                <ScrollableSection className="w-full" index={0}>
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Seguridad perimetral</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                La seguridad perimetral informática es la protección de los sistemas informáticos de una organización contra amenazas externas, como ataques maliciosos, intrusiones y malware.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Esencialmente, se trata de la primera barrera de protección y la construcción o gestión de un muro virtual alrededor de los sistemas de una empresa. Esta barrera tiene la finalidad de resguardar y proteger la integridad de la infraestructura lógica de TI de posibles intrusiones no autorizadas y evitar que datos confidenciales sean comprometidos.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                                <img
                                    src={Perimetral.src || Perimetral}
                                    alt="Seguridad perimetral"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollableSection>

                {/* Section 2: Video Vigilancia (Reverse) */}
                <ScrollableSection className="w-full" index={1}>
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Videovigilancia inteligente</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                La instalación de cámaras de seguridad es una de las medidas más demandadas para proteger tanto hogares como negocios. En la actualidad, es fundamental proteger los recursos materiales y humanos mediante un buen sistema de videovigilancia.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Este tipo de sistemas son ideales para controlar perímetros y accesos, evitar robos, monitorear al personal y disuadir a delincuentes. En <strong>IKA</strong> nos enfocamos en ofrecer soluciones adaptadas a las necesidades técnicas, al espacio y al presupuesto de cada cliente.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                                {[
                                    "Monitoreo remoto 24/7",
                                    "Control de perímetros y accesos",
                                    "Disuasión de amenazas",
                                    "Soporte y mantenimiento"
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
                                    src={Seguridad.src || Seguridad}
                                    alt="Video vigilancia"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollableSection>

                {/* Section 3: Ciberseguridad */}
                <ScrollableSection className="w-full" index={2}>
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Ciberseguridad y Tecnologías</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                La ciberseguridad es el conjunto de prácticas, tecnologías y procesos diseñados para proteger sistemas informáticos, redes, dispositivos y datos contra accesos no autorizados, ataques, daños o robos garantizando la confidencialidad, integridad y disponibilidad.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Mejores Prácticas:</h3>
                                    <ul className="flex flex-col gap-3">
                                        {[
                                            "Gestión de contraseñas", "Actualización de sistemas",
                                            "Políticas de acceso", "Respaldos periódicos",
                                            "Monitoreo constante", "Auditorías de seguridad"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-700">
                                                <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Tecnologías Clave:</h3>
                                    <ul className="flex flex-col gap-3">
                                        {[
                                            "Firewalls de nueva generación", "Antivirus y antimalware",
                                            "Sistemas IDS/IPS", "Túneles VPN",
                                            "Sistemas SIEM", "Autenticación multifactor"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-700">
                                                <CheckCircle className="text-primary shrink-0 mt-0.5" size={16} />
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                                <img
                                    src={Ciberseguridad.src || Ciberseguridad}
                                    alt="Ciberseguridad"
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

export default Security;
