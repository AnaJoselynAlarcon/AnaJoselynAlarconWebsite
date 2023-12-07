import React from "react";
import Image from "next/image";

export default function Post({ name, channel, image }) {
  return (
    <div className="border-black border-2 p-4  hover:bg-indigo-500 ">
      <div className="flex flex-col items-center">
        <ul>
          <li className="font-bold text-center">{name}</li>
          <li className="text-gray-600 text-center">
            Find more on {channel}
            <div className=" w-64 h-64 rounded-md overflow-hidden mt-2">
              <div className="aspect-w-4 aspect-h-6">
                <Image src={image} width={250} height={399} alt="post" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
