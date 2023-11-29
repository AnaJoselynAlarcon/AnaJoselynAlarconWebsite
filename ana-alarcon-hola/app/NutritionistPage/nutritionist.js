import Image from "next/image";
import React from "react";

const Nutritionist = () => {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image
          src="/assets/ana1.jpg"
          width={900}
          height={100}
          alt="Photo"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <Image
            src="/assets/acai.jpg"
            width={900}
            height={100}
            alt="Photo"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Nutritionist;
