import React from 'react';

export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-gray-800 p-4 rounded-lg shadow-md max-w-md">
      <div className="text-white text-lg font-semibold">{name}</div>
      <div className="text-gray-300">Buy {quantity} in {category}</div>
    </li>
  );
}
