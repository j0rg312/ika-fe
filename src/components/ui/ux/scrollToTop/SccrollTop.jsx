import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

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
