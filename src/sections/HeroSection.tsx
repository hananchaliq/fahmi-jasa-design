import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { CTAButton } from "@/components/CTAButton";
import { getLenis } from "@/hooks/useLenis";

export function HeroSection() {
   const sectionRef = useRef<HTMLElement>(null);
   const eyebrowRef = useRef<HTMLSpanElement>(null);
   const headline1Ref = useRef<HTMLDivElement>(null);
   const headline2Ref = useRef<HTMLDivElement>(null);
   const taglineRef = useRef<HTMLParagraphElement>(null);
   const ctaRef = useRef<HTMLDivElement>(null);
   const benefitsRef = useRef<HTMLDivElement>(null);
   const mockupRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animasi Label Atas
      tl.fromTo(eyebrowRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.5 }, 0.2);

      // Animasi Baris Judul 1
      if (headline1Ref.current) {
         const words1 = headline1Ref.current.querySelectorAll(".word");
         tl.fromTo(words1, { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.9 }, 0.3);
      }

      // Animasi Baris Judul 2
      if (headline2Ref.current) {
         const words2 = headline2Ref.current.querySelectorAll(".word");
         tl.fromTo(words2, { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.9 }, 0.45);
      }

      // Animasi Deskripsi / Tagline
      tl.fromTo(taglineRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 0.8);

      // Animasi Tombol Aksi
      if (ctaRef.current) {
         tl.fromTo(ctaRef.current.children, { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out" }, 1.0);
      }

      // Animasi Fitur Layanan
      if (benefitsRef.current) {
         tl.fromTo(benefitsRef.current.children, { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out" }, 1.2);
      }

      // Animasi Mockup 3D
      tl.fromTo(mockupRef.current, { x: 60, opacity: 0, rotateY: -20 }, { x: 0, opacity: 1, rotateY: -10, duration: 1.2, ease: "power3.out" }, 0.5);

      // Efek Melayang Berulang pada Mockup
      gsap.to(mockupRef.current, {
         y: -12,
         duration: 2.5,
         ease: "sine.inOut",
         yoyo: true,
         repeat: -1,
      });

      return () => {
         tl.kill();
      };
   }, []);

   const scrollTo = (target: string) => {
      const lenis = getLenis();
      if (lenis) {
         lenis.scrollTo(`#${target}`, { offset: -72 });
      }
   };

   return (
      <section id="hero" ref={sectionRef} className="relative min-h-[100dvh] w-full bg-[#0A0A0A] flex items-center overflow-hidden">
         {/* Efek Cahaya Putih di Background */}
         <div
            className="absolute inset-0 pointer-events-none"
            style={{
               background: "radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.05) 0%, transparent 65%)",
            }}
         />

         {/* Pola Grid Garis Tipis Monochrome */}
         <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
               backgroundImage: "linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)",
               backgroundSize: "40px 40px",
            }}
         />

         <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 py-24 pt-32">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
               {/* Kolom Kiri: Teks & Penawaran */}
               <div className="flex-1 md:max-w-[55%]">
                  {/* Label Atas */}
                  <span ref={eyebrowRef} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#FFFFFF] bg-[#FFFFFF]/10 px-3 py-1.5 rounded-full mb-6 opacity-0 border border-[#FFFFFF]/20">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF] animate-pulse"></span>
                     Layanan Desain Jersey & Kaos
                  </span>

                  <h1 className="hidden">Ariful Fahmi Jasa Desain Jersey Esports, Futsal, dan Apparel di Ende, Penggajawa, Nangapanda, Flores</h1>

                  {/* Judul Utama */}
                  <div ref={headline1Ref} className="font-space text-[clamp(42px,6.5vw,84px)] font-black leading-[0.9] tracking-[-0.04em] text-[#F5F5F5]">
                     <span className="word inline-block opacity-0">SAYA</span> <span className="word inline-block opacity-0">DESAIN</span>
                  </div>
                  <div ref={headline2Ref} className="font-space text-[clamp(42px,6.5vw,84px)] font-black leading-[0.9] tracking-[-0.04em] mt-1">
                     <span className="word inline-block opacity-0 text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #A3A3A3 50%, #404040 100%)" }}>
                        JERSEY
                     </span>{" "}
                     <span className="word inline-block text-[#F5F5F5] opacity-0">TERBAIKMU.</span>
                  </div>

                  {/* Deskripsi Singkat */}
                  <p ref={taglineRef} className="text-base text-[#999999] max-w-[460px] mt-6 leading-relaxed opacity-0 font-light">
                     Bosan dengan desain baju yang itu-itu saja? Kami bantu buatkan visual mockup kaos & jersey custom berstandar apparel profesional. Siap cetak, detail tajam, dan dijamin beda dari yang lain.
                  </p>

                  {/* Tombol Aksi */}
                  <div ref={ctaRef} className="flex flex-wrap gap-4 mt-8">
                     <CTAButton onClick={() => window.open("https://wa.me/6281999310962", "_blank")}>PESAN DESAIN SEKARANG</CTAButton>

                     <CTAButton variant="secondary" onClick={() => scrollTo("portfolio")}>
                        LIHAT CONTOH DESAIN
                     </CTAButton>
                  </div>

                  {/* Keunggulan Layanan */}
                  <div ref={benefitsRef} className="grid grid-cols-3 gap-4 mt-14 pt-8 border-t border-[#222222]">
                     <div className="opacity-0">
                        <div className="text-xs font-bold text-[#FFFFFF] tracking-wider uppercase font-space">Siap Cetak</div>
                        <div className="text-[11px] text-[#666666] mt-1">Format CDR/AI/PSD mentah siap naik mesin vendor.</div>
                     </div>
                     <div className="opacity-0">
                        <div className="text-xs font-bold text-[#FFFFFF] tracking-wider uppercase font-space">Mockup 3D</div>
                        <div className="text-[11px] text-[#666666] mt-1">Preview visual realistis sebelum masuk produksi.</div>
                     </div>
                     <div className="opacity-0">
                        <div className="text-xs font-bold text-[#FFFFFF] tracking-wider uppercase font-space">Proses Cepat</div>
                        <div className="text-[11px] text-[#666666] mt-1">Revisi fleksibel demi hasil akhir yang maksimal.</div>
                     </div>
                  </div>
               </div>

               {/* Kolom Kanan: Tampilan Mockup */}
               <div className="flex-1 md:max-w-[45%] flex items-center justify-center perspective-[1200px]">
                  <div
                     ref={mockupRef}
                     className="relative w-[85%] md:w-full max-w-[400px] opacity-0"
                     style={{
                        transformStyle: "preserve-3d",
                        transform: "rotateY(-10deg)",
                        filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.9)) drop-shadow(0 0 30px rgba(255,255,255,0.06))",
                     }}>
                     {/* Label Badge */}
                     <div className="absolute -top-4 -left-4 z-20 bg-[#FFFFFF] text-[#0A0A0A] font-space text-[10px] font-black uppercase tracking-widest px-3 py-1 rotate-[-6deg] shadow-lg">CONTOH DESAIN</div>

                     {/* Gambar Mockup Utama */}
                     <img src="/images/monochrom-mockup.png" alt="Presentasi Desain Jersey Premium" className="w-full h-auto rounded-xl border border-[#222222] bg-gradient-to-b from-[#111] to-[#050505]" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
