'use client';

import React, { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context';

function Page() {
  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user } = useUserAuth();

  const loadItems = async () => {
    if (user) {
      setLoading(true); 
      try {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false); 
      }
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user) {
      try {
        const newItemId = await addItem(user.uid, newItem);
        setItems((prevItems) => [...prevItems, { id: newItemId, ...newItem }]);
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  };

  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };

  return (
    <main className="min-h-screen bg-gray-900 py-10 px-4 flex">
      <div className="w-1/3">
        <h1 className="text-left text-4xl font-bold text-white mb-8">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        {loading ? (
          <div className="text-white mt-8">Loading items...</div>
        ) : (
          <div className="w-full mt-8">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        )}
      </div>
      <div className="w-1/6 ml-8">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}

export default Page;
