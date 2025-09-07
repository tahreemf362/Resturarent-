import React, { useState } from 'react'


export default function Contact(){
const [form, setForm] = useState({name:'',email:'',message:''})
function submit(e){
e.preventDefault()
alert('Thanks '+form.name+' — this demo form does not send messages. Replace with a backend or email service.')
setForm({name:'',email:'',message:''})
}


return (
<div className='container mx-auto px-4 py-12'>
<h1 className='text-3xl font-bold'>Contact</h1>
<div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:justify-end items-start'>


<form onSubmit={submit} className='bg-white p-6 rounded-xl card-shadow force-contact-left force-contact-card-wide force-contact-form-tall'>
	<label className='block text-sm font-medium' style={{ color: '#FFD600' }}>Name</label>
	<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className='mt-1 border rounded-md w-full px-3 py-2' style={{ color: '#FFD600', borderColor: '#FFD600' }} />

	<label className='block text-sm font-medium mt-4' style={{ color: '#FFD600' }}>Email</label>
	<input required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className='mt-1 border rounded-md w-full px-3 py-2' style={{ color: '#FFD600', borderColor: '#FFD600' }} />

	<label className='block text-sm font-medium mt-4' style={{ color: '#FFD600' }}>Message</label>
	<textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className='mt-1 border rounded-md w-full px-3 py-2 h-32' style={{ color: '#FFD600', borderColor: '#FFD600' }} />

	<div className='mt-4'>
		<button type='submit' className='bg-brand-500 text-white px-4 py-2 rounded-md font-semibold' style={{ color: '#FFD600', backgroundColor: 'white', border: '1px solid #FFD600' }}>Send Message</button>
	</div>
</form>


<aside className='space-y-4 flex flex-col md:items-end items-center'>

<div className='bg-white p-6 rounded-xl card-shadow force-contact-left force-contact-card-wide force-contact-info-tall'>
<h3 className='font-semibold' style={{ color: '#FFD600' }}>Visit Us</h3>
<p className='mt-2' style={{ color: '#FFD600' }}>123 Main St, City</p>
<p className='mt-2' style={{ color: '#FFD600' }}>(555) 555-5555</p>
<p className='mt-2' style={{ color: '#FFD600' }}>contact@restrohub.com</p>
</div>


<div className='bg-white p-6 rounded-xl card-shadow force-contact-left force-contact-card-wide force-contact-info-tall'>
<h3 className='font-semibold' style={{ color: '#FFD600' }}>Opening Hours</h3>
<p className='mt-2' style={{ color: '#FFD600' }}>Mon - Sun: 11:00 AM - 10:00 PM</p>
</div>
</aside>
</div>
</div>
)
}