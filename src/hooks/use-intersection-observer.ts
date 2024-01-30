import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = <T extends HTMLElement>(
  options?: IntersectionObserverInit,
) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;

      if (!entry) throw new Error('');

      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(callback, options);
    const target = targetRef.current;

    if (!target) throw new Error('');

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [options]);

  return { targetRef, isVisible };
};
