"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import DevPosts from "./dev-posts";
import fetchData from "./dataFetching";

export default function Home() {
  const [data, setData] = useState(null);
  //to ask input
  const [inputValue, setInputValue] = useState("");
  const [address, setAddress] = useState("");

  async function loadData() {
    const dataArray = await fetchData();
    const tradenames = dataArray.map((item) => item.tradename);
    setData(tradenames);
    console.log(tradenames);
  }

  useEffect(() => {
    loadData();
  }, []);

  //input
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  async function handleSearch() {
    const item = data.find((item) => item === inputValue);
    if (item) {
      const dataArray = await fetchData();
      const address = dataArray.find(
        (dataItem) => dataItem.tradename === item
      ).address;
      setAddress(address);
    } else {
      setAddress("Address not found");
    }
  }

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <div className="border-spacing-1 mb-5">
        <h1 className="text-4xl font-bold text-center mt-10 text-blue-600">
          Software Developer with a passion for Data
        </h1>
      </div>
      <div>
        <DevPosts />
      </div>

      <div>
        <h2 className="text-blue-500 mb-4 text-4xl mt-8 font-sans-roboto">
          Is a business is licensed?{" "}
        </h2>
        <h3 className="font-sans-arial text-center">Find it out here.</h3>
      </div>

      <div className="mt-8">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="border border-gray-300 px-4 py-2 rounded-md"
          placeholder="Enter tradename"
        />
        <button
          onClick={handleSearch}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Search
        </button>
      </div>

      {address && <div className="mt-4">Address: {address}</div>}
    </main>
  );
}
