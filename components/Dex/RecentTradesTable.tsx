import React from "react";
import * as Icons from "../../SVG/Icons";
import { Data } from "@/data/JSON";

const RecentTradesTable = () => {
  return (
    <div className="w-full flex flex-col bg-th-bkg-4 px-4 py-5 rounded-md">
      <p className="text-[14px] text-center font-inter font-normal text-white">
        Recent Trades
      </p>
      {/* table -------->  */}
      <div className="w-full flex flex-col gap-3 mt-5">
        {/* table column --> */}
        <div className="w-full grid grid-cols-[1.5fr,1.5fr,1fr,1fr]">
          {/* ist col label */}
          <div className="w-full flex justify-start items-center">
            <p className="text-[14px] font-normal text-th-fkg-4">
              Price (USDC)
            </p>
          </div>
          {/* 2nd col label */}
          <div className="w-full flex justify-end items-center">
            <p className="text-[14px] font-normal text-th-fkg-4">
              Size (SOLAPE)
            </p>
          </div>
          {/* 3rd col label */}
          <div className="w-full flex justify-end items-center">
            <p className="text-[14px] font-normal text-th-fkg-4">Tx</p>
          </div>
          {/* 4rth col label */}
          <div className="w-full flex justify-end items-center">
            <p className="text-[14px] font-normal text-th-fkg-4">Time</p>
          </div>
        </div>
        {/* table rows --> */}
        <div className="w-full max-h-[285px] overflow-auto flex flex-col gap-2 hideScrollBar">
          {Data.dexData.recentTradesData.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full grid grid-cols-[1.5fr,1.5fr,1fr,1fr]"
              >
                {/* price */}
                <div className="w-full flex justify-start items-center">
                  <p className="text-[14px] text-[#0AD171] font-normal font-inter">
                    {item.price}
                  </p>
                </div>
                {/* size */}
                <div className="w-full flex justify-end items-center">
                  <p className="text-[14px] text-white font-normal font-inter">
                    {item.size}
                  </p>
                </div>
                {/* tx */}
                <div className="w-full flex justify-end items-center">
                  <Icons.Link />
                </div>
                {/* time */}
                <div className="w-full flex justify-end items-center">
                  <p className="text-[14px] text-white font-normal font-inter">
                    {item.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentTradesTable;
