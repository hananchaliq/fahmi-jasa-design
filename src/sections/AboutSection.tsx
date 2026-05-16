import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const interactiveTargetRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // TEXT REVEAL
      const revealItems =
        containerRef.current?.querySelectorAll('.editorial-reveal');

      if (revealItems && revealItems.length > 0) {
        gsap.fromTo(
          revealItems,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // INTERACTIVE 3D TILT
      const handleMouseMove = (e: MouseEvent) => {
        if (!interactiveTargetRef.current || !imageRef.current) return;

        const rect =
          interactiveTargetRef.current.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(interactiveTargetRef.current, {
          rotateX: -y * 0.08,
          rotateY: x * 0.08,
          transformPerspective: 1000,
          duration: 0.5,
          ease: 'power2.out',
        });

        gsap.to(imageRef.current, {
          x: x * 0.04,
          y: y * 0.04,
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      const handleMouseLeave = () => {
        if (!interactiveTargetRef.current || !imageRef.current)
          return;

        gsap.to(
          [interactiveTargetRef.current, imageRef.current],
          {
            rotateX: 0,
            rotateY: 0,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          }
        );
      };

      const target = interactiveTargetRef.current;

      if (target) {
        target.addEventListener(
          'mousemove',
          handleMouseMove
        );

        target.addEventListener(
          'mouseleave',
          handleMouseLeave
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="w-full bg-[#070707] text-[#9a9a9a] py-28 md:py-44 relative overflow-hidden border-t border-[#121212]"
    >
      {/* CENTER LINE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full border-x border-[#121212]/30 pointer-events-none z-0" />

      <div
        ref={containerRef}
        className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 space-y-10">
            
            <div className="space-y-4">
              <span className="editorial-reveal opacity-0 text-[11px] font-medium tracking-[0.3em] text-[#dcdcdc] block uppercase">
                Koleksi & Profil
              </span>

              <h2 className="editorial-reveal opacity-0 font-space text-[clamp(36px,5.5vw,72px)] font-black tracking-tight text-white uppercase leading-[0.95]">
                Ariful Fahmi <br />

                <span
                  className="text-transparent"
                  style={{
                    WebkitTextStroke: '1px #4a4a4a',
                  }}
                >
                  Kreator Apparel
                </span>
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="editorial-reveal opacity-0 space-y-6 text-sm md:text-base leading-relaxed max-w-[500px] text-[#9c9c9c]">
              <p>
                Saya adalah siswa Desain Komunikasi Visual
                (DKV) kelas 11 di MAKN Ende yang
                mendedikasikan fokus pada perancangan
                grafis{' '}
                <span className="text-white font-medium">
                  Jersey Olahraga dan Kaos
                </span>
                .
              </p>

              <p className="text-[#5f5f5f]">
                Setiap karya dibuat dengan
                mempertimbangkan estetika visual dan
                kesiapan produksi. Saya memastikan
                seluruh aset desain diserahkan dalam
                format vektor presisi tinggi agar hasil
                cetak di kain, baik metode sublimasi
                maupun sablon, memiliki ketajaman yang
                sempurna.
              </p>
            </div>

            {/* SPECIFICATIONS */}
            <div className="editorial-reveal opacity-0 grid grid-cols-2 gap-x-8 gap-y-6 pt-10 border-t border-[#1c1c1c] text-[12px] text-[#c2c2c2]">
              
              <div className="space-y-1">
                <p className="text-[#4d4d4d] font-medium tracking-wider uppercase">
                  01 / Spesialisasi
                </p>

                <p>
                  Jersey Olahraga & Kaos Streetwear
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[#4d4d4d] font-medium tracking-wider uppercase">
                  02 / Output File
                </p>

                <p>
                  Vektor Murni Siap Cetak (.AI, .EPS)
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[#4d4d4d] font-medium tracking-wider uppercase">
                  03 / Anatomi
                </p>

                <p>
                  Sesuai Pola Potong Konveksi
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-[#4d4d4d] font-medium tracking-wider uppercase">
                  04 / Presentasi
                </p>

                <p>
                  Mockup Realistis Skala 1:1
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            
            <div
              ref={interactiveTargetRef}
              className="relative w-full max-w-[340px] aspect-[3/4] bg-[#0a0a0a] border border-[#1a1a1a] p-3 shadow-[0_50px_100px_rgba(0,0,0,0.9)] cursor-crosshair group transition-shadow duration-500 hover:shadow-[#D4AF37]/5 will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* LABELS */}
              <div className="absolute -top-3 -left-3 font-mono text-[9px] text-[#222] select-none pointer-events-none group-hover:text-[#444] transition-colors">
                + 0.11_DKV
              </div>

              <div className="absolute -bottom-4 -right-3 font-mono text-[9px] text-[#222] select-none pointer-events-none group-hover:text-[#D4AF37] transition-colors">
                [FRAME_LOCK]
              </div>

              {/* IMAGE */}
              <div className="w-full h-full overflow-hidden relative bg-[#111]">
                <img
                  ref={imageRef}
                  src="/images/profile.png"
                  alt="Ariful Fahmi"
                  className="w-full h-[110%] object-cover grayscale contrast-[1.2] brightness-[0.8] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out scale-105 will-change-transform"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90 pointer-events-none" />
              </div>

              {/* FLOATING INFO */}
              <div
                className="absolute top-6 left-6 bg-black/90 border border-[#222] px-3 py-1.5 font-mono text-[9px] text-white tracking-widest uppercase pointer-events-none select-none transition-transform duration-500 group-hover:translate-z-10"
                style={{ transform: 'translateZ(30px)' }}
              >
                FAHMI // XI_DKV
              </div>

              <div
                className="absolute bottom-6 right-6 font-space text-[40px] font-black text-white/5 tracking-tighter leading-none pointer-events-none select-none transition-transform duration-500 group-hover:translate-z-20 group-hover:text-[#D4AF37]/10"
                style={{ transform: 'translateZ(45px)' }}
              >
                APPAREL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}