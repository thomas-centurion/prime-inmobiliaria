import { useEffect, useRef } from "react";

const useScrollReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.07,
        rootMargin: "0px 0px -24px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useScrollReveal;