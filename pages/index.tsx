import React, { useEffect } from 'react'
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ReactNode } from "react";
import { getSearchLayout } from "../components/layouts/SearchLayout";

import { HiOutlineStar } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import * as Icons from "../constants/icons";
import BuySell from '../components/pages/BuySell';

import SettleCard from '../components/pages/SettleCard';
import OrdersTable from '../components/pages/OrdersTable';
import Orderbook from '../components/pages/Orderbook';
import { getMarkets } from '../api/getMarkets';
import { createMarket } from '../api/createMarket';
import { createOpenOrder } from '../api/createOpenOrder';
import { postOrder } from '../api/postOrder';
import { getOpenOrders } from '../api/getOpenOrders';
import { getLeafNodes } from '../api/getLeafNodes';
import { placeOrder } from '../api/placeOrder';
const Home = () => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  useEffect(() => {
    // getMarkets()
    // createOpenOrder();
    // placeOrder()
    postOrder();
    // createMarket();
    // getLeafNodes()
  }, [])
  return (

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

      </div>

      <div className="flex mb-5 justify-between flex-wrap relative">
        <BuySell />
        <Orderbook />
        <SettleCard />
      </div>
      <OrdersTable />
    </div>

  );
};

Home.getLayout = (page: ReactNode) => getSearchLayout(page, "Home");

export default Home;
[47, 225, 191, 96, 254, 142, 6, 3, 19, 139, 178, 194, 218, 234, 148, 177, 253, 108, 33, 19, 225, 201, 69, 2, 250, 234, 171, 245, 30, 117, 6, 38, 201, 233, 201, 145, 250, 14, 181, 245, 144, 44, 128, 163, 219, 27, 95, 209, 101, 122, 146, 160, 204, 166, 109, 164, 20, 72, 104, 147, 72, 197, 213, 104]