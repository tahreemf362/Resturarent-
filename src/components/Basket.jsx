import React from 'react';
import { useAppState } from '../context/AppContext';

export default function Basket({ onClick }) {
  const { cart } = useAppState();
  return (
    <button
      onClick={onClick}
  className="relative flex items-center justify-center bg-transparent border-none cursor-pointer"
  style={{ minWidth: 56, minHeight: 56 }}
      aria-label="Basket"
    >
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" fill="#FFD600" />
        <path d="M8 11h8l-1.5 6h-5z" fill="#fff" />
        <rect x="9" y="7" width="6" height="4" rx="2" fill="#fff" />
      </svg>
      {cart.length > 0 && (
        <span style={{ position: 'absolute', top: 2, right: 2, background: '#ff1744', color: '#fff', borderRadius: '50%', fontSize: 12, minWidth: 18, minHeight: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2, fontWeight: 700 }}>
          {cart.length}
        </span>
      )}
    </button>
  );
}
