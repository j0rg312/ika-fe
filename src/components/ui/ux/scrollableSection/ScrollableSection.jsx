import { useInView } from 'react-intersection-observer';
import './ScrollableSection.css';

const ScrollableSection = ({ children, index}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationClass = index % 2 === 0 ? 'fade-in-right' : 'fade-in-left';
  return (
    <div
      ref={ref}
      className={`card-container ${inView ? animationClass : 'hidden'}`}
    ><div className="card-body">
      {children}
    </div>
    </div>
  );
};

export default ScrollableSection;