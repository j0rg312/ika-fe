"use client";
import { useEffect } from "react";
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const mainContent = document.querySelector('.main-content');
      if (mainContent) {
        mainContent.scrollTo(0, 0);
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null; 
};

export default ScrollToTop;
