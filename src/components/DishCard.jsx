import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function DishCard({ dish, onAdd }) {
  const cardRef = useRef(null)

  // Removed useEffect that forcefully set text color to black on mobile. Now CSS will control the color.

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35 }}
      className="bg-white rounded-xl overflow-hidden card-shadow card-hover flex flex-col h-full text-center font-[Poppins],cursive items-center justify-center force-dishcard-mobile"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Image */}
      <div
        className="force-menu-img-container w-full overflow-hidden flex-shrink-0 flex items-center justify-center"
        style={{ minHeight: '180px', maxHeight: '220px', height: '200px' }}
      >
        <img
          src={dish.img}
          alt={dish.title}
          className="w-full object-cover force-menu-img-force"
          style={{ height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center force-dishcard-content-mobile">
        <h3
          className="font-semibold text-center font-[Poppins],cursive"
          style={{
            fontSize: '1rem',
            margin: 0,
          }}
        >
          {dish.title}
        </h3>

        <p
          className="text-xs line-clamp-1 text-center font-[Poppins],cursive"
          style={{ margin: 0 }}
        >
          {dish.desc}
        </p>

        <div
          className="text-base font-bold text-center font-[Poppins],cursive"
          style={{ margin: 0 }}
        >
          PKR {dish.price.toFixed(0)}
        </div>

        <div
          className="text-xs text-center font-[Poppins],cursive"
          style={{ margin: 0 }}
        >
          ⭐ {dish.rating}
        </div>

        {/* Buttons */}
        <div className="dish-btn-row" style={{ gap: '0' }}>
          <button
            onClick={() => onAdd(dish)}
            className="rounded-lg font-bold hover:opacity-90 transition font-[Poppins],cursive"
            style={{
              background: '#FFD600',
              color: '#000',
              fontSize: '1.1rem',
              padding: '0.75rem 1.5rem',
              minWidth: '100px',
              minHeight: '44px',
              margin: '2px',
            }}
          >
            Add
          </button>
          <button
            className="rounded-lg font-bold hover:opacity-90 transition font-[Poppins],cursive"
            style={{
              background: '#FFD600',
              color: '#000',
              fontSize: '1.1rem',
              padding: '0.75rem 1.5rem',
              minWidth: '100px',
              minHeight: '44px',
              margin: '2px',
            }}
          >
            Details
          </button>
        </div>
      </div>
    </motion.article>
  )
}
