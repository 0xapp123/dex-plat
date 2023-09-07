import React from "react";
import { Data } from "@/data/JSON";
import * as Icons from "../../SVG/Icons";
import Link from "next/link";

const AssetInformationWidget = () => {
  return (
    <div className="w-full flex flex-col gap-2 bg-th-bkg-4 px-5 py-4 rounded-md">
      <p className="text-[14px] text-center font-inter text-white font-semibold">
        Asset information
      </p>
      {/* ticker + total supply + decimals + links here  */}
      <div className="w-full flex justify-between items-center">
        {/* ticker */}
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-normal font-inter text-[#FFE5CC]">
            Ticker
          </p>
          <div className="flex gap-1 justify-center items-center">
            <p className="uppercase text-white text-[14px] font-medium font-inter">
              SOLAPE
            </p>
            <Icons.Link />
          </div>
        </div>
        {/* total supply */}
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-normal font-inter text-[#FFE5CC]">
            Total supply
          </p>
          <p className="uppercase text-white text-[14px] font-medium font-inter">
            300,000,000
          </p>
        </div>
        {/* decimals */}
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-normal font-inter text-[#FFE5CC]">
            Decimals
          </p>
          <p className="uppercase text-white text-[14px] font-medium font-inter">
            9
          </p>
        </div>
        {/* links */}
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-normal font-inter text-[#FFE5CC]">
            Links
          </p>
          <div className="flex justify-center items-center gap-1">
            {Data.dexData.socialIcons.map((item, index) => {
              return (
                <Link
                  key={index}
                  href="#"
                  className="w-[23px] h-[23px] bg-[#FFCB99] flex justify-center items-center rounded-full hover:opacity-80"
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetInformationWidget;
