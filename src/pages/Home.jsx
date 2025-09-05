import React from 'react'
import Hero from '../components/Hero'
import Featured from '../sections/Featured'


export default function Home(){
return (
<div>
<Hero />
<Featured />
<section className='container mx-auto px-4 py-12'>
<div className='grid md:grid-cols-3 gap-6'>
<div className='bg-white rounded-xl p-6 card-shadow'>
	<h3 className='font-extrabold text-lg' style={{ color: '#ff6f00', fontFamily: 'cursive, Poppins, sans-serif' }}>Our Philosophy</h3>
	<p className='mt-3' style={{ color: '#ff6f00' }}>Quality ingredients, sustainable sourcing and bold flavors.</p>
</div>
<div className='bg-white rounded-xl p-6 card-shadow'>
	<h3 className='font-extrabold text-lg' style={{ color: '#ff6f00', fontFamily: 'cursive, Poppins, sans-serif' }}>Private Events</h3>
	<p className='mt-3' style={{ color: '#ff6f00' }}>Book our private dining room for celebrations and corporate events.</p>
</div>
<div className='bg-white rounded-xl p-6 card-shadow'>
	<h3 className='font-extrabold text-lg' style={{ color: '#ff6f00', fontFamily: 'cursive, Poppins, sans-serif' }}>Gift Cards</h3>
	<p className='mt-3' style={{ color: '#ff6f00' }}>Give the gift of tasty memories — available online and in-store.</p>
</div>
</div>
</section>
</div>
)
}