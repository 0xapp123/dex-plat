import React, { ReactNode } from "react";

interface Props {
  isIcon?: boolean;
  icon?: ReactNode;
  text: string;
  style?: string;
}

const OutlineButton = ({
  isIcon,
  icon,
  text,
  style = "w-[140px] h-[40px] border-th-brand text-[16px]",
}: Props) => {
  return (
    <button
      className={`${style} flex justify-center leading-0 border-[2px] font-normal rounded-[6px] text-white-main font-inter items-center gap-2`}
    >
      {text}
      {icon && icon}
    </button>
  );
};

export default OutlineButton;
