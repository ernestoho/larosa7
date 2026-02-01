
import React from 'react';
import { Screen } from '../types';
import { BrandLogo, COLORS } from '../constants';
import { Check, Eye } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const SignUpScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center px-8 pt-20 pb-10 min-h-full">
      <BrandLogo />
      
      <h2 className="text-2xl font-bold mt-12 mb-8" style={{ color: COLORS.textDark }}>Regístrate</h2>
      
      <div className="flex space-x-4 mb-10 w-full">
        <button className="flex-1 flex items-center justify-center bg-[#E67E22] text-white py-3 rounded-2xl shadow-sm text-sm font-semibold">
          <span className="mr-2">G</span> Con Google
        </button>
        <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-sm">
          <span className="text-blue-600 font-bold">f</span>
        </button>
        <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-sm">
          <span className="text-blue-400 font-bold">t</span>
        </button>
      </div>
      
      <div className="w-full space-y-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Nombre de usuario" 
            className="w-full bg-[#FDFCF0] border border-gray-100 rounded-2xl py-4 px-6 text-sm focus:outline-none"
          />
          <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
        </div>
        
        <div className="relative">
          <input 
            type="email" 
            placeholder="Tu Email" 
            className="w-full bg-[#FDFCF0] border border-gray-100 rounded-2xl py-4 px-6 text-sm focus:outline-none"
          />
          <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
        </div>
        
        <div className="relative">
          <input 
            type="password" 
            placeholder="••••••••" 
            className="w-full bg-[#FDFCF0] border border-gray-100 rounded-2xl py-4 px-6 text-sm focus:outline-none"
          />
          <Eye className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
        </div>
      </div>
      
      <button 
        onClick={() => onNavigate('HOME')}
        className="w-full mt-10 py-4 rounded-2xl text-white font-bold text-lg shadow-lg"
        style={{ backgroundColor: COLORS.primaryGreen }}
      >
        Crear cuenta
      </button>
      
      <p className="mt-12 text-sm text-gray-500">
        ¿Ya eres miembro? <button onClick={() => onNavigate('SIGN_IN')} className="font-bold" style={{ color: COLORS.primaryGreen }}>Inicia sesión</button>
      </p>
    </div>
  );
};

export default SignUpScreen;
