import Section from '../../../ui/layouts/Section';
import ScrollableSection from '../../../ui/ux/scrollableSection/ScrollableSection';
import './BrandSlider.css';
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
import  Ubiqui from '../../../../assets/services/networks/ubiqui.jpeg';
import Yeastar from '../../../../assets/services/networks/yeastar.jpeg';





const logos = [Aws, Emu, Epcom, Hikvision, Hilook, Huawei, Proxmox, Starlink, Tecnology, Unifi, Vb, Vm, Sangfor, Cisco, Fortinet, Grandstream, Pfsense, Tplink, Ubiqui, Yeastar];

const BrandSlider = () => {  const triplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <Section>
      <ScrollableSection>
        <div className="brand-slider">
          <div className="slider-track">
            {triplicatedLogos.map((logo, i) => (
              <div className="brand-logo-card" key={i}>
                <img 
                  src={logo} 
                  alt={`brande ${(i % logos.length) + 1}`} 
                  loading="lazy"
                  className="brand-logo-image"
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

export default BrandSlider;