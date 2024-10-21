import React from 'react';
import ItemList from './item-list';

function Page() {
  return (
    <main className="min-h-screen bg-gray-900 py-10 px-4">
      <h1 className="text-left text-4xl font-bold text-white mb-8">Shopping List</h1>
      <div className="w-full">
        <ItemList />
      </div>
    </main>
  );
};

export default Page;


