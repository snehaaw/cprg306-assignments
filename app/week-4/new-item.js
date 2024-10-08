'use client';

import { useState } from 'react';

export default function NewItem() {
  
  const [quantity, setQuantity] = useState(1);

  function increment () {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  function decrement  () {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-black pt-8">
    <div className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4 w-auto">
        
      <span className="text-xl font-bold">{quantity}</span>

      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="bg-blue-500 text-white rounded-full  w-10 h-10 flex justify-center items-center text-2xl disabled:bg-gray-300"
      >
        -
      </button>

      <button
        onClick={increment}
        disabled={quantity === 20}
        className="bg-blue-500 text-white rounded-full w-10 h-10 flex justify-center items-center text-2xl disabled:bg-gray-300"
      >
          +
        </button>
      </div>
    </div>
  );
}
