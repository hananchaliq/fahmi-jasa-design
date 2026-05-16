import { type ReactNode } from "react";

interface CTAButtonProps {
   children: ReactNode;
   variant?: "primary" | "secondary";
   href?: string;
   onClick?: () => void;
   className?: string;
   fullWidth?: boolean;
}

export function CTAButton({ children, variant = "primary", href, onClick, className = "", fullWidth = false }: CTAButtonProps) {
   const baseClasses = `
    inline-flex items-center justify-center
    px-8 py-3.5 rounded-full
    text-xs font-semibold uppercase tracking-[0.1em]
    transition-all duration-300 ease-out
    cursor-pointer select-none
    font-space
    ${fullWidth ? "w-full" : ""}
  `;

   const variantClasses =
      variant === "primary"
         ? `
        bg-[#FFFFFF]
        text-[#0A0A0A] font-bold
        shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
        hover:scale-[1.03] active:scale-[0.98]
      `
         : `
        bg-transparent
        border border-[rgba(255,255,255,0.08)]
        text-[#888888]
        hover:border-[#FFFFFF] hover:text-[#F5F5F5]
        hover:scale-[1.03] active:scale-[0.98]
      `;

   const allClasses = `${baseClasses} ${variantClasses} ${className}`;

   if (href) {
      return (
         <a href={href} className={allClasses} onClick={onClick}>
            {children}
         </a>
      );
   }

   return (
      <button className={allClasses} onClick={onClick}>
         {children}
      </button>
   );
}