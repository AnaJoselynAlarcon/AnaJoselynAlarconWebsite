import Image from "next/image";
import Navbar from "./Home/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>Ana</p>
        <Image src="/assets/ana1.jpg" width={900} height={100} alt="Photo" />
      </div>
    </main>
  );
}
