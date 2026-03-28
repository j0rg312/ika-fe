"use client";
import { useEffect, useState, useRef } from 'react';
import MailerService from '../../../data/services/mailerService';
import { Loader2, X, Send } from 'lucide-react';
import { toast } from 'sonner';

const QuotationModal = ({ isOpen, onClose, service = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: service,
    quantity: '',
    message: '',
  });

  const serviceFields = {
    'Arrendamiento de impresoras': [
      {
        label: 'Tipo de impresora',
        name: 'Tipo de impresora', // Fixed capitalization of 'Tipo'
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
  const [isLoading, setIsLoading] = useState(false);

  const mailerService = new MailerService();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{7,15}$/;

    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    }

    if (formData.phone.trim()) {
      if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = 'Ingresa un número válido (7-15 dígitos)';
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

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Por favor corrige los campos remarcados en rojo.');
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading('Enviando cotización...');

    try {
      const quotationData = {
        ...formData,
        requestDate: new Date().toLocaleDateString('es-MX'),
        requestTime: new Date().toLocaleTimeString('es-MX')
      };

      await mailerService.sendCot(quotationData);

      toast.success('¡Cotización enviada exitosamente!', {
        id: loadingToast,
        description: 'Te contactaremos pronto con la información solicitada.'
      });

      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: service,
        quantity: '',
        message: '',
      });
      setErrors({});

      setTimeout(() => {
        onClose();
      }, 1000);

    } catch (error) {
      console.error('Error al enviar cotización:', error);
      toast.error('Error al enviar la cotización.', {
        id: loadingToast,
        description: error.message || 'Por favor verifica la conexión e intenta nuevamente.'
      });
    } finally {
      setIsLoading(false);
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

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 sm:p-6"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-[fadeIn_0.3s_ease-out_forwards] border border-gray-100"
      >
        {/* Modal Header */}
        <div className="bg-gray-50/80 px-6 py-5 border-b border-gray-100 flex justify-between items-center shrink-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
            {formData.service ? (
              <>Cotización de servicio para <span className="text-primary block mt-1">{formData.service}</span></>
            ) : (
              'Solicitar cotización'
            )}
          </h2>
          <button 
            type="button" 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-900"
            disabled={isLoading}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="px-6 py-8 overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 ml-1">
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  disabled={isLoading}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                />
                {errors.name && <p className="text-sm text-red-500 ml-1 mt-1">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 ml-1">
                  Correo Electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ejemplo@correo.com"
                  disabled={isLoading}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                />
                {errors.email && <p className="text-sm text-red-500 ml-1 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 ml-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="6141234567"
                  disabled={isLoading}
                   className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                />
                {errors.phone && <p className="text-sm text-red-500 ml-1 mt-1">{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 ml-1">
                  Empresa (Opcional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 ml-1">
                ¿Cuántos equipos o servicios necesitas? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Ej: 5 equipos, 1 integración, etc."
                disabled={isLoading}
                className={`w-full px-4 py-3 rounded-xl border ${errors.quantity ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
              />
              {errors.quantity && <p className="text-sm text-red-500 ml-1 mt-1">{errors.quantity}</p>}
            </div>

            {/* Dynamic Service Fields */}
            {serviceFields[formData.service] && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-primary/5 p-4 rounded-2xl border border-primary/10">
                {serviceFields[formData.service].map((field, i) => (
                  <div className="space-y-2" key={i}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-primary ml-1">
                      {field.label}
                    </label>
                    {field.type === 'select' ? (
                      <select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      >
                        <option value="">Selecciona una opción</option>
                        {field.options.map((option, idx) => (
                          <option key={idx} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        disabled={isLoading}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 ml-1">
                Detalles Adicionales
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Especificaciones técnicas, requisitos especiales..."
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-y min-h-[100px]"
              />
            </div>

            {/* Form Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-end border-t border-gray-100">
              <button
                type="button"
                onClick={onClose}
                disabled={isLoading}
                className="w-full sm:w-auto px-6 py-3 text-gray-600 font-medium hover:bg-gray-100 rounded-xl transition-colors disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-primary-light text-white rounded-xl font-medium transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Solicitar Cotización</span>
                  </>
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