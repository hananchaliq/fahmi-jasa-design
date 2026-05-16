import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { getLenis } from "@/hooks/useLenis";

const NAV_LINKS = [
   { label: "Home", target: "hero" },
   { label: "Work", target: "portfolio" },
   { label: "About", target: "about" },
   { label: "Contact", target: "contact" },
];

export function Navigation() {
   const [scrolled, setScrolled] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);

   const activeSection = useActiveSection();

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 40);
      };

      window.addEventListener("scroll", handleScroll, {
         passive: true,
      });

      return () =>
         window.removeEventListener(
            "scroll",
            handleScroll
         );
   }, []);

   const scrollTo = (target: string) => {
      setMenuOpen(false);

      const lenis = getLenis();

      if (lenis) {
         lenis.scrollTo(`#${target}`, {
            offset: -72,
         });
      }
   };

   return (
      <>
         {/* NAVBAR */}
         <nav
            className={`
               fixed top-0 left-0 right-0 z-[100]
               h-[72px]
               flex items-center justify-between
               px-6 md:px-12
               transition-all duration-500
               ${
                  scrolled
                     ? "bg-[rgba(5,5,5,0.72)] backdrop-blur-2xl border-b border-[#141414]"
                     : "bg-transparent"
               }
            `}
         >
            {/* BRAND */}
            <button
               onClick={() => scrollTo("hero")}
               className="group relative cursor-pointer"
            >
               <div className="flex flex-col items-start leading-none">
                  
                  <span className="font-space text-[20px] md:text-[22px] font-black uppercase tracking-[0.18em] text-white transition-colors duration-300">
                     ARIFUL
                  </span>

                  <span className="font-space text-[20px] md:text-[22px] font-black uppercase tracking-[0.18em] text-transparent transition-all duration-300"
                     style={{
                        WebkitTextStroke:
                           "1px #4b4b4b",
                     }}
                  >
                     FAHMI
                  </span>
               </div>

               {/* UNDERLINE */}
               <div className="absolute -bottom-2 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
            </button>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
               
               {NAV_LINKS.map((link) => {
                  const isActive =
                     activeSection === link.target;

                  return (
                     <button
                        key={link.target}
                        onClick={() =>
                           scrollTo(link.target)
                        }
                        className={`
                           relative text-[11px]
                           uppercase tracking-[0.22em]
                           transition-all duration-300
                           cursor-pointer
                           ${
                              isActive
                                 ? "text-white"
                                 : "text-[#6f6f6f] hover:text-[#d7d7d7]"
                           }
                        `}
                     >
                        {link.label}

                        {/* ACTIVE LINE */}
                        <span
                           className={`
                              absolute -bottom-2 left-0
                              h-[1px]
                              transition-all duration-300
                              ${
                                 isActive
                                    ? "w-full bg-white"
                                    : "w-0 bg-[#666666] group-hover:w-full"
                              }
                           `}
                        />
                     </button>
                  );
               })}
            </div>

            {/* MOBILE BUTTON */}
            <button
               className="md:hidden text-white cursor-pointer"
               onClick={() => setMenuOpen(true)}
               aria-label="Open menu"
            >
               <Menu
                  size={24}
                  strokeWidth={1.8}
               />
            </button>
         </nav>

         {/* MOBILE MENU */}
         {menuOpen && (
            <div className="fixed inset-0 z-[200] bg-[#050505] flex flex-col md:hidden">

               {/* TOP BAR */}
               <div className="flex items-center justify-between px-6 h-[72px] border-b border-[#141414]">
                  
                  <span className="font-space text-lg font-bold tracking-[0.18em] text-white uppercase">
                     MENU
                  </span>

                  <button
                     className="text-white cursor-pointer"
                     onClick={() =>
                        setMenuOpen(false)
                     }
                     aria-label="Close menu"
                  >
                     <X
                        size={24}
                        strokeWidth={1.8}
                     />
                  </button>
               </div>

               {/* MENU CONTENT */}
               <div className="flex-1 flex flex-col justify-center px-6 pb-20">
                  
                  <div className="flex flex-col gap-8">
                     
                     {NAV_LINKS.map((link, index) => {
                        const isActive =
                           activeSection ===
                           link.target;

                        return (
                           <button
                              key={link.target}
                              onClick={() =>
                                 scrollTo(
                                    link.target
                                 )
                              }
                              className="group flex items-center justify-between border-b border-[#141414] pb-5 text-left"
                           >
                              <div className="flex items-center gap-4">
                                 
                                 <span className="font-mono text-[11px] text-[#404040]">
                                    0{index + 1}
                                 </span>

                                 <span
                                    className={`
                                       font-space text-[32px]
                                       uppercase font-black
                                       tracking-tight
                                       transition-all duration-300
                                       ${
                                          isActive
                                             ? "text-white"
                                             : "text-[#787878] group-hover:text-white"
                                       }
                                    `}
                                 >
                                    {link.label}
                                 </span>
                              </div>

                              <span className="text-[#3a3a3a] text-xl transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                                 +
                              </span>
                           </button>
                        );
                     })}
                  </div>
               </div>

               {/* FOOTER */}
               <div className="border-t border-[#141414] px-6 py-5 flex items-center justify-between">
                  
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4a4a4a]">
                     Apparel Designer
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#303030]">
                     Indonesia
                  </span>
               </div>
            </div>
         )}
      </>
   );
}