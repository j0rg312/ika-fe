"use client";
import { useInView } from 'react-intersection-observer';

const ScrollableSection = ({ children, index, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  let animationClass = 'opacity-100 translate-y-0 translate-x-0';
  let hiddenClass = 'opacity-0 ';
  
  if (index % 3 === 0) {
    hiddenClass += 'translate-y-12';
  } else if (index % 2 === 0) {
    hiddenClass += 'translate-x-12';
  } else {
    hiddenClass += '-translate-x-12';
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${inView ? animationClass : hiddenClass} ${className}`}
    >
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export default ScrollableSection;