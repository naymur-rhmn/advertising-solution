import { useEffect, useRef, useState } from "react";

function ImageBanner() {
  const [visible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver API
    const observer = new IntersectionObserver(
      // callback function
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      // option
      { threshold: 0 } // Trigger when the section is visible
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="h-[135vh] w-full bg-white top-0 left-0 relative z-40"
      ref={sectionRef}
    >
      <div
        className={`fixed-banner-bg ${visible ? "visible" : "invisible"}`}
      ></div>
    </section>
  );
}

export default ImageBanner;
