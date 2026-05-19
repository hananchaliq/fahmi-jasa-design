import { ScrollReveal } from "@/components/ScrollReveal";
import { ProjectCard } from "@/components/ProjectCard";

const PROJECTS = [
   {
      image: "/images/js-pplg-one.png",
      name: "PPLG ONE",
      category: "JERSEY FUTSAL",
      description: "Jersey futuristik dengan gradasi ungu dan merah muda yang memberikan kesan modern dan elegan.",
   },
   {
      image: "/images/js-batu-hijau.png",
      name: "BATU HIJAU",
      category: "JERSEY SEPAKBOLA",
      description: "Jersey bernuansa kuning dan biru gelap yang mencerminkan semangat serta energi kompetitif.",
   },
   {
      image: "/images/js-watu-meta.png",
      name: "WATU META",
      category: "JERSEY SEPAKBOLA",
      description: "Jersey sepak bola bergaya klasik dengan motif garis vertikal yang tampil sportif dan berkarakter.",
   },
   {
      image: "/images/js-xii-ips2.png",
      name: "XII IPS 2",
      category: "JERSEY SEPAKBOLA",
      description: "Jersey kelas sepak abu-abu putih dengan desain tegas yang memberikan kesan kuat dan profesional.",
   },
   {
      image: "/images/polo-best-mom.png",
      name: "BEST MOM",
      category: "POLO SHIRT STREETWEAR",
      description: "Kaos polo minimalis dengan tampilan sederhana yang terlihat rapi dan modern.",
   },
   {
      image: "/images/js-pplg-one-v2.png",
      name: "PPLG ONE V2",
      category: "JERSEY FUTSAL",
      description: "Jersey futsal lengan panjang dengan desain gradasi yang tampil modern dan nyaman digunakan pria maupun wanita.",
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