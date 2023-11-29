import Image from "next/image";
import Navbar from "./Home/Navbar";
import Nutritionist from "./NutritionistPage/nutritionist";
import DevPosts from "./DeveloperPage/dev-posts";
import Post from "./DeveloperPage/post";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <Nutritionist />

      <div>
        <DevPosts />
      </div>
    </main>
  );
}
