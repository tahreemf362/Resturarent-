import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<header style={{ backgroundColor: '#ff6f00' }} className="text-white sticky top-0 z-40 shadow-md">
			<div className="w-full flex items-center justify-between px-8">
				{/* Logo on the left */}
				<div className="flex items-center gap-2 py-4">
					<span role="img" aria-label="restaurant" className="text-2xl">🍽️</span>
					<span className="font-extrabold text-xl" style={{ color: 'black', letterSpacing: '2px' }}>RestroHub</span>
				</div>
				{/* Hamburger for mobile */}
				<button
					className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-white rounded focus:outline-none"
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
					onClick={() => setMenuOpen((open) => !open)}
				>
					<span className={`block w-6 h-0.5 my-0.5 bg-orange-500 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
					<span className={`block w-6 h-0.5 my-0.5 bg-orange-500 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
					<span className={`block w-6 h-0.5 my-0.5 bg-orange-500 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
				</button>
				{/* Navigation links */}
				<nav
					className={`gap-12 py-4 md:flex ${menuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-[#ff6f00] text-white z-50' : 'hidden'} md:static md:w-auto md:bg-transparent md:relative`}
				>
					<NavLink
						to="/"
						className={({ isActive }) =>
							`uppercase tracking-wide font-bold transition-colors duration-200 px-4 py-2 rounded text-white ${isActive ? 'underline' : 'hover:text-orange-200'}`
						}
						onClick={() => setMenuOpen(false)}
					>
						HOME
					</NavLink>
					<NavLink
						to="/menu"
						className={({ isActive }) =>
							`uppercase tracking-wide font-bold transition-colors duration-200 px-4 py-2 rounded text-white ${isActive ? 'underline' : 'hover:text-orange-200'}`
						}
						onClick={() => setMenuOpen(false)}
					>
						MENU
					</NavLink>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							`uppercase tracking-wide font-bold transition-colors duration-200 px-4 py-2 rounded text-white ${isActive ? 'underline' : 'hover:text-orange-200'}`
						}
						onClick={() => setMenuOpen(false)}
					>
						ABOUT
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							`uppercase tracking-wide font-bold transition-colors duration-200 px-4 py-2 rounded text-white ${isActive ? 'underline' : 'hover:text-orange-200'}`
						}
						onClick={() => setMenuOpen(false)}
					>
						CONTACT
					</NavLink>
				</nav>
			</div>
		</header>
	);
}