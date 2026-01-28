
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const containerRef = useIntersectionObserver();

  return (
    <section id="about" ref={containerRef} className="relative py-80 px-6 bg-[#f7f7f7] overflow-hidden scroll-mt-24">
      {/* Smooth transitions */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#f7f7f7] via-[#f7f7f7]/80 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#f7f7f7] via-[#f7f7f7]/80 to-transparent z-10"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[700px] bg-blue-100/20 rounded-full blur-[180px] pointer-events-none"></div>
      
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <div className="fade-in mb-16">
           <span className="text-[11px] tracking-[1em] text-[#82C1F5] uppercase font-black opacity-90">Deep Ciel Immersion</span>
        </div>
        <h2 className="fade-in text-4xl md:text-5xl font-semibold leading-[1.6] text-[#82C1F5] font-serif mb-16">
          당신의 맑은 웃음을 기록합니다.
        </h2>
        <div className="fade-in space-y-10 text-base md:text-xl text-gray-700 font-medium leading-relaxed max-w-3xl mx-auto">
          <p>
            우리는 파리의 아름다움을 찾아냅니다.
          </p>
          <p>
            단순한 기록을 넘어 당신의 이야기를 담기 위해<br /> 
            가장 편안하고 자연스러운 분위기에서 촬영을 시작합니다.
          </p>
          <p className="text-gray-600 font-serif italic text-2xl mt-16 font-bold opacity-90">
            "Your story, captured in the infinite blue."
          </p>
        </div>
        
        <div className="mt-32 flex justify-center fade-in">
          <div className="w-[2px] h-32 bg-gradient-to-b from-blue-200 via-blue-300 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
