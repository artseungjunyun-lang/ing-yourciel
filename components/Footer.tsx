
import React from 'react';

// Fix for iconify-icon property error by augmenting the react module
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': any;
    }
  }
}

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t-2 border-gray-50 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start mb-8">
               <span className="font-yaro text-2xl tracking-[0.1em] text-[#82C1F5] mb-2 animate-logo-wiggle uppercase">
                 YOURCIEL
               </span>
               <span className="text-[10px] text-gray-400 opacity-100 tracking-[0.5em] uppercase font-black">paris snap studio</span>
            </div>
            <p className="text-[11px] text-gray-500 tracking-widest uppercase italic font-bold">© 2024 YOURCIEL. Capturing Timeless Moments In Paris.</p>
            <p className="text-[10px] text-[#82C1F5] font-black uppercase mt-2 tracking-[0.2em]">Official Portfolio: @yourciel_paris</p>
          </div>

          <div className="flex items-center gap-14">
            <a href="https://www.instagram.com/yourciel_paris/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-gray-50 flex items-center justify-center group-hover:bg-[#82C1F5] group-hover:border-[#82C1F5] transition-all duration-500 shadow-sm">
                <iconify-icon icon="solar:instagram-linear" width="22" height="22" className="text-gray-400 group-hover:text-white transition-colors"></iconify-icon>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 group-hover:text-[#82C1F5] transition-colors font-black">Insta</span>
            </a>
            <a href="#" className="group flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-gray-50 flex items-center justify-center group-hover:bg-[#82C1F5] group-hover:border-[#82C1F5] transition-all duration-500 shadow-sm">
                <iconify-icon icon="ri:kakao-talk-line" width="22" height="22" className="text-gray-400 group-hover:text-white transition-colors"></iconify-icon>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 group-hover:text-[#82C1F5] transition-colors font-black">Kakao</span>
            </a>
            <a href="#" className="group flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-gray-50 flex items-center justify-center group-hover:bg-[#82C1F5] group-hover:border-[#82C1F5] transition-all duration-500 shadow-sm">
                <iconify-icon icon="solar:letter-linear" width="22" height="22" className="text-gray-400 group-hover:text-white transition-colors"></iconify-icon>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 group-hover:text-[#82C1F5] transition-colors font-black">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
