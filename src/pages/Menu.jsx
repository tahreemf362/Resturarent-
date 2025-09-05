

import React, { useState } from 'react'
import { useAppDispatch, useAppState } from '../context/AppContext'
import DishCard from '../components/DishCard'
import burger1 from '../assets/burger1.jpg';
import pizza from '../assets/pizza.jpg';
import pasta from '../assets/pasta.jpg';
import roll from '../assets/roll.jpg';
import pancake from '../assets/pancake.jpg';
import fries from '../assets/fries.jpg';


export default function Menu(){
const { filtered } = useAppState()
const dispatch = useAppDispatch()
const [category, setCategory] = useState('All')
const [q, setQ] = useState('')
const [sort, setSort] = useState('')


function apply(){
dispatch({type:'FILTER', payload:{category, q, sort}})
}


function add(d){ dispatch({type:'ADD_TO_CART', payload:d}) }








// Build the menu dishes array and filter/sort based on controls
const allMenuDishes = [
	{ title: 'Burger Special', desc: 'Juicy grilled burger with cheese, lettuce, and tomato.', price: 10.99, rating: 4.7, img: burger1, textColor: '#ff6f00' },
	{ title: 'Margherita Pizza', desc: 'Classic pizza with tomato sauce, mozzarella, and basil.', price: 12.99, rating: 4.8, img: pizza, textColor: '#ff6f00' },
	{ title: 'Pasta Primavera', desc: 'Fresh pasta with seasonal vegetables and a light sauce.', price: 13.99, rating: 4.6, img: pasta, textColor: '#ff6f00' },
	{ title: 'Veggie Roll', desc: 'Soft roll stuffed with fresh veggies and sauces.', price: 8.99, rating: 4.5, img: roll, textColor: '#ff6f00' },
	{ title: 'Pancake Stack', desc: 'Fluffy pancakes served with syrup and berries.', price: 9.99, rating: 4.4, img: pancake, textColor: '#ff6f00' },
	{ title: 'Crispy Fries', desc: 'Golden, crispy fries with a side of ketchup.', price: 6.99, rating: 4.3, img: fries, textColor: '#ff6f00' },
];
let filteredMenu = allMenuDishes.filter(d =>
	(!category || category === 'All' || d.title.toLowerCase().includes(category.toLowerCase()) || (d.category && d.category === category)) &&
	(!q || d.title.toLowerCase().includes(q.toLowerCase()))
);
if (sort === 'price-asc') filteredMenu = filteredMenu.sort((a, b) => a.price - b.price);
if (sort === 'price-desc') filteredMenu = filteredMenu.sort((a, b) => b.price - a.price);
const uniqueMenuDishes = [];
const seenMenuTitles = new Set();
for (const d of filteredMenu) {
	if (!seenMenuTitles.has(d.title)) {
		uniqueMenuDishes.push(d);
		seenMenuTitles.add(d.title);
	}
	if (uniqueMenuDishes.length === 6) break;
}

return (
	<div className='container mx-auto px-4 py-12'>
		<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
			<h1 className='text-3xl font-bold'>Our Menu</h1>
			<div className='flex gap-3 items-center'>
				<select value={category} onChange={e=>setCategory(e.target.value)} className='border rounded-md px-3 py-2' style={{ color: 'black', background: 'white' }}>
					<option>All</option>
					<option>Pizza</option>
					<option>Pasta</option>
					<option>Salad</option>
					<option>Dessert</option>
					<option>Mains</option>
				</select>
				<input value={q} onChange={e=>setQ(e.target.value)} placeholder='Search dish' className='border rounded-md px-3 py-2' />
				<select value={sort} onChange={e=>setSort(e.target.value)} className='border rounded-md px-3 py-2' style={{ color: 'black', background: 'white' }}>
					<option value=''>Sort</option>
					<option value='price-asc'>Price: Low → High</option>
					<option value='price-desc'>Price: High → Low</option>
				</select>
				<button onClick={apply} style={{ backgroundColor: '#ff6f00', color: 'white' }} className='px-4 py-2 rounded-md font-semibold'>Apply</button>
			</div>
		</div>

			{/* Show 6 unique dishes at the top, no duplicates */}
			<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
				{uniqueMenuDishes.slice(0, 6).map(d => (
					<DishCard key={d.title} dish={d} onAdd={add} />
				))}
			</div>

			{/* Only show 6 unique featured dishes */}
	</div>
)
}