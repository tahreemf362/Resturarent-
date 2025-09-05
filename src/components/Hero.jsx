import React from 'react'
import { Link } from 'react-router-dom'
import burgerImg from '../assets/burger.PNG'


export default function Hero(){
return (
<section className='bg-white hero-overlay'>
<div className='container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center'>
<div>
<h1 className='text-4xl md:text-5xl font-extrabold leading-tight' style={{color: '#ff6f00'}}>Taste the difference — fresh, seasonal & unforgettable.</h1>
<p className='mt-4 bg-white text-slate-600 max-w-xl'>At RestroHub we craft every dish with care. Join us for a memorable meal, whether it’s a quick lunch or a celebratory dinner.</p>
<div className='mt-6 flex gap-3'>
<Link to='/menu' className='inline-block bg-brand-500 hover:opacity-95 text-white px-5 py-3 rounded-lg font-semibold shadow-lg transition'>View Menu</Link>
<a href='#reservation' className='inline-block px-5 py-3 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition'>Reserve a Table</a>
</div>


<div className='mt-8 flex gap-4 items-center'>
<div className='text-sm text-slate-600'>⭐ 4.8 · 1,200+ Reviews</div>
<div className='text-sm text-slate-600'>·</div>
<div className='text-sm text-slate-600'>Open today · 11:00 AM - 10:00 PM</div>
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