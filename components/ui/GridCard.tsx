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
        "relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 group min-h-[160px]",
        // Aceternity Hover Effects: Lift and Glow
        "hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)]",
        // Background logic
        "bg-gradient-to-r from-[#04071D] to-[#0C0E23]",
        item.className
      )}
    >
      {/* 1. Background Image Layer */}
      {item.img && (
        <div className="absolute inset-0 z-0">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className={cn(
              "object-cover transition-transform duration-700 group-hover:scale-110 opacity-50",
              item.imgClassName
            )}
          />
          {/* Subtle Vignette for Readability */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      )}

      {/* 2. Background Animations (for specific IDs) */}
      {(item.id=== 6) && (
        <div className="absolute inset-0 z-0">
          <BackgroundGradientAnimation />
        </div>
      )}

      {/* 3. Spare Image (Usually the grid pattern overlay) */}
      {item.spareImg && (
        <div className="absolute right-0 bottom-0 w-full opacity-30 z-0">
          <Image
            src={item.spareImg}
            alt=""
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      )}

      {/* 4. Content Layer */}
      <div
        className={cn(
          "relative z-10 flex flex-col h-full p-4 lg:p-6",
          item.titleClassName
        )}
      >
 
        <div className="flex flex-col gap-1">
        
          <h3 className="text-sm lg:text-lg font-bold text-green-400 leading-tight">
            {item.title}
          </h3>
            {item.description && (
            <p className="text-[10px] lg:text-xs uppercase tracking-[2px] font-bold text-[#C1C2D3]">
              {item.description}
            </p>
         
          )}
        </div>
    {item.stack && (
          <div className="flex flex-wrap gap-2 mb-3 pt-4">
            {item.stack.map((tech: string, index: number) => (
              <span 
                key={index} 
                className="py-1 px-2 text-[10px] lg:text-xs opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-white border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      


        {/* 6. Copy Email Button (for ID 6) */}
        {item.id === 6 && (
          <div className="mt-5 relative">
            <button 
              onClick={handleCopy}
              className="bg-[#161a31] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 bg-[radial-gradient(75%_100%_at_50%_0%,rgba(52,211,153,0.6)_0%,rgba(52,211,153,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10 ">
                <span>{copied ? "Email Copied!" : "Copy my email"}</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GridCard;
