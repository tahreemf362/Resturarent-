import React from 'react'
import annaImg from '../assets/anna.jpg';


export default function About(){
return (
<div className='container mx-auto px-4 py-12'>
<h1 className='text-3xl font-bold'>About Us</h1>
<p className='mt-4 text-slate-600 max-w-2xl'>RestroHub was founded from a passion for honest, handcrafted food. We combine seasonal produce with classic techniques and a modern approach to dining.</p>


<section className='mt-10'>
<h2 className='text-2xl font-semibold'>Our Team</h2>
<div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
<div className='bg-white rounded-xl p-6 card-shadow'>
<img src={annaImg} alt='chef' className='w-full h-44 object-cover rounded-md' />
<h3 className='mt-4 font-bold'>Chef Anna</h3>
<p className='text-slate-600'>Head Chef & Founder</p>
</div>


<div className='bg-white rounded-xl p-6 card-shadow'>
<img src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=12' alt='manager' className='w-full h-44 object-cover rounded-md' />
<h3 className='mt-4 font-bold'>Manager</h3>
<p className='text-slate-600'>Front of house</p>
</div>


<div className='bg-white rounded-xl p-6 card-shadow'>
<img src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=13' alt='sommelier' className='w-full h-44 object-cover rounded-md' />
<h3 className='mt-4 font-bold'>Sommelier</h3>
<p className='text-slate-600'>Wine curator</p>
</div>
</div>
</section>
</div>
)
}