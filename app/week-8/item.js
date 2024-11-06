'use client';

import React from 'react';

export default function Item({ name, quantity, category, onSelect }) {
  const cleanName = name.replace(/,.*|[\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�]/g, '').trim();

  return (
    <li 
      onClick={() => onSelect(cleanName)} 
      className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer transition-colors duration-300 hover:bg-blue-700"
    >
      <div className="text-white text-lg font-semibold">{name}</div>
      <div className="text-gray-300">Buy {quantity} in {category}</div>
    </li>
  );
}
