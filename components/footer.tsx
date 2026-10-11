import Link from 'next/link';
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn, FaLocationArrow } from 'react-icons/fa6';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="w-full font-sans text-white border-t border-white/5 bg-[#020617] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* 1. TOP SECTION: Contact CTA */}
      <div className="w-full py-16 px-5 sm:px-10 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Let&apos;s build something <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400">extraordinary</span> together.</h3>
            <p className="text-white/60 max-w-xl mx-auto text-lg leading-relaxed">
              Available for strategic partnerships, system architecture consultations, and full-stack development.
            </p>
          </div>
          <a 
            href="mailto:letsomogwera61@gmail.com"
            className="group relative inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Get in Touch</span>
            <FaLocationArrow className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-10 transition-opacity" />
          </a>
        </div>
      </div>

      {/* 2. MAIN FOOTER */}
      <div className="w-full pt-16 pb-8 px-5 sm:px-10 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-black tracking-tighter uppercase italic text-white">
                LE<span className="text-blue-500">TSO</span>
              </span>
            </div>
            <p className="text-sm text-white/50 mb-6 leading-relaxed">
              Computer Systems Engineer specializing in scalable architecture and high-performance digital experiences.
            </p>
            <div className="flex gap-4">
               <SocialIcon icon={<FaGithub />} link="https://github.com/lets27" />
               <SocialIcon icon={<FaLinkedinIn />} link="#" />
               <SocialIcon icon={<FaTwitter />} link="#" />
            </div>
          </div>

          <FooterColumn title="Knowledge Base" links={['About', 'Projects', 'Case Studies']} />
          <FooterColumn title="Technical" links={['Stack', 'Optimization', 'Security']} />

          {/* Column 4: Status */}
          <div className="space-y-4">
            <h4 className="text-xs font-black mb-6 uppercase tracking-[3px] text-white/40">Network Status</h4>
            <div className="space-y-4 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="text-xl text-blue-500 shrink-0" />
                <p>Gaborone, Botswana (GMT+2)</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <p className="text-emerald-500 font-mono tracking-wider">SYSTEM_OPERATIONAL</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. SUB-FOOTER */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-[2px] font-bold">
          <div>© {new Date().getFullYear()} LETSO MOGWERA. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terminus</a>
            <a href="#" className="hover:text-white transition-colors">Architecture</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const FooterColumn = ({ title, links }: { title: string, links: string[] }) => (
  <div>
    <h4 className="text-xs font-black mb-6 uppercase tracking-[3px] text-white/40">{title}</h4>
    <ul className="space-y-3">
      {links.map((link) => {
        const href = `/${link.toLowerCase().replace(/\s+/g, '-')}`;
        return (
          <li key={link}>
            <Link 
              href={href} 
              className="text-sm text-white/60 hover:text-blue-500 transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="w-1.5 h-px bg-white/20 transition-all group-hover:w-3 group-hover:bg-blue-500" />
              {link}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

const SocialIcon = ({ icon, link }: { icon: React.ReactNode, link: string }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;