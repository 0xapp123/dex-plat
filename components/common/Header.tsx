import { Popover, Transition } from "@headlessui/react";
import { FC, Fragment } from "react";
import WalletButton from "./WalletButton";
import { Bars3Icon } from "@heroicons/react/24/outline";
// import SettingsPanel from "./SettingsPanel";
import Image from "next/image";

const Header: FC = () => {

  return (
    <div className="bg-grey-6">
      <Popover className="relative z-50 max-w-[1392px] mx-auto">
        <div className="h-[40px] w-[152px] absolute pt-3 bg-grey-6prettifyDecimal">
          <Image
            src="/logo.svg"
            width={3.8}
            height={1}
            layout="responsive"
            alt="Solape Logo"
          ></Image>
        </div>
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 md:space-x-6 space-x-2 solapenav  ">
          <div className="flex justify-start items-center space-x-8 pl-[150px]">
            <button
              className="text-lg text-white no-underline text-left flex space-x-2 items-center ml-12 focus-visible:outline-none rounded-sm focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:border-none"
            >
              <p className="text-transparent bg-clip-text text-orange-200">
                Dex
              </p>
            </button>
            <div className="space-x-4 hidden md:flex items-center">
            </div>
          </div>
          <div className="md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-1 md:p-2 text-gray-200 hover:bg-gray-800 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden items-center justify-end md:flex space-x-4">

            <WalletButton />
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute w-full top-full origin-top transform transition md:hidden mt-2"
          >
            {/* {({ close }) => (
              <div className="rounded-lg bg-gray-800 border border-gray-700 px-2 py-4 shadow-2xl mx-2">
                <SettingsPanel close={close} />
              </div>
            )} */}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Header;
