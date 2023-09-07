import React from "react";
import Link from "next/link";

interface Props {
  items: string[];
  setIsDropdown: () => void;
}

const DropDown = ({ items, setIsDropdown }: Props) => {
  return (
    <div className="flex z-10 flex-col gap-3 rounded-[8px] bg-gradient-to-r from-[#323E3E] to-[#181E1E] p-4 absolute top-7">
      {items.map((item, index) => {
        return (
          <Link
            onClick={setIsDropdown}
            key={index}
            href="#"
            className="capitalize text-[14px] whitespace-nowrap font-thin font-inter text-th-brand"
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
};

export default DropDown;
