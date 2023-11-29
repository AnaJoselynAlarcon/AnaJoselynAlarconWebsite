import React from "react";
import Image from "next/image";

export default function Post({ name, channel, iframeSrc }) {
  return (
    <div className="border-black border-2 p-4  hover:bg-indigo-500 ">
      <div className="flex flex-col items-center">
        <ul>
          <li className="font-bold text-center">{name}</li>
          <li className="text-gray-600 text-center">
            Find more on {channel}
            <div className=" rounded-md overflow-hidden">
              <iframe
                src={iframeSrc}
                height="399"
                width="250"
                title="Embedded post"></iframe>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
