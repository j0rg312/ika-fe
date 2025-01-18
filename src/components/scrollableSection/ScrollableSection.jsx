import { useInView } from 'react-intersection-observer';
import './ScrollableSection.css';

const ScrollableSection = ({ children, className , index}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const animationClass = index % 2 === 0 ? 'fade-in-right' : 'fade-in-left';
  return (
    <div
      ref={ref}
      className={`${className} ${inView ? animationClass : 'hidden'}`}
    >
      {children}
    </div>
  );
};

export default ScrollableSection;