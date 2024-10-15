'use client';

import { useState } from 'react';

export default function NewItem() {
  
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = { name, quantity, category };

    console.log(item);

    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="flex  justify-center items-start min-h-screen bg-black pt-8">
      <form onSubmit={handleSubmit} className="bg-black p-4 rounded-lg shadow-lg  space-x-4 w-auto ">
        {/* Name */}
        <div className="mb-4 p-2 bg-black rounded-lg flex items-start w-auto">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-3 rounded w-full bg-white text-black"
            placeholder="Item name"
          />
        </div>
      <div className="mb-2 bg-black rounded-lg flex items-center space-x-12 h-10"> 
        <div className="bg-white p-2 rounded-lg shadow-lg flex items-start space-x-4 h-12 w-auto">
      <span className="text-xl font-bold">{quantity}</span>

      <button
        type="button"
        onClick={decrement}
        disabled={quantity === 1}
        className="bg-blue-500 text-white rounded-full  w-8 h-8   text-2xl disabled:bg-gray-300"
      >
        -
      </button>

      <button
        type="button"
        onClick={increment}
        disabled={quantity === 20}
        className="bg-blue-500 text-white rounded-full w-8 h-8  text-2xl disabled:bg-gray-300"
      >
          +
        </button>
      </div>
      {/* Category*/}
      <div className="p-2 rounded-lg shadow-lg flex items-end  h-12 w-auto">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2  rounded w-full"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        </div>
        {/* Submission Button */}
        <div className=' py-2'>
        <button type="submit" className="bg-green-500 text-white  py-2 rounded-md w-full">
          Submit
        </button>
        </div>
      </form>
    </div>
  );
}
