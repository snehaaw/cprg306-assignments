"use client";  

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  
  const [sortBy, setSortBy] = useState('name');
  const [groupByCategory, setGroupByCategory] = useState(false); 

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name); 
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category); 
    }
    return 0;
  });

  
  const groupedItems = groupByCategory
    ? sortedItems.reduce((grouped, item) => {
        if (!grouped[item.category]) {
          grouped[item.category] = [];
        }
        grouped[item.category].push(item); 
        return grouped;
      }, {})
    : null;

  const handleSort = (sortType) => {
    setSortBy(sortType);
    setGroupByCategory(false); 
  };

  const handleGroupByCategory = () => {
    setGroupByCategory(true);
    setSortBy(''); 
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 mb-6">
        <text className='px-2 py-2 font-medium bg-black text-white'>Sort by : </text>
        <button
          onClick={() => handleSort('name')}
          className={`px-4 py-2 font-medium rounded ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          Name
        </button>
        <button
          onClick={() => handleSort('category')}
          className={`px-4 py-2 font-medium rounded ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          Category
        </button>
        <button
          onClick={handleGroupByCategory}
          className={`px-4 py-2 font-medium rounded ${groupByCategory ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          Grouped Category
        </button>
      </div>

      {groupByCategory ? (
        <div>
          {Object.keys(groupedItems).sort().map((category) => (
            <div key={category}>
              <h2 className="text-lg font-semibold text-white capitalize mb-2">{category}</h2>
              <ul className="space-y-2">
                
                {groupedItems[category]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item) => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                  ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="space-y-4">
          {sortedItems.map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
          ))}
        </ul>
      )}
    </div>
  );
}
