import React from "react";
import Image from "next/image";
import { PiTriangleFill } from "react-icons/pi";

interface Props {
  coinImg: string;
  coinName: string;
  currency: string;
  price: number;
  percentage: number;
}

const SliderCard = ({
  coinImg,
  coinName,
  currency,
  price,
  percentage,
}: Props) => {
  return (
    <div className="slider max-w-[200px] h-[70px] flex flex-col justify-center items-center bg-th-bkg-4 rounded-md">
      {/* coin icon + name */}
      <div className="flex justify-center items-center gap-1">
        <Image
          src={coinImg}
          width={32}
          height={32}
          className="object-contain"
          alt=""
        />
        <div className="flex justify-center items-center gap-2">
          <p className="text-[#FFCB99] uppercase text-[16px] font-normal font-inter">
            {coinName}
          </p>
          <p className="w-[2px] h-[20px] bg-white rotate-12"></p>
          <p className="text-[#FFCB99] uppercase text-[16px] font-normal font-inter">
            {currency}
          </p>
        </div>
      </div>
      {/* coin price */}
      <div className="flex gap-1 justify-center items-center">
        <p className="text-[14px] font-normal text-white">${price}</p>
        <PiTriangleFill className="text-[#0AD171] text-[12px]" />
        <p className="text-[14px] font-normal text-[#0AD171]">{percentage}%</p>
      </div>
    </div>
  );
};

export default SliderCard;
