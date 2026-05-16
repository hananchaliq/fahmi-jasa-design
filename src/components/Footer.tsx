import { Instagram, Dribbble } from "lucide-react";

function BehanceIcon({
   size = 20,
}: {
   size?: number;
}) {
   return (
      <svg
         width={size}
         height={size}
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <path d="M3 3h6a4 4 0 0 1 4 4 4 4 0 0 1-4 4H3V3z" />
         <path d="M3 11h7a4 4 0 0 1 4 4 4 4 0 0 1-4 4H3v-8z" />
         <path d="M15 4h6" />
         <path d="M15 20a4 4 0 1 1 6-3.47" />
      </svg>
   );
}

export function Footer() {
   return (
      <footer className="relative w-full overflow-hidden bg-[#050505] border-t border-[#111111] pt-24 pb-8 px-6 md:px-12">

         {/* GARIS TENGAH */}
         <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-full w-full max-w-[1200px] border-x border-[#111111]/40" />

         {/* TEXTURE */}
         <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')]" />

         <div className="relative z-10 max-w-[1200px] mx-auto">

            {/* ATAS */}
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">

               {/* BRAND */}
               <div className="space-y-5">

                  <div className="leading-[0.9]">
                     <h2 className="font-space text-[52px] md:text-[78px] font-black uppercase tracking-tight text-white">
                        ARIFUL
                     </h2>

                     <h2
                        className="font-space text-[52px] md:text-[78px] font-black uppercase tracking-tight text-transparent"
                        style={{
                           WebkitTextStroke:
                              "1px #444444",
                        }}
                     >
                        FAHMI
                     </h2>
                  </div>

                  <p className="max-w-[340px] text-sm leading-relaxed text-[#6b6b6b]">
                     Desainer apparel yang berfokus
                     pada desain jersey esports,
                     streetwear, dan visual pakaian
                     modern dengan detail siap
                     produksi.
                  </p>
               </div>

               {/* SOSIAL */}
               <div className="flex flex-col items-start lg:items-end gap-8 w-full lg:w-auto">

                  {/* ICON */}
                  <div className="flex items-center gap-4">

                     {[
                        {
                           icon: (
                              <Instagram
                                 size={18}
                              />
                           ),
                           href: "https://instagram.com",
                           label: "Instagram",
                        },
                        {
                           icon: (
                              <BehanceIcon
                                 size={18}
                              />
                           ),
                           href: "https://behance.net",
                           label: "Behance",
                        },
                        {
                           icon: (
                              <Dribbble
                                 size={18}
                              />
                           ),
                           href: "https://dribbble.com",
                           label: "Dribbble",
                        },
                     ].map((item) => (
                        <a
                           key={item.label}
                           href={item.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           aria-label={item.label}
                           className="group flex h-12 w-12 items-center justify-center border border-[#1a1a1a] bg-[#0a0a0a] text-[#666666] transition-all duration-300 hover:border-[#3a3a3a] hover:text-white hover:-translate-y-1"
                        >
                           {item.icon}
                        </a>
                     ))}
                  </div>

                  {/* STATUS */}
                  <div className="space-y-2 text-left lg:text-right">

                     <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#4a4a4a]">
                        Berbasis Di Indonesia
                     </p>

                     <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#2f2f2f]">
                        Tersedia Untuk Freelance
                     </p>
                  </div>
               </div>
            </div>

            {/* GARIS */}
            <div className="w-full h-px bg-[#111111] my-14" />

            {/* BAWAH */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

               <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#505050]">
                  © {new Date().getFullYear()} ARIFUL
                  FAHMI — SEMUA HAK DILINDUNGI
               </p>

               <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#303030]">
                  Dibuat Untuk Visual Apparel Modern
               </p>
            </div>
         </div>
      </footer>
   );
}