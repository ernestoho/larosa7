
import React from 'react';
import { Screen } from '../types';
import { BrandLogo, COLORS } from '../constants';
import { ChevronLeft, Phone } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const ForgotPasswordScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center px-8 pt-10 pb-10 min-h-full">
      <div className="w-full flex justify-start mb-6">
        <button onClick={() => onNavigate('SIGN_IN')} className="p-2">
          <ChevronLeft className="w-6 h-6 text-gray-400" />
        </button>
      </div>
      
      <BrandLogo />
      
      <div className="text-center mt-12 mb-10">
        <h2 className="text-2xl font-bold mb-2" style={{ color: COLORS.textDark }}>Olvidé mi contraseña</h2>
        <p className="text-sm text-gray-500">Te enviaremos un código a tu teléfono</p>
      </div>
      
      <div className="w-full mb-10">
        <div className="relative">
          <input 
            type="tel" 
            placeholder="Número de teléfono" 
            className="w-full bg-[#FDFCF0] border border-gray-100 rounded-2xl py-4 px-6 text-sm focus:outline-none"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Phone className="w-4 h-4 text-gray-300" />
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => onNavigate('SIGN_IN')}
        className="w-full py-4 rounded-2xl text-white font-bold text-lg shadow-lg"
        style={{ backgroundColor: COLORS.primaryGreen }}
      >
        Enviar
      </button>
    </div>
  );
};

export default ForgotPasswordScreen;
