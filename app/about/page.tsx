"use client"
import Image from "next/image";
import { HiOutlineAcademicCap, HiOutlineCode, HiOutlineGlobeAlt } from "react-icons/hi";

const AboutPage = () => {
  return (
    <div className="py-20 w-full bg-black-100 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Image src="/grid.svg" alt="grid" fill className="object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="uppercase tracking-[10px] text-xs text-blue-100 mb-4">
            Discovery
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About <span className="text-purple">Me</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: The Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 rounded-3xl border border-white/10 bg-black-200/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <HiOutlineCode className="text-purple" /> My Journey
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                I am <span className="text-white font-medium">Mogwera Letso Mogwera</span>, 
                a Full-Stack Developer based in Gaborone, Botswana. 
                My approach to code is defined by my background in 
                <span className="text-purple"> Computer Systems Engineering</span>.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                I don&apos;t just build websites; I engineer digital systems. Having 
                graduated with Second Class Honours from the University of Sunderland, 
                I bridge the gap between low-level system efficiency and high-level 
                user experience.
              </p>
            </div>

            {/* Academic Achievement Card */}
            <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <HiOutlineAcademicCap className="text-emerald-500" /> Academic Foundation
              </h3>
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div>
                  <h4 className="text-white font-bold text-lg">BSc (Hons) Computer Systems Engineering</h4>
                  <p className="text-zinc-500 text-sm">University of Sunderland </p>
                  <p className="text-zinc-500 text-sm italic">via Botswana Accountancy College </p>
                </div>
                <div className="text-right">
                  <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest">
                    Class of 2024 
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Stats & Location */}
          <div className="lg:col-span-5 space-y-8">
            {/* Location Card */}
          

            {/* Engineering Values */}
            <div className="p-8 rounded-3xl border border-white/10 bg-black-200/50">
              <h3 className="text-sm font-black text-zinc-500 uppercase tracking-[4px] mb-6">Values</h3>
              <ul className="space-y-4">
                {['System Scalability', 'Performance Optimization', 'Clean Architecture', 'Client Collaboration'].map((val) => (
                  <li key={val} className="flex items-center gap-3 text-white text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple" />
                    {val}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-3xl border border-white/10 bg-black-200/50">
              <h3 className="text-sm font-black text-zinc-500 uppercase tracking-[4px] mb-6">SOCIAL VALUES</h3>
              <ul className="space-y-4">
                {['Respect', 'Teamwork', 'Accountability', ' continuous learning'].map((val) => (
                  <li key={val} className="flex items-center gap-3 text-white text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple" />
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;