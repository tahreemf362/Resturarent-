import React from 'react'
import { motion } from 'framer-motion'


export default function DishCard({dish, onAdd}){
return (
<motion.article
	initial={{opacity:0, y:12}}
	whileInView={{opacity:1, y:0}}
	viewport={{once:true}}
	whileHover={{ scale: 1.02 }}
	transition={{duration:0.35}}
				className='bg-white rounded-xl overflow-hidden card-shadow card-hover text-black flex flex-col h-full text-center font-[Poppins],cursive items-center justify-center' style={{width:'100%',height:'100%'}} 
>
			<div className='force-menu-img-container w-full overflow-hidden flex-shrink-0 flex items-center justify-center'>
				<img src={dish.img} alt={dish.title} className='w-full object-cover force-menu-img-force' />
			</div>
		<div className='p-4 flex flex-col flex-1 items-center'>
			<h3 className='font-semibold text-black text-center font-[Poppins],cursive'>{dish.title}</h3>
			<p className='text-sm mt-1 line-clamp-2 text-black text-center font-[Poppins],cursive'>{dish.desc}</p>
			<div className='text-lg font-bold text-black mt-2 text-center font-[Poppins],cursive'>${dish.price.toFixed(2)}</div>
			<div className='text-sm text-black mb-2 text-center font-[Poppins],cursive'>⭐ {dish.rating}</div>
			<div className='dish-btn-row'>
				<button onClick={()=>onAdd(dish)} className='dish-btn-orange px-6 py-3 rounded-lg text-lg font-bold hover:opacity-90 transition font-[Poppins],cursive'>Add</button>
				<button className='dish-btn-orange px-6 py-3 rounded-lg text-lg font-bold hover:opacity-90 transition font-[Poppins],cursive'>Details</button>
			</div>
		</div>
</motion.article>
)
}