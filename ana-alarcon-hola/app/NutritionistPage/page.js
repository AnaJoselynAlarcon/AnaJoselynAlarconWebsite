"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchFruits } from "./apiResponse";
import NutritionistPosts from "./nut-posts";

export default function Home() {
  const [fruits, setFruits] = useState([]);
  const [filteredFruits, setFilteredFruits] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const fetchedFruits = await fetchFruits();
      setFruits(fetchedFruits);
      setFilteredFruits(fetchedFruits); // Set filteredFruits initially to all Fruits
    }
    fetchData();
  }, []); // Empty dependency array to ensure it runs only once after mounting

  // Input
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  // Filter Fruits based on the search term
  async function handleSearch() {
    const fruit = fruits.find(
      (f) => f.name.toLowerCase() === inputValue.toLowerCase()
    );

    if (fruit) {
      // Capitalize the first letter of the found fruit's name
      const capitalizedFruit = {
        ...fruit,
        name: fruit.name.charAt(0).toUpperCase() + fruit.name.slice(1),
      };
      setFilteredFruits([capitalizedFruit]); // Set filteredFruits to an array containing the found fruit
    } else {
      setFilteredFruits([{ name: "Fruit not found", calories: "N/A" }]); // Set a default message
    }

    // Set buttonClicked to true
    setButtonClicked(true);
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="border-spacing-1 mb-5">
        <h1 className="text-4xl font-bold text-center mt-10 text-cyan-600">
          Bachelors of Science in Nutrition
        </h1>
      </div>
      <div>
        <NutritionistPosts />
      </div>
      <div className="p-8 border-8 border-cyan-300 bg-cyan-600 rounded-lg m-20 ">
        <h2 className="text-2xl font-bold text-white font-serif text-center">
          How many calories?
        </h2>
        <input
          type="text"
          placeholder="Search a fruit"
          value={inputValue}
          onChange={handleInputChange}
          className="border border-gray-300 px-4 py-2 mt-4 rounded-md"
        />

        <button
          onClick={handleSearch}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Search
        </button>
        {/* Render filtered fruits only if button is clicked */}
        {buttonClicked && (
          <ul className="mt-4">
            {filteredFruits.map((fruit) => (
              <div
                key={fruit.name}
                className="text-2xl font-semibold text-center py-2 border-b border-gray-300">
                {`The ${fruit.name} has ${fruit.calories} calories per 100g.`}
              </div>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
