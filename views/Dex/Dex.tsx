import React, { useState } from "react";
import WideWrapper from "@/components/shared/ComponentWrapper/WideWrapper";
import { HiOutlineStar } from "react-icons/hi";
import { BsChevronDown, BsUbuntu } from "react-icons/bs";
import { PiTriangleFill } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";
import AssetInformationWidget from "@/components/Dex/AssetInformationWidget";
import AccountsWidget from "@/components/Dex/AccountsWidget";
import ConnectWalletWidget from "@/components/Dex/ConnectWalletWidget";
import RecentTradesTable from "@/components/Dex/RecentTradesTable";
import * as Icons from "../../SVG/Icons";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import OrdersTable from "@/components/Dex/OrdersTable";
import BuySell from "@/components/Dex/BuySell";
import Orderbook from "@/components/Dex/Orderbook";
import SettleCard from "@/components/Dex/SettleCard";

const Dex = () => {
  // states ------------->

  const [navigateSlideItem, setNavigateSlideItem] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  // states ends here ------------>

  // configuration for slider ------------->
  const settings = {
    // infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    speed: 900,
    slidesToShow: 3,
    nextArrow: <CustomNextArrow />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //   methods ------------->

  function CustomNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        onClick={() => {
          onClick();
          setNavigateSlideItem(true);
        }}
        className="absolute -right-6 w-[26px] h-[70px] bg-[#121616] cursor-pointer rounded-l-[6px] top-0 flex justify-center items-center"
      >
        <PiCaretRightBold className="text-white text-[36px]" />
      </div>
    );
  }

  //  methods ends here -------------->

  return (
    <WideWrapper style="bg-black relative">
      <div className="w-full flex flex-col">
        <div className="w-full h-[100px] flex justify-between items-center">
          {/* left portion --------------> */}
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-2">
              {/* add to favorite icon */}
              <HiOutlineStar
                onClick={() => setIsFavorite(!isFavorite)}
                className="text-white text-[28px] cursor-pointer"
              />
              {/* coin name */}
              <div className="flex justify-center items-center gap-2">
                {/* icons */}
                <div className="flex justify-center items-center">
                  <Icons.SolapeCoin className="w-[28px] h-[28px] -mr-3 z-10" />
                  <Icons.UsdCoin className="w-[28px] h-[28px]" />
                </div>
                <div className="flex justify-center items-center gap-2">
                  {/* name */}
                  <div className="flex justify-center items-center gap-2">
                    <p className="text-white uppercase select-none text-[16px] font-bold font-inter">
                      sloape
                    </p>
                    <p className="w-[2px] h-[20px] bg-white rotate-12"></p>
                    <p className="text-white uppercase select-none text-[16px] font-bold font-inter">
                      usdc
                    </p>
                  </div>
                  <BsChevronDown className="text-white text-[18px] cursor-pointer" />
                </div>
              </div>
            </div>
            {/* market price */}
            <div className="flex flex-col">
              <p className="text-[#FFCB99] text-[12px] font-inter font-thin">
                Mark price
              </p>
              <p className="text-white text-[18px] font-medium font-inter">
                0.5042
              </p>
            </div>
            {/* 24h change */}
            <div className="flex flex-col">
              <p className="text-[#FFCB99] text-[12px] font-inter font-thin">
                24h change
              </p>
              <p className="text-[#0AD171] text-[18px] font-medium font-inter">
                +4.09%
              </p>
            </div>
            {/* 24h volume */}
            <div className="flex flex-col">
              <p className="text-[#FFCB99] text-[12px] font-inter font-thin">
                24h Volume
              </p>
              <p className="text-white text-[18px] font-medium font-inter">
                $1,234,249.24
              </p>
            </div>
          </div>
          {/* right portion ------------------> */}
          {/* <div className="flex gap-4 justify-center items-center absolute right-6">
            <p className="text-[14px] text-white font-medium font-inter">
              Gainers
            </p>
            <div className="w-[580px]">
              <Slider {...settings}>
                {[0, 1, 2, 3, 4].map((item: any, index: number) => {
                  return (
                    <div className="slider max-w-[180px] h-[70px] flex flex-col bg-[red] justify-center items-center bg-th-bkg-4 rounded-md">
                      <div className="flex justify-center items-center gap-1">
                        <Image
                          src="/assets/apex.svg"
                          width={32}
                          height={32}
                          className="object-contain"
                          alt=""
                        />
                        <div className="flex justify-center items-center gap-2">
                          <p className="text-[#FFCB99] uppercase text-[16px] font-normal font-inter">
                            sloape
                          </p>
                          <p className="w-[2px] h-[20px] bg-[#FFCB99] rotate-12"></p>
                          <p className="text-[#FFCB99] uppercase text-[16px] font-normal font-inter">
                            usdc
                          </p>
                        </div>
                      </div>
        
                      <div className="flex gap-1 justify-center items-center">
                        <p className="text-[14px] font-normal text-white">
                          $0.00042
                        </p>
                        <PiTriangleFill className="text-[#0AD171] text-[12px]" />
                        <p className="text-[14px] font-normal text-[#0AD171]">
                          38.2%
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div> */}
        </div>
        <div className="flex mb-5 justify-between flex-wrap">
          <BuySell />
          <Orderbook />
          <SettleCard />
        </div>
        <OrdersTable />
      </div>
    </WideWrapper>
  );
};

export default Dex;
