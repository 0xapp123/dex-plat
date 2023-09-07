import React, { useState } from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Image from "next/image";
import Link from "next/link";
import OutlineButton from "@/components/shared/Buttons/OutlineButton";
import { BsLightningCharge } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Data } from "../data/JSON";

// ====> import for drawer and humburger
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper style="bg-th-bkg-2">
      <div className="w-full h-[64px] md:h-[100px] flex justify-between items-center">
        {/* logo */}
        <div className="w-[150px] h-[60px] relative">
          <Image
            src="/assets/logo.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* links */}
        <div className="hidden lg:flex z-20 justify-center items-center gap-12">
          {Data.navibar.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.path}
                className=" capitalize text-th-brand hover:text-th-hover text-[16px] font-inter relative"
              >
                {item.name}
                {/* dot */}
                {item.dot && (
                  <div className="w-[7px] h-[7px] bg-th-brand-secondary absolute rounded-full top-0 -right-2"></div>
                )}
              </Link>
            );
          })}
        </div>
        {/* button */}
        <OutlineButton
          text="Launch app"
          isIcon={true}
          style="w-[140px] z-20 h-[44px] border-brand text-th-brand hover:text-th-hover hover:border-th-hover group hidden lg:flex"
          icon=<BsLightningCharge className="text-[20px] text-th-secondary group-hover:text-primary" />
        />

        {/* ====> hamburger + drawer for small screen */}
        <div className="lg:hidden flex justify-end items-center">
          <Hamburger
            color="white"
            rounded
            size={26}
            toggled={isOpen}
            toggle={setIsOpen}
          />
          <Drawer
            open={isOpen}
            onClose={() => setIsOpen(false)}
            direction="right"
            className="drawer"
            style={{ background: "#1c2222" }}
          >
            <div className="flex flex-col justify-center items-center">
              {/* =========>top bar */}
              <div className="w-full flex flex-col gap-8 justify-center items-center bg-black-main p-8">
                <div className="w-full flex justify-between items-center ">
                  {/* ===> logo */}
                  <div className="w-[155px] h-[60px] relative">
                    <Image
                      src="/assets/logo.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <RxCross2
                    onClick={() => setIsOpen(false)}
                    className="text-[43px] text-th-brand "
                  />
                </div>
                {/* button */}
                <OutlineButton
                  text="Launch app"
                  isIcon={true}
                  style="w-full sm:w-[200px] text-[28px] h-[63px] sm:h-[60px] border-th-brand text-th-brand hover:text-th-brand-secondary hover:border-th-brand-secondary group"
                  icon=<BsLightningCharge className="text-[28px] text-th-brand group-hover:text-th-hover" />
                />
              </div>
              {/* links */}
              <div className="w-full flex flex-col p-8 gap-6">
                {Data.navibar.map((item, index) => {
                  return (
                    <Link
                      href={item.path}
                      key={index}
                      className="capitalize text-th-brand hover:text-dark-theme-hover text-[36px] font-normal"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </Drawer>
        </div>
      </div>

      {/* the right corner one image */}
      <div className="absolute right-0 top-0 z-10">
        <div className="w-[600px] xl:w-[750px] h-[900px] xl:h-[1100px] lg:block hidden relative">
          <Image src="/rightPortion.png" alt="" fill className="object-fill " />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
