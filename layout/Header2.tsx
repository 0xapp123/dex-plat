import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import FillButton from "@/components/shared/Buttons/FillButton";
import WideWrapper from "@/components/shared/ComponentWrapper/WideWrapper";
import { LuChevronDown } from "react-icons/lu";
import { PiLinkSimpleBold } from "react-icons/pi";
import { BsLightningCharge } from "react-icons/bs";
import OutlineButton from "@/components/shared/Buttons/OutlineButton";
import { Data } from "@/data/JSON";
import { RxCross2 } from "react-icons/rx";
import ToggleSwitch from "@/components/shared/ToggleSwitch/ToggleSwitch";
import UseOutSideClick from "@/hooks/OutSideClick";
import DropDown from "@/components/shared/DropDown/DropDown";
// ====> import for drawer and humburger
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Header2 = () => {
  const Router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [isTokenomicsDropDown, setIsTokenomicsDropDown] = useState(false);

  return (
    <div className="w-full header2">
      <WideWrapper>
        <div className="w-full flex justify-between items-center h-[64px]">
          {/* left portion */}
          <div className="flex justify-center items-center gap-9">
            {/* logo */}
            <div className="w-[140px] h-[40px] relative">
              <Image
                src="/assets/logo.svg"
                alt=""
                className="object-contain"
                fill
              />
            </div>
            {/* links */}

            <div className="hidden lg:flex justify-center items-center gap-9">
              {Data.header2Data.map((item, index) => {
                return (
                  <>
                    {item.name === "token" ? (
                      <UseOutSideClick
                        key={index}
                        Event={() => setIsTokenomicsDropDown(false)}
                        style="relative w-full"
                      >
                        <button
                          onClick={() => {
                            setIsTokenomicsDropDown(!isTokenomicsDropDown);
                          }}
                          className={`capitalize relative text-th-brand text-[16px] font-inter ${item.path === Router.pathname
                              ? "font-medium"
                              : "font-thin"
                            } `}
                        >
                          {item.name}
                          {/* new badge-------------- */}
                          {item.isNew && (
                            <p className="text-th-bkg-2 bg-th-gradient-1 flex justify-center items-center text-[10px] leading-0 font-medium px-[5px] rounded-[10px] font-inter absolute -top-2 -right-5">
                              New
                            </p>
                          )}
                        </button>
                        {isTokenomicsDropDown && (
                          <DropDown
                            setIsDropdown={() => setIsTokenomicsDropDown(false)}
                            items={["buy solape", "tokenomics"]}
                          />
                        )}
                      </UseOutSideClick>
                    ) : (
                      <Link
                        key={index}
                        href="#"
                        className={`${index + 1 === Data.header2Data.length
                            ? "hidden"
                            : "block"
                          } capitalize relative text-th-brand text-[16px] font-inter ${item.path === Router.pathname
                            ? "font-medium"
                            : "font-thin"
                          } `}
                      >
                        {item.name}
                        {/* new badge-------------- */}
                        {item.isNew && (
                          <p className="text-th-bkg-2 bg-th-gradient-1 flex justify-center items-center text-[10px] leading-0 font-medium px-[5px] rounded-[10px] font-inter absolute -top-2 -right-5">
                            New
                          </p>
                        )}
                      </Link>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          {/* ===> right portion */}
          <div className="hidden lg:flex justify-center items-center gap-4">
            <FillButton
              text="Connect"
              styles="w-[120px] h-[40px] bg-[#2E3838] text-th-brand font-inter font-medium text-[16px]"
            />
            {/* ===> logo */}
            <UseOutSideClick
              style="relative"
              Event={() => setShowDropDown(false)}
            >
              <button
                onClick={() => setShowDropDown(!showDropDown)}
                className="flex justify-center items-center gap-2 cursor-pointer "
              >
                <div className="w-[40px] h-[40px] bg-th-gradient-1 rounded-full flex justify-center items-center">
                  <Image
                    src="/assets/logo2.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
                {showDropDown ? (
                  <LuChevronDown className="text-th-brand text-[24px] rotate-180" />
                ) : (
                  <LuChevronDown className="text-th-brand text-[24px]" />
                )}
              </button>

              {/* =====> drop down */}
              {showDropDown && (
                <div className="w-[159px] z-10 flex flex-col p-4 gap-3 bg-gradient-to-r from-[#323E3E] to-[#181E1E] absolute top-12 -left-24 rounded-[8px]">
                  <div className="flex justify-center items-center gap-1">
                    <PiLinkSimpleBold className="text-[19px] text-th-brand-secondary" />
                    <p className="font-inter text-th-brand-secondary text-[16px] font-thin">
                      DbK2...FRgP
                    </p>
                  </div>
                  {/* version */}
                  <div className="w-full flex justify-between items-center">
                    <p className="text-th-brand text-[15px] font-inter font-normal">
                      Lite version
                    </p>
                    <ToggleSwitch />
                  </div>
                  {/* disconnect button */}
                  <FillButton
                    text="Disconnect"
                    styles="w-full h-[26px] bg-[#2E3838] text-th-brand text-[13px]"
                  ></FillButton>
                </div>
              )}
            </UseOutSideClick>
          </div>

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
              style={{ background: "black" }}
            >
              <div className="flex flex-col justify-center items-center">
                <div className="w-full flex bg-[#121616] p-6 flex-col gap-8">
                  {/* ===> top bar */}
                  <div className="w-full flex justify-between items-center">
                    {/* ===> logo */}
                    <div className="w-[155px] h-[60px] relative">
                      <Image
                        src="/assets/logo.svg"
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
                  {/* launch button */}
                  <OutlineButton
                    text="Launch app"
                    isIcon={true}
                    style="w-full sm:w-[200px] text-[24px] font-normal h-[63px] sm:h-[60px] border-th-brand text-th-brand hover:text-th-brand-secondary hover:border-th-brand-secondary group"
                    icon=<BsLightningCharge className="text-[28px] text-th-brand group-hover:text-th-hover" />
                  />
                </div>
                {/* links */}
                <div className="w-full flex flex-col p-6 gap-6">
                  {Data.header2Data.map((item, index) => {
                    return (
                      <Link
                        href={item.path}
                        key={index}
                        className="capitalize text-th-brand hover:text-dark-theme-hover text-[32px] font-normal"
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
      </WideWrapper>
    </div>
  );
};

export default Header2;
