
import React, { useState, useRef } from 'react';

// Fix for iconify-icon property error by augmenting the react module
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': any;
    }
  }
}

const AudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play().catch(console.error);
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        loop 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
      />
      <button 
        onClick={toggle}
        className="fixed bottom-10 left-10 z-50 w-12 h-12 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center group hover:scale-110 transition-all duration-500"
        aria-label="Toggle background music"
      >
        <div className={`absolute inset-0 rounded-full border border-blue-100 ${isPlaying ? 'animate-ping' : 'hidden'}`}></div>
        <iconify-icon 
          icon={isPlaying ? "solar:music-note-4-bold" : "solar:music-note-4-linear"} 
          width="18" 
          height="18" 
          className={`${isPlaying ? 'text-blue-400' : 'text-gray-400'} group-hover:text-black transition-colors`}
        ></iconify-icon>
      </button>
    </>
  );
};

export default AudioToggle;
