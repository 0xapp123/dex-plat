import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Card from "./Card";
import Link from "next/link";
import { Data } from "@/data/JSON";

const Services = () => {
  return (
    <Wrapper style="bg-th-bkg-2 py-10">
      <div className="w-full flex flex-col gap-6 md:gap-10 justify-center items-center">
        <p className="text-[34px] md:text-[56px] font-bold font-inter text-th-brand capitalize">
          services
        </p>
        {/* ===> card */}
        <div className="w-full xl:w-[82%] grid gap-6 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-4">
          {Data.servicesData.map((item, index) => {
            return (
              <Card
                key={index}
                img={item.img}
                title={item.title}
                des={item.des}
                btnText={item.btnText}
              />
            );
          })}
        </div>
        <p className="text-[#757575] text-center text-[14px] font-normal flex justify-center items-center gap-1">
          Have a custom request in mind? Reach out
          <Link href="#" className="underline text-th-gradient-1">
            here.
          </Link>
        </p>
      </div>
    </Wrapper>
  );
};

export default Services;
