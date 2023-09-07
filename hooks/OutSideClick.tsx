import React, { useRef, useEffect, ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
  style?: string;
  Event: () => void;
}

export default function UseOutSideClick({
  children,
  style = "w-full relative",
  Event,
}: Props) {
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          event.target.getAttribute("data-outside-click") !== "ignore"
        ) {
          Event();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, Event]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className={`${style}`} ref={wrapperRef}>
      {children}
    </div>
  );
}
