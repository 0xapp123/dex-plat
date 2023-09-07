import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Wrapper style="bg-th-bkg-3 py-8 pt-10">
      <div className="w-full grid lg:gap-0 gap-10 grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 sm:p-0 p-4">
        {/* 1st col */}
        <div className="col-span-1 sm:col-span-2 gap-3 w-full flex flex-col items-start">
          {/* logo */}
          <Link href="/" className="w-[140px] h-[60px] relative">
            <Image
              src="/assets/logo.svg"
              alt=""
              fill
              className="object-contain"
            />
          </Link>
          <p className="text-th-brand font-inter text-[16px] font-normal ">
            A serum-based Solana DEX built <br /> by apes, for other apes.
          </p>
          <p className="text-th-brand uppercase font-inter text-[16px] font-normal ">
            APES. TOGETHER. STRONG.
          </p>
        </div>
        {footerData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 sm:gap-3 items-start "
            >
              {/* type */}
              <p className="text-[16px] font-inter mb-2 sm:mb-0 font-semibold text-th-brand">
                {item.type}
              </p>
              {/* links */}
              {item.links.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.path}
                    className="capitalize text-[16px] text-th-brand hover:text-th-hover font-inter font-thin"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const footerData = [
  {
    type: "Products",
    links: [
      {
        name: "DEX",
        path: "#",
      },
      {
        name: "swap",
        path: "#",
      },
      {
        name: "Leverage",
        path: "#",
      },
      {
        name: "API",
        path: "#",
      },
    ],
  },
  {
    type: "Support",
    links: [
      {
        name: "Request listing",
        path: "#",
      },
      {
        name: "Guides",
        path: "#",
      },
      {
        name: "Contact",
        path: "#",
      },
    ],
  },
  {
    type: "$SOLAPE",
    links: [
      {
        name: "Request listing",
        path: "#",
      },
      {
        name: "Buy/Sell",
        path: "#",
      },
      {
        name: "Metrics",
        path: "#",
      },
      {
        name: "Coingecko",
        path: "#",
      },
      {
        name: "Coinmarketcap",
        path: "#",
      },
    ],
  },
  {
    type: "Community",
    links: [
      {
        name: "Telegram",
        path: "#",
      },
      {
        name: "Twitter",
        path: "#",
      },
      {
        name: "Discord",
        path: "#",
      },
      {
        name: "Discord",
        path: "#",
      },
    ],
  },
];

export default Footer;
