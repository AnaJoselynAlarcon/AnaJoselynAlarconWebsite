"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { ServicesCard } from "../app/NewCards/example";

const pages = [
  { name: "Developer", url: "/DeveloperPage" },
  { name: "Nutritionist", url: "/NutritionistPage" },
];

const cardsData = [
  {
    image: "/assets/cardio.png",
    title: "You can become more healthy",
    description:
      "RECOMPOSICIÓN CORPORAL: Reducción de grasa y aumento de tonificación muscular.",
    buttonText: "I want to start",
  },
  {
    image: "/assets/icecream.jpg",
    title: "You can become more healthy",
    description:
      "RECOMPOSICIÓN CORPORAL: Reducción de grasa y aumento de tonificación muscular.",
    buttonText: "I want to start",
  },
  {
    image: "/assets/fruta.png",
    title: "You can become more healthy",
    description:
      "RECOMPOSICIÓN CORPORAL: Reducción de grasa y aumento de tonificación muscular.",
    buttonText: "I want to start",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-b from-white to-gray-500 p-12">
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="hero-map" />

        <div className="bg-gray-600 p-9 relative z-20 flex flex-1 flex-col xl:w-1/2 rounded-2xl">
          <div className="relative flex flex-1 items-start">
            {/* This is where the image goes */}
            <Image
              src="/assets/rdcopy.jpeg"
              alt="Ana Joselyn Alarcon"
              width={50}
              height={50}
              className="relative z-20 w-[268px] rounded-sm bg-teal-500 px-7 py-8"
            />
          </div>
          <h1 className="bold-52 lg:bold-88 mt-10 p-9">Ana Joselyn Alarcon</h1>
          <p className="regular-16 mt-6 text-white xl:max-w-[520px] p-9">
            Because we can be more than what we are, we can transform our bodies
            and minds by choosing inspiring habits.
          </p>

          <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <Image
                    src="/assets/star.svg"
                    key={index}
                    alt="star"
                    width={24}
                    height={24}
                  />
                ))}
            </div>

            <p className="text-blue-500">
              How
              <span className="text-cyan-500 ml-1">to start?</span>
            </p>
          </div>

          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <a
              href="https://wa.me/+14037144087"
              target="_blank"
              rel="noreferrer">
              <button class="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-14 rounded-full">
                {" "}
                Send me a message
              </button>
            </a>
          </div>
        </div>

        <div className="relative flex flex-1 items-start">
          <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-gray-700 px-7 py-8">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="regular-16 text-gray-200">How am I?</p>
                <Image
                  src="/assets/close.svg"
                  alt="close"
                  width={24}
                  height={24}
                />
              </div>
              <p className="font-weight-400 text-white">
                BS in Nutrition and Dietetics
              </p>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-200"></p>
                <p className="font-bold text-white">
                  Health & Fitness Coach, Tech Geek and Mom!
                </p>
              </div>
              <div className="flex flex-col ml-10">
                <p className="regular-16 block text-gray-200">Experience</p>
                <p className="font-bold text-white">5 years</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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

      <div className="w-full m-40">
        <ServicesCard cardsData={cardsData} />
      </div>
    </main>
  );
}
