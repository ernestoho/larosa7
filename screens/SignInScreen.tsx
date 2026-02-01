
import React from 'react';
import { Screen } from '../types';
import { BrandLogo, COLORS } from '../constants';
import { Check, User } from 'lucide-react';

interface Props {
  onNavigate: (screen: Screen) => void;
}

const SignInScreen: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center px-8 pt-20 pb-10 min-h-full">
      <BrandLogo />
      
      <h2 className="text-2xl font-bold mt-12 mb-8" style={{ color: COLORS.textDark }}>Iniciar sesión</h2>
      
      <div className="flex space-x-4 mb-8 w-full">
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
      
      <div className="w-full flex items-center space-x-2 mb-8">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-xs text-gray-500 uppercase tracking-widest">O con Email</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      
      <div className="w-full space-y-4">
        <div className="relative">
          <input 
            type="email" 
            placeholder="Tu Email" 
            className="w-full bg-[#FDFCF0] border border-gray-100 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#87BC9E]/20"
            defaultValue="hola@larosa.com"
          />
          <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
        </div>
        
        <div className="relative">
          <input 
            type="password" 
            placeholder="••••••••" 
            className="w-full bg-[#FDFCF0] border border-gray-100 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#87BC9E]/20"
          />
          <button 
            onClick={() => onNavigate('FORGOT_PASSWORD')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-medium"
          >
            ¿Olvidaste?
          </button>
        </div>
      </div>
      
      <div className="w-full mt-10 space-y-3">
        <button 
          onClick={() => onNavigate('HOME')}
          className="w-full py-4 rounded-2xl text-white font-bold text-lg shadow-lg active:scale-[0.98] transition-all"
          style={{ backgroundColor: COLORS.primaryGreen }}
        >
          Ingresar
        </button>
        
        <button 
          onClick={() => onNavigate('HOME')}
          className="w-full py-4 rounded-2xl bg-white border border-gray-100 text-gray-500 font-bold text-lg shadow-sm flex items-center justify-center space-x-2 active:scale-[0.98] transition-all"
        >
          <User className="w-5 h-5 text-gray-400" />
          <span>Ingresar como invitado</span>
        </button>
      </div>
      
      <p className="mt-8 text-sm text-gray-500">
        ¿Nuevo usuario? <button onClick={() => onNavigate('SIGN_UP')} className="font-bold" style={{ color: COLORS.primaryGreen }}>Regístrate</button>
      </p>
    </div>
  );
};

export default SignInScreen;
