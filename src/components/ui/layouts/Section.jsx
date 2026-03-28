"use client";

const Section = ({ children, className = "", innerClassName = "", id }) => {
  return (
    <section 
      id={id} 
      className={`relative flex justify-center w-full py-16 lg:py-24 overflow-hidden ${className}`}
    >
      <div className={`relative flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;