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

const styles = [
  { icon: "solar:walking-linear", title: "자연스러운 찰나", desc: "과한 포즈보다는 여행 중 만나는 가장 자연스러운 순간을 기록합니다." },
  { icon: "solar:palette-linear", title: "핀터레스트 감성", desc: "Your Ciel만의 감각적인 색감으로 한 편의 화보처럼 연출합니다." },
  { icon: "solar:chat-round-dots-linear", title: "편안한 소통", desc: "부담 없는 가이드와 소통으로 카메라 앞이 어색해도 괜찮습니다." },
  { icon: "solar:map-point-wave-linear", title: "현지 전문성", desc: "파리 & 유럽 현지 촬영 경험을 바탕으로 최적의 장소를 제안합니다." }
];

const StyleSection: React.FC = () => {
  const containerRef = useIntersectionObserver();

  return (
    <section ref={containerRef} className="py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="fade-in text-[11px] tracking-[0.6em] text-[#82C1F5] uppercase mb-4 font-black">Our Style</h2>
          <h3 className="fade-in text-4xl font-serif text-gray-900 font-bold">당신에게 집중하는 기록</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {styles.map((style, idx) => (
            <div key={idx} className="fade-in group text-center p-10 bg-white rounded-[2rem] border-2 border-gray-50 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-700">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#82C1F5] transition-colors duration-500">
                <iconify-icon icon={style.icon} width="28" height="28" className="text-[#82C1F5] group-hover:text-white transition-colors"></iconify-icon>
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">{style.title}</h4>
              <p className="text-sm text-gray-600 font-medium leading-loose">{style.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleSection;