'use client';

import React, { useEffect, useState } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  };

  const loadMealIdeas = async () => {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl text-white">Meal Ideas</h2>
      {meals.length > 0 ? (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="text-white text-lg font-semibold">{meal.strMeal}</div>
              <img src={meal.strMealThumb} alt={meal.strMeal} className="mt-2 " />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No meal ideas available.</p>
      )}
    </div>
  );
}
