import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTop = () => {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsShowing(true);
      } else {
        setIsShowing(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isShowing && (
        <button
          className="fixed bottom-4 right-3 w-10 h-10 bg-linear-to-b from-blue-400 to-indigo-800 rounded-full flex justify-center items-center  cursor-pointer transition-all duration-300 shadow-md z-50 hover:shadow-blue-900 hover:scale-105"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};
