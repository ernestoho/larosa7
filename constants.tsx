
import React from 'react';

export const COLORS = {
  background: '#FFF5E1',
  primaryGreen: '#87BC9E',
  primaryOrange: '#E67E22',
  textDark: '#4A3728',
  inputBg: '#FDFCF0',
  cardBg: '#FFEDE0',
};

export const BrandLogo: React.FC<{ size?: number }> = ({ size = 100 }) => (
  <div className="flex flex-col items-center justify-center">
    <div 
      className="relative flex items-center justify-center mb-2"
      style={{ width: size, height: size * 0.7 }}
    >
      <svg width={size} height={size * 0.7} viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 50C10 50 15 20 50 20C85 20 90 50 90 50H10Z" fill="#E67E22" stroke="#4A3728" strokeWidth="3" />
        <path d="M30 20V5M70 20V5" stroke="#D35400" strokeWidth="4" strokeLinecap="round" />
        <circle cx="40" cy="40" r="3" fill="#87BC9E" />
        <circle cx="55" cy="35" r="3" fill="#C0392B" />
        <circle cx="65" cy="42" r="3" fill="#27AE60" />
      </svg>
    </div>
    <h1 className="text-3xl font-bold tracking-tight" style={{ color: COLORS.textDark }}>
      LA ROSA
    </h1>
  </div>
);
