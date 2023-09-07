import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Image from "next/image";
import FillButton from "@/components/shared/Buttons/FillButton";
import OutlineButton from "@/components/shared/Buttons/OutlineButton";
import { LiaExchangeAltSolid } from "react-icons/lia";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";

const HeroSection = () => {
  return (
    <div className="w-full h-full bg-th-bkg-2 relative">
      <Wrapper style="bg-th-bkg-2 min-h-[calc(100vh-100px)] flex flex-col justify-center items-center sm:py-[7rem]">
        <div className="w-full h-full flex flex-col gap-3 xl:gap-5 justify-center items-center">
          {/* powerd by openbook */}
          <div className="flex justify-center items-center">
            <p className="text-th-brand font-inter font-thin text-[16px]">
              Powered by
            </p>
            <Image
              src="/assets/openBookLogo.svg"
              width={150}
              height={60}
              alt=""
              className="object-cover"
            />
          </div>
          <h1 className="text-th-brand font-inter text-center leading-[50px] sm::leading-[70px] sm:text-[60px] text-[40px] xl:leading-[95px] xl:text-[80px] font-bold">
            The sharpest <br /> DEX on Solana.
          </h1>
          <p className="text-th-brand text-[18px] sm:text-[20px] xl:text-[24px] font-normal font-inter">
            Built for Apes, by Apes.
          </p>
          {/* ===> buttons */}
          <div className="w-full flex sm:flex-row flex-col justify-center items-center gap-4 mt-4 mb-[12rem] z-20">
            <FillButton
              text="DEX trading"
              styles="w-full max-w-[280px] sm:w-[180px] xl:w-[230px] h-[66px] sm:h-[50px] xl:h-[60px] text-th-brand bg-th-brand-secondary text-[24px] font-medium"
            />
            <OutlineButton
              text="Swap"
              isIcon={true}
              style="w-full max-w-[280px] sm:w-[150px] xl:w-[170px] h-[66px] sm:h-[50px] xl:h-[60px] text-th-brand text-[24px] border-[3px] border-th-brand-secondary font-medium"
              icon=<LiaExchangeAltSolid className="text-th-brand text-[26px]" />
            />
          </div>
        </div>
      </Wrapper>
      {/* the left corner one image */}

      <div className="absolute left-0 -bottom-[18rem] ">
        <div className="w-[500px] xl:w-[650px] h-[1000px] xl:h-[1100px] lg:block hidden relative">
          <Image src="/leftPortion.png" alt="" fill className="object-fill " />
        </div>
      </div>

      {/* ===> cards */}

      <div className="w-full flex justify-center items-center absolute -bottom-[10rem]">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5.5}
          spaceBetween={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            310: {
              slidesPerView: 1,
              spaceBetween: 2,
            },
            380: {
              slidesPerView: 1.5,
              spaceBetween: 2,
            },
            520: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            620: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            840: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 5.5,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
