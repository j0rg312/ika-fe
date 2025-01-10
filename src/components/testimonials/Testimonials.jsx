
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="slider">
      <input type="radio" name="testimonial" id="t-1" />
      <input type="radio" name="testimonial" id="t-2" />
      <input type="radio" name="testimonial" id="t-3" defaultChecked />
      <input type="radio" name="testimonial" id="t-4" />
      <input type="radio" name="testimonial" id="t-5" />
      
      <div className="testimonials">
        <label className="item" htmlFor="t-1">
          <img src="" alt="Cliente 1" />
          <p>"Gracias a [nombre de tu empresa], nuestro proceso de digitalización fue mucho más fácil y rápido. ¡Altamente recomendados!"</p>
          <h2>- Cliente A</h2>
        </label>
        <label className="item" htmlFor="t-2">
          <img src="https://dummyimage.com/150" alt="Cliente 2" />
          <p>"Un servicio excelente, siempre atentos a nuestras necesidades. ¡Seguiremos trabajando con ellos!"</p>
          <h2>- Cliente B</h2>
        </label>
        <label className="item" htmlFor="t-3">
          <img src="https://dummyimage.com/150" alt="Cliente 3" />
          <p>"Altamente profesionales y comprometidos con cada proyecto. No podríamos estar más satisfechos."</p>
          <h2>- Cliente C</h2>
        </label>
        <label className="item" htmlFor="t-4">
          <img src="https://dummyimage.com/150" alt="Cliente 4" />
          <p>"El equipo es increíblemente talentoso y trabajaron con nosotros para cumplir cada objetivo."</p>
          <h2>- Cliente D</h2>
        </label>
        <label className="item" htmlFor="t-5">
          <img src="https://dummyimage.com/150" alt="Cliente 5" />
          <p>"Hemos alcanzado metas que parecían inalcanzables gracias a su apoyo. ¡Muy recomendados!"</p>
          <h2>- Cliente E</h2>
        </label>
      </div>
      
      <div className="dots">
        <label htmlFor="t-1"></label>
        <label htmlFor="t-2"></label>
        <label htmlFor="t-3"></label>
        <label htmlFor="t-4"></label>
        <label htmlFor="t-5"></label>
      </div>
    </section>
  );
};

export default Testimonials;
