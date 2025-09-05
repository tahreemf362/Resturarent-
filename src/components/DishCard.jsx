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
className='bg-white rounded-xl overflow-hidden card-shadow card-hover text-black'
>
<div className='h-44 overflow-hidden'>
<img src={dish.img} alt={dish.title} className='w-full h-full img-fit' />
</div>
<div className='p-4'>
<div className='flex justify-between items-start gap-2'>
<div>
<h3 className='font-semibold text-black'>{dish.title}</h3>
<p className='text-sm mt-1 line-clamp-2 text-black'>{dish.desc}</p>
</div>
<div className='text-right'>
<div className='text-lg font-bold text-black'>${dish.price.toFixed(2)}</div>
<div className='text-sm text-black'>⭐ {dish.rating}</div>
</div>
</div>
<div className='mt-4 flex justify-between items-center'>
<button onClick={()=>onAdd(dish)} className='bg-brand-500 text-white px-3 py-2 rounded-md text-sm font-semibold hover:opacity-95 transition'>Add</button>
<button className='text-sm text-slate-600 hover:text-slate-800'>Details</button>
</div>
</div>
</motion.article>
)
}