
import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      ...options
    });

    const elements = containerRef.current?.querySelectorAll('.fade-in, .scale-up');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, [options]);

  return containerRef;
};
