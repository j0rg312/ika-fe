"use client";

const MainTitle = ({ 
  text, 
  className = '', 
  centered = true,
  subtitle = ''
}) => {
  return (
    <div className={`flex flex-col mb-12 ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
      <h2 className={`text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4 ${className}`}>
        {text}
      </h2>
      
      <div className={`w-16 h-1.5 bg-primary rounded-full mb-6 ${centered ? 'mx-auto' : ''}`}></div>

      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default MainTitle;