"use client"

import { cn } from "@/lib/util";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./gradient";
import { useState } from "react";
// import Lottie from "react-lottie";
// import MagicButton from "./MagicButton"; // adjust path if needed
// import GridGlobe from "./GridGlobe"; // adjust path if needed
// import defaultOptions from "@/constants/lottieOptions"; // adjust path

type GridItem = {
  id: number;
  title: string;
  description?: string;
  className?: string;
  img?: string;
  spareImg?: string;
  imgClassName?: string;
  titleClassName?: string;
  leftLists?: string[];
  rightLists?: string[];
};


const GridCard = ({ item }: { item: any }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("letsomogwera61@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden group min-h-[200px] rounded-2xl",
        "glassmorphism transition-all duration-500",
        "hover:border-white/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]",
        item.className
      )}
    >
      {/* Background Image Layer */}
      {item.img && (
        <div className="absolute inset-0 z-0">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className={cn(
              "object-cover transition-transform duration-700 group-hover:scale-105 opacity-20",
              item.imgClassName
            )}
          />
        </div>
      )}

      {/* Background Animations */}
      {item.id === 6 && (
        <div className="absolute inset-0 z-0">
          <BackgroundGradientAnimation />
        </div>
      )}

      {/* Content Layer */}
      <div
        className={cn(
          "relative z-10 flex flex-col h-full p-6 lg:p-8",
          item.titleClassName
        )}
      >
        <div className="flex flex-col gap-2">
          {item.description && (
            <p className="text-[10px] uppercase tracking-[3px] font-semibold text-brand-accent/80">
              {item.description}
            </p>
          )}
          <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug">
            {item.title}
          </h3>
        </div>

        {item.stack && (
          <div className="flex flex-wrap gap-2 mt-6">
            {item.stack.map((tech: string, index: number) => (
              <span 
                key={index} 
                className="py-1 px-3 text-[10px] lg:text-xs rounded-full bg-white/[0.05] text-white/70 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/[0.1] hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Copy Email Button */}
        {item.id === 6 && (
          <div className="mt-auto pt-6">
            <button 
              onClick={handleCopy}
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#8b5cf6_50%,#3b82f6_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all hover:bg-slate-900">
                {copied ? "Email Copied!" : "Get in Touch"}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridCard;
