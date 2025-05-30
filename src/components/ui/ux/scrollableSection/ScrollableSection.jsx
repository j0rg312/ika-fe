import { useInView } from 'react-intersection-observer';
import './ScrollableSection.css';

const ScrollableSection = ({ children, index}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  let animationClass = 'fade-in';
  if (index % 3 == 0){
    animationClass = 'fade-in-up'
  } else if (index % 2 == 0) {
    animationClass = 'fade-in-right'
  }else {
    animationClass = 'fade-in-left'
  }

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