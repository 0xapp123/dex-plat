import React from "react";
import Link from "next/link";
import * as Icons from "../../SVG/Icons";

const AccountsWidget = () => {
  return (
    <div className="w-full grid grid-cols-[2fr,1.3fr] justify-center items-center bg-th-bkg-4 px-5 py-4 rounded-md">
      <p className="text-[14px] font- text-end font-inter text-white">
        Accounts
      </p>
      <div className="w-full flex justify-end">
        <button className="text-[12px] font-inter text-white font-medium bg-[#2E3838] px-2 h-[30px] rounded-md flex justify-center items-center hover:opacity-80">
          Token accounts
        </button>
      </div>
      {/* wallet balance */}
      <div className="w-full col-span-2 flex items-start flex-col gap-1 mt-2">
        <div className="flex justify-center items-center gap-2">
          <p className="text-[18px] font-normal font-inter text-th-fkg-4 mb-1">
            Wallet balances
          </p>
          <Icons.Warning />
        </div>
        {/* coin 1 */}
        <div className="flex justify-center items-center gap-2">
          <Icons.SolapeCoin />
          <p className="text-[20px] font-thin text-white font-inter">
            2,555,661.5402
          </p>
        </div>
        {/* coin 2 */}
        <div className="flex justify-center items-center gap-2">
          <Icons.UsdCoin />
          <p className="text-[20px] font-thin text-white font-inter">
            1,800.5402
          </p>
        </div>
      </div>
      <div className="w-full flex col-span-2 justify-between mt-4">
        {/* Unsettled balances */}
        <div className="w-full flex items-start flex-col gap-1">
          <div className="flex justify-center items-center gap-2">
            <p className="text-[18px] whitespace-nowrap font-normal font-inter text-th-fkg-4 mb-1">
              Unsettled balances
            </p>
            <Icons.Warning />
          </div>
          {/* coin 1 */}
          <div className="flex justify-center items-center gap-2">
            <Icons.SolapeCoin />
            <p className="text-[20px] font-thin text-white font-inter">
              12.0421
            </p>
          </div>
          {/* coin 2 */}
          <div className="flex justify-center items-center gap-2">
            <Icons.UsdCoin />
            <p className="text-[20px] font-thin text-white font-inter">
              0.0000
            </p>
          </div>
        </div>
        {/* settle button */}
        <div className="w-full flex justify-end">
          <button className="flex gap-1 justify-center items-center w-[90px] h-[38px] rounded-md bg-[#FF810A] hover:opacity-80">
            <p className="text-[14px] text-white font-normal font-inter">
              Settle
            </p>
            <Icons.Copy />
          </button>
        </div>
      </div>
      {/*  */}
      <div className="w-full col-span-2 flex justify-between mt-4">
        <Link
          href="#"
          className="text-th-fkg-4 text-[16px] font-inter font-normal whitespace-nowrap hover:opacity-80"
        >
          Need a Solana wallet?
        </Link>
        {/* phandtom + slope button */}
        <div className="w-full flex gap-1 justify-end items-center">
          <Link
            href="#"
            className="text-[14px] font-normal text-[#FF810A] underline hover:opacity-80"
          >
            Phantom
          </Link>
          <div className="w-[1px] h-[16px] bg-white"></div>
          <Link
            href="#"
            className="text-[14px] font-normal text-[#FF810A] underline hover:opacity-80"
          >
            Slope
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountsWidget;
