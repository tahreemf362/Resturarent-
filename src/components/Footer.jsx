import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#ff6f00' }} className="mt-12 text-white">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <div className="font-extrabold text-2xl flex items-center gap-2">
            <span role="img" aria-label="restaurant">🍽️</span>
            <span style={{ color: 'black', letterSpacing: '2px' }}>RestroHub</span>
          </div>
          <p className="mt-3 max-w-xs">Handmade dishes, seasonal ingredients, and warm hospitality. Experience the taste of tradition and innovation in every bite.</p>
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
          <div>
            <div className="font-extrabold text-lg" style={{ color: '#ff6f00', fontFamily: 'cursive, Poppins, sans-serif' }}>Philosophy</div>
            <div>Quality ingredients, sustainable sourcing and bold flavors.</div>
          </div>
          <div>
            <div className="font-extrabold text-lg" style={{ color: '#ff6f00', fontFamily: 'cursive, Poppins, sans-serif' }}>Private Events</div>
            <div>Book our private dining room for celebrations and corporate events.</div>
          </div>
          <div>
            <div className="font-extrabold text-lg" style={{ color: '#ff6f00', fontFamily: 'cursive, Poppins, sans-serif' }}>Gift Cards</div>
            <div>Give the gift of tasty memories — available online and in-store.</div>
          </div>
        </div>
      </div>
      <div className="border-t border-orange-300 py-4 text-center bg-opacity-80" style={{ color: 'white' }}>© {new Date().getFullYear()} RestroHub — All rights reserved</div>
    </footer>
  );
}