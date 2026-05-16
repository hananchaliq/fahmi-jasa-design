import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Instagram, MessageCircle } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";

gsap.registerPlugin(ScrollTrigger);

const CONTACT_METHODS = [
   {
      icon: Mail,
      label: "Email Studio",
      value: "arifulfahmi50@gmail.com",
      href: "mailto:arifulfahmi50@gmail.com?subject=Konsultasi%20Desain&body=Halo%20Ariful,%20saya%20ingin%20bertanya%20tentang%20jasa%20desain.",
   },
   {
      icon: Instagram,
      label: "Instagram",
      value: "@faahmii_22",
      href: "https://instagram.com/faahmii_22",
   },
   {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+62 8XX XXXX XXXX",
      href: "https://wa.me/628XXXXXXXXXX",
   },
];

export function ContactSection() {
   const containerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const ctx = gsap.context(() => {
         const contactReveals = containerRef.current?.querySelectorAll(".contact-reveal");

         if (contactReveals && contactReveals.length > 0) {
            gsap.fromTo(
               contactReveals,
               {
                  opacity: 0,
                  y: 40,
               },
               {
                  opacity: 1,
                  y: 0,
                  stagger: 0.08,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                     trigger: containerRef.current,
                     start: "top 75%",
                     toggleActions: "play none none none",
                  },
               }
            );
         }
      }, containerRef);

      return () => ctx.revert();
   }, []);

   return (
      <section id="contact" ref={containerRef} className="relative w-full overflow-hidden bg-[#050505] border-t border-[#111111] py-28 md:py-44 text-[#8f8f8f]">
         {/* CENTER LINE */}
         <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-full max-w-[1200px] -translate-x-1/2 border-x border-[#111111]/40" />

         {/* SOFT NOISE */}
         <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')]" />

         <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-12">
            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
               {/* LEFT CONTENT */}
               <div className="lg:col-span-7 space-y-10">
                  <div className="space-y-5">
                     <span className="contact-reveal opacity-0 text-[11px] font-medium tracking-[0.35em] text-[#d7d7d7] uppercase block">kONTAK DESAINER</span>

                     <h2 className="contact-reveal opacity-0 font-space text-[clamp(42px,6vw,88px)] leading-[0.92] uppercase font-black tracking-tight text-white">
                        Butuh Visual <br />
                        <span
                           className="text-transparent"
                           style={{
                              WebkitTextStroke: "1px #494949",
                           }}>
                           Jersey Modern?
                        </span>
                     </h2>
                  </div>

                  <div className="contact-reveal opacity-0 max-w-[560px] space-y-6 text-sm md:text-base leading-relaxed">
                     <p className="text-[#979797]">Saya membantu membuat desain jersey olahraga dan kaos streetwear dengan pendekatan visual yang modern, tajam, dan siap masuk proses produksi konveksi.</p>

                     <p className="text-[#5f5f5f]">Mulai dari kebutuhan tim futsal, esports, komunitas, clothing, hingga brand lokal. Seluruh desain disusun menggunakan format vektor presisi tinggi agar hasil cetak tetap detail di berbagai material kain.</p>
                  </div>

                  {/* SERVICES */}
                  <div className="contact-reveal opacity-0 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#141414]">
                     {["Jersey Esports", "Kaos Streetwear", "Mockup Realistis", "File Siap Cetak"].map(item => (
                        <div key={item} className="border border-[#151515] bg-[#080808] px-4 py-4 transition-all duration-300 hover:border-[#2a2a2a]">
                           <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#3d3d3d] mb-2">// Service</p>

                           <p className="text-sm text-[#d4d4d4] leading-snug">{item}</p>
                        </div>
                     ))}
                  </div>

                  {/* BUTTON */}
                  <div className="contact-reveal opacity-0 pt-4">
                     <CTAButton href="mailto:arifulfahmi.design@email.com">Konsultasi Desain</CTAButton>
                  </div>
               </div>

               {/* RIGHT CONTENT */}
               <div className="lg:col-span-5 w-full lg:pt-10">
                  <div className="relative border border-[#141414] bg-[#080808] overflow-hidden">
                     {/* HEADER */}
                     <div className="flex items-center justify-between border-b border-[#141414] px-5 py-4">
                        <span className="font-space text-[11px] uppercase tracking-[0.3em] text-[#5a5a5a]">Hubungi Saya</span>

                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2f2f2f]">Available</span>
                     </div>

                     {/* CONTACT ITEMS */}
                     <div className="divide-y divide-[#141414]">
                        {CONTACT_METHODS.map(method => {
                           const Icon = method.icon;

                           return (
                              <a key={method.label} href={method.href} target="_blank" rel="noopener noreferrer" className="contact-reveal opacity-0 group flex items-center justify-between px-5 py-6 transition-all duration-300 hover:bg-[#0d0d0d]">
                                 <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center border border-[#1d1d1d] bg-[#0b0b0b] text-[#626262] transition-all duration-300 group-hover:border-[#3a3a3a] group-hover:text-white">
                                       <Icon size={18} strokeWidth={1.5} />
                                    </div>

                                    <div className="space-y-1">
                                       <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#494949]">{method.label}</p>

                                       <p className="text-sm font-medium text-[#f2f2f2] transition-transform duration-300 group-hover:translate-x-1">{method.value}</p>
                                    </div>
                                 </div>

                                 <span className="font-space text-lg text-[#323232] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">+</span>
                              </a>
                           );
                        })}
                     </div>
                  </div>
                  <section className="py-20 border-t border-[#111]">
                     <div className="max-w-[1200px] mx-auto px-6 md:px-12">
                        <h2 className="text-xl font-bold text-white mb-6">Jasa Desain Jersey di Ende</h2>

                        <p className="text-[#7a7a7a] leading-relaxed max-w-[700px]">Melayani kebutuhan desain jersey esports, futsal, voli, komunitas, sekolah, hingga apparel streetwear untuk wilayah Ende, Penggajawa, Nangapanda, dan sekitarnya.</p>
                     </div>
                  </section>
               </div>
            </div>

            {/* FOOTER */}
            <div className="contact-reveal opacity-0 mt-28 flex flex-col gap-4 border-t border-[#111111] pt-6 sm:flex-row sm:items-center sm:justify-between">
               <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#474747]">Focused on Apparel & Streetwear Visual</p>

               <p className="font-mono text-[11px] text-[#333333]">© {new Date().getFullYear()} ARIFUL FAHMI — ALL RIGHTS RESERVED</p>
            </div>
         </div>
      </section>
   );
}
