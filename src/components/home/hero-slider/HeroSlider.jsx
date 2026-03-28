"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Consultoria from '../../../assets/consultoria.png';
import StarLink from '../../../assets/starlink.webp';
import Computo from '../../../assets/services/computo.jpeg';
import Impresora from '../../../assets/services/impresora.jpeg'

import QuotationModal from '../quotationModal/QuotationModal';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
const slides = [
  {
    id: 1,
    bgImage: Computo,
    subtitle: 'Renueva tu equipo',
    title: 'Arrendamiento de equipo de cómputo.',
    description: 'Ponemos a tu disposición la renta de equipo tecnológico como computadoras, impresoras, servidores, redes, proyectores y todo lo necesario para la infraestructura de tu organización.',
    alignment: 'left',
    button: {
      text: 'Cotiza sin compromiso',
      className: 'cot'
    }
  },
  {
    id: 2,
    bgImage: Consultoria,
    subtitle: '¿Quiénes somos?',
    title: 'Aliados estratégicos en tecnología.',
    description: 'En IKA creemos en el poder de la tecnología para hacer crecer a las empresas. Acompañamos a nuestros clientes en cada paso con soluciones personalizadas y un equipo altamente capacitado.',
    alignment: 'right'
  },
  {
    id: 3,
    bgImage: Impresora,
    subtitle: 'Contamos con las mejors marcas para tu empresa.',
    title: 'Arrendamiento de impresoras',
    description: 'Desde consultoría hasta venta y renta de equipo de cómputo',
    alignment: 'center',
    button: {
      text: 'Cotiza sin compromiso',
      className: 'cot'
    }
  }
];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide,slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  const [selectedService, setSelectedService] = useState('');
  const openModal = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  }
  const closeModal = () => setIsModalOpen(false);


  return (
    <div 
      className="relative w-full overflow-hidden group bg-gray-900"
      style={{ minHeight: '600px', height: '85vh' }}
    >
      
      {/* Slides Container */}
      <div 
        className="flex w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 h-full relative flex items-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%), url(${slide.bgImage.src || slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div 
                className={`max-w-3xl flex flex-col ${
                  slide.alignment === 'center' 
                    ? 'mx-auto items-center text-center' 
                    : slide.alignment === 'right' 
                      ? 'ml-auto items-end text-right' 
                      : 'items-start text-left'
                }`}
              >
                <h6 className="text-secondary tracking-[0.2em] uppercase font-semibold text-sm md:text-base mb-4 animate-fade-in-up bg-white/10 backdrop-blur-sm shadow-sm py-1.5 px-4 rounded-full border border-white/20 inline-block">
                  {slide.subtitle}
                </h6>
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed drop-shadow-md font-medium max-w-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  {slide.description}
                </p>
                
                <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  {slide.button ? (
                    slide.button.className === 'cot' ? (
                      <button
                        className="group relative inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        onClick={() => openModal(slide.title)}
                      >
                        <span className="relative z-10">{slide.button.text}</span>
                        <Play size={18} fill="currentColor" className="relative z-10 group-hover:scale-110 transition-transform" />
                        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out skew-x-12" />
                      </button>
                    ) : (
                      <a
                        href={slide.button?.link || '#'}
                        className="inline-flex items-center justify-center bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-lg transition-all duration-300"
                      >
                        {slide.button.text}
                      </a>
                    )
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 md:p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20 focus:outline-none hidden sm:block" 
        onClick={prevSlide}
        aria-label="Anterior"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 backdrop-blur-md text-white p-3 md:p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20 focus:outline-none hidden sm:block" 
        onClick={nextSlide}
        aria-label="Siguiente"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 relative overflow-hidden outline-none ${
              index === currentSlide ? 'bg-primary w-12 shadow-[0_0_10px_rgba(62,65,148,0.8)]' : 'bg-white/50 hover:bg-white'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar (Bottom Edge) */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-black/20 z-10">
        <div
          className="h-full bg-gradient-to-r from-primary-light to-primary relative transition-all duration-[5000ms] ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        >
           <div className="absolute top-0 right-0 h-full w-20 bg-white/40 blur-sm brightness-150 animate-pulse" />
        </div>
      </div>

      <QuotationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        productName="Cotización general"
        service={selectedService}
        productDetails="Solicitó cotización desde el Hero Slider"
      />
    </div>
  );
};

export default HeroSlider;
