import React, { useState } from 'react';
import { useAppState } from '../context/AppContext';

export default function Reserve() {
  const { dishes } = useAppState();
  const [form, setForm] = useState({ name: '', time: '', menu: '', charges: 0 });
  const [showCharges, setShowCharges] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (name === 'menu') {
      const selected = dishes.find(d => d.title === value);
      setForm(f => ({ ...f, charges: selected ? selected.price : 0 }));
      setShowCharges(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  alert('Your seat is reserved!');
    setForm({ name: '', time: '', menu: '', charges: 0 });
    setShowCharges(false);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Reserve a Table</h1>
  <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl card-shadow max-w-xl w-full mx-auto">
        <label className="block text-sm font-medium mb-1">Name</label>
  <input name="name" value={form.name} onChange={handleChange} required className="mb-4 border rounded-md px-3 py-3 text-lg" style={{ width: '200px', fontSize: '1.15rem' }} />

        <label className="block text-sm font-medium mb-1">Time</label>
  <input name="time" type="time" value={form.time} onChange={handleChange} required className="mb-4 border rounded-md px-3 py-3 text-lg" style={{ width: '200px', fontSize: '1.15rem' }} />

        <label className="block text-sm font-medium mb-1">Menu</label>
  <select name="menu" value={form.menu} onChange={handleChange} required className="mb-4 border rounded-md px-3 py-3 text-lg" style={{ width: '200px', fontSize: '1.15rem' }}>
          <option value="">Select a dish</option>
          {dishes.map(d => (
            <option key={d.title} value={d.title}>{d.title}</option>
          ))}
        </select>

        {showCharges && (
            <div className="mb-4 text-lg font-semibold text-yellow-600">Charges: {form.charges} pr</div>
        )}

        <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold w-full">Reserve</button>
      </form>
    </div>
  );
}
