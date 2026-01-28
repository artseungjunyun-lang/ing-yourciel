
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': any;
    }
  }
}

const locationPackages = [
  {
    title: "에펠뷰 A",
    subtitle: "트로카데로 광장 + 센느강변",
    rating: "Classic",
    image: "https://images.unsplash.com/photo-1431274172761-fca41d93e114?w=800&q=80",
    desc: "가장 정석적인 에펠탑의 웅장함을 담아내는 코스"
  },
  {
    title: "에펠뷰 B",
    subtitle: "에펠뷰 골목 + 비하캠 다리",
    rating: "Signature",
    image: "https://images.unsplash.com/photo-1543347064-816be89ddffc?w=800&q=80",
    desc: "인셉션 다리와 파리 특유의 건축미가 돋보이는 코스"
  },
  {
    title: "에펠뷰 C",
    subtitle: "에펠뷰 꽃집 + 파리 골목",
    rating: "Mood",
    image: "https://images.unsplash.com/photo-1512410757271-9f2d125950d2?w=800&q=80",
    desc: "골목 구석구석 스며든 파리지앵의 감성을 담은 코스"
  },
  {
    title: "튈르리 공원",
    subtitle: "튈르리 정원 + 루브르 외관",
    rating: "Nature",
    image: "https://images.unsplash.com/photo-1550130638-3467f9603f0d?w=800&q=80",
    desc: "푸르른 정원과 박물관의 고전미를 동시에 즐기는 코스"
  },
  {
    title: "루브르",
    subtitle: "유리 피라미드 / 루브르 건물",
    rating: "Art",
    image: "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?w=800&q=80",
    desc: "기하학적 피라미드와 웅장한 궁전 배경의 우아한 기록"
  },
  {
    title: "장소 협의",
    subtitle: "고객 맞춤 커스텀 코스",
    rating: "Custom",
    image: "https://images.unsplash.com/photo-1454386608169-1c3b4edc1df8?w=800&q=80",
    desc: "당신만의 특별한 파리 장소를 상담을 통해 결정합니다"
  }
];

const nightPackages = [
  {
    title: "시티 라이트",
    subtitle: "비하캠 다리 + 센느 강변",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    desc: "화려하게 빛나는 정각의 화이트 에펠과 로맨틱한 밤"
  },
  {
    title: "루브르 나이트",
    subtitle: "피라미드 야경",
    image: "https://images.unsplash.com/photo-1440613905118-99b921706b5c?w=800&q=80",
    desc: "조명이 켜진 피라미드의 황홀하고 신비로운 분위기"
  }
];

const Packages: React.FC = () => {
  const containerRef = useIntersectionObserver();

  return (
    <section id="packages" ref={containerRef} className="py-48 px-6 bg-[#fcfcfc] scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="fade-in text-[11px] font-black text-[#82C1F5] uppercase tracking-[0.6em] mb-6">Our Packages</h2>
            <h3 className="fade-in text-4xl md:text-5xl font-serif text-gray-900 leading-tight font-bold">
              30분 촬영 코스 · 장소 1곳<br />
              <span className="text-[#82C1F5] italic font-semibold text-3xl md:text-4xl">@yourciel_paris Signature</span>
            </h3>
          </div>
          <div className="fade-in bg-white p-8 rounded-[2.5rem] border border-gray-100 min-w-[340px] shadow-xl shadow-blue-900/5">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-5 font-black">Included Services</p>
            <ul className="text-[13px] text-gray-800 space-y-4 font-bold">
              <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" width="18" className="text-[#82C1F5]"></iconify-icon> 고해상도 원본 JPG 150컷</li>
              <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" width="18" className="text-[#82C1F5]"></iconify-icon> 시그니처 색감 보정 15장</li>
              <li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-linear" width="18" className="text-[#82C1F5]"></iconify-icon> 프라이빗 온라인 갤러리</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-40">
          {locationPackages.map((pkg, idx) => (
            <div key={idx} className="fade-in group cursor-pointer">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[3/4] mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700 border border-gray-100 bg-white">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] text-[#82C1F5] font-black border border-blue-50 shadow-sm uppercase tracking-widest">{pkg.rating}</div>
              </div>
              <h4 className="text-2xl font-serif mb-2 text-gray-900 font-bold">{pkg.title}</h4>
              <p className="text-[11px] text-[#82C1F5] tracking-[0.2em] uppercase mb-4 font-black">{pkg.subtitle}</p>
              <p className="text-sm text-gray-500 font-medium leading-relaxed">{pkg.desc}</p>
            </div>
          ))}
        </div>

        <div className="fade-in bg-white rounded-[4rem] p-12 md:p-24 border border-gray-50 shadow-2xl shadow-blue-900/5">
          <div className="text-center mb-16">
            <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.6em] mb-4">Golden Hour & Twilight</h3>
            <h4 className="text-4xl font-serif text-gray-900 font-bold mb-4 italic">선셋 · 야간 촬영</h4>
            <div className="inline-block px-6 py-2 bg-blue-50 text-[#82C1F5] text-[10px] font-black rounded-full tracking-widest uppercase">
              Limited Availability
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {nightPackages.map((pkg, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row gap-8 items-center bg-[#fcfcfc] p-8 rounded-[3rem] border border-gray-50 hover:border-blue-100 transition-all duration-500">
                <div className="w-full md:w-48 h-48 shrink-0 overflow-hidden rounded-[2rem] shadow-sm">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="text-center md:text-left">
                  <h5 className="text-2xl font-serif font-bold text-gray-900 mb-2">{pkg.title}</h5>
                  <p className="text-[11px] text-[#82C1F5] tracking-widest uppercase font-black mb-3">{pkg.subtitle}</p>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">{pkg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
