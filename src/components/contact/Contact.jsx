import './Contact.css';
import ScrollableSection from '../ui/ux/scrollableSection/ScrollableSection';
import { useState } from 'react';
import MainTitle from '../ui/ux/MainTitle/MainTitle';
import Section from '../ui/layouts/Section';
import { Helmet } from 'react-helmet-async';
import MailerService from '../../data/services/mailerService';
import { Check, LoaderCircle, MailWarning } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ 
     name: '',
     email: '',
     number: '',
     message: '' 
  });
    
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({
    type: '', // 'success', 'error', 'loading'
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrors(prev => ({...prev, [name]: ''}));
    setFormData({ ...formData, [name]: value });
    
    // Limpiar mensaje de estado al cambiar cualquier campo
    if (submitStatus.type) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    
    if(!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if(!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un correo electrónico válido';
    }
   
    if(!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio';

    if(formData.number && !/^[0-9]{7,15}$/.test(formData.number)) {
      newErrors.number = 'Sólo números (7 a 15 dígitos)';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validateErrors = validate();
    if(Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      setSubmitStatus({
        type: 'error',
        message: 'Por favor corrige los errores en el formulario'
      });
      return;
    }

   
    setSubmitStatus({
      type: 'loading',
      message: 'Enviando mensaje...'
    });

    try {
      const mailerService = new MailerService();
      const response = await mailerService.sendEmail(formData);

      setSubmitStatus({
        type: 'success',
        message: '!Hemos recibido tu correo¡ Te contactaremos lo antes posible.'
      })
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Error de conexión. Por favor verifica tu conexión a internet e intenta nuevamente.'
      });
    }
  };

  const StatusMessage = () => {
    if (!submitStatus.type) return null;

    const getStatusStyles = () => {
      switch (submitStatus.type) {
        case 'success':
          return {
            backgroundColor: '#d4edda',
            borderColor: '#c3e6cb',
            color: '#155724',
            icon:<Check/>
          };
        case 'error':
          return {
            backgroundColor: '#f8d7da',
            borderColor: '#f5c6cb',
            color: '#721c24',
            icon: <MailWarning />
          };
        case 'loading':
          return {
            backgroundColor: '#d1ecf1',
            borderColor: '#bee5eb',
            color: '#0c5460',
            icon: <LoaderCircle />
          };
        default:
          return {};
      }
    };

    const styles = getStatusStyles();

    return (
      <div 
        className="status-message"
        style={{
          backgroundColor: styles.backgroundColor,
          borderColor: styles.borderColor,
          color: styles.color,
          border: '1px solid',
          borderRadius: 'var(--border-radius-md)',
          padding: 'var(--space-md)',
          marginBottom: 'var(--space-lg)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          fontSize: '0.95rem',
          fontWeight: '500',
          animation: 'slideIn 0.3s ease-out',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <span style={{ fontSize: '1.1rem' }}>{styles.icon}</span>
        <span>{submitStatus.message}</span>
      </div>
    );
  };

  return (
    <Section>
      <Helmet>
        <title>IKA - Contacto</title>
        <meta name="description" content="IKA es una empresa mexicana especializada en consultoría y soporte de TI." />
      </Helmet>

      <MainTitle text="Contáctanos" />

      <ScrollableSection index={0}>
        <div className="container">
          <p className="fade-in">
            Transformamos el futuro con tecnología innovadora.
          </p>
          <div className="info-grid">
            <div className="info-box">
              <i className="flaticon-placeholder"></i>
              <h3>Oficinas</h3>
              <p>C. Cebra #3700 int 26a, Col. Colinas del Sol I y II</p>
              <p>CP. 31110, Chihuahua, Chihuahua</p>
            </div>

            <div className="info-box">
              <i className="flaticon-phone-call"></i>
              <h3>Llámanos</h3>
              <p>Oficina: (614) 388-0755</p>
            </div>

            <div className="info-box">
              <i className="flaticon-mail"></i>
              <h3>Correos</h3>
              <p><a href="mailto:contacto@ika.mx">contacto@ika.mx</a></p>
            </div>
          </div>

          <div className="form-container">
            <h2>Formulario de Contacto</h2>
            
            {/* Mensaje de estado */}
            <StatusMessage />
            
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
                  placeholder="Tu nombre completo"
                  aria-label="Nombre"
                  disabled={submitStatus.type === 'loading'}
                />
                {errors.name && <p className='error'>{errors.name}</p>}
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
                  placeholder="ejemplo@correo.com"
                  aria-label="Correo Electrónico"
                  disabled={submitStatus.type === 'loading'}
                />
                {errors.email && <p className='error'>{errors.email}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="number">Teléfono:</label>
                <input 
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  pattern="^[0-9]{7,15}$"
                  placeholder='Proporcione un número de teléfono'
                  aria-label='Celular'
                  title="Solo números, sin espacios ni símbolos (mínimo 7 dígitos)"
                  disabled={submitStatus.type === 'loading'}
                />
                {errors.number && <p className='error'>{errors.number}</p>}
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
                  placeholder="Escribe tu mensaje aquí..."
                  aria-label="Mensaje"
                  disabled={submitStatus.type === 'loading'}
                />
                {errors.message && <p className='error'>{errors.message}</p>}
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={submitStatus.type === 'loading'}
                style={{
                  opacity: submitStatus.type === 'loading' ? 0.7 : 1,
                  cursor: submitStatus.type === 'loading' ? 'not-allowed' : 'pointer',
                  position: 'relative'
                }}
              >
                {submitStatus.type === 'loading' ? (
                  <>
                    <span style={{ marginRight: 'var(--space-xs)' }}>⏳</span>
                    Enviando...
                  </>
                ) : (
                  'Enviar'
                )}
              </button>
            </form>
          </div>
        </div>
      </ScrollableSection>
    </Section>
  );
};

export default Contact;