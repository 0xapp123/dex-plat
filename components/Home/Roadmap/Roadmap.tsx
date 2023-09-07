import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Card from "./Card";
import { Data } from "@/data/JSON";

const Roadmap = () => {
  return (
    <Wrapper style="bg-th-bkg-2 py-10">
      <div className="w-full flex flex-col gap-6 md:gap-10 justify-center items-center">
        <p className="text-[34px] md:text-[56px] font-bold font-inter text-th-brand">
          Roadmap
        </p>
        <div className="w-full xl:w-[82%] grid gap-6 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
          {Data.roadmapData.map((item, index) => {
            return (
              <Card
                key={index}
                question={item.question}
                current={item.current}
                list={item.list}
              />
            );
          })}
        </div>
        <p className="text-[#757575] text-center text-[14px] font-normal">
          The Solape team reserves the right to adjust the roadmap based on the
          changing market <br /> conditions and the overal industry landscape.
        </p>
      </div>
    </Wrapper>
  );
};

export default Roadmap;
