import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";

const Dex = () => {
  return (
    <div className="w-full relative bg-th-bkg-4 flex min-h-[650px] sm:min-h-[900px] md:min-h-[600px] lg:min-h-[750px] xl:min-h-[880px] flex-col md:flex-row justify-between items-center">
      <Wrapper style="h-full flex justify-center items-center ">
        <div className="w-full h-full max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] flex flex-col gap-4 lg:gap-6 items-start justify-center mt-[12rem] md:mt-28">
          <p className="text-th-brand leading-[40px] sm:leading-[55px] font-inter text-[34px] sm:text-[40px] lg:text-[45px] xl:text-[54px] font-bold">
            An unmatched DEX trading experience.
          </p>
          <p className="text-th-brand font-inter text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] font-normal">
            Regardless of your trading level, Solape can accommodate you for a
            seamless, integrated experience trading in the Solana ecosystem.
          </p>
          <Link href="#" className="flex justify-center items-center gap-2">
            <p className="text-th-brand-secondary text-[18px] sm:text-[24px] font-semibold font-inter">
              Explore the DEX
            </p>
            <BsArrowRight className="text-th-brand-secondary text-[26px]" />
          </Link>
        </div>
      </Wrapper>
      <div className="w-full md:max-w-[600px] lg:max-w-[930px] xl:max-w-[1150px] relative md:absolute right-0 bottom-0">
        <div className="w-full h-[230px] sm:h-[400px] lg:h-[550px] xl:h-[670px] relative">
          <Image src="/assets/dex.png" alt="" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Dex;
