import React from "react";
import Image from "next/image";

interface Props {
  img: string;
  title: string;
  des: string;
  btnText: string;
}

const Card = ({ img, title, des, btnText }: Props) => {
  return (
    <div className="w-full h-full min-h-[345px] bg-th-bkg-3 rounded-[30px]">
      <div className="w-full h-full py-8 px-6 flex flex-col justify-between">
        {/* top image */}
        <div className="flex flex-col gap-2 h-full">
          <div className="w-full grid grid-cols-[1fr,0.5fr,1fr] justify-center items-center">
            <div className="w-full h-[3px] bg-th-gradient-1"></div>
            <div className="w-full h-[44px] relative">
              <Image src={img} fill alt="" className="object-contain" />
            </div>
            <div className="w-full h-[3px] bg-th-gradient-1"></div>
          </div>
          {/* title */}
          <p className="uppercase text-th-brand text-[24px] font-inter font-bold mt-3">
            {title}
          </p>
          <p className="text-th-brand text-[16px] font-thin font-inter">
            {des}
          </p>
        </div>
        {/* ==> button */}
        <button
          className={`w-full h-[50px] capitalize ${
            btnText === "submit request" ? "bg-th-gradient-1" : "bg-[#2e3838]"
          } text-th-brand text-[16px] font-semibold rounded-[10px] mt-2`}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Card;
