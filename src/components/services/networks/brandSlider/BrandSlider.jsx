"use client";
import Section from '../../../ui/layouts/Section';
import ScrollableSection from '../../../ui/ux/scrollableSection/ScrollableSection';

// Imports
import Aws from '../../../../assets/services/networks/aws.jpeg';
import Emu from '../../../../assets/services/networks/emu.jpeg';
import Epcom from '../../../../assets/services/networks/epcom.jpeg';
import Hikvision from '../../../../assets/services/networks/hikvision.jpeg';
import Hilook from '../../../../assets/services/networks/hilook.jpeg';
import Huawei from '../../../../assets/services/networks/huawei.jpeg';
import Proxmox from '../../../../assets/services/networks/proxmox.jpeg';
import Starlink from '../../../../assets/services/networks/starlink.jpeg';
import Tecnology from '../../../../assets/services/networks/tecnology.jpeg';
import Unifi from '../../../../assets/services/networks/unifi.png';
import Vb from '../../../../assets/services/networks/vb.jpeg';
import Vm from '../../../../assets/services/networks/vm.jpeg';
import Sangfor from '../../../../assets/services/networks/sangfor.jpeg';
import Cisco from '../../../../assets/services/networks/cisco.jpeg';
import Fortinet from '../../../../assets/services/networks/fortinet.jpeg';
import Grandstream from '../../../../assets/services/networks/grandstream.jpeg';
import Pfsense from '../../../../assets/services/networks/pfsense.jpeg';
import Tplink from '../../../../assets/services/networks/tplink.jpeg';
import Ubiqui from '../../../../assets/services/networks/ubiqui.jpeg';
import Yeastar from '../../../../assets/services/networks/yeastar.jpeg';

const logos = [
  Aws, Emu, Epcom, Hikvision, Hilook, Huawei, Proxmox, Starlink, Tecnology, 
  Unifi, Vb, Vm, Sangfor, Cisco, Fortinet, Grandstream, Pfsense, Tplink, Ubiqui, Yeastar
];

const BrandSlider = () => {
  // Triplicar para asegurar un efecto infinito sin cortes visibles
  const triplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <Section className="py-12 bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-inner">
      <ScrollableSection>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Nuestros Socios Tecnológicos</h3>
          <p className="text-gray-500 mt-2">Trabajamos con las marcas líderes de la industria</p>
        </div>

        <div className="relative w-full flex overflow-hidden group">
          
          {/* Degradados laterales para desvanecer bordes */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Carril en movimiento */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-8 px-4">
            {triplicatedLogos.map((logo, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center w-32 h-20 md:w-48 md:h-28 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 transition-transform duration-300 hover:scale-110 hover:shadow-md shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
              >
                <img 
                  src={logo?.src || logo} 
                  alt={`Socio ${i}`} 
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </ScrollableSection>
    </Section>
  );
};

export default BrandSlider;