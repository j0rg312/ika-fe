import { useEffect, useRef, useState } from 'react';
import './MainTitle.css';

const MainTitle = ({ 
  text, 
  className = '', 
  variant = 'primary', 
  size = 'large', 
  animated = true,
  subtitle = '',
  centered = true,
  showDecorator = false
}) => {
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getVariantClass = () => {
    switch (variant) {
      case 'gradient':
        return 'main-title--gradient';
      case 'accent':
        return 'main-title--accent';
      default:
        return 'main-title--primary';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'main-title--small';
      case 'medium':
        return 'main-title--medium';
      case 'xl':
        return 'main-title--xl';
      default:
        return 'main-title--large';
    }
  };

  return (
    <div className={`title-container ${centered ? 'title-container--centered' : ''} ${isVisible ? 'title-container--visible' : ''}`}>
      {showDecorator && (
        <div className="title-decorator">
          <div className="decorator-line decorator-line--left"></div>
          <div className="decorator-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="decorator-line decorator-line--right"></div>
        </div>
      )}
      
      <h1 
        ref={titleRef} 
        className={`
          main-title 
          ${getVariantClass()} 
          ${getSizeClass()} 
          ${animated ? 'main-title--animated' : ''} 
          ${className}
        `}
      >
        {text}
      </h1>
      
      {subtitle && (
        <p className="main-subtitle">
          {subtitle}
        </p>
      )}
      
      <div className="title-underline">
        <div className="underline-progress"></div>
      </div>
    </div>
  );
};

export default MainTitle;