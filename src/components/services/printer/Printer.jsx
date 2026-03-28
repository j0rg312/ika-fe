"use client";
import { CheckCircle } from 'lucide-react';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../../ui/ux/MainTitle/MainTitle';
import Section from '../../ui/layouts/Section';
import Impresora from '../../../assets/services/impresora.jpeg';

const Printer = () => {
    return (
        <Section className="bg-white" innerClassName="py-8">
            <MainTitle text="Arrendamiento de Impresoras" subtitle="Soluciones administradas de impresión para optimizar costos y recursos." />

            <div className="flex flex-col gap-12 lg:gap-24 w-full mt-12">
                
                {/* Section 1: Moderniza tu impresión */}
                <ScrollableSection className="w-full" index={0}>
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Moderniza tu impresión</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Un servicio administrado de impresión es una solución integral que se encarga de gestionar, optimizar y dar soporte a todo el entorno de impresión de tu empresa. 
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Incluye el suministro de equipos, mantenimiento, consumibles y monitoreo continuo, lo que reduce costos, mejora la eficiencia y permite a tu negocio enfocarse en lo realmente importante.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 group">
                                <img
                                    src={Impresora.src || Impresora}
                                    alt="Arrendamiento de impresoras"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </ScrollableSection>

                {/* Section 2: Beneficios y Ventajas Financieras (Combine blocks) */}
                <ScrollableSection className="w-full" index={1}>
                    <div className="flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-16 w-full bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100">
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Ventajas financieras y fiscales</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Evita la descapitalización en el flujo de efectivo diario, ya que no es necesario hacer un desembolso inicial debido a que se empieza a pagar después del primer mes.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Cada factura emitida durante el plazo del contrato es <strong>100% deducible del impuesto</strong> aplicable, contrario a la compra de un equipo nuevo que aumenta el valor del activo fijo y solo puede deducirse en un periodo mínimo de 3 años.
                            </p>
                        </div>
                        
                        <div className="w-full lg:w-1/2 flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Beneficios Operativos</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                {[
                                    "Control de costos predecible",
                                    "Monitoreo remoto y reportes",
                                    "Optimización de consumibles",
                                    "Reduce tiempo de inactividad",
                                    "Soporte técnico especializado",
                                    "Mejora la productividad global"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                        <CheckCircle className="text-primary shrink-0 mt-0.5" size={18} />
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </ScrollableSection>

            </div>
        </Section>
    );
};

export default Printer;
