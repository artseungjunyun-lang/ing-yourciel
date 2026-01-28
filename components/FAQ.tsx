import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Fix for iconify-icon property error by augmenting the react module
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': any;
    }
  }
}

const faqData = [
  { 
    q: "촬영 당일 비가 오면 어떻게 되나요?", 
    a: "우천 시 일정 변경 1회 또는 100% 환불이 가능합니다. 다만, 파리 특성상 일기예보가 자주 바뀌므로 당일 현장 상황을 기준으로 판단합니다." 
  },
  { 
    q: "항공 결항 시 환불이 가능한가요?", 
    a: "국가 차원의 입국 제한이나 항공기 결항 시 100% 환불해 드립니다. 결항 증빙 서류 제출 시 일정 조율도 가능합니다." 
  },
  { 
    q: "RAW 파일도 받을 수 있나요?", 
    a: "보정 작업 전용 원본인 RAW 파일은 제공되지 않으며, JPG 파일로 제공됩니다. (약 150컷)" 
  },
  { 
    q: "초상권 공개를 원치 않아요.", 
    a: "SNS 초상권 미동의를 선택하실 수 있습니다. 다만 이 경우 별도의 추가금이 발생하며, 후기 이벤트 참여가 제한될 수 있습니다." 
  }
];

const notices = [
  { label: "2026 공지", text: "전 연령 촬영 가능 (미성년자는 보호자 동반 필수)" },
  { label: "유료 옵션", text: "아이폰 사진·영상 촬영 추가 옵션 선택 가능" },
  { label: "파일 보관", text: "제공 후 1개월 뒤 파일 삭제 (재업로드 불가)" },
  { label: "이벤트", text: "후기 작성 시 색감 보정 5장 또는 인체 보정 2장 추가" }
];

const FAQ: React.FC = () => {
  const containerRef = useIntersectionObserver();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section ref={containerRef} className="py-48 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* FAQ Column */}
          <div>
            <h2 className="fade-in text-[11px] font-black text-[#82C1F5] uppercase tracking-[0.6em] mb-12">FAQ</h2>
            <div className="space-y-6">
              {faqData.map((item, idx) => (
                <div key={idx} className="fade-in bg-white border-2 border-gray-50 rounded-3xl overflow-hidden shadow-sm hover:border-blue-100 transition-all">
                  <button 
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="w-full p-8 flex items-center justify-between text-left hover:bg-blue-50/20 transition-colors"
                  >
                    <span className="text-base font-bold text-gray-900 pr-8">{item.q}</span>
                    <iconify-icon 
                      icon="solar:alt-arrow-down-linear" 
                      width="20" 
                      className={`text-[#82C1F5] transition-transform duration-500 ${openIdx === idx ? 'rotate-180' : ''}`}
                    ></iconify-icon>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-8 pb-8 text-sm text-gray-600 font-semibold leading-loose border-t border-gray-50 pt-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notices Column */}
          <div className="bg-blue-50/20 p-12 rounded-[3.5rem] border-2 border-blue-50 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="fade-in text-[11px] font-black text-[#82C1F5] uppercase tracking-[0.6em] mb-12">Notices</h2>
              <div className="space-y-12">
                {notices.map((notice, idx) => (
                  <div key={idx} className="fade-in flex items-start gap-6">
                    <span className="shrink-0 text-[10px] font-black uppercase tracking-widest text-white bg-[#82C1F5] px-4 py-1.5 rounded-full mt-1 shadow-sm">
                      {notice.label}
                    </span>
                    <p className="text-[15px] text-gray-800 font-bold leading-relaxed">{notice.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="fade-in mt-16 pt-10 border-t-2 border-gray-100">
              <p className="text-xs text-gray-500 font-serif italic mb-3 font-bold">Review Event</p>
              <p className="text-base text-gray-900 font-black leading-relaxed">
                정성스러운 후기를 남겨주시는 분들께<br />
                <span className="text-[#82C1F5]">색감 보정 5장</span> 또는 <span className="text-[#82C1F5]">자연스러운 인체 보정 2장</span>을 선물합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;