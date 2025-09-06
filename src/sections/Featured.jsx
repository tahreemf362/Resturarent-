import React from 'react'
import DishCard from '../components/DishCard'
import { useAppDispatch } from '../context/AppContext'
import { DISHES } from '../data/dishes'


export default function Featured(){
const dispatch = useAppDispatch()
// Remove all duplicates by title for the entire featured list
const uniqueDishes = [];
const seenTitles = new Set();
DISHES.forEach(d => {
	if (!seenTitles.has(d.title)) {
		uniqueDishes.push(d);
		seenTitles.add(d.title);
	}
});
const top = uniqueDishes.slice(0, 3);
function add(d){ dispatch({type:'ADD_TO_CART', payload:d}) }
return (
<section className='container mx-auto px-4 py-12'>
<div className='flex items-center justify-between'>
<h2 className='text-2xl font-bold'>Featured Dishes</h2>
<p className='text-sm text-slate-500'>Fresh picks chosen by our chef</p>
</div>


<div className="mt-6 flex flex-row flex-wrap md:flex-nowrap gap-8 mx-auto items-stretch justify-center">
	{top.map(d => {
		let textColor = undefined;
		if (
			d.title === 'Burger Special' ||
			d.title === 'Margherita Pizza' ||
			d.title === 'Pasta Primavera'
		) {
			textColor = '#ff6f00';
		}
		return (
			<div className="force-feature-card">
				<DishCard key={d.id} dish={{ ...d, textColor }} onAdd={add} />
			</div>
		);
	})}
</div>
</section>
)
}