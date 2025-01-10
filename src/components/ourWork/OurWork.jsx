import  { useState, useEffect } from 'react';
import './OurWork.css';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import  {allServices} from '../../data/our-work.data';
import ScrollableSection from '../scrollableSection/ScrollableSection';
import TypingTitle from '../typingTitle/TypingTitle';

const OurWork = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768)
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
    }, []);

    const sliderConfig = {
      modules: [Navigation, Pagination],
      spaceBetween:30,
      slidesPerView: isMobile ? 1 : 3,
      navigation: true,
      pagination: {clickable: true},
      className: 'swiper-container'
    }


    const handleImageClick = (image) => {
        setSelectedImage(image);
    }

    const closeOverlay = () => {
        setSelectedImage(null);
    }



    return (
        <><section id="our-work" className="our-work-section">
          <TypingTitle text="Nuestro Trabajo"/>
   
   <section className="slider-container ">
    {allServices.map((service,i) =>(
 <ScrollableSection className="slider " key={i} index={i}>
 <h3>{service.name}</h3>
<Swiper
 {...sliderConfig}
>
 {service.service[0].content.map((s, i) => (
   <SwiperSlide key={i}>
     <div
       className="service-card"
       onClick={() => s.imagen && handleImageClick(s.imagen)}
     >
       <div
         className="card__background"
         style={{
           backgroundImage: `url(${s.imagen && !s.imagen.endsWith(".mp4")
             ? s.imagen
             : "https://via.placeholder.com/300"
           })`,
         }}
       >
         <div className="card-content">
           <h4 className="card-title">{s.servicio}</h4>
           <p className="card-description">{s.descripcion}</p>
         </div>
       </div>
     </div>
   </SwiperSlide>
 ))}
</Swiper>
</ScrollableSection>
    ))}
   </section>

        {selectedImage && !selectedImage.endsWith(".mp4") && (
          <div className="overlay" onClick={closeOverlay}>
            <img src={selectedImage} alt="Preview" />
            <button className="close-btn" onClick={closeOverlay}>
              X
            </button>
          </div>
        )}

        {selectedImage && selectedImage.endsWith(".mp4") && (
          <div className="overlay" onClick={closeOverlay}>
            <video controls autoPlay>
              <source src={selectedImage} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="close-btn" onClick={closeOverlay}>
              X
            </button>
          </div>
        )}
      </section>

  </>

    )
}

export default OurWork;