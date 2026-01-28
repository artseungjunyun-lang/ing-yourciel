
import React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': any;
    }
  }
}

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#f7f7f7] cloud-container">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=1920&q=95" 
          alt="Ethereal Sky" 
          className="w-full h-full object-cover transition-transform duration-[60s] ease-linear scale-125 animate-[pulse_40s_infinite_alternate] brightness-[1.02] saturate-[1.1]"
        />
        
        {/* Subtle Mist Layers */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/5 backdrop-blur-[0.5px]"></div>
        <div className="absolute -top-1/4 -left-1/4 w-[100%] h-[100%] cloud-mist opacity-70 blur-[100px]"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[100%] h-[100%] cloud-mist opacity-60 blur-[100px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#f7f7f7]/90"></div>
      </div>

      {/* Foreground Floating White Clouds */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-[110%] opacity-30 filter blur-[80px] animate-[drift_30s_infinite_alternate]">
           <img src="https://images.unsplash.com/photo-1534088568595-a066f77c3dec?w=1200&q=80" className="w-full brightness-[1.8]" alt="" />
        </div>
        <div className="absolute -right-1/4 bottom-0 w-[110%] opacity-25 filter blur-[80px] animate-[drift_35s_infinite_alternate-reverse]">
           <img src="https://images.unsplash.com/photo-1534088568595-a066f77c3dec?w=1200&q=80" className="w-full brightness-[1.8]" alt="" />
        </div>
      </div>

      <div className="relative z-30 text-center px-6">
        <div className="overflow-hidden mb-4">
          <p className="text-[11px] tracking-[1.8em] text-gray-400 uppercase animate-[fadeInDown_2.5s_ease-out] font-black">
            Floating in Your Ciel
          </p>
        </div>
        
        <div className="flex flex-col items-center mb-10 animate-[fadeInUp_2s_ease-out]">
           <div className="animate-logo-wiggle flex flex-col items-center">
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-yaro text-[#82C1F5] tracking-[0.1em] drop-shadow-[0_10px_20px_white] uppercase">
               YOURCIEL
             </h1>
             <p className="text-[11px] md:text-[13px] tracking-[1.2em] text-gray-500 uppercase font-black mt-3">
               Paris
             </p>
           </div>
        </div>

        <div className="animate-[fadeIn_5s_ease-in_2.5s_forwards] opacity-0 translate-y-10">
            <h2 className="text-xl md:text-2xl font-medium text-gray-800 tracking-wide mb-12 font-serif italic drop-shadow-[0_0_20px_white]">
              모든 것이 조화롭게 빛나는 당신만의 하늘
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <a href="#contact" className="shiny-cta px-16 py-6 rounded-full text-[11px] font-black tracking-[0.5em] uppercase hover:scale-105 transition-all duration-700 shadow-xl">
                    비행 시작하기
                </a>
                <a href="#gallery" className="px-16 py-6 rounded-full text-[11px] font-bold tracking-[0.5em] uppercase border-2 border-gray-200 bg-white/50 backdrop-blur-3xl hover:bg-white/80 transition-all shadow-lg text-gray-700">
                    갤러리 유영
                </a>
            </div>
        </div>
      </div>
      
      {/* Scroll Guide */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-40">
        <div className="w-[2px] h-20 bg-gradient-to-b from-blue-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
