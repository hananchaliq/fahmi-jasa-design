import { ScrollReveal } from "@/components/ScrollReveal";
import { ProjectCard } from "@/components/ProjectCard";

const PROJECTS = [
   {
      image: "/images/project-1-striker.png",
      name: "STRIKER FC",
      category: "JERSEY FUTSAL",
      description: "Geometri merah-hitam yang agresif untuk klub futsal yang haus kemenangan.",
   },
   {
      image: "/images/project-2-bluewave.png",
      name: "BLUE WAVE FC",
      category: "JERSEY SEPAKBOLA",
      description: "Gradasi modern yang bersih — tampilan profesional untuk tim sepakbola yang sedang berkembang.",
   },
   {
      image: "/images/project-3-noise.png",
      name: "NOISE",
      category: "KAOS STREETWEAR",
      description: "Desain berbasis tipografi yang berani. Keras, mentah, khas kultur jalanan.",
   },
   {
      image: "/images/project-4-voltage.png",
      name: "VOLTAGE",
      category: "JERSEY BASKET",
      description: "Energi elektrik di setiap jahitan. Gradasi ungu-hijau untuk dampak visual maksimal.",
   },
   {
      image: "/images/project-5-cyber.png",
      name: "CYBER LEAGUE",
      category: "JERSEY ESPORTS",
      description: "Estetika cyberpunk futuristik yang dirancang khusus untuk tim gaming profesional.",
   },
   {
      image: "/images/project-6-void.png",
      name: "VOID",
      category: "HOODIE STREETWEAR",
      description: "Minimalis hitam-di-atas-hitam dengan tekstur halus. Kesederhanaan yang berkelas.",
   },
];

export function PortfolioSection() {
   return (
      <section id="portfolio" className="w-full bg-[#0A0A0A] py-32 md:py-40 border-t border-[#111111]">
         <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            {/* Kepala Bagian / Section Header */}
            <ScrollReveal className="text-center mb-16">
               <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FFFFFF]">KATALOG KARYA PILIHAN</span>
               <h2 className="font-space text-[clamp(32px,4vw,56px)] font-black text-[#F5F5F5] tracking-[-0.03em] mt-2">DIDESAIN UNTUK PEMENANG</h2>
               <p className="text-base text-[#888888] max-w-[540px] mx-auto mt-4 font-light leading-relaxed">Kumpulan desain jersey, kaos, dan identitas visual apparel premium. Setiap karya dirancang khusus untuk membangun karakter tim yang kuat.</p>
            </ScrollReveal>

            {/* Grid Proyek */}
            <ScrollReveal stagger={0.12} distance={50} duration={0.7} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {PROJECTS.map(project => (
                  <ProjectCard key={project.name} {...project} />
               ))}
            </ScrollReveal>
         </div>
      </section>
   );
}