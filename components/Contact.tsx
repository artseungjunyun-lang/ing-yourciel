
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Fix for iconify-icon property error by augmenting the react module
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': any;
    }
  }
}

const Contact: React.FC = () => {
  const containerRef = useIntersectionObserver();

  return (
    <section id="contact" ref={containerRef} className="py-64 px-6 bg-white scroll-mt-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="fade-in text-4xl md:text-6xl font-bold leading-tight mb-20 tracking-tighter text-gray-900 font-serif">
          당신의 가장 푸른 파리를<br />
          <span className="font-black text-[#82C1F5] italic">영원히 간직하세요.</span>
        </h2>
        
        <div className="fade-in flex flex-col md:flex-row items-center justify-center gap-8">
          <a href="#" className="shiny-cta px-16 py-7 rounded-full text-[12px] font-black tracking-[0.35em] uppercase flex items-center gap-4 hover:scale-105 transition-all">
            <iconify-icon icon="ri:kakao-talk-line" width="22" height="22"></iconify-icon>
            <span>카카오톡 채널 문의</span>
          </a>
          
          <a href="#" className="px-16 py-7 rounded-full text-[12px] font-black tracking-[0.35em] uppercase border-2 border-gray-100 text-gray-500 hover:text-[#82C1F5] hover:border-[#82C1F5] transition-all flex items-center gap-4 bg-white hover:bg-blue-50/30">
            <iconify-icon icon="solar:instagram-linear" width="22" height="22"></iconify-icon>
            <span>인스타그램 DM</span>
          </a>
        </div>

        <p className="fade-in mt-20 text-[11px] text-gray-500 tracking-[0.5em] uppercase font-black">
          Your Ciel – 당신의 하늘
        </p>
      </div>
    </section>
  );
};

export default Contact;
