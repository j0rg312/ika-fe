import { useEffect, useRef } from 'react';
import './TypingTitle.css';

const TypingTitle = ({ text, className = '' }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      const length = text.length;
      titleRef.current.style.setProperty('--text-length', length);
      const animationDUration = Math.max(length * 0.1 + 0.7, 2);
      titleRef.current.style.setProperty('--typing-duration', `${animationDUration}s`);
    }
  }, [text]);

  return (
    <div className="text-container">
      <h1 ref={titleRef} className={`typing-title ${className}`}>
      {text}
    </h1>
    </div>
   
  );
};

export default TypingTitle;
