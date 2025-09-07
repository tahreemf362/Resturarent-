import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import burgerImg from '../assets/burger.PNG'



export default function Hero() {
	const fullText = 'Taste the difference — fresh, seasonal & unforgettable.';
	const [typed, setTyped] = useState('');

	useEffect(() => {
		let i = 0;
		let timeout;
		function type() {
			setTyped(fullText.slice(0, i + 1));
			if (i < fullText.length - 1) {
				i++;
				timeout = setTimeout(type, 22 + Math.random() * 28); // 22-50ms per letter
			}
		}
		type();
		return () => clearTimeout(timeout);
	}, []);

	return (
		<section className='bg-white hero-overlay'>
			<div className='container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center'>
				<div>
					<h1 className='text-4xl md:text-5xl font-extrabold leading-tight font-[cursive]' style={{ color: '#FFD600', fontFamily: 'cursive, Poppins, sans-serif', whiteSpace: 'pre' }}>{typed}</h1>

<p className='mt-4 bg-white text-slate-600 max-w-xl'>At RestroHub we craft every dish with care. Join us for a memorable meal, whether it’s a quick lunch or a celebratory dinner.</p>
<div className='mt-6 flex gap-3 mb-8'>
	<Link to='/menu'>
				<button type="button" className="bg-white text-black rounded-xl font-extrabold shadow-xl border-2 border-slate-400 hover:bg-slate-100 transition cursor-pointer"
					style={{ minWidth: '180px', minHeight: '60px', fontSize: '1.5rem', padding: '1rem 2rem' }}>
					View Menu
				</button>
	</Link>
	<Link to="/reserve">
				<button type="button" className="bg-white text-black rounded-xl font-extrabold shadow-xl border-2 border-slate-400 hover:bg-slate-100 transition cursor-pointer"
					style={{ minWidth: '180px', minHeight: '60px', fontSize: '1.5rem', padding: '1rem 2rem' }}>
					Reserve a Table
				</button>
	</Link>
</div>


<div className='mt-8 flex gap-6 items-center' style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
		<div className='text-2xl font-extrabold' style={{ color: 'white', fontFamily: 'cursive, Poppins, sans-serif' }}>⭐ 4.8 · 1,200+ Reviews</div>
		<div className='text-2xl font-extrabold' style={{ color: 'white', fontFamily: 'cursive, Poppins, sans-serif' }}>·</div>
		<div className='text-2xl font-extrabold' style={{ color: 'white', fontFamily: 'cursive, Poppins, sans-serif' }}>Open today · 11:00 AM - 10:00 PM</div>
</div>
</div>


<div className='relative'>
<div className='rounded-2xl overflow-hidden card-shadow transform hover:scale-[1.02] transition'>
<img src={burgerImg} alt='hero dish' className='w-full h-96 img-fit' />
</div>
</div>
</div>
</section>
)
}