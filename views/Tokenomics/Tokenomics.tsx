import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Image from "next/image";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  LabelList,
  Cell,
  Label,
} from "recharts";
import Link from "next/link";
import { Data } from "@/data/JSON";
import { useMediaQuery } from "react-responsive";

const Tokenomics = () => {
  // code for the graph ----------------------------------------
  const firstCellGradient = "url(#gradient1)";
  const secCellGradient = "url(#gradient2)";
  const breakpoints = [0, 25, 50, 75, 100];
  const formatYAxisTick = (value: number) => {
    const index = Math.round((value / 100) * (breakpoints.length - 1));
    return `${breakpoints[index]}%`;
  };

  const isSmallScreen = useMediaQuery({ maxWidth: 447 });

  return (
    <Wrapper style="bg-th-bkg-2 min-h-[calc(100vh-64px)] py-8">
      <div className="flex flex-col gap-5 sm:gap-3 lg:gap-6 justify-center items-center">
        <div className="w-full grid gap-5 sm:gap-3 xl:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr,1.5fr,1fr]">
          {/* 1st col ------------------ */}
          <div className="w-full order-2 md:order-1 col-span-1 md:col-span-2 lg:col-span-3 flex flex-wrap justify-between items-center">
            <p className="md:block hidden text-th-brand text-[32px] font-semibold font-inter">
              Tokenomics
            </p>
            {/* ===> buttons */}
            <div className="w-full md:w-auto flex flex-wrap justify-center items-center gap-3">
              {Data.tokenomicsButtonsData.map((item, index) => {
                return (
                  <button
                    key={index}
                    className="bg-[#1C2222] h-[46px] flex justify-center items-center px-4 rounded-[6px]"
                  >
                    <Image src={item} alt="" width={120} height={32} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* buy solape section ------------------ */}
          <div className="w-full h-full flex flex-col md:order-2 order-1">
            <p className="md:hidden block mb-3 text-th-brand text-[24px] sm:text-[32px] text-center font-semibold font-inter">
              Tokenomics
            </p>
            <div className="h-[81px] bg-[#121616] flex justify-between items-center p-4 rounded-t-[6px]">
              {/* coin name */}
              <div className="flex gap-3 justify-center items-center">
                <div className="w-[34px] h-[34px] bg-th-bkg-2 rounded-full flex justify-center items-center">
                  <Image
                    src="/assets/sloapeToken.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
                <p className="uppercase text-th-brand font-bold font-inter text-[24px] sm:text-[26px]">
                  SOLAPE
                </p>
              </div>
              {/* coin price */}
              <p className="text-th-brand font-inter font-bold text-[24px] sm:text-[26px]">
                $0.5424
              </p>
            </div>
            <div className="w-full h-[calc(100%-81px)] flex flex-col gap-4 bg-[#1C2222] rounded-b-[6px] p-4">
              <div className="w-full grid gap-y-5 grid-cols-2 items-center">
                {/* ==> max supply */}
                <div className="w-full flex flex-col gap-1">
                  <p className="text-[16px] sm:text-[18px] xl:text-[20px] font-thin font-inter text-th-brand">
                    Max supply
                  </p>
                  <p className="font-inter text-th-brand font-thin text-[24px] sm:text-[26px] xl:text-[32px]">
                    298,401,000
                  </p>
                </div>
                {/* ==> Circulating supply */}
                <div className="w-full flex flex-col gap-1">
                  <p className="text-[16px] sm:text-[18px] xl:text-[20px] font-thin font-inter text-th-brand">
                    Circulating supply
                  </p>
                  <p className="font-inter text-th-brand font-thin text-[24px] sm:text-[26px] xl:text-[32px]">
                    298,401,000
                  </p>
                </div>
                {/* ==> Circulating supply */}
                <div className="w-full flex flex-col gap-1">
                  <p className="text-[16px] sm:text-[18px] xl:text-[20px] font-thin font-inter text-th-brand">
                    Market Cap & FDV
                  </p>
                  <p className="font-inter text-th-gradient-1 font-semibold text-[24px] sm:text-[26px] xl:text-[32px]">
                    $13,278,844.50
                  </p>
                </div>
                {/* ====> spl contact address */}
                <div className="col-span-2 flex flex-col gap-1">
                  <p className="text-[16px] sm:text-[18px] xl:text-[20px] font-inter font-thin text-[#B1B1B1]">
                    SPL Contract Address
                  </p>
                  <div className="w-full overflow-scroll hideScrollBar h-[40px] bg-[#121616] flex justify-between items-center px-3 rounded-[6px]">
                    <p className="min-w-[280px] sm:min-w-[400px] text-[10px] sm:text-[14px] font-medium text-th-brand font-inter">
                      GHvFFSZ9BctWsEc5nujR1MTmmJWY7tgQz2AXE6WVFtGN
                    </p>
                    <button className="min-w-[24px] h-[24px] bg-[#FF810A] flex justify-center items-center rounded-full">
                      <Image
                        src="/assets/copyIcon.svg"
                        width={14}
                        height={14}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              {/* button */}
              <button className="w-full h-[40px] bg-th-gradient-1 flex justify-center items-center text-th-brand font-inter text-[16px] font-medium rounded-[6px]">
                Buy SOLAPE
              </button>
            </div>
          </div>

          {/* graph ----------------- */}
          <div className="w-full flex justify-center items-center order-3">
            <div className="w-full h-[450px] md:h-full flex flex-col bg-[#121616] py-8 sm:pt-8 sm:pb-0 rounded-[6px]">
              <div className="w-full h-[calc(100%-90px)] pr-2">
                <ResponsiveContainer width="100%" height="99%">
                  <BarChart data={Data.tokenomicsGraphData}>
                    {!isSmallScreen && (
                      <XAxis
                        tick={false}
                        axisLine={{ stroke: "white", strokeDasharray: "2 2" }}
                        tickLine={{ stroke: "white" }}
                      />
                    )}
                    {!isSmallScreen && (
                      <YAxis
                        tick={{
                          fill: "white",
                          fontSize: "14px",
                          fontWeight: "100",
                        }}
                        axisLine={{ stroke: "white" }}
                        tickFormatter={formatYAxisTick}
                        domain={[0, 100]}
                      />
                    )}

                    <defs>
                      <linearGradient
                        id="gradient1"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="rgba(255,129,10,1)" />
                        <stop offset="100%" stopColor="rgba(255,171,92,1)" />
                      </linearGradient>
                      <linearGradient
                        id="gradient2"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="rgba(28,34,34,1)" />
                        <stop offset="100%" stopColor="rgba(46,56,56,1) " />
                      </linearGradient>
                    </defs>

                    {/* <Tooltip /> */}
                    <Bar dataKey="uv" fill="#8884d8">
                      <Cell
                        fill={firstCellGradient}
                        width={isSmallScreen ? 140 : 152}
                      />
                      <Cell
                        fill={secCellGradient}
                        width={isSmallScreen ? 140 : 152}
                      />
                      <LabelList
                        fill="white"
                        fontWeight={600}
                        offset="16"
                        dataKey="name"
                        position="top"
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="w-full h-[90px] grid grid-cols-[1fr,1fr] ">
                <div className="w-full flex flex-col gap-1 sm:gap-2 justify-center items-center mt-0 sm:-mt-12 ml-0 sm:ml-10">
                  <p className="text-[#B1B1B1] text-[20px] font-inter font-thin">
                    Market
                  </p>
                  <p className="text-th-brand font-inter text-[24px] font-semibold">
                    ~272.4M
                  </p>
                </div>
                <div className="w-full flex flex-col gap-1 sm:gap-2 justify-center items-center mt-0 sm:-mt-12">
                  <p className="text-[#B1B1B1] text-[20px] font-inter font-thin">
                    Team
                  </p>
                  <p className="text-th-brand font-inter text-[24px] font-semibold">
                    ~25.9M
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* some history ---------------  */}
          <div className="w-full h-full flex flex-col p-4 bg-[#121616] gap-4 xl:gap-6 order-4 rounded-[6px]">
            <p className="text-[20px] font-semibold font-inter text-th-brand">
              Some history
            </p>
            <p className="text-[16px] font-inter font-thin text-th-brand leading-[28px]">
              SOLAPE initially had a supply of{" "}
              <span className="italic font-medium">1 Billion</span> tokens.
              Initially, we airdropped{" "}
              <span className="italic font-medium">125k</span> tokens each to
              <span className="italic font-medium"> 2,000</span> people who
              filled a form (<span className="italic font-medium">250M</span>{" "}
              total).
            </p>
            <div className="flex flex-col">
              <p className="text-[16px] font-thin font-inter text-th-brand">
                Oh, we also burned{" "}
              </p>
              <p className="text-[20px] font-semibold font-inter bg-gradient-to-r from-[#FF810A] to-[#DE0269] text-transparent bg-clip-text">
                701,599,000 SOLAPE (70.16%).
              </p>
            </div>
            <p className="text-[16px] font-thin font-inter text-th-brand">
              But don’t take our word for it, check the chain{" "}
              <Link href="#" className="text-[#FF810A]">
                right here
              </Link>
              .
            </p>
          </div>
        </div>

        {/* snippets ---------------- */}
        <div className="w-full md:max-w-[980px] grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Data.tokenomicsSnippetsData.map((item, index) => {
            return (
              <div
                key={index}
                className="'w-full flex flex-col gap-2 justify-center items-center bg-[#121616] h-[128px] rounded-[6px]"
              >
                <div className="flex justify-center items-center gap-3">
                  <Image
                    src={item.img}
                    width={item.imgeWidth}
                    height={item.imgeHeight}
                    className="object-contain"
                    alt=""
                  />
                  <p className="bg-gradient-to-r from-[#FF810A] to-[#FFAB5C] text-transparent bg-clip-text font-inter font-semibold text-[40px] ">
                    {item.value}
                  </p>
                </div>
                <p className="text-[18px] font-thin text-th-brand font-inter">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Tokenomics;
