import Link from 'next/link';
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn, FaHashnode } from 'react-icons/fa6';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineTerminal } from 'react-icons/hi';

const Footer = () => {
  return (
    // w-full ensures it spans the entire viewport width
    <footer className="w-full font-sans text-white border-t border-white/5 bg-black">
      
      {/* 1. TOP SECTION: Contact CTA - Full width background */}
      <div className="w-full bg-zinc-900/50 py-12 px-5 sm:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Have a project in mind?</h3>
            <p className="text-zinc-400">I am currently available for freelance work and collaborations.</p>
          </div>
          <p 
            
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2"
          >
            contact me:74496682
          </p>
        </div>
      </div>

      {/* 2. MAIN FOOTER - Full width background */}
      <div className="w-full bg-black pt-16 pb-8 px-5 sm:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-white/10 pb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-2xl font-black tracking-tighter uppercase italic">
                LE<span className="text-zinc-500">TSO</span>
              </span>
            </div>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              Full-stack developer specializing in building exceptional digital experiences.
            </p>
            <div className="flex gap-4">
               <SocialIcon icon={<FaGithub />} link="#" />
               <SocialIcon icon={<FaLinkedinIn />} link="#" />
               <SocialIcon icon={<FaTwitter />} link="#" />
            </div>
          </div>

   
          
          <FooterColumn title="Navigation" links={['about', 'projects']} />

          {/* Column 5: Status */}
          <div className="space-y-4">
            <h4 className="text-sm font-black mb-6 uppercase tracking-[3px] text-zinc-500">Status</h4>
            <div className="space-y-4 text-sm text-zinc-400">
              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="text-xl text-white shrink-0" />
                <p>Gaborone, Botswana</p>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineTerminal className="text-xl text-emerald-500 shrink-0" />
                <p className="text-emerald-500 font-mono">Available for Hire</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. SUB-FOOTER */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 uppercase tracking-[2px] font-bold">
          <div>© {new Date().getFullYear()} Letso. Built with Next.js</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">RSS Feed</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
// Helper Components
const FooterColumn = ({ title, links }: { title: string, links: string[] }) => (
  <div>
    <h4 className="text-sm font-black mb-6 uppercase tracking-[3px] text-zinc-500">{title}</h4>
 <ul className="space-y-2">
        {links.map((link) => {
          // Optional: simple logic to create a URL slug from the string
          // e.g., "About Me" becomes "/about-me"
          const href = `/${link.toLowerCase().replace(/\s+/g, '-')}`;
          
          return (
            <li key={link}>
              <Link 
                href={href} 
                className="text-sm text-zinc-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
              >
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
    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
  >
    {icon}
  </a>
);

export default Footer;