import type { Fruit } from "../types/index.d.ts";

// fetch list of users
export async function GET() {
  // fetch users from database
  // SELECT * FROM users
  const fruits = [
    { id: 1, name: "Apple", calories: 52 },
    { id: 2, name: "Apricot", calories: 48 },
    { id: 3, name: "Banana", calories: 96 },
    { id: 4, name: "Blackberries", calories: 43 },
    { id: 5, name: "Blueberries", calories: 57 },
    { id: 6, name: "Cherries", calories: 50 },
    { id: 7, name: "Cranberries", calories: 46 },
    { id: 8, name: "Grapes", calories: 69 },
    { id: 9, name: "Kiwi", calories: 41 },
    { id: 10, name: "Lemon", calories: 29 },
    { id: 11, name: "Lime", calories: 30 },
    { id: 12, name: "Mango", calories: 60 },
    { id: 13, name: "Orange", calories: 43 },
    { id: 14, name: "Peach", calories: 39 },
    { id: 15, name: "Pear", calories: 57 },
    { id: 16, name: "Pineapple", calories: 50 },
    { id: 17, name: "Plum", calories: 46 },
    { id: 18, name: "Raspberries", calories: 53 },
    { id: 19, name: "Strawberries", calories: 32 },
    { id: 20, name: "Watermelon", calories: 30 },
    { id: 21, name: "Avocado", calories: 160 },
    { id: 22, name: "Coconut", calories: 354 },
    { id: 23, name: "Durian", calories: 147 },
    { id: 24, name: "Guava", calories: 68 },
    { id: 25, name: "Jackfruit", calories: 94 },
    { id: 26, name: "Lychee", calories: 66 },
    { id: 27, name: "Mangosteen", calories: 73 },
    { id: 28, name: "Papaya", calories: 43 },
    { id: 29, name: "Pomegranate", calories: 83 },
    { id: 30, name: "Starfruit", calories: 31 },
    { id: 31, name: "Blackcurrant", calories: 63 },
    { id: 32, name: "Cantaloupe", calories: 34 },
    { id: 33, name: "Fig", calories: 74 },
    { id: 34, name: "Gooseberries", calories: 44 },
    { id: 35, name: "Honeydew Melon", calories: 36 },
    { id: 36, name: "Kiwifruit", calories: 61 },
    { id: 37, name: "Mulberries", calories: 43 },
    { id: 38, name: "Passion Fruit", calories: 97 },
    { id: 39, name: "Persimmon", calories: 81 },
    { id: 40, name: "Rambutan", calories: 82 },
    { id: 41, name: "Tangerine", calories: 53 },
    { id: 42, name: "Clementine", calories: 47 },
    { id: 43, name: "Kiwanos", calories: 44 },
    { id: 44, name: "Litchis", calories: 66 },
    { id: 45, name: "Mandarin", calories: 53 },
    { id: 46, name: "Nectarine", calories: 44 },
    { id: 47, name: "Quince", calories: 57 },
    { id: 48, name: "Tamarind", calories: 239 },
    { id: 49, name: "Ugli Fruit", calories: 45 },
    { id: 50, name: "Yuzu", calories: 53 }
  ];

  console.log(`fetch fruits`);
  return new Response(JSON.stringify(fruits), { status: 200 });
}

// create a new user
export async function POST(request: Request) {
  const newFruit = await request.json();

  // create new user in database
  // INSERT INTO users (name, age) VALUES (${newFruit.name}, ${newFruit.age}) RETURNING *
  // update id based on returning result
  newFruit.id = 3;

  console.log(`create new user`);
  return new Response(JSON.stringify(newFruit), { status: 201 });
}