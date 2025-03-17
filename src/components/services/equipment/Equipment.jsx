import './Equipment.css';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import TypingTitle from '../../ui/ux/typingTitle/TypingTitle';
import Section from '../../ui/layouts/Section';

const Equipment = () => {
  return (
    <Section>
      <TypingTitle text="Equipos y Servicios"/>

      <ScrollableSection className="service-section" index={0}>
        <div className="content">
        <div className="service-text">
          <h2 className='text-center'>Arrendamiento de equipo de cómputo</h2>
          <p>
            Cow prosciutto andouille, pork loin pastrami frankfurter chuck shank.
            Biltong pork t-bone shankle pig. Sirloin frankfurter bresaola sausage
            andouille. Ground round strip steak doner, kevin short loin turducken
            jowl biltong meatball bresaola. Drumstick tongue pig frankfu fatback,
            brisket ground round jerky.
          </p>
          <p>
            1569% salami picanha pan12/12/164 enderloin265 biltong landjaeger16
            landjaeger cow rump
          </p>
          <p>
            Andouille flank leberkas beef ribs. Prosciutto cupim turkey, ham hock
            tail hamburger t-bone shank shoulder pork belly chicken ribeye ham.
            Hamburger ball tip short ribs drumstick salami. Fatback meatloaf pork loin
            beef, swine strip steak alcatra jerky ribeye cow corned beef. Pastrami
            shankle beef jerky capicola doner meatloaf.
          </p>
        </div>
        <div className="service-image">
          <img
            src="https://www.ika.mx/wp-content/uploads/2016/11/equipos-570x380.jpg"
            alt="Arrendamiento de equipo"
            width="570"
            height="380"
          />
        </div>
        </div>
      </ScrollableSection>

      <ScrollableSection className="service-section" index={1}>
        <div className="content">
        <div className="service-image">
          <img
            src="https://www.ika.mx/wp-content/uploads/2016/11/impresora-570x380.jpeg"
            alt="Administración de impresoras"
            width="570"
            height="380"
          />
        </div>
        <div className="service-text">
          <h2 className='text-center'>Servicio de administración de impresoras</h2>
          <p>
            Cow prosciutto andouille, pork loin pastrami frankfurter chuck shank.
            Biltong pork t-bone shankle pig. Sirloin frankfurter bresaola sausage
            andouille. Ground round strip steak doner, kevin short loin turducken
            jowl biltong meatball bresaola. Drumstick tongue pig frankfu fatback,
            brisket ground round jerky.
          </p>
          <p>
            1569% salami picanha pan12/12/164 enderloin265 biltong landjaeger16
            landjaeger cow rump
          </p>
          <p>
            Andouille flank leberkas beef ribs. Prosciutto cupim turkey, ham hock
            tail hamburger t-bone shank shoulder pork belly chicken ribeye ham.
            Hamburger ball tip short ribs drumstick salami. Fatback meatloaf pork loin
            beef, swine strip steak alcatra jerky ribeye cow corned beef. Pastrami
            shankle beef jerky capicola doner meatloaf.
          </p>
        </div>
       
        </div>
      </ScrollableSection>
    </Section>
  );
};

export default Equipment;
