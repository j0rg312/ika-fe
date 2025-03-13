
import './Contact.css';
import ScrollableSection from '../ui/ux/scrollableSection/ScrollableSection';
import TypingTitle from '../ui/ux/typingTitle/TypingTitle';
import Section from '../ui/layouts/Section';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <Section>
            <Helmet>
                <title>IKA - Contacto</title>
                <meta name="description" content="IKA es una empresa mexicana especializada en consultoría y soporte de TI." />
            </Helmet>
        <TypingTitle text="Contactanos"/>
              <ScrollableSection index={0}>
              <p className="fade-in">Transformamos el futuro con tecnología innovadora.</p>
      <h3 className="special-title" style={{ fontWeight: 'normal', color: '#333' }}>
        <span>Contacto</span>
      </h3>

      <div className="row">
        <div className="col-12 col-sm-2"></div>
        <div className="col-12 col-sm-8"></div>
      </div>


      <div className="row">
        <div className="col-12">
          <div className="divider-space space-10x"></div>
        </div>
      </div>


      <div className="row">

        <div className="col-12 col-sm-5">
          <div className="iconbox clearfix iconbox-1 align-left ib-type1">
            <div className="iconbox-image">
              <i className="flaticon-placeholder"></i>
            </div>
            <div className="iconbox-aside">
              <div className="iconbox-title">
                <h3>Oficinas</h3>
              </div>
              <div className="iconbox-text">
                <div>
                  <div>C. Cebra #3700 int 26a,</div>
                  <div>Col. Colinas del Sol I y II</div>
                  <div>CP. 31110.</div>
                  <div>Chihuahua, Chihuahua</div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider-space space-10x"></div>
        </div>


        <div className="col-12 col-sm-5">
          <div className="iconbox clearfix iconbox-1 align-left ib-type1">
            <div className="iconbox-image">
              <i className="flaticon-phone-call"></i>
            </div>
            <div className="iconbox-aside">
              <div className="iconbox-title">
                <h3>Llámanos</h3>
              </div>
              <div className="iconbox-text">
                <div>Oficina: (614) 388-0755</div>
              </div>
            </div>
          </div>
          <div className="divider-space space-10x"></div>
        </div>

        <div className="col-12 col-sm-5">
          <div className="iconbox clearfix iconbox-1 align-left ib-type1">
            <div className="iconbox-image">
              <i className="flaticon-mail"></i>
            </div>
            <div className="iconbox-aside">
              <div className="iconbox-title">
                <h3>Correos</h3>
              </div>
              <div className="iconbox-text">
                <div>
                  <a href="mailto:contacto@ika.mx">contacto@ika.mx</a>
                </div>
              </div>
            </div>
          </div>
          <div className="divider-space space-10x"></div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="divider-space space-20x"></div>
        </div>
      </div>
              </ScrollableSection>
             
    </Section>
  );
};

export default Contact;
