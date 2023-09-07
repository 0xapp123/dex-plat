import React from "react";

interface Props {
  isIcon?: boolean;
  icon?: string;
  text: string;
  styles?: string;
}

const FillButton = ({
  isIcon,
  icon,
  text,
  styles = "w-[150px] h-[40px] text-th-brand bg-th-brand-secondary text-[24px] font-medium",
}: Props) => {
  return (
    <button
      className={`flex justify-center leading-0 items-center gap-2 rounded-[6px] ${styles}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default FillButton;
