import './Contact.css';
import ScrollableSection from '../ui/ux/scrollableSection/ScrollableSection';
import { useState } from 'react';
import TypingTitle from '../ui/ux/typingTitle/TypingTitle';
import Section from '../ui/layouts/Section';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/form/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Correo enviado con éxito.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Hubo un problema al enviar el correo.');
      }
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      alert('Ocurrió un error al enviar el correo.');
    }
  };

  return (
    <Section>
      <Helmet>
        <title>IKA - Contacto</title>
        <meta name="description" content="IKA es una empresa mexicana especializada en consultoría y soporte de TI." />
      </Helmet>

      <TypingTitle text="Contáctanos" />

      <ScrollableSection index={0}>
        <div className="container">
          <p className="fade-in">Transformamos el futuro con tecnología innovadora.</p>

          <h3 className="special-title">
            <span>Contacto</span>
          </h3>

          <div className="info-grid">
            <div className="info-box">
              <i className="flaticon-placeholder"></i>
              <h3 className='text-center'>Oficinas</h3>
              <p>C. Cebra #3700 int 26a, Col. Colinas del Sol I y II</p>
              <p>CP. 31110, Chihuahua, Chihuahua</p>
            </div>

            <div className="info-box">
              <i className="flaticon-phone-call"></i>
              <h3 className='text-center'>Llámanos</h3>
              <p>Oficina: (614) 388-0755</p>
            </div>

            <div className="info-box">
              <i className="flaticon-mail"></i>
              <h3 className='text-center'>Correos</h3>
              <p><a href="mailto:contacto@ika.mx">contacto@ika.mx</a></p>
            </div>
          </div>

          <div className="form-container">
            <h2 className='text-center'>Formulario de Consulta</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </ScrollableSection>
    </Section>
  );
};

export default Contact;
