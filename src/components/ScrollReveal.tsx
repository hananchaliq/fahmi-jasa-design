import { useRef, useEffect, type ReactNode } from 'react';
import { gsap } from 'gsap';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'y' | 'x';
  distance?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  className?: string;
  threshold?: number;
}

export function ScrollReveal({
  children,
  direction = 'y',
  distance = 30,
  duration = 0.6,
  delay = 0,
  stagger = 0,
  className = '',
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      [direction]: distance,
    };

    const toVars: gsap.TweenVars = {
      opacity: 1,
      [direction]: 0,
      duration,
      delay,
      ease: 'power2.out',
      stagger: stagger > 0 ? stagger : undefined,
    };

    gsap.set(el.children.length > 1 && stagger > 0 ? el.children : el, fromVars);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            gsap.to(
              el.children.length > 1 && stagger > 0 ? el.children : el,
              toVars
            );
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [direction, distance, duration, delay, stagger, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
