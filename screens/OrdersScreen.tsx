
import React from 'react';
import { Screen } from '../types';
import { COLORS } from '../constants';
import { Home, Heart, Grid, Percent, ShoppingCart, Check } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const OrdersScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Scrollable Content */}
      <div className="flex-grow overflow-y-auto app-container">
        <div className="px-6 pt-4 pb-4 flex justify-between items-start">
          <h1 className="text-2xl font-bold" style={{ color: COLORS.textDark }}>Tus pedidos</h1>
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-orange-100 flex items-center justify-center border border-white">
            <img src="https://picsum.photos/seed/user/100/100" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Tabs */}
        <div className="px-6 flex space-x-8 mb-8">
          <div className="relative flex flex-col items-center">
            <span className="font-bold text-sm" style={{ color: COLORS.primaryGreen }}>Próximos</span>
            <div className="w-6 h-[2px] mt-1 bg-[#87BC9E]"></div>
          </div>
          <span className="text-sm font-semibold text-gray-400">Historial</span>
          <span className="text-sm font-semibold text-gray-400">Reembolso</span>
        </div>
        
        {/* Active Order Card */}
        <div className="px-6 mb-10">
          <div className="bg-[#FFEDE0] rounded-[32px] p-6 shadow-sm border border-white/50">
            <div className="flex justify-between items-start mb-6">
              <div className="flex -space-x-4">
                <div className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" />
                </div>
                <div className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-right">
                <h4 className="font-bold text-sm">Filete, Sushi</h4>
                <p className="text-xs text-gray-400">#342347</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Tiempo de entrega</p>
                <p className="text-lg font-bold" style={{ color: COLORS.primaryGreen }}>15:38 <span className="text-xs font-normal">min</span></p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Estado</p>
                <p className="text-xs font-bold" style={{ color: COLORS.primaryGreen }}>En camino</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button className="flex-1 py-3 bg-white/60 rounded-xl text-xs font-bold border border-white/50 text-gray-500 active:scale-95 transition-transform">Reembolso</button>
              <button 
                onClick={() => onNavigate('ORDER_STATUS')}
                className="flex-1 py-3 text-white rounded-xl text-xs font-bold shadow-md active:scale-95 transition-transform"
                style={{ backgroundColor: COLORS.primaryGreen }}
              >
                Rastrear pedido
              </button>
            </div>
          </div>
        </div>
        
        {/* Latest Orders Section */}
        <div className="px-6 mb-10">
          <h4 className="font-bold mb-4" style={{ color: COLORS.textDark }}>Últimos pedidos</h4>
          <div className="space-y-4">
            <div className="bg-white rounded-[24px] p-4 flex flex-col space-y-4 shadow-sm border border-white/50">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  <img src="https://picsum.photos/seed/food1/50/50" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://picsum.photos/seed/food2/50/50" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-xs">Papas Mixtas Fritas</h5>
                  <p className="text-[10px] text-gray-400 font-semibold">$38.60 • 2 Platos</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-50">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-green-500" strokeWidth={4} />
                  </div>
                  <span className="text-[10px] font-bold text-green-500">Entregado</span>
                  <span className="text-[10px] text-gray-400 ml-auto">26 Jun, 11:15</span>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="flex-1 py-2 bg-white rounded-xl text-[10px] font-bold border border-gray-100 text-gray-400 active:scale-95 transition-transform">Calificar repartidor</button>
                <button className="flex-1 py-2 text-white rounded-xl text-[10px] font-bold active:scale-95 transition-transform" style={{ backgroundColor: COLORS.primaryGreen }}>Repetir pedido</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FIXED Bottom Nav */}
      <div className="h-24 bg-white/80 backdrop-blur-xl rounded-t-[40px] flex items-center justify-between px-8 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] z-[100] border-t border-white/50 flex-shrink-0">
        <button onClick={() => onNavigate('HOME')} className="p-2 text-gray-300"><Home className="w-6 h-6" /></button>
        <button className="p-2 text-gray-300"><Heart className="w-6 h-6" /></button>
        <button onClick={() => onNavigate('ORDERS')} className="p-2 flex flex-col items-center">
          <Grid className="w-6 h-6" style={{ color: COLORS.textDark }} />
          <div className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-1 shadow-sm"></div>
        </button>
        <button className="p-2 text-gray-300"><Percent className="w-6 h-6" /></button>
        <button onClick={() => onNavigate('CONFIRM_ORDER')} className="p-2 text-gray-300"><ShoppingCart className="w-6 h-6" /></button>
      </div>
    </div>
  );
};

export default OrdersScreen;
