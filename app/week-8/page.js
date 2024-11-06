'use client';

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas'; // Import the new component
import itemsData from './items.json';

function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, { id: Date.now().toString(), ...newItem }]);
  };

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

  return (
    <main className="min-h-screen bg-gray-900 py-10 px-4 flex">
      <div className="w-1/3">
        <h1 className="text-left text-4xl font-bold text-white mb-8">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <div className="w-full mt-8">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      </div>
      <div className="w-1/6 ml-8">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

export default Page;
