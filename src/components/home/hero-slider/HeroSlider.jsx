import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import './HeroSlider.css';
import Consultoria from '../../../assets/consultoria.png';
import StarLink from '../../../assets/starlink.webp';
import Soporte from '../../../assets/soporte.png';
import Home from '../../../assets/home.jpeg'
import QuotationModal from '../quotationModal/QuotationModal';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
const slides = [
  {
    id: 1,
    bgImage: StarLink,
    subtitle: 'Soluciones tecnológicas innovadoras',
    title: 'El equipo adecuado para tu empresa',
    description: 'Más de 20 años de experiencia en consultoría y soporte de TI en Chihuahua',
    alignment: 'left',
    button: {
      text: 'Ver servicios',
      link: '../services/'
    }
  },
  {
    id: 2,
    bgImage: Consultoria,
    subtitle: 'Consultoría especializada',
    title: 'Capital humano de vanguardia',
    description: 'Profesionales capacitados en tecnologías libres y desarrollo de proyectos',
    alignment: 'right'
  },
  {
    id: 3,
    bgImage: Home,
    subtitle: 'Soporte integral de TI',
    title: 'Servicios completos para tu negocio',
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

  const openModal = () => setIsModalOpen(true);
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
                        onClick={openModal}
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
      productDetails="Solicitó cotización desde el Hero Slider"
    />
    </div>
  );
};

export default HeroSlider;
