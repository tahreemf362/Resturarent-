import React from 'react';

export default function Footer() {
  return (
  <footer className="mt-12 text-black" style={{ backgroundColor: '#FFD600', fontFamily: 'cursive, Poppins, sans-serif', color: 'black' }}>
      <div className="container mx-auto px-4 py-14 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-20">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="font-extrabold text-3xl flex items-center gap-3 tracking-wider mb-2">
            <span role="img" aria-label="restaurant" className="text-4xl">🍽️</span>
            <span className="text-black drop-shadow-lg" style={{ letterSpacing: '2px', fontFamily: 'cursive, Poppins, sans-serif', color: 'black' }}>RestroHub</span>
          </div>
          <p className="mt-2 max-w-xs text-base font-medium" style={{ color: 'black', fontFamily: 'cursive, Poppins, sans-serif' }}>Handmade dishes, seasonal ingredients, and warm hospitality. Experience the taste of tradition and innovation in every bite.</p>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="6" fill="url(#ig-gradient)" stroke="#E1306C" strokeWidth="2"/><defs><linearGradient id="ig-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#F58529"/><stop offset="0.5" stop-color="#DD2A7B"/><stop offset="1" stop-color="#515BD4"/></linearGradient></defs><circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="#fff"/></svg></a>
            <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="6" fill="#1877F3" stroke="#1877F3" strokeWidth="2"/><path d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 2H12v6h-2v-6H8v-2h2V9a3 3 0 0 1 3-3h2v2z" fill="#fff"/></svg></a>
            <a href="#" aria-label="Twitter" className="hover:scale-110 transition-transform"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="6" fill="#1DA1F2" stroke="#1DA1F2" strokeWidth="2"/><path d="M8 17c6 0 9-5 9-9v-.4A6.5 6.5 0 0 0 19 5.5a6.3 6.3 0 0 1-1.9.5A3.3 3.3 0 0 0 18.5 4a6.6 6.6 0 0 1-2.1.8A3.3 3.3 0 0 0 7.5 8.5c0 .3 0 .6.1.9A9.3 9.3 0 0 1 4 5.5s-2 4 2 6a3.2 3.2 0 0 1-1.5-.4c0 2.2 1.6 4 4 4a6.7 6.7 0 0 1-4 .1c1.2 1.7 3.2 2.7 5.2 2.7z" fill="#fff"/></svg></a>
          </div>
        </div>
        <div className="flex flex-col gap-7 md:gap-10 text-center md:text-left">
          <div>
            <div className="font-extrabold text-lg mb-1 drop-shadow" style={{ fontFamily: 'cursive, Poppins, sans-serif', color: 'black' }}>Philosophy</div>
            <div style={{ color: 'black', fontFamily: 'cursive, Poppins, sans-serif' }}>Quality ingredients, sustainable sourcing and bold flavors.</div>
          </div>
          <div>
            <div className="font-extrabold text-lg mb-1 drop-shadow" style={{ fontFamily: 'cursive, Poppins, sans-serif', color: 'black' }}>Private Events</div>
            <div style={{ color: 'black', fontFamily: 'cursive, Poppins, sans-serif' }}>Book our private dining room for celebrations and corporate events.</div>
          </div>
          <div>
            <div className="font-extrabold text-lg mb-1 drop-shadow" style={{ fontFamily: 'cursive, Poppins, sans-serif', color: 'black' }}>Gift Cards</div>
            <div style={{ color: 'black', fontFamily: 'cursive, Poppins, sans-serif' }}>Give the gift of tasty memories — available online and in-store.</div>
          </div>
        </div>
      </div>
  <div className="border-t border-black/30 py-4 text-center text-sm tracking-wide bg-opacity-80" style={{ color: 'black', fontFamily: 'cursive, Poppins, sans-serif' }}>© {new Date().getFullYear()} RestroHub — All rights reserved</div>
    </footer>
  );
}