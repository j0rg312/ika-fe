import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import './HeroSlider.css';
import Consultoria from '../../../assets/consultoria.png';
import StarLink from '../../../assets/starlink.webp';
import Soporte from '../../../assets/services/soporte2.jpeg';
import Impresora from '../../../assets/services/impresora.jpeg'
import Home from '../../../assets/home.jpeg'
import QuotationModal from '../quotationModal/QuotationModal';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
const slides = [
  {
    id: 1,
    bgImage: Soporte,
    subtitle: 'Bienvenido a IKA',
    title: 'Transformamos tecnología en soluciones reales',
    description: 'Somos una empresa con más de 20 años ofreciendo innovación, compromiso y excelencia en servicios de TI, desarrollo web y consultoría.',
    alignment: 'left',
    button: {
      text: 'Conócenos',
      link: '../about/'
    }
  },
  {
    id: 2,
    bgImage: Consultoria,
    subtitle: '¿Quiénes somos?',
    title: 'Aliados estratégicos en tecnología',
    description: 'En IKA creemos en el poder de la tecnología para hacer crecer a las empresas. Acompañamos a nuestros clientes en cada paso con soluciones personalizadas y un equipo altamente capacitado.',
    alignment: 'right'
  },
  {
    id: 3,
    bgImage: Impresora,
    subtitle: 'Contamos con las mejors marcas para tu empresa',
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
    <div className="hero-slider">
      <div 
        className="slides-container"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="slide"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="slide-content-wrapper">
              <div className={`slide-content align-${slide.alignment}`}>
                <h6 className="slider-subtitle">{slide.subtitle}</h6>
                <h2 className="slider-title">{slide.title}</h2>
                <p className="description">{slide.description}</p>
               <div className={`buttons ${slide.alignment === 'center' ? 'center' : ''}`}>
                  {slide.button ? (
                    slide.button.className === 'cot' ? (
                      <button
                        className={`btn primary ${slide.button.className}`}
                        onClick={() => openModal(slide.title)}
                      >
                        {slide.button.text}
                      </button>
                    ) : (
                      <a
                        href={slide.button.link}
                        className={`btn primary ${slide.button.className || ''}`}
                      >
                        {slide.button.text}
                      </a>
                    )
                  ) : (
                    <a href="#como-trabajamos" className={`btn secondary align-${slide.alignment}`}>
                      <Play className="icon" /> Cómo trabajamos
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="nav-arrow left" onClick={prevSlide}><ChevronLeft /></button>
      <button className="nav-arrow right" onClick={nextSlide}><ChevronRight /></button>

      <div className="dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
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
