
import React from 'react';
import { Screen, Product } from '../types';
import { COLORS } from '../constants';
import { Home, Heart, Grid, Percent, ShoppingCart, Plus, Search, MapPin, Star } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen, product?: Product) => void;
}

const CATEGORIES = [
  { name: 'Sushi', icon: '🍣', active: true },
  { name: 'Pollo', icon: '🍗', active: false },
  { name: 'Pasta', icon: '🍝', active: false },
  { name: 'Hamburguesas', icon: '🍔', active: false },
];

const SPECIALS: Product[] = [
  {
    id: '1',
    name: 'Set Completo Sushi Especial',
    price: 38.00,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=400',
    calories: '320 Kcal',
    weight: '120 Gramos',
    rating: 5.0,
    ingredients: [
      { name: 'Salmón', icon: '🐟' },
      { name: 'Arroz', icon: '🌾' },
      { name: 'Wasabi', icon: '🍵' },
      { name: 'Alga', icon: '🌱' },
    ]
  },
  {
    id: '2',
    name: 'Pollo Frito y Vegetales',
    price: 34.00,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=400',
    calories: '450 Kcal',
    weight: '300 Gramos',
    rating: 4.8,
    ingredients: [
      { name: 'Pollo', icon: '🍗' },
      { name: 'Brócoli', icon: '🥦' },
      { name: 'Zanahoria', icon: '🥕' },
    ]
  }
];

const HomeScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Scrollable Content Area */}
      <div className="flex-grow overflow-y-auto app-container">
        {/* Header */}
        <div className="px-6 pt-4 pb-6 flex justify-between items-center">
          <div className="space-y-1">
            <div className="flex items-center space-x-1 text-gray-400">
              <MapPin className="w-3 h-3 text-[#E67E22]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Entregar en</span>
            </div>
            <h2 className="text-xl font-bold leading-tight" style={{ color: COLORS.textDark }}>
              Procab, Cabarete 🇩🇴
            </h2>
          </div>
          <div className="w-11 h-11 rounded-2xl overflow-hidden bg-white shadow-md border-2 border-white">
            <img src="https://picsum.photos/seed/user123/100/100" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* Banner */}
        <div className="px-6 mb-6">
          <div className="bg-[#87BC9E] rounded-[32px] p-6 relative overflow-hidden shadow-xl">
             <div className="relative z-10 w-2/3">
                <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Rebajas de Verano</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-3">¡Hasta 40% de descuento hoy!</h3>
                <button className="bg-white text-[#87BC9E] px-4 py-2 rounded-xl text-xs font-bold shadow-sm active:scale-95 transition-transform">Reclamar ahora</button>
             </div>
             <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-white/10 rounded-full"></div>
             <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-90 scale-125">
               🍣
             </div>
          </div>
        </div>
        
        {/* Categories */}
        <div className="flex space-x-5 px-6 overflow-x-auto py-2 app-container">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center space-y-2 min-w-[64px]">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 shadow-sm border ${cat.active ? 'bg-[#E67E22] border-[#E67E22] scale-110 shadow-orange-200' : 'bg-white border-white'}`}>
                {cat.icon}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wide ${cat.active ? 'text-[#E67E22]' : 'text-gray-400'}`}>{cat.name}</span>
            </div>
          ))}
        </div>
        
        {/* Search */}
        <div className="px-6 mt-6">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Busca tu menú favorito..." 
              className="w-full bg-white border border-white rounded-2xl py-3.5 px-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#87BC9E]/40 transition-all shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#87BC9E] rounded-lg flex items-center justify-center">
              <Percent className="w-3.5 h-3.5 text-white" />
            </div>
          </div>
        </div>
        
        {/* Main Special Card */}
        <div className="px-6 mt-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-lg" style={{ color: COLORS.textDark }}>Artículos Populares</h4>
            <button className="text-xs font-bold text-[#87BC9E]">Ver todo</button>
          </div>
          <div 
            onClick={() => onNavigate('PRODUCT_DETAIL', SPECIALS[0])}
            className="relative bg-[#FFEDE0] rounded-[40px] p-6 pb-6 overflow-hidden shadow-xl cursor-pointer group hover:brightness-95 transition-all"
          >
            <div className="absolute top-6 right-6 z-10">
              <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                <Heart className="w-5 h-5 text-[#E67E22]" />
              </button>
            </div>
            
            <div className="flex justify-center mb-6 relative mt-4">
              <div className="absolute bottom-2 w-40 h-8 bg-black/10 blur-2xl rounded-full"></div>
              <img 
                src={SPECIALS[0].image} 
                alt={SPECIALS[0].name} 
                className="w-52 h-52 object-cover rounded-full border-[6px] border-white shadow-2xl relative z-10" 
              />
            </div>
            
            <div className="space-y-2 mt-4">
              <div className="flex items-center space-x-1">
                 <Star className="w-3 h-3 fill-[#E67E22] text-[#E67E22]" />
                 <span className="text-[10px] font-bold text-[#E67E22]">Mejor valorado</span>
              </div>
              <h3 className="text-xl font-extrabold tracking-tight" style={{ color: COLORS.textDark }}>{SPECIALS[0].name}</h3>
              <div className="flex justify-between items-center pt-2">
                <span className="text-2xl font-black" style={{ color: COLORS.textDark }}>${SPECIALS[0].price.toFixed(2)}</span>
                <div 
                  className="w-12 h-12 bg-[#87BC9E] rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Plus className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Picks Horizontal scroll */}
        <div className="px-6 mt-8 mb-10">
          <h4 className="font-bold text-lg mb-4" style={{ color: COLORS.textDark }}>Selecciones rápidas</h4>
          <div className="flex space-x-4 overflow-x-auto pb-4 app-container">
             {[SPECIALS[1], SPECIALS[0]].map((item, idx) => (
               <div 
                key={`${item.id}-${idx}`}
                onClick={() => onNavigate('PRODUCT_DETAIL', item)}
                className="bg-white rounded-[32px] p-4 min-w-[180px] shadow-sm border border-white flex flex-col items-center cursor-pointer active:scale-95 transition-transform"
               >
                  <img src={item.image} className="w-24 h-24 rounded-full object-cover mb-3 border-4 border-[#FFF5E1] shadow-md" />
                  <h5 className="font-bold text-xs text-center mb-1 line-clamp-1">{item.name}</h5>
                  <span className="font-bold text-[#E67E22] text-sm">${item.price.toFixed(2)}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
      
      {/* FIXED Bottom Navigation */}
      <div className="h-24 bg-white/80 backdrop-blur-xl rounded-t-[40px] flex items-center justify-between px-8 shadow-[0_-10px_40px_rgba(0,0,0,0.06)] z-[100] border-t border-white/50 flex-shrink-0">
        <button onClick={() => onNavigate('HOME')} className="p-2 flex flex-col items-center">
          <Home className="w-6 h-6" style={{ color: COLORS.textDark }} />
          <div className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-1 shadow-sm"></div>
        </button>
        <button className="p-2 text-gray-300"><Heart className="w-6 h-6" /></button>
        <button onClick={() => onNavigate('ORDERS')} className="p-2 text-gray-300"><Grid className="w-6 h-6" /></button>
        <button className="p-2 text-gray-300"><Percent className="w-6 h-6" /></button>
        <button onClick={() => onNavigate('CONFIRM_ORDER')} className="relative p-2">
          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#E67E22] text-[10px] text-white flex items-center justify-center font-bold border-2 border-white shadow-sm">1</div>
          <ShoppingCart className="w-6 h-6 text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
