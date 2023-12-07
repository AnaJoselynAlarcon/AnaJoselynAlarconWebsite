import type { Fruit } from "./types";

// GET
export async function fetchFruits() {
  const response = await fetch("http://localhost:3000/NutritionistPage/api");
  const fruits: Fruit[] = await response.json();

  return fruits;
}

//const fruits = await fetchfruits();

//POST
export async function createFruit() {
  const response: Response = await fetch(
    "http://localhost:3000/NutritionistPage/api",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Pomegranate",
        calories: 25,
      }),
    }
  );

  try {
    const fruit: Fruit = await response.json();
    return fruit;
  } catch (error) {
    return null;
  }
}

//const newFruit = await createFruit();

// PUT
export async function replaceFruit() {
  const response: Response = await fetch(
    "http://localhost:3000/NutritionistPage/api",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Mandarin",
        calories: 51,
      }),
    }
  );

  try {
    const fruit: Fruit = await response.json();
    return fruit;
  } catch (error) {
    return null;
  }
}

//await replaceFruit();

//PATCH
export async function updateFruit() {
  const response: Response = await fetch(
    "http://localhost:3000/NutritionistPage/api",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Papaya",
      }),
    }
  );

  try {
    const fruit: Fruit = await response.json();
    return fruit;
  } catch (error) {
    return null;
  }
}

//await updateFruit();

// DELETE
export async function deleteFruit() {
  const response: Response = await fetch(
    "http://localhost:3000/NutritionistPage/api",
    {
      method: "DELETE",
    }
  );

  try {
    const fruit: Fruit = await response.json();
    return fruit;
  } catch (error) {
    return null;
  }
}

//await deleteFruit();
