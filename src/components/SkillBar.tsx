import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface SkillBarProps {
  name: string;
  percentage: number;
}

export function SkillBar({ name, percentage }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = barRef.current;
    const fill = fillRef.current;
    if (!el || !fill) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            gsap.to(fill, {
              width: `${percentage}%`,
              duration: 1.0,
              ease: 'power3.out',
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={barRef} className="w-full">
      {/* Label row */}
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[15px] font-medium text-[#F5F5F5]">{name}</span>
        <span className="font-mono-custom text-[13px] text-[#FF2A2A]">
          {percentage}%
        </span>
      </div>
      {/* Bar track */}
      <div className="w-full h-1.5 bg-[#0A0A0A] rounded-full overflow-hidden">
        {/* Bar fill */}
        <div
          ref={fillRef}
          className="h-full rounded-full"
          style={{
            width: '0%',
            background: 'linear-gradient(90deg, #FF2A2A 0%, #0066FF 100%)',
          }}
        />
      </div>
    </div>
  );
}
