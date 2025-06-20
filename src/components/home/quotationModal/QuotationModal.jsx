import { useEffect, useState, useRef } from 'react';
import MailerService from '../../../data/services/mailerService';
import './QuotationModal.css';
import { Check, LoaderCircle, MailWarning } from 'lucide-react';

const QuotationModal = ({ isOpen, onClose, service = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    company: '',
    service: service,
    quantity: '',
    message: '',
  });

  const serviceFields = {
    'Arrendamiento de impresoras': [
     {
        label: 'Tipo de impresora',
        name: 'TIpo de impresora',
        type: 'select',
        options: ['Multifuncional', 'Impresora']       
      },
      {
        label: 'Color o Blanco y Negro',
        name: 'Tipo de impresión',
        type: 'select',
        options: ['Color', 'Blanco y negro']
      }
    ],
    'Arrendamiento de equipo de cómputo.': [
      { 
        label: '¿Quieres Rentar o comprar?',
        name: 'Tipo de operación',
        type: 'select',
        options: ['Rentar', 'Comprar', 'Estamos decidiendo']

      }
    ]
  };
  const modalRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({
    type: '', // 'success', 'error', 'loading'
    message: ''
  });

  const mailerService = new MailerService();

  useEffect(() => {
  if (submitStatus.type && modalRef.current) {
    modalRef.current.scrollTop = 0;
  }
  }, [submitStatus.type]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpiar error específico cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Limpiar mensaje de estado
    if (submitStatus.type) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    const numberRegex = /^[0-9]{7,15}$/;

    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } 
    
   if (formData.number.trim()) {
    if (!numberRegex.test(formData.number)) {
      newErrors.number = 'Ingresa un número válido (7-15 dígitos)';
    }
   }
    
    if (!formData.service.trim()) {
      newErrors.service = 'El producto/servicio es obligatorio';
    }
    
    if (!formData.quantity.trim()) {
      newErrors.quantity = 'La cantidad es obligatoria';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formulario enviandose");
    
    const validationErrors = validate();
    console.log("Errores detectados", validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus({
        type: 'error',
        message: 'Por favor corrige los errores en el formulario'
      });
      return;
    }

    setSubmitStatus({
      type: 'loading',
      message: 'Enviando cotización...'
    });

    try {
      const quotationData = {
        ...formData,
        requestDate: new Date().toLocaleDateString('es-MX'),
        requestTime: new Date().toLocaleTimeString('es-MX')
      };

      await mailerService.sendCot(quotationData);
      
      setSubmitStatus({
        type: 'success',
        message: '¡Cotización enviada exitosamente! Te contactaremos pronto con la información solicitada.'
      });
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        number: '',
        company: '',
        service: service,
        quantity: '',
        message: '',
      });
      setErrors({});
      

      setTimeout(() => {
        onClose();
        setSubmitStatus({ type: '', message: '' });
      }, 2000);
      
    } catch (error) {
      console.error('Error al enviar cotización:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Error al enviar la cotización. Por favor intenta nuevamente.'
      });
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

      useEffect(() => {
      setFormData(prev => ({
        ...prev,
        service: service || ''
      }));
    }, [service]);


  // Componente para el mensaje de estado
  const StatusMessage = () => {
    if (!submitStatus.type) return null;

    const getStatusStyles = () => {
      switch (submitStatus.type) {
        case 'success':
          return {
            backgroundColor: '#d4edda',
            borderColor: '#c3e6cb',
            color: '#155724',
            icon: <Check/>
          };
        case 'error':
          return {
            backgroundColor: '#f8d7da',
            borderColor: '#f5c6cb',
            color: '#721c24',
            icon: <MailWarning/>
          };
        case 'loading':
          return {
            backgroundColor: '#d1ecf1',
            borderColor: '#bee5eb',
            color: '#0c5460',
            icon: <LoaderCircle/>
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
          animation: 'slideIn 0.3s ease-out'
        }}
      >
        <span style={{ fontSize: '1.1rem' }}>{styles.icon}</span>
        <span>{submitStatus.message}</span>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="quotation-modal-overlay" onClick={handleBackdropClick}>
      <div className="quotation-modal" ref={modalRef}>
        <div className="modal-header">
          {formData.service
          ? <h2>Cotización de servicio para  <br />{formData.service}</h2>
        : 'Solicitar cotización'}
      
        </div>

        <div className="modal-body">
          <StatusMessage />
          
          <form onSubmit={handleSubmit} className="quotation-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  disabled={submitStatus.type === 'loading'}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ejemplo@correo.com"
                  disabled={submitStatus.type === 'loading'}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="number">Teléfono </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="6141234567"
                  disabled={submitStatus.type === 'loading'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Empresa (Opcional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                  disabled={submitStatus.type === 'loading'}
                />
              </div>
            </div>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="quantity">¿Cuántos equipos necesitas?*</label>

                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Ej: 5 equipos, 1 servicio"
                  disabled={submitStatus.type === 'loading'}
                />
                {errors.quantity && <span className="error-message">{errors.quantity}</span>}
              </div>
            </div>

            {serviceFields[formData.service] && serviceFields[formData.service].map((field,i) => (
              <div className="form-group" key={i}>
                <label htmlFor={field.name}>{field.label}</label>
                {field.type === 'select' ? (
                  <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  disabled={submitStatus.type === 'loading'}
                  >
                    <option value="">Selecciona una opción</option>
                    {field.options.map((option,i) => (
                      <option key={i} value={option}>{option}</option>
                    ))}
                  </select>
                ) :(
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    disabled={submitStatus.type === 'loading'}
                  />
                )}
              </div>
            ))}

            <div className="form-group">
              <label htmlFor="message">Detalles Adicionales</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Especificaciones técnicas, requisitos especiales, duración del servicio, etc."
                disabled={submitStatus.type === 'loading'}
              />
            </div>

            <div className="form-actions">
              <button 
                type="button" 
                className="cancel-button"
                onClick={onClose}
                disabled={submitStatus.type === 'loading'}
              >
                Cancelar
              </button>
              <button 
                type="submit" 
                className="submit-button"
                disabled={submitStatus.type === 'loading'}
              >
                {submitStatus.type === 'loading' ? (
                  <>⏳ Enviando...</>
                ) : (
                  <>📧 Solicitar Cotización</>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuotationModal;