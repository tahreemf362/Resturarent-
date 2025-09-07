import React, { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import Reserve from './pages/Reserve'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export default function App() {
	const bubbleContainerRef = useRef(null);

	function spawnBubble(e) {
		const container = bubbleContainerRef.current;
		if (!container) return;
		const bubble = document.createElement('div');
		const size = 14 + Math.random() * 18;
		bubble.className = 'magic-bubble';
	bubble.style.left = (e.clientX - size / 2 + window.scrollX) + 'px';
	bubble.style.top = (e.clientY - size / 2 + window.scrollY) + 'px';
		bubble.style.width = size + 'px';
		bubble.style.height = size + 'px';
		bubble.style.opacity = 0.7 + Math.random() * 0.3;
		container.appendChild(bubble);
		setTimeout(() => {
			bubble.style.opacity = 0;
			bubble.style.transform = 'scale(1.5)';
		}, 120);
		setTimeout(() => {
			bubble.remove();
		}, 350);
	}


	// Use pointer events for all devices (mouse, touch, pen)
	function handlePointer(e) {
		spawnBubble(e);
	}

		return (
			<AppProvider>
						<div
							className='min-h-screen flex flex-col'
							onPointerMove={handlePointer}
							onPointerDown={handlePointer}
							style={{ position: 'relative' }}
						>
					<div ref={bubbleContainerRef} className='magic-bubble-container' style={{ position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 9999 }} />
					<Navbar />
					<main className='flex-1'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/menu' element={<Menu />} />
							<Route path='/about' element={<About />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='/reserve' element={<Reserve />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</AppProvider>
		);
}