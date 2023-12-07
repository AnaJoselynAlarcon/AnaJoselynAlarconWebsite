import Image from "next/image";
import React from "react";
import Post from "./post";

export default function NutritionistPosts() {
  const posts = [
    {
      name: "Will protein make me gain weight?",
      channel: "YouTube",
      image: "/assets/protein.png",
      link: "https://youtu.be/MYCnI8xM9MU?si=MgRkcikQrEXWudbb",
    },
    {
      name: "Eating Fruits, pros and cons..!",
      channel: "YouTube",
      image: "/assets/fruta.png",
      link: "https://youtu.be/MYCnI8xM9MU?si=MgRkcikQrEXWudbb",
    },
    {
      name: "Chili  Pumpkin Seeds",
      channel: "Instagram",
      image: "/assets/pumpkin.png",
      link: "https://www.instagram.com/reel/CzKwweErid2/?utm_source=ig_web_copy_link&igshid=N2ViNmM2MDRjNw==",
    },

    {
      name: "Potato chips not fried",
      channel: "Instagram",
      image: "/assets/potatochips.png",
      link: "https://www.instagram.com/reel/CyenpV5vNJ0/?utm_source=ig_web_copy_link&igshid=N2ViNmM2MDRjNw==",
    },
    {
      name: "Keto cake 🎂 super easy 🎉",
      channel: "Instagram",
      image: "/assets/ketocake.jpeg",
      link: "https://www.instagram.com/p/C0C544Ivh-e/?utm_source=ig_web_copy_link&igshid=N2ViNmM2MDRjNw==",
    },
    {
      name: "Not-a-pretzel🥨🌚 🍕 Pizza",
      channel: "Instagram",
      image: "/assets/pizza.jpeg",
      link: "https://www.instagram.com/p/CywrjcjvHe1/?utm_source=ig_web_copy_link&igshid=N2ViNmM2MDRjNw==",
    },
    {
      name: "Selecting a healthy bread in 3 simple steps",
      channel: "Instagram",
      image: "/assets/bread.png",
      link: "https://www.instagram.com/p/CxLbQ0xrsOu/?utm_source=ig_web_copy_link&igshid=N2ViNmM2MDRjNw==",
    },
    {
      name: "10 min Cupcakes 🧁",
      channel: "Instagram",
      image: "/assets/cupcakes.jpeg",
      link: "https://www.instagram.com/reel/CyGflZ_LM6k/?utm_source=ig_web_copy_link&igshid=N2ViNmM2MDRjNw==",
    },
    {
      name: "Cardio or Strength Training?",
      channel: "YouTube",
      image: "/assets/cardio.png",
      link: "https://youtu.be/HW-RalVZuhA?si=yzTVFAUWXPrn6RUh",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-1">
      {posts.map((post, index) => (
        <a
          key={index}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "grid", gridTemplateRows: "1fr" }}>
          <Post name={post.name} channel={post.channel} image={post.image} />
        </a>
      ))}
    </div>
  );
}
