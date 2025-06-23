import Section from '../../ui/layouts/Section';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import './ClientSlider.css';
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

const ClientSlider = () => {  const triplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <Section>
      <ScrollableSection>
        <MainTitle text='Nuestros Clientes.'/>
        <div className="client-slider">
          <div className="slider-track">
            {triplicatedLogos.map((logo, i) => (
              <div className="client-logo-card" key={i}>
                <img 
                  src={logo} 
                  alt={`Cliente ${(i % logos.length) + 1}`} 
                  loading="lazy"
                  className="client-logo-image"
                />
              </div>
            ))}
          </div>
 
          <div className="slider-progress"></div>
        </div>
      </ScrollableSection>
    </Section>
  );
};

export default ClientSlider;