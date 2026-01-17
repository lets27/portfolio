"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  // Animation refs (DO NOT use state)
  const curX = useRef(0);
  const curY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);

  // Safari detection (derived, not state)
  const isSafari =
    typeof window !== "undefined" &&
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  /* -----------------------------
     CSS Variable Setup (1-time)
  ------------------------------ */
  useEffect(() => {
    const root = document.body.style;

    root.setProperty("--gradient-background-start", gradientBackgroundStart);
    root.setProperty("--gradient-background-end", gradientBackgroundEnd);
    root.setProperty("--first-color", firstColor);
    root.setProperty("--second-color", secondColor);
    root.setProperty("--third-color", thirdColor);
    root.setProperty("--fourth-color", fourthColor);
    root.setProperty("--fifth-color", fifthColor);
    root.setProperty("--pointer-color", pointerColor);
    root.setProperty("--size", size);
    root.setProperty("--blending-value", blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  /* -----------------------------
     Animation Loop (RAF)
  ------------------------------ */
  useEffect(() => {
    if (!interactive) return;

    let rafId: number;

    const animate = () => {
      if (!interactiveRef.current) return;

      curX.current += (targetX.current - curX.current) / 20;
      curY.current += (targetY.current - curY.current) / 20;

      interactiveRef.current.style.transform = `translate(
        ${Math.round(curX.current)}px,
        ${Math.round(curY.current)}px
      )`;

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [interactive]);

  /* -----------------------------
     Mouse Interaction
  ------------------------------ */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;

    const rect = interactiveRef.current.getBoundingClientRect();
    targetX.current = e.clientX - rect.left;
    targetY.current = e.clientY - rect.top;
  };

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      {/* SVG filter */}
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            <feColorMatrix
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
            />
          </filter>
        </defs>
      </svg>

      {/* Content */}
      <div className={cn("relative z-10", className)}>{children}</div>

      {/* Gradient blobs */}
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <GradientBlob className="animate-first" />
        <GradientBlob className="animate-second" second />
        <GradientBlob className="animate-third" third />
        <GradientBlob className="animate-fourth" fourth opacity="0.7" />
        <GradientBlob className="animate-fifth" fifth />

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className="
              absolute -top-1/2 -left-1/2 w-full h-full
              [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),0.8)_0,_rgba(var(--pointer-color),0)_50%)]
              [mix-blend-mode:var(--blending-value)]
              opacity-70
            "
          />
        )}
      </div>
    </div>
  );
};

/* -----------------------------
   Helper Component
------------------------------ */

const GradientBlob = ({
  className,
  second,
  third,
  fourth,
  fifth,
  opacity = "1",
}: {
  className: string;
  second?: boolean;
  third?: boolean;
  fourth?: boolean;
  fifth?: boolean;
  opacity?: string;
}) => {
  const colorVar = second
    ? "--second-color"
    : third
    ? "--third-color"
    : fourth
    ? "--fourth-color"
    : fifth
    ? "--fifth-color"
    : "--first-color";

  return (
    <div
      className={cn(
        "absolute w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
        "[background:radial-gradient(circle_at_center,_rgba(var(" +
          colorVar +
          "),0.8)_0,_rgba(var(" +
          colorVar +
          "),0)_50%)]",
        "[mix-blend-mode:var(--blending-value)]",
        "[transform-origin:center]",
        className
      )}
      style={{ opacity }}
    />
  );
};
