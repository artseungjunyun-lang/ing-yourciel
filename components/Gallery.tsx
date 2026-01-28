
import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface InstagramPost {
  id: string;
  url: string;
  caption: string;
  date: string;
  likes: string;
}

const mockPosts: InstagramPost[] = [
  { 
    id: "1", 
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&q=90", 
    caption: "파리의 아침은 유난히 맑고 투명합니다. 에펠탑을 배경으로 가장 빛나는 순간을 기록해 드려요. 🕊️ #파리스냅 #yourciel #에펠탑스냅", 
    date: "2024.03.15",
    likes: "1.2k"
  },
  { 
    id: "2", 
    url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1000&q=90", 
    caption: "파리의 골목골목에는 우리만 아는 이야기가 숨어있죠. 따스한 햇살 아래 걷는 뒷모습까지 놓치지 않을게요. 🇫🇷", 
    date: "2024.03.12",
    likes: "854"
  },
  { 
    id: "3", 
    url: "https://images.unsplash.com/photo-1511739001486-6bfe10ce7859?w=1000&q=90", 
    caption: "가장 클래식한 장소에서 가장 트렌디한 감성을 담아내는 법. 트로카데로 광장에서의 기록. ✨", 
    date: "2024.03.10",
    likes: "2.1k"
  },
  { 
    id: "4", 
    url: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=1000&q=90", 
    caption: "초록빛 튈르리 정원에서의 휴식 같은 촬영. 자연스러운 웃음이 가장 아름다워요. 🌿", 
    date: "2024.03.08",
    likes: "932"
  },
  { 
    id: "5", 
    url: "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?w=1000&q=90", 
    caption: "노을 지는 세느강변, 윤슬과 함께 반짝이는 당신. 시간마저 멈춘 듯한 순간입니다. 🌅", 
    date: "2024.03.05",
    likes: "1.5k"
  },
  { 
    id: "6", 
    url: "https://images.unsplash.com/photo-1550340499-a6c6088e6679?w=1000&q=90", 
    caption: "루브르의 웅장함 속에서도 당신이 가장 돋보일 수 있도록. YOURCIEL만의 시그니처 구도입니다. 🏛️", 
    date: "2024.03.01",
    likes: "1.8k"
  },
  { 
    id: "7", 
    url: "https://images.unsplash.com/photo-1454386608169-1c3b4edc1df8?w=1000&q=90", 
    caption: "오늘의 파리는 맑음. 당신의 마음도 맑음. ☁️ #yourciel_paris #스냅촬영", 
    date: "2024.02.28",
    likes: "743"
  },
  { 
    id: "8", 
    url: "https://images.unsplash.com/photo-1512410757271-9f2d125950d2?w=1000&q=90", 
    caption: "파리지앵처럼 걷기. 평범한 일상이 영화가 되는 순간을 선물합니다. 📽️", 
    date: "2024.02.25",
    likes: "1.1k"
  },
  { 
    id: "9", 
    url: "https://images.unsplash.com/photo-1543347064-816be89ddffc?w=1000&q=90", 
    caption: "비하캠 다리의 철제 구조물 사이로 비치는 파리의 햇살. 완벽한 오후입니다. ☀️", 
    date: "2024.02.20",
    likes: "2.4k"
  }
];

const Gallery: React.FC = () => {
  const containerRef = useIntersectionObserver();
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  const closeModal = () => setSelectedPost(null);

  return (
    <section id="gallery" ref={containerRef} className="py-48 px-6 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="fade-in text-[11px] font-black text-gray-400 uppercase tracking-[0.6em] mb-4">
            Official Feed
          </h2>
          <p className="fade-in text-sm text-[#82C1F5] font-black tracking-widest uppercase mb-8">
            @yourciel_paris
          </p>
          <h3 className="fade-in text-3xl md:text-4xl font-serif font-bold text-gray-900">
            실시간 파리 감성 아카이브
          </h3>
        </div>

        {/* Instagram Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
          {mockPosts.map((post) => (
            <div 
              key={post.id} 
              className="scale-up group relative aspect-square overflow-hidden cursor-pointer rounded-lg md:rounded-2xl border border-gray-50 bg-gray-100"
              onClick={() => setSelectedPost(post)}
            >
              <img 
                src={post.url} 
                alt={post.caption} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center gap-6 text-white font-bold text-sm">
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:heart-bold" width="20"></iconify-icon>
                    {post.likes}
                  </div>
                  <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:chat-round-dots-bold" width="20"></iconify-icon>
                    {Math.floor(Math.random() * 50) + 10}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center">
          <a 
            href="https://www.instagram.com/yourciel_paris/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-6 group"
          >
            <div className="w-20 h-20 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#82C1F5] group-hover:border-[#82C1F5] transition-all duration-500 shadow-sm">
              <iconify-icon icon="solar:instagram-linear" width="32" className="text-[#82C1F5] group-hover:text-white transition-colors"></iconify-icon>
            </div>
            <span className="text-[11px] font-black tracking-[0.4em] uppercase text-gray-400 group-hover:text-[#82C1F5] transition-colors">
              Follow @yourciel_paris
            </span>
          </a>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-[fadeIn_0.3s_ease-out]"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-white/80 backdrop-blur-xl"></div>
          
          <div 
            className="relative bg-white w-full max-w-5xl h-fit md:h-[600px] rounded-[2rem] md:rounded-[3rem] shadow-[0_50px_100px_rgba(130,193,245,0.15)] overflow-hidden flex flex-col md:flex-row border border-blue-50/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Area */}
            <div className="w-full md:w-[60%] h-[300px] md:h-full bg-gray-50 overflow-hidden">
              <img 
                src={selectedPost.url} 
                alt="Selected" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content Area */}
            <div className="w-full md:w-[40%] h-full flex flex-col p-8 md:p-12">
              <div className="flex items-center gap-4 mb-10 pb-8 border-b border-gray-50">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                   <span className="font-yaro text-[10px] text-[#82C1F5]">YC</span>
                </div>
                <div>
                   <h4 className="font-yaro text-sm tracking-widest text-[#82C1F5] uppercase">YOURCIEL</h4>
                   <p className="text-[9px] text-gray-400 tracking-wider uppercase font-black">Paris, France</p>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto pr-4 mb-8 custom-scrollbar">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium whitespace-pre-wrap">
                  {selectedPost.caption}
                </p>
              </div>

              <div className="mt-auto">
                 <div className="flex items-center justify-between text-gray-400 text-[10px] font-black tracking-widest uppercase mb-8">
                    <span className="flex items-center gap-2">
                      <iconify-icon icon="solar:heart-linear" width="16" className="text-[#82C1F5]"></iconify-icon>
                      {selectedPost.likes} Likes
                    </span>
                    <span>{selectedPost.date}</span>
                 </div>
                 <button 
                  onClick={closeModal}
                  className="w-full py-5 rounded-full bg-gray-50 text-gray-400 text-[10px] font-black tracking-[0.4em] uppercase hover:bg-[#82C1F5] hover:text-white transition-all duration-500 shadow-sm"
                 >
                   Close Gallery
                 </button>
              </div>
            </div>
          </div>
          
          <button 
            onClick={closeModal}
            className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all shadow-lg"
          >
            <iconify-icon icon="solar:close-circle-linear" width="24" className="text-gray-900"></iconify-icon>
          </button>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f9fafb;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
