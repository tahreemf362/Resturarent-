import React, { useState } from 'react';
import Basket from './Basket';
import BasketDropdown from './BasketDropdown';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile nav
  const [basketOpenMobile, setBasketOpenMobile] = useState(false);
  const [basketOpenDesktop, setBasketOpenDesktop] = useState(false);
  const basketBtnRefMobile = React.useRef();
  const basketBtnRefDesktop = React.useRef();

  // Close dropdown on outside click (mobile)
  React.useEffect(() => {
    if (!basketOpenMobile) return;
    function handle(e) {
      if (
        basketBtnRefMobile.current &&
        !basketBtnRefMobile.current.contains(e.target) &&
        !document.getElementById('basket-dropdown')?.contains(e.target)
      ) {
        setBasketOpenMobile(false);
      }
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [basketOpenMobile]);

  // Close dropdown on outside click (desktop)
  React.useEffect(() => {
    if (!basketOpenDesktop) return;
    function handle(e) {
      if (
        basketBtnRefDesktop.current &&
        !basketBtnRefDesktop.current.contains(e.target) &&
        !document.getElementById('basket-dropdown')?.contains(e.target)
      ) {
        setBasketOpenDesktop(false);
      }
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [basketOpenDesktop]);

  return (
    <header
      style={{
        backgroundColor: '#FFD600',
        minHeight: '80px',
        fontFamily: 'cursive, Poppins, sans-serif',
        color: 'black',
      }}
      className="text-black sticky top-0 z-40 shadow-md"
    >
      <div
        className="flex items-center justify-between px-8"
        style={{ minHeight: '80px' }}
      >
        {/* Logo and Restaurant Name */}
        <div
          className="flex items-center gap-2"
          style={{
            color: 'black',
            fontFamily: 'cursive, Poppins, sans-serif',
          }}
        >
          <span role="img" aria-label="restaurant" className="text-3xl">
            🍽️
          </span>
          <span
            style={{
              color: 'black',
              fontFamily: 'cursive, Poppins, sans-serif',
              fontWeight: 900,
              fontSize: '2rem',
              letterSpacing: '2px',
            }}
          >
            RESTURANENT
          </span>

          {/* Basket for mobile only, after logo */}
          <span className="inline-flex align-middle ml-2 md:hidden" ref={basketBtnRefMobile} style={{ position: 'relative' }}>
            <Basket onClick={() => setBasketOpenMobile((v) => !v)} />
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '2.5rem',
              transform: 'translateX(-50%)',
              width: '92vw',
              maxWidth: '340px',
              minWidth: '220px',
              zIndex: 1000
            }}>
              <BasketDropdown open={basketOpenMobile} onClose={() => setBasketOpenMobile(false)} />
            </div>
          </span>
        </div>

        {/* Hamburger for mobile only */}
        <button
          className="force-mobile-nav focus:outline-none ml-auto"
          style={{ marginLeft: 'auto' }}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span
            style={{
              display: 'inline-block',
              width: '2rem',
              height: '2rem',
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '0.3rem',
                left: 0,
                right: 0,
                height: '0.28rem',
                background: '#FFD600',
                borderRadius: '0.15rem',
                boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
              }}
            ></span>
            <span
              style={{
                position: 'absolute',
                top: '0.86rem',
                left: 0,
                right: 0,
                height: '0.28rem',
                background: '#FFD600',
                borderRadius: '0.15rem',
                boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
              }}
            ></span>
            <span
              style={{
                position: 'absolute',
                top: '1.42rem',
                left: 0,
                right: 0,
                height: '0.28rem',
                background: '#FFD600',
                borderRadius: '0.15rem',
                boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
              }}
            ></span>
          </span>
        </button>

        {/* Mobile sidebar nav */}
        {open && (
          <div
            className="mobile-sidebar-backdrop force-mobile-nav"
            onClick={() => setOpen(false)}
          ></div>
        )}
        <nav
          className={`mobile-sidebar force-mobile-nav${open ? ' open' : ''}`}
        >
          <button className="mobile-sidebar-close" onClick={() => setOpen(false)}>
            &times;
          </button>
          <NavLink to="/" onClick={() => setOpen(false)}>HOME</NavLink>
          <NavLink to="/menu" onClick={() => setOpen(false)}>MENU</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>CONTACT</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>ABOUT</NavLink>
        </nav>

        {/* Desktop nav always visible */}
        <div
          className="force-desktop-nav items-center"
          style={{ minHeight: '80px', position: 'relative' }}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `uppercase tracking-wide font-bold transition-colors duration-200 px-4 py-2 rounded ${
                isActive ? 'underline' : ''
              }`
            }
            style={{
              color: 'black',
              fontFamily: 'cursive, Poppins, sans-serif',
              marginRight: '1.2rem',
            }}
          >
            HOME
          </NavLink>

        

          <NavLink
            to="/menu"
            style={{
              color: 'black',
              fontFamily: 'cursive, Poppins, sans-serif',
              marginRight: '2.5rem',
            }}
          >
            MENU
          </NavLink>
          <NavLink
            to="/contact"
            style={{
              color: 'black',
              fontFamily: 'cursive, Poppins, sans-serif',
              marginRight: '2.5rem',
            }}
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/about"
            style={{ color: 'black', fontFamily: 'cursive, Poppins, sans-serif' }}
          >
            ABOUT
          </NavLink>
        </div>
      </div>
    </header>
  );
}
