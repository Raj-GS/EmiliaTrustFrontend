import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean; // 👈 new prop
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  immediate = false  // 👈 default false
}) => {
  const [isVisible, setIsVisible] = useState(immediate);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (immediate) return; // 👈 skip observer for immediate sections

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect(); // stop observing after first trigger
        }
      },
      {
        threshold: 0, // trigger as soon as visible
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay, immediate]);

  return (
    <div
      ref={sectionRef}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible 
          ? 'translate-x-0 opacity-100' 
          : '-translate-x-full opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};
