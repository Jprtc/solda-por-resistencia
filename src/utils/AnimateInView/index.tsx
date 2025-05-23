import React, { useEffect, useRef } from "react";

interface AnimateInViewProps {
  children: React.ReactNode;
  animationClass:
    | "animate-fade-in-left"
    | "animate-fade-in-right"
    | "animate-fade-in-bottom"
    | "animate-fade-in-normal";
}

const AnimateInView = ({ children, animationClass }: AnimateInViewProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  // const observerConfig = {
  //   threshold: 0.1,
  //   rootMargin: "80px 0px",
  // };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        } else {
          entry.target.classList.remove(animationClass);
        }
      });
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [animationClass]);

  return (
    <div className="hidden-animation" ref={elementRef}>
      {children}
    </div>
  );
};

export default AnimateInView;
