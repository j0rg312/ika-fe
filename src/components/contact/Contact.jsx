"use client";

import { useState } from 'react';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import ScrollableSection from '../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../ui/ux/MainTitle/MainTitle';
import Section from '../ui/layouts/Section';
import MailerService from '../../data/services/mailerService';

const Contact = () => {
  const [formData, setFormData] = useState({ 
     name: '',
     email: '',
     phone: '',
     message: '' 
  });
    
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors(prev => ({...prev, [name]: ''}));
    setFormData({ ...formData, [name]: value });
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

    if(formData.phone && !/^[0-9]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Solo números (7 a 15 dígitos)';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validateErrors = validate();
    if(Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      toast.error('Por favor corrige los errores en el formulario');
      return;
    }
   
    setIsLoading(true);
    const loadingToast = toast.loading('Enviando mensaje...');

    try {
      const mailerService = new MailerService();
      await mailerService.sendEmail(formData);

      toast.success('¡Hemos recibido tu mensaje!', {
        id: loadingToast,
        description: 'Te contactaremos lo antes posible.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      toast.error('Error de conexión', {
        id: loadingToast,
        description: 'Por favor verifica tu conexión a internet e intenta nuevamente.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: 'Oficinas',
      details: ['Calle Getsemani #9113', 'Col. Nuevo Paraíso'],
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: 'Llámanos',
      details: ['Oficina: (614) 484-27-11'],
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: 'Correos',
      details: ['contacto@ika.mx'],
      link: 'mailto:contacto@ika.mx'
    }
  ];

  return (
    <Section className="bg-gray-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50/50 to-white/80 pointer-events-none" />
      
      <div className="relative z-10 w-full">
        <div className="text-center mb-16">
          <MainTitle text="Contáctanos" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 animate-[fadeIn_1s_ease-out]">
            Transformamos el futuro con tecnología innovadora. Estamos listos para escuchar tus ideas.
          </p>
        </div>

        <ScrollableSection index={0}>
          <div className="max-w-6xl mx-auto px-4 md:px-0">
            {/* Cards Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-gray-100 group"
                >
                  <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {info.link ? (
                          <a href={info.link} className="hover:text-primary transition-colors hover:underline">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Formulario */}
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
               {/* Decorative Background blob */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Envíanos un mensaje</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 text-left">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 ml-1">
                        Nombre completo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isLoading}
                        placeholder="Ej. Juan Pérez"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                      />
                      {errors.name && <p className="text-sm text-red-500 ml-1">{errors.name}</p>}
                    </div>

                    <div className="space-y-2 text-left">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 ml-1">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isLoading}
                        placeholder="Solo números"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                      />
                      {errors.phone && <p className="text-sm text-red-500 ml-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 ml-1">
                      Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isLoading}
                      placeholder="ejemplo@empresa.com"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors`}
                    />
                    {errors.email && <p className="text-sm text-red-500 ml-1">{errors.email}</p>}
                  </div>

                  <div className="space-y-2 text-left">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 ml-1">
                      Mensaje <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isLoading}
                      placeholder="¿En qué podemos ayudarte?"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'} focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-sm text-red-500 ml-1">{errors.message}</p>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-primary hover:bg-primary-light text-white rounded-xl font-medium transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/20"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Enviando mensaje...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </ScrollableSection>
      </div>
    </Section>
  );
};

export default Contact;