import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const SeeTradingPairs = () => {
  return (
    <Wrapper style=" bg-th-bkg-2 py-10 pt-14 md:pt-24">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-8 justify-center items-center">
        {/* ====> image */}
        <div className="w-full flex md:justify-start justify-center md:order-1 order-2 items-center">
          <div className="w-full max-w-[360px] lg:max-w-[430px] h-[400px] lg:h-[600px] relative">
            <Image src="/assets/tradingPair.svg" fill alt="" />
          </div>
        </div>
        {/* ==> 2nd col */}
        <div className="w-full flex flex-col items-start gap-4 md:order-2 order-1 md:gap-6">
          <p className="text-th-brand leading-[40px] sm:leading-[55px] font-inter text-[34px] sm:text-[40px] lg:text-[45px] xl:text-[54px] font-bold">
            A rich offering of tradeable assets.
          </p>
          <p className="text-th-brand font-inter text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] font-normal">
            We have one of the most diverse and rapidly growing offering of
            tradeable assets. We move fast but also try to maintain quality.
          </p>
          <Link href="#" className="flex justify-center items-center gap-2">
            <p className="text-th-brand-secondary text-[18px] sm:text-[24px] font-semibold font-inter">
              Explore the DEX
            </p>
            <BsArrowRight className="text-th-brand-secondary text-[26px]" />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default SeeTradingPairs;
