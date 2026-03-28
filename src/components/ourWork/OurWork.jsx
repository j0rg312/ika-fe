"use client";
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { allServices } from '../../data/our-work.data';
import ScrollableSection from '../ui/ux/scrollableSection/ScrollableSection';
import MainTitle from '../ui/ux/MainTitle/MainTitle';
import Section from '../ui/layouts/Section';

const OurWork = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const swiperRef = useRef(null);

  const getSlidePerView = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1300) return 3;
    return 4;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidePerView());

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidePerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderConfig = {
    modules: [Navigation, Pagination],
    spaceBetween: 20,
    slidesPerView,
    navigation: true,
    pagination: { clickable: true },
    loop: true,
    className: 'swiper-container',
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <Section>


      <MainTitle text="Nuestro Trabajo" />

      <div className="slider-container w-full mt-12">
        {allServices.map((service, i) => (
          <ScrollableSection className="slider" key={i} index={i}>
            <h3 className="area-title">{service.name}</h3>
            <Swiper {...sliderConfig} ref={swiperRef}>
              {service.service[0].content.map((s, j) => (
                <SwiperSlide key={j}>
                  <div
                    className="services-card"
                    onClick={() => s.imagen && handleImageClick(s.imagen)}
                  >
                    <h4 className="card-title">{s.servicio}</h4>
                    <div
                      className="card__img"
                      style={{
                        backgroundImage: `url(${s.imagen && !s.imagen.endsWith('.mp4') ? s.imagen : 'https://via.placeholder.com/300'})`,
                      }}
                    ></div>
                    <p className="card-description">{s.descripcion}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </ScrollableSection>
        ))}
      </div>

      {selectedImage && (
        <div className="overlay" onClick={closeOverlay}>
          {selectedImage.endsWith('.mp4') ? (
            <video controls autoPlay>
              <source src={selectedImage} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={selectedImage} alt="Preview" />
          )}
          <button className="close-btn" onClick={closeOverlay}>
            ×
          </button>
        </div>
      )}
    </Section>
  );
};

export default OurWork;
