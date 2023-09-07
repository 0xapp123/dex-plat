import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { BiExpandVertical } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { BsInfoLg } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { BiLogoTwitter } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Image from "next/image";
import { Checkbox } from "@mui/material";
import { Pagination, PaginationItem, Modal } from "@mui/material";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { Data } from "@/data/JSON";

const Markets = () => {
  const [filter, setFilter] = useState({
    all: true,
    favorite: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const gradientForGraph = "url(#gradient)";

  const nextIcon = () => {
    return <IoIosArrowBack className="fill-th-brand rotate-180" />;
  };

  const prevIcon = () => {
    return <IoIosArrowBack className="fill-th-brand" />;
  };

  // style for modal -------------

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <React.Fragment>
      <div className="w-full min-h-full flex flex-col">
        {/* filter section -------------- */}
        <div className="w-full bg-[url('/assets/marketsBg.png')] h-[210px] sm:h-[195px] bg-cover bg-no-repeat bg-center flex flex-col gap-6 justify-center items-center">
          <p className="text-th-brand text-[32px] font-medium font-inter">
            Marktes
          </p>

          <div className="w-full max-w-[580px] md:max-w-[750px] gap-2 grid grid-cols-2 md:grid-cols-[1.4fr,2fr,1.5fr] px-4 sm:px-10">
            {/* all + favorite button */}
            <div className="order-2 md:order-1 w-full h-[48px] sm:h-[57px] bg-[#121616] flex justify-center items-center rounded-[8px] p-[7px]">
              <button
                onClick={() => {
                  setFilter({ all: true, favorite: false });
                }}
                className={`w-[68px] ${
                  filter.all
                    ? "bg-gradient-to-r from-[#FF810A] to-[#FFAB5C] "
                    : "bg-transparent"
                }  text-[14px] sm:text-[16px] h-full font-normal text-th-brand rounded-[8px]`}
              >
                All
              </button>
              <button
                onClick={() => {
                  setFilter({ all: false, favorite: true });
                }}
                className={`${
                  filter.favorite
                    ? "bg-gradient-to-r from-[#FF810A] to-[#FFAB5C]"
                    : "bg-transparent"
                } w-[calc(100%-68px)] h-full text-[14px] sm:text-[16px] font-normal text-th-brand rounded-[8px]`}
              >
                Favorite
              </button>
            </div>

            {/* search input */}
            <div className="order-1 md:order-2 col-span-2 md:col-span-1 w-full grid grid-cols-[0.2fr,1fr] h-[48px]  sm:h-[57px] justify-center items-center bg-[#121616] rounded-[8px]">
              <button className="w-full flex justify-center items-center">
                <AiOutlineSearch className="text-[#676767] text-[24px] sm:text-[27px]" />
              </button>
              <input
                className="bg-transparent text-[16px] sm:text-[18px] font-inter font-thin text-th-brand outline-none placeholder:text-[16px] sm:placeholder:text-[18px] placeholder:font-inter placeholder:font-thin placeholder:text-[#676767]"
                placeholder="Search ticker or name..."
              />
            </div>

            {/* sort by volume select box */}
            <div className="order-3 md:order-3 w-full h-[48px] sm:h-[56px] bg-[#2E3838] cursor-pointer flex justify-center items-center gap-2 rounded-[8px]">
              <p className="text-[14px] sm:text-[18px] font-inter font-thin text-th-brand">
                Sorted by Volume
              </p>
              <FiChevronDown className="text-th-brand text-[20px] sm:text-[26px] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* table ------------------------ */}
        <div className="w-full px-4 overflow-auto sm:px-10 bg-th-bkg-2">
          {/* table column */}
          <div className="w-full min-w-[1170px]">
            <div className="w-full h-[56px] md:h-[72px] grid grid-cols-[0.3fr,1.2fr,1fr,0.8fr,0.8fr,0.8fr,0.8fr,1.2fr,0.2fr] justify-center items-center">
              {Data.marketsData.tableColumn.map((item, index) => {
                return (
                  <>
                    {index === 0 ||
                    Data.marketsData.tableColumn.length === index + 1 ? (
                      <div className="w-full flex justify-center items-center h-[40px]">
                        {item.colName}
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="w-full flex justify-start items-center gap-[5px]"
                      >
                        {item.isExpandIcon && (
                          <BiExpandVertical className="text-[#676767] text-[16px] cursor-pointer" />
                        )}
                        <p className="text-[14px] sm:text-[16px] capitalize font-medium font-inter text-[#676767]">
                          {item.colName}
                        </p>
                        {item.timeLabel && (
                          <p className="text-[11px] font-inter font-normal text-[#FFCB99] bg-[#2E3838] p-[1px] rounded-[2px]">
                            {item.timeLabelValue}
                          </p>
                        )}
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          {/* table row */}
          <div className="w-full min-w-[1170px] flex flex-col">
            {Data.marketsData.tableRows.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-[56px] sm:h-[72px] grid grid-cols-[0.3fr,1.2fr,1fr,0.8fr,0.8fr,0.8fr,0.8fr,1.2fr,0.2fr] justify-center items-center"
                >
                  {/* favorite icon */}
                  <div className="w-full flex justify-start items-center">
                    <Checkbox
                      // {...label}
                      icon={
                        <AiOutlineStar className="text-[28px] text-th-brand" />
                      }
                      checkedIcon={
                        <BsStarFill className="text-[28px] text-th-gradient-1" />
                      }
                    />
                  </div>
                  {/* name */}
                  <div className="w-full flex justify-start items-center gap-3">
                    <Image
                      src={item.name.image}
                      width={40}
                      height={40}
                      className="object-contain"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p className="md:block hidden text-[16px] font-inter font-normal text-th-brand">
                        {item.name.coinName}
                      </p>
                      <p className="uppercase text-[14px] sm:text-[16px] font-inter font-semibold text-th-brand">
                        {item.name.coinType}
                      </p>
                    </div>
                  </div>
                  {/* pair */}
                  <div className="w-full flex justify-start items-center">
                    <p className="uppercase text-[14px] sm:text-[16px] text-th-brand font-inter font-normal">
                      {item.pair}
                    </p>
                  </div>
                  {/* price */}
                  <div className="w-full flex justify-start items-center">
                    <p className="uppercase text-[14px] sm:text-[16px] text-th-brand font-inter font-normal">
                      ${item.price}
                    </p>
                  </div>
                  {/* delta */}
                  <div className="w-full flex gap-1 justify-start items-center">
                    {parseInt(item.delta) < 10 ? (
                      <BiSolidUpArrow className="text-[#FD499D] rotate-180 text-[14px]" />
                    ) : (
                      <BiSolidUpArrow className="text-[#0AD171] text-[14px]" />
                    )}
                    <p
                      className={`${
                        parseInt(item.delta) < 10
                          ? "text-[#FD499D]"
                          : "text-[#0AD171]"
                      } text-[14px] sm:text-[16px] font-inter font-normal`}
                    >
                      {item.delta}%
                    </p>
                  </div>
                  {/* volume */}
                  <div className="w-full flex justify-start items-center">
                    <p className="uppercase text-[14px] sm:text-[16px] text-th-brand font-inter font-normal">
                      ${item.volume}
                    </p>
                  </div>
                  {/* market cap */}
                  <div className="w-full flex justify-start items-center">
                    <p className="uppercase text-[14px] sm:text-[16px] text-th-brand font-inter font-normal">
                      ${item.marketCap}
                    </p>
                  </div>
                  {/* movement */}
                  <div className="w-full flex justify-center items-center">
                    <ResponsiveContainer width="99%" height={50}>
                      <AreaChart
                        height={44}
                        data={item.movement}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="1"
                            y1="0"
                            x2="1"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="rgba(255,129,10,1)" />
                            <stop
                              offset="100%"
                              stopColor="rgba(255,129,10,0.5)"
                            />
                          </linearGradient>
                        </defs>
                        <Area
                          dataKey="value"
                          strokeWidth={2}
                          stroke="#f47c0c"
                          fill={gradientForGraph}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  {/* info icon */}
                  <div className="w-full flex justify-center items-center">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-[30px] h-[30px] rounded-full bg-[#2E3838] flex justify-center items-center"
                    >
                      <BsInfoLg className="text-[#f47c0c] text-[18px]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* pagination --------------- */}
        <div className="w-full bg-th-bkg-2 h-[150px] flex justify-center items-center">
          <Pagination
            count={10}
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: prevIcon, next: nextIcon }}
                {...item}
              />
            )}
          />
        </div>
      </div>

      {/* ======> Modal */}
      <Modal
        sx={{ m: "4px" }}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full rounded-lg max-w-[864px] bg-[#121616] p-6 flex flex-col gap-4 shadow-xl">
          {/* coin + social icon --------------> */}
          <div className="w-full flex justify-between items-center py-4 px-8">
            {/* coin name */}
            <div className="flex justify-center items-center gap-3">
              <Image
                src="/assets/front.png"
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col ">
                <p className="text-th-brand text-[16px] font-normal font-inter capitalize">
                  Bamboo Coin
                </p>
                <p className="text-th-brand text-[16px] font-normal font-inter uppercase">
                  BMBO
                </p>
              </div>
            </div>
            {/* social icons */}
            <div className="flex justify-center items-center gap-4">
              {socialIcons.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[34px] h-[34px] flex justify-center items-center bg-[#676767] rounded-full"
                  >
                    {item.icon}
                  </div>
                );
              })}
            </div>
          </div>
          {/* total supply + low price + hight price + token link portion */}
          <div className="w-full bg-[#1C2222] px-6 py-8 flex flex-col md:grid gap-y-6 md:gap-y-10 grid-cols-2 lg:grid-cols-[2fr,2.1fr] rounded-xl">
            {/* total price + token contract */}
            <div className="w-full flex flex-col gap-3 items-start">
              {/* total supply */}
              <div className="flex flex-col">
                <p className="text-[18px] sm:text-[20px] font-inter font-normal text-[#FFFAF5]">
                  Total supply
                </p>
                <p className="text-[26px] sm:text-[32px] font-inter font-medium text-th-brand">
                  17,777,777,776.89
                </p>
              </div>
              {/* token contract */}
              <div className="w-full flex flex-col gap-2">
                <p className="text-[18px] sm:text-[20px] font-inter font-normal text-[#FFFAF5]">
                  Token contract
                </p>
                <div className="w-full flex justify-start items-center gap-2">
                  <p className="text-th-brand text-[13px] font-inter font-normal">
                    5sM9xxcBTM9rWza6nEgq2cShA87JjTBx1Cu82LjgmaEg
                  </p>
                  <button>
                    <Image
                      src="/assets/copyIcon.svg"
                      width={16}
                      height={16}
                      className="object-contain"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* low + hight widgets */}
            <div className="w-full lg:w-[80%] flex md:grid gap-2 grid-cols-[1fr,1fr] ">
              {/* low */}
              <div className="w-full max-w-[156px] h-[80px] flex flex-col gap-2 justify-center items-start pl-6 bg-[#2E3838] rounded-[8px]">
                <div className="flex justify-center items-center gap-2">
                  <p className="text-[16px] font-inter text-[#FD499D] font-medium capitalize">
                    Low
                  </p>
                  <p className="text-[12px] font-inter bg-[#1C2222] rounded-sm text-[#FFCB99] font-semibold px-[6px] py-1">
                    24h
                  </p>
                </div>
                <p className="text-[18px] font-inter text-th-brand font-semibold">
                  $0.04240
                </p>
              </div>
              {/* high */}
              <div className="flex w-full max-w-[156px] h-[80px] flex-col gap-2 px-6 justify-center items-start bg-[#2E3838] rounded-[8px]">
                <div className="flex justify-center items-center gap-2">
                  <p className="text-[16px] font-inter text-[#29F592] font-medium capitalize">
                    high
                  </p>
                  <p className="text-[12px] font-inter bg-[#1C2222] rounded-sm text-[#FFCB99] font-semibold px-[6px] py-1">
                    24h
                  </p>
                </div>
                <p className="text-[18px] font-inter text-th-brand font-semibold">
                  $0.04240
                </p>
              </div>
            </div>
            {/*  */}
            <p className="col-span-1 sm:col-span-2 text-white font-inter text-[16px] font-normal">
              Bamboo Coin is a memecoin on the Solana network, with the aim to
              be community-owned and provide some fun to our lives. Bamboo Coin
              is inspired by the likes of Dogecoin and Shiba. It has all the
              upsides of Solana's blockchain (high scalability, high speed, low
              fees) while being a fun cryptocurrency to trade. Bamboo Coin aims
              to grow slow and steadily, much like the plant from which it gets
              its name.{" "}
            </p>
          </div>
          <p className="text-[16px] font-inter text-white uppercase font-normal">
            BMBO/USDC
          </p>
        </div>
      </Modal>
    </React.Fragment>
  );
};

const socialIcons = [
  {
    icon: <BiLogoTwitter className="text-[26px] text-th-bkg-2" />,
    path: "#",
  },
  {
    icon: <FaTelegramPlane className="text-[26px] text-th-bkg-2" />,
    path: "#",
  },
  {
    icon: <FaDiscord className="text-[26px] text-th-bkg-2" />,
    path: "#",
  },
  {
    icon: <AiFillInstagram className="text-[26px] text-th-bkg-2" />,
    path: "#",
  },
  {
    icon: <BsFacebook className="text-[26px] text-th-bkg-2" />,
    path: "#",
  },
];

export default Markets;
