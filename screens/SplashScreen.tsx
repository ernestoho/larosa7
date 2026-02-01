
import React, { useEffect } from 'react';
import { BrandLogo, COLORS } from '../constants';

interface Props {
  onComplete: () => void;
}

const SplashScreen: React.FC<Props> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className="flex flex-col items-center justify-center h-full w-full animate-in fade-in duration-700"
      style={{ backgroundColor: COLORS.primaryGreen }}
    >
      <div className="transform scale-125 animate-bounce-slow">
        <div className="bg-white p-8 rounded-[40px] shadow-2xl flex flex-col items-center">
          <BrandLogo size={120} />
          <div className="mt-4 flex flex-col items-center">
             <div className="h-1.5 w-12 bg-[#E67E22] rounded-full mb-1"></div>
             <p className="text-[#4A3728] text-[10px] font-bold uppercase tracking-[0.3em]">Entrega Premium</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-16 flex flex-col items-center space-y-4">
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-150"></div>
        </div>
        <p className="text-white/80 text-xs font-medium tracking-wide">Cargando tu cocina...</p>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) scale(1.25); }
          50% { transform: translateY(-10px) scale(1.25); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
