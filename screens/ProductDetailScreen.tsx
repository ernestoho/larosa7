
import React, { useState } from 'react';
import { Screen, Product } from '../types';
import { COLORS } from '../constants';
import { ChevronLeft, Plus, Minus, Star, Heart, Clock, Flame, ShoppingCart } from 'lucide-react';

interface Props {
  product: Product;
  onNavigate: (screen: Screen) => void;
}

const ProductDetailScreen: React.FC<Props> = ({ product, onNavigate }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col h-full w-full">
      {/* Scrollable Content */}
      <div className="flex-grow overflow-y-auto app-container pb-24">
        {/* Floating Header */}
        <div className="px-6 pt-4 pb-2 flex justify-between items-center">
          <button 
            onClick={() => onNavigate('HOME')} 
            className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-white/50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-400" />
          </button>
          <button 
            className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-white/50"
          >
            <Heart className="w-5 h-5 text-[#E67E22]" />
          </button>
        </div>
        
        {/* Product Hero */}
        <div className="relative mt-2 mb-10 flex flex-col items-center px-6">
          <div className="relative w-80 h-80 flex items-center justify-center">
            <div className="absolute inset-0 bg-white/60 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute w-[85%] h-[85%] border-2 border-dashed border-[#87BC9E]/30 rounded-full"></div>
            
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-72 h-72 object-cover rounded-full border-[10px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.15)] relative z-10" 
            />
            
            <div className="absolute -bottom-2 z-20 bg-[#E67E22] text-white px-5 py-2.5 rounded-full shadow-lg border-4 border-white font-black text-lg">
              ${(product.price * quantity).toFixed(2)}
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="px-8 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
               <div className="flex text-[#E67E22]">
                  {[...Array(5)].map((_, i) => <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />)}
               </div>
               <span className="text-xs font-bold text-gray-400">({product.rating.toFixed(1)} Reseñas)</span>
            </div>
            <h1 className="text-3xl font-black tracking-tight leading-tight" style={{ color: COLORS.textDark }}>
              {product.name}
            </h1>
          </div>
          
          <div className="flex space-x-3">
            <div className="bg-white rounded-[20px] px-4 py-3 border border-white/50 shadow-sm flex items-center space-x-2">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-bold text-gray-600">{product.calories}</span>
            </div>
            <div className="bg-white rounded-[20px] px-4 py-3 border border-white/50 shadow-sm flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#87BC9E]" />
              <span className="text-xs font-bold text-gray-600">15-20 Min</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-extrabold text-lg" style={{ color: COLORS.textDark }}>Ingredientes</h4>
            <div className="flex space-x-4 pb-2 app-container overflow-x-auto">
              {product.ingredients.map((ing) => (
                <div key={ing.name} className="flex flex-col items-center space-y-2 min-w-[64px]">
                  <div className="w-14 h-14 rounded-3xl bg-white flex items-center justify-center text-2xl shadow-sm border border-white">
                    {ing.icon}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{ing.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-3 mb-10">
             <h4 className="font-extrabold text-lg" style={{ color: COLORS.textDark }}>Sobre la comida</h4>
             <p className="text-sm text-gray-500 leading-relaxed font-medium">
               Preparado frescamente con los mejores ingredientes. Un equilibrio perfecto de sabor y salud. Experimenta los verdaderos sabores de LA ROSA.
             </p>
          </div>
        </div>
      </div>

      {/* FIXED Bottom Actions */}
      <div className="h-28 flex items-center justify-center px-6 bg-white/80 backdrop-blur-xl rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.06)] border-t border-white/50 flex-shrink-0">
        <div className="w-full flex items-center justify-between">
           <div className="bg-[#FFF5E1] rounded-2xl flex items-center space-x-4 p-1 shadow-inner border border-white/40">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[#E67E22] bg-white shadow-sm"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-black text-lg min-w-[28px] text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[#E67E22] bg-white shadow-sm"
              >
                <Plus className="w-4 h-4" />
              </button>
           </div>

           <button 
              onClick={() => onNavigate('CONFIRM_ORDER')}
              className="flex-1 ml-4 h-12 bg-[#87BC9E] rounded-2xl shadow-lg flex items-center justify-center space-x-2 text-white font-bold active:scale-95 transition-transform"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Añadir al carrito</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailScreen;
