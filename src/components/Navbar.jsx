
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	const [open, setOpen] = useState(false);
	return (
	       <header style={{ backgroundColor: '#ff6f00', minHeight: '80px' }} className="text-white sticky top-0 z-40 shadow-md">
		       <div className="flex items-center justify-between px-8" style={{ minHeight: '80px' }}>
				{/* Logo and Restaurant Name */}
				<div className="flex items-center gap-2">
					<span role="img" aria-label="restaurant" className="text-3xl">🍽️</span>
					<span style={{ color: 'black', fontFamily: 'cursive, Poppins, sans-serif', fontWeight: 900, fontSize: '2rem', letterSpacing: '2px' }}>
						RESTURANENT
					</span>
				</div>
				{/* Hamburger for mobile */}
			       {/* Hamburger for mobile only, right corner */}
											 <button className="force-mobile-nav focus:outline-none ml-auto" style={{marginLeft:'auto'}} onClick={() => setOpen(true)} aria-label="Open menu">
																		 <span style={{display:'inline-block',width:'2rem',height:'2rem',position:'relative'}}>
																			 <span style={{position:'absolute',top:'0.3rem',left:0,right:0,height:'0.28rem',background:'#ff6f00',borderRadius:'0.15rem',boxShadow:'0 1px 2px rgba(0,0,0,0.08)'}}></span>
																			 <span style={{position:'absolute',top:'0.86rem',left:0,right:0,height:'0.28rem',background:'#ff6f00',borderRadius:'0.15rem',boxShadow:'0 1px 2px rgba(0,0,0,0.08)'}}></span>
																			 <span style={{position:'absolute',top:'1.42rem',left:0,right:0,height:'0.28rem',background:'#ff6f00',borderRadius:'0.15rem',boxShadow:'0 1px 2px rgba(0,0,0,0.08)'}}></span>
																		 </span>
											 </button>
			       {/* Mobile sidebar nav */}
			       {open && <div className="mobile-sidebar-backdrop force-mobile-nav" onClick={() => setOpen(false)}></div>}
			       <nav className={`mobile-sidebar force-mobile-nav${open ? ' open' : ''}`}>
				       <button className="mobile-sidebar-close" onClick={() => setOpen(false)}>&times;</button>
				       <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>HOME</NavLink>
				       <NavLink to="/menu" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>MENU</NavLink>
				       <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>CONTACT</NavLink>
				       <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setOpen(false)}>ABOUT</NavLink>
			       </nav>
						   {/* Desktop nav always visible */}
						   <div className="force-desktop-nav items-center" style={{ minHeight: '80px' }}>
													<NavLink
														to="/"
														className={({ isActive }) =>
															`uppercase tracking-wide font-bold transition-colors duration-200 px-4 py-2 rounded ${isActive ? 'underline' : ''}`
														}
														style={{ color: 'white', marginRight: '2.5rem' }}
													>
														HOME
													</NavLink>
													<NavLink
														to="/menu"
														className={({ isActive }) =>
															`uppercase tracking-wide font-bold transition-colors duration-200 px-4 py-2 rounded ${isActive ? 'underline' : ''}`
														}
														style={{ color: 'white', marginRight: '2.5rem' }}
													>
														MENU
													</NavLink>
													<NavLink
														to="/contact"
														className={({ isActive }) =>
															`uppercase tracking-wide font-bold transition-colors duration-200 px-4 py-2 rounded ${isActive ? 'underline' : ''}`
														}
														style={{ color: 'white', marginRight: '2.5rem' }}
													>
														CONTACT
													</NavLink>
													<NavLink
														to="/about"
														className={({ isActive }) =>
															`uppercase tracking-wide font-bold transition-colors duration-200 px-4 py-2 rounded ${isActive ? 'underline' : ''}`
														}
														style={{ color: 'white' }}
													>
														ABOUT
													</NavLink>
												</div>
			</div>
		</header>
	);
}