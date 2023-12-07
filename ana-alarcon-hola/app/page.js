import React from "react";
import Link from "next/link";
import Image from "next/image";

const pages = [
  { name: "Developer", url: "/DeveloperPage" },
  { name: "Nutritionist", url: "/NutritionistPage" },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-b from-gray-500 to-purple-500 p-12">
      <Image
        src="/assets/ana1.jpg"
        alt="Ana's profile picture"
        width={500}
        height={500}
        className="border-white rounded-full "
      />
      <h1 className="text-white mb-4 text-2xl mt-8 font-sans">Healthy Geek</h1>

      <div className="flex flex-row space-x-4">
        {pages.map((page, index) => (
          <button
            key={index}
            className="bg-gradient-to-r from-black-500 to-blue-500 text-white border-white-500 border-2 px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition duration-300">
            <Link href={page.url}>{page.name}</Link>
          </button>
        ))}
      </div>
    </main>
  );
}
