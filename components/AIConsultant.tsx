
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': any;
    }
  }
}

const AIConsultant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `파리의 맑고 하얀 무드가 잘 나오는 스냅을 제안해줘. 요청: ${query}`,
        config: {
          systemInstruction: "당신은 파리의 'YOURCIEL' 수석 디렉터입니다. 화이트톤의 투명한 감성을 제안하세요. 우아하고 부드러운 한국어로 답변하세요.",
          temperature: 0.7,
        }
      });
      setResponse(result.text || "빛을 읽는 중 오류가 발생했습니다.");
    } catch (error) {
      setResponse("서비스 연결에 문제가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-64 px-6 bg-[#f7f7f7] flex flex-col items-center relative overflow-hidden">
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] cloud-mist opacity-50"></div>
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] cloud-mist opacity-50"></div>

      <div className="max-w-5xl w-full p-16 md:p-32 rounded-[5rem] bg-white/60 backdrop-blur-[50px] border border-white/50 relative overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.03)]">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white rounded-full blur-[120px] pointer-events-none opacity-50"></div>
        
        <div className="relative z-10 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-16 shadow-lg shadow-blue-100 animate-logo-wiggle">
            <iconify-icon icon="solar:cloud-snowfall-linear" width="32" height="32" className="text-[#82C1F5]"></iconify-icon>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif mb-10 text-gray-800 lowercase tracking-tighter">Sky Oracle</h2>
          <p className="text-gray-500 font-light mb-24 text-lg leading-relaxed max-w-xl mx-auto font-serif italic">
            눈부신 빛과 깊이 있는 파리를 만나는 방법,<br />
            당신의 취향을 담은 하늘의 목소리를 제안합니다.
          </p>

          <div className="flex flex-col gap-10 max-w-2xl mx-auto">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="당신이 꿈꾸는 파리의 무드를 적어주세요"
              className="w-full bg-white/70 border border-gray-200 rounded-full py-10 px-16 text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-100/20 transition-all text-lg shadow-sm"
            />
            <button 
              onClick={handleConsult}
              disabled={loading}
              className="shiny-cta w-full py-10 rounded-full text-[10px] tracking-[0.6em] uppercase font-bold disabled:opacity-50 hover:scale-[1.01] transition-all bg-white"
            >
              {loading ? 'Consulting Sky...' : 'Get Personalized Inspiration'}
            </button>
          </div>

          {response && (
            <div className="mt-24 p-16 bg-white/95 border border-blue-50 rounded-[4rem] text-left animate-[fadeInUp_1.2s_ease-out] shadow-2xl shadow-blue-100/10 backdrop-blur-2xl">
              <p className="text-gray-600 font-light leading-[2.2] text-lg font-serif">
                {response}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
