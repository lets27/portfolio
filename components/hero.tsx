"use client"
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import LightUpBtn from './ui/LightUpBtns';
import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  const line1 = ["Engineering", "Systems", "with"];
  const line2 = ["Precision", "&", "Purpose"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className='relative min-h-[90vh] pt-36 pb-20 overflow-hidden'>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image 
          src="/corporate_tech_abstract_bg.png" 
          alt="background" 
          fill 
          priority
          className="object-cover"
        />
      </div>

      <Spotlight className="-top-40 -left-10 md:left-32 md-top-20 h-screen" fill="rgba(59, 130, 246, 0.5)"/>
      <Spotlight className="top-10 left-10 md:left-full h-[80vh] w-[50vw]" fill="rgba(139, 92, 246, 0.4)"/>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-grid-white/[0.02] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      {/* Main Content */}
      <div className='flex justify-center relative z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[75vw] flex flex-col items-center justify-center text-center'>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-sm mb-8 transition-all hover:bg-white/[0.08]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span className='uppercase tracking-widest text-[10px] md:text-xs text-white/70'>
              Based in Botswana • Open for Collaboration
            </span>
          </div>
          
          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="block text-white mb-2">
              {line1.map((word, i) => (
                <motion.span
                  key={`l1-${i}`}
                  variants={wordVariants}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400">
              {line2.map((word, i) => (
                <motion.span
                  key={`l2-${i}`}
                  variants={wordVariants}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className='max-w-2xl text-center text-white/60 md:tracking-wider mb-10 text-base md:text-xl leading-relaxed'
          >
            Hi! I&apos;m <span className="text-white font-medium">Letso</span>, a Computer Systems Engineer specializing in building scalable, secure, and performant digital solutions for modern enterprises.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <Link href="#projects">
              <LightUpBtn 
                title="View Portfolio" 
                position="right" 
                icon={<FaLocationArrow className="ml-2"/>}
              />
            </Link>
            <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm font-medium border-b border-white/10 hover:border-white/30 pb-1">
              About the Engineer →
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero