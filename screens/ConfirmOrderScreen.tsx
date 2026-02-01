
import React from 'react';
import { Screen } from '../types';
import { COLORS } from '../constants';
import { ChevronLeft, Edit3, Compass } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const ConfirmOrderScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-full pb-10 bg-[#FFF5E1]">
      <div className="px-6 pt-12 pb-2 flex items-center justify-center relative">
        <button onClick={() => onNavigate('HOME')} className="absolute left-6 p-2 bg-white rounded-xl border border-gray-100 shadow-sm">
          <ChevronLeft className="w-5 h-5 text-gray-400" />
        </button>
        <h1 className="text-lg font-bold" style={{ color: COLORS.textDark }}>Confirmar pedido</h1>
      </div>
      
      {/* Order Summary */}
      <div className="px-6 mt-6">
        <div className="bg-white/50 backdrop-blur-sm rounded-[32px] p-4 flex items-center justify-between border border-white">
          <div className="flex -space-x-4">
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-sm">
              <img src="https://picsum.photos/seed/item1/100/100" className="w-full h-full object-cover" />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-sm">
              <img src="https://picsum.photos/seed/item2/100/100" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 font-semibold">Total</p>
            <p className="text-xl font-bold" style={{ color: COLORS.primaryGreen }}>$38.20</p>
          </div>
        </div>
      </div>
      
      {/* Payment Method */}
      <div className="px-6 mt-8">
        <h4 className="font-bold mb-4" style={{ color: COLORS.textDark }}>Método de pago</h4>
        <p className="text-xs text-gray-400 mb-4">Selecciona uno de tus métodos</p>
        
        <div className="flex items-center space-x-6 mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full border-2 border-[#87BC9E] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#87BC9E]"></div>
            </div>
            <span className="text-xs font-bold text-gray-600">Tarjeta Crédito</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full border-2 border-gray-200"></div>
            <span className="text-xs font-semibold text-gray-400">Paypal</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full border-2 border-gray-200"></div>
            <span className="text-xs font-semibold text-gray-400">Efectivo</span>
          </div>
        </div>
        
        {/* Card Preview */}
        <div className="relative h-44 w-full bg-gradient-to-br from-[#FFEDE0] to-[#E8F5EE] rounded-[32px] p-6 shadow-lg border-2 border-white overflow-hidden">
          {/* Waves background */}
          <div className="absolute inset-0 opacity-40">
            <svg viewBox="0 0 500 500" preserveAspectRatio="none" className="h-full w-full">
              <path d="M0,100 C150,200 350,0 500,100 L500,500 L0,500 Z" fill="#FFCFAB"></path>
              <path d="M0,200 C150,300 350,100 500,200 L500,500 L0,500 Z" fill="#87BC9E" opacity="0.3"></path>
            </svg>
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <div className="w-10 h-6 bg-black rounded-md flex items-center justify-center mb-1">
                  <span className="text-[6px] text-white font-bold italic">VISA</span>
                </div>
                <span className="text-[10px] font-bold text-gray-500">Tarjeta Visa</span>
              </div>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-red-500 opacity-80"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500 opacity-80"></div>
                <span className="text-[10px] font-bold text-gray-500 ml-2">Master Card</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm font-bold tracking-[0.2em] text-gray-600">1322 3344 3443 2678</p>
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-widest text-gray-400 font-bold">Titular</span>
                  <span className="text-sm font-bold text-gray-700">Tony Nguyen</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[8px] uppercase tracking-widest text-gray-400 font-bold">Mes / Año</span>
                  <span className="text-sm font-bold text-gray-700">04/25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Delivery Address */}
      <div className="px-6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-bold" style={{ color: COLORS.textDark }}>Dirección de entrega</h4>
          <button className="p-2 bg-white/60 rounded-xl border border-white">
            <Compass className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        <p className="text-[10px] text-gray-400 mb-4 font-semibold uppercase tracking-wider">Buscar ubicación actual automáticamente</p>
        
        <div className="bg-white/50 border border-white p-4 rounded-2xl flex items-center space-x-4">
          <div className="flex-1">
            <p className="text-xs font-bold text-gray-700">Procab, Cabarete, República Dominicana</p>
          </div>
          <Edit3 className="w-4 h-4 text-gray-300" />
        </div>
      </div>
      
      {/* Action Button */}
      <div className="px-6 mt-10">
        <button 
          onClick={() => onNavigate('ORDER_STATUS')}
          className="w-full py-4 rounded-2xl text-white font-bold text-lg shadow-lg"
          style={{ backgroundColor: COLORS.primaryGreen }}
        >
          Confirmación
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrderScreen;
