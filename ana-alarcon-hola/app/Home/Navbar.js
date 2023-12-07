"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("indigo");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollBy >= 90) {
        setColor("#5405bb");
        setTextColor("#999");
      } else {
        setColor("#1f98f4");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const handleHover = () => {
    setColor("#9999"); // Update the background color when hovering
  };

  const handleHoverExit = () => {
    setColor("#5505f4"); // Revert the background color when hover ends
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}>
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Welcome!
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/DeveloperPage">Developer</Link>
          </li>
          <li className="p-4">
            <Link href="/NutritionistPage">Nutritionist</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
