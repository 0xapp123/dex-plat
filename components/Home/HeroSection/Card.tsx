import React from "react";
import { BsTriangleFill } from "react-icons/bs";
import MiniChart from "@/components/Home/HeroSection/MiniCart";
import Image from "next/image";

const Card = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[248px] h-[320px] rounded-[32px] bg-th-bkg-3 ">
        <div className="flex flex-col p-6 items-start">
          <div className="flex justify-center items-center gap-3">
            <Image
              src="/assets/card.svg"
              width={40}
              height={40}
              alt=""
              className="object-contain"
            />
            <p className="uppercase text-th-brand font-inter text-[20px] font-bold">
              orca
            </p>
          </div>
          {/* price */}
          <p className="text-th-brand font-inter text-[32px] font-bold mt-4">
            $1.424
          </p>
          <div className="flex justify-center items-center gap-1">
            <BsTriangleFill className="text-th-fkg-1" />
            <p className="text-th-fkg-1 text-[16px] font-inter font-bold">
              17.24%
            </p>
          </div>
        </div>
        <MiniChart />
      </div>
    </div>
  );
};

export default Card;
