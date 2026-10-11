"use client"
import Image from "next/image";
import { HiOutlineAcademicCap, HiOutlineCode } from "react-icons/hi";

const AboutPage = () => {
  return (
    <div className="py-32 w-full bg-[#020617] relative overflow-hidden min-h-screen">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Image src="/corporate_tech_abstract_bg.png" alt="grid" fill className="object-cover" />
      </div>
      
      {/* Subtle Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        <div className="mb-20 text-center space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-sm mb-4">
            <span className="uppercase tracking-[4px] text-[10px] text-brand-accent font-bold">
              Engineer Profile
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
            The <span className="text-gradient">Architect</span> Behind the Code
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: The Narrative */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-10">
            <div className="p-10 rounded-2xl glassmorphism group">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
                <div className="p-2 rounded-lg bg-brand-primary/10 border border-brand-primary/20">
                  <HiOutlineCode className="text-brand-primary" />
                </div>
                The Engineering Philosophy
              </h3>
              <div className="space-y-6 text-white/60 leading-relaxed text-lg">
                <p>
                  I am <span className="text-white font-bold">Mogwera Letso Mogwera</span>, 
                  a systems-focused Full-Stack Engineer based in Gaborone, Botswana. 
                  My approach to development is rooted in the rigorous principles of 
                  <span className="text-brand-primary font-semibold"> Computer Systems Engineering</span>.
                </p>
                <p>
                  I don&apos;t just build interfaces; I design robust digital ecosystems. My methodology prioritizes 
                  mathematical precision, structural integrity, and deep technical efficiency. By bridging the gap 
                  between bare-metal performance and high-level user abstraction, I create solutions that are 
                  as powerful as they are intuitive.
                </p>
              </div>
            </div>

            {/* Academic Achievement Card */}
            <div className="p-10 rounded-2xl glassmorphism relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl" />
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <HiOutlineAcademicCap className="text-emerald-500" />
                </div>
                Academic Excellence
              </h3>
              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-xl tracking-tight">BSc (Hons) Computer Systems Engineering</h4>
                  <p className="text-white/40 text-base">University of Sunderland • Sunderland, UK</p>
                  <p className="text-white/30 text-sm italic">Delivered via Botswana Accountancy College</p>
                </div>
                <div className="shrink-0 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-xl backdrop-blur-sm">
                  <span className="text-emerald-500 text-sm font-black uppercase tracking-widest">
                    Class of 2024 • Honours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Specs */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-10">
            {/* Engineering Values */}
            <div className="p-10 rounded-2xl glassmorphism border-l-4 border-l-brand-primary">
              <h4 className="text-xs font-black text-white/30 uppercase tracking-[5px] mb-8">Technical Core Values</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
                {[
                  { title: 'System Scalability', desc: 'Predictive modeling for traffic spikes' },
                  { title: 'Performance Optimization', desc: 'Minimizing latency through efficient algorithms' },
                  { title: 'Clean Architecture', desc: 'Decoupled, maintainsble codebases' },
                  { title: 'Enterprise Security', desc: 'Prioritizing data integrity and privacy' }
                ].map((val) => (
                  <li key={val.title} className="group">
                    <div className="flex items-start gap-4">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                      <div>
                        <p className="text-white font-bold text-sm lg:text-base group-hover:text-brand-primary transition-colors">{val.title}</p>
                        <p className="text-white/30 text-xs mt-1">{val.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-2xl glassmorphism border-l-4 border-l-brand-secondary">
              <h4 className="text-xs font-black text-white/30 uppercase tracking-[5px] mb-8">Professional Integrity</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
                {[
                  { title: 'Strategic Collaboration', desc: 'Aligning tech with business objectives' },
                  { title: 'Continuous Research', desc: 'Staying at the forefront of emerging tech' },
                  { title: 'Technical Accountability', desc: 'Ownership of the entire delivery lifecycle' },
                  { title: 'Empathetic UX', desc: 'Engineering with the end-user in mind' }
                ].map((val) => (
                  <li key={val.title} className="group">
                    <div className="flex items-start gap-4">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-secondary shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                      <div>
                        <p className="text-white font-bold text-sm lg:text-base group-hover:text-brand-secondary transition-colors">{val.title}</p>
                        <p className="text-white/30 text-xs mt-1">{val.desc}</p>
                      </div>
                    </div>
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