interface ProjectCardProps {
  image: string;
  name: string;
  category: string;
  description: string;
}

export function ProjectCard({ image, name, category, description }: ProjectCardProps) {
  return (
    <div
      className="
        group relative bg-[#0A0A0A] border border-[rgba(255,255,255,0.08)]
        rounded-xl overflow-hidden
        transition-all duration-[350ms] cubic-bezier(0.25,0.1,0.25,1)
        hover:border-[rgba(255,255,255,0.15)] hover:-translate-y-1
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
        aspect-[4/3] md:aspect-[4/3] max-md:aspect-square
      "
    >
      {/* Image area */}
      <div className="relative w-full h-[75%] overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="
            w-full h-full object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-[1.06]
          "
        />
        {/* Bottom gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(transparent 50%, rgba(5,5,5,0.9) 100%)',
          }}
        />
      </div>

      {/* Info area */}
      <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-350 group-hover:-translate-y-1">
        <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#555555]">
          {category}
        </span>
        <h3 className="font-space text-lg font-semibold text-[#F5F5F5] mt-0.5 leading-tight">
          {name}
        </h3>
        <p className="text-sm text-[#888888] mt-1 line-clamp-2 opacity-0 max-md:opacity-100 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}
