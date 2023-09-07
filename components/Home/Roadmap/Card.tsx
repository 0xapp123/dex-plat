import React from "react";

interface Props {
  question: string;
  current: boolean;
  list: string[];
}

const Card = ({ question, current, list }: Props) => {
  return (
    <div className="w-full h-full min-h-[292px] flex justify-center items-center">
      <div
        className={`w-full h-full sm:max-w-[260px] py-6 ${
          current
            ? "bg-[#2e3838] border-[4px] border-th-gradient-1 relative"
            : "bg-[#1c2222] "
        } flex flex-col gap-3 rounded-[30px]`}
      >
        {/* ==> question */}
        <p className="uppercase text-center text-th-brand text-[24px] font-semibold font-inter">
          {question}
        </p>
        {/* list */}
        <ul className="list-disc px-10">
          {list.map((list, index) => {
            return (
              <li
                key={index}
                className="capitalize text-th-brand font-inter text-[16px] font-thin"
              >
                {list}
              </li>
            );
          })}
        </ul>
        {/* ===> current tag */}
        {current && (
          <div className="w-[120px] h-[40px] flex justify-center items-center rounded-[50px] absolute bg-th-gradient-1 -bottom-[18px] left-[25%]">
            <p className="uppercase leading-0 text-[16px] text-th-brand font-inter font-[600]">
              current
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
