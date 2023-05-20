import React, { useEffect, useRef } from "react";

interface IntersectObserverProps {
  id: string;
  children: React.ReactNode;
  animationToPlay: string;
}

const IntersectObserver = ({
  id,
  children,
  animationToPlay = "animate-fade-in-normal",
}: IntersectObserverProps) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const div = divRef.current;

    if (!div) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            div.classList.add(animationToPlay);
          }
        });
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    observer.observe(div);
    console.log("triggered");

    return () => {
      observer.unobserve(div);
    };
  }, [id]);

  return (
    <div ref={divRef} id={id}>
      {children}
    </div>
  );
};

export default IntersectObserver;
