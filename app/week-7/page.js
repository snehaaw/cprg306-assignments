'use client';

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, { id: Date.now().toString(), ...newItem }]);
  };

  return (
    <main className="min-h-screen bg-gray-900 py-10 px-4">
      <h1 className="text-left text-4xl font-bold text-white mb-8">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <div className="w-full mt-8">
        <ItemList items={items} />
      </div>
    </main>
  );
}

export default Page;