
import React from 'react';
import { Screen } from '../types';
import { COLORS } from '../constants';
import { ChevronLeft, MessageCircle, Phone, Star, MoreHorizontal, ShieldCheck } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const OrderStatusScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-[#FFF5E1] relative">
      {/* Map Background with refined mock aesthetics */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[#e8f3ee] overflow-hidden relative">
          {/* Mock Grid Lines */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
             {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="border border-green-900"></div>
              ))}
          </div>
          
          {/* Pulsing route line */}
          <svg className="absolute inset-0 w-full h-full opacity-40">
            <path 
              d="M100,180 C150,220 220,120 280,100" 
              fill="none" 
              stroke="#E67E22" 
              strokeWidth="5" 
              strokeLinecap="round"
              strokeDasharray="1 15"
              className="animate-[dash_5s_linear_infinite]"
            />
          </svg>

          {/* User Marker */}
          <div className="absolute top-[21%] left-[24%]">
            <div className="relative">
               <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75 scale-150"></div>
               <div className="relative w-10 h-10 bg-white rounded-full border-2 border-[#E67E22] shadow-xl flex items-center justify-center p-0.5 z-10">
                  <img src="https://picsum.photos/seed/customer/100/100" className="w-full h-full rounded-full" />
               </div>
            </div>
          </div>
          
          {/* Destination Marker */}
          <div className="absolute top-[11%] left-[72%]">
            <div className="w-8 h-8 bg-[#87BC9E] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
               <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Controls */}
      <div className="relative z-10 px-6 pt-16 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('ORDERS')} 
          className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-white"
        >
          <ChevronLeft className="w-6 h-6 text-gray-400" />
        </button>
        <button 
          className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-white"
        >
          <MoreHorizontal className="w-6 h-6 text-gray-400" />
        </button>
      </div>
      
      {/* Dynamic Info Sheet */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
        <div className="bg-[#FFEDE0] rounded-[48px] p-8 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] border-2 border-white relative">
          {/* Pull handle */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-black/5 rounded-full"></div>

          <div className="text-center space-y-1 mb-8">
            <div className="flex items-center justify-center space-x-2 text-[#87BC9E]">
               <ShieldCheck className="w-4 h-4" />
               <span className="text-[10px] font-bold uppercase tracking-widest">Pedido en camino</span>
            </div>
            <h2 className="text-2xl font-black" style={{ color: COLORS.textDark }}>15 - 20 Minutos</h2>
            <p className="text-xs font-bold text-gray-400">ID del pedido #LA-784234</p>
          </div>
          
          {/* Detail Grid */}
          <div className="grid grid-cols-3 gap-3 mb-8">
             <div className="bg-white/60 rounded-3xl p-3 border border-white flex flex-col items-center text-center">
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-tighter mb-1">Artículos</span>
                <p className="text-xs font-bold">2 Platos</p>
             </div>
             <div className="bg-white/60 rounded-3xl p-3 border border-white flex flex-col items-center text-center">
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-tighter mb-1">Distancia</span>
                <p className="text-xs font-bold">2.4 Km</p>
             </div>
             <div className="bg-white/60 rounded-3xl p-3 border border-white flex flex-col items-center text-center">
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-tighter mb-1">Pago</span>
                <p className="text-xs font-bold">$38.20</p>
             </div>
          </div>
          
          {/* Courier Profile */}
          <div className="flex items-center justify-between bg-white/40 p-4 rounded-[32px] border border-white mb-8">
            <div className="flex items-center space-x-4">
               <div className="relative">
                  <img src="https://picsum.photos/seed/driver/100/100" className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-sm" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#87BC9E] rounded-full border-2 border-white flex items-center justify-center">
                     <Star className="w-2.5 h-2.5 fill-white text-white" />
                  </div>
               </div>
               <div>
                  <h4 className="font-extrabold text-sm" style={{ color: COLORS.textDark }}>David Jameson</h4>
                  <p className="text-[10px] font-bold text-gray-400">Repartidor Profesional</p>
               </div>
            </div>
            <div className="flex space-x-2">
               <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 transition-transform active:scale-90">
                  <MessageCircle className="w-5 h-5 text-[#87BC9E]" />
               </button>
               <button className="w-10 h-10 bg-[#E67E22] rounded-xl flex items-center justify-center shadow-md transition-transform active:scale-90">
                  <Phone className="w-5 h-5 text-white" />
               </button>
            </div>
          </div>
          
          <button 
            onClick={() => onNavigate('HOME')}
            className="w-full py-4 rounded-[24px] text-white font-black text-lg shadow-xl shadow-green-200 transform active:scale-[0.98] transition-all"
            style={{ backgroundColor: COLORS.primaryGreen }}
          >
            He recibido el pedido
          </button>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
      `}</style>
    </div>
  );
};

export default OrderStatusScreen;
