'use client'
import React, { useState } from 'react'
import "./wishlist.css"

const Wishlist = () => {
    const [checked, setChecked] = useState(false);
    return (
        <label className="relative inline-block text-[20px] cursor-pointer transition-transform duration-100 hover:scale-110">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="absolute opacity-0 w-0 h-0 cursor-pointer"
      />
      <div
        className={`h-8 w-8 transition-all duration-100 ${
          checked ? 'animate-like' : 'animate-dislike'
        }`}
      >
        <svg viewBox="0 0 256 256" className="h-full w-full">
          <rect fill="none" height="256" width="256" />
          <path
            d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
            fill={checked ? '#FF5353' : 'none'}
            stroke={checked ? 'none' : '#000'}
            strokeWidth="20"
          />
        </svg>
      </div>
    </label>
    )
}

export default Wishlist
