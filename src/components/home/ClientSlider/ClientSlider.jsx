"use client";
import Section from '../../ui/layouts/Section';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import Endobariatric from '../../../assets/costumers/Endobariatric.png';
import Esparza from '../../../assets/costumers/Esparza.png';
import Kalish from '../../../assets/costumers/Kalish.png';
import Metro from '../../../assets/costumers/Metro.png';
import Palmore from '../../../assets/costumers/Palmore.png';
import SierraAlta from '../../../assets/costumers/sierraAlta.png';
import Ahinco from '../../../assets/costumers/ahinco.png';
import HospiSoft from '../../../assets/costumers/hospisoft.png'
import MainTitle from '../../ui/ux/MainTitle/MainTitle';

const logos = [Endobariatric, Esparza, Kalish, Metro, Palmore, SierraAlta, Ahinco, HospiSoft];

const ClientSlider = () => {  
  // Duplicamos el array para lograr un efecto infinito perfecto (al desplazar 50%)
  const doubledLogos = [...logos, ...logos];

  return (
    <Section className="bg-gray-50 border-t border-b border-gray-100 py-20">
      <ScrollableSection>
        <div className="text-center mb-16">
          <MainTitle text='Empresas que confían en nosotros'/>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">Soluciones comprobadas por corporativos líderes del norte del país.</p>
        </div>

        {/* Carrusel Marquee */}
        <div className="relative w-full overflow-hidden flex items-center h-32 before:absolute before:inset-y-0 before:left-0 before:w-32 before:bg-gradient-to-r before:from-gray-50 before:to-transparent before:z-10 after:absolute after:inset-y-0 after:right-0 after:w-32 after:bg-gradient-to-l after:from-gray-50 after:to-transparent after:z-10">
          
          <div className="flex items-center w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] gap-12 md:gap-24 px-12">
            {doubledLogos.map((logo, i) => (
              <div 
                className="flex-shrink-0 w-40 md:w-56 h-20 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer mix-blend-multiply" 
                key={i}
              >
                <img 
                  src={logo.src || logo} 
                  alt={`Cliente ${(i % logos.length) + 1}`} 
                  loading="lazy"
                  className="max-w-full max-h-full object-contain drop-shadow-sm"
                />
              </div>
            ))}
          </div>
          
        </div>
      </ScrollableSection>
    </Section>
  );
};

export default ClientSlider;