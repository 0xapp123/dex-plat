import React, { useState } from "react";
import * as Icons from "../../SVG/Icons";
import FillButton from "../shared/Buttons/FillButton";

const ConnectWalletWidget = () => {
  const [buttonStates, setButtonStates] = useState({
    buy: true,
    sell: false,
    limitOrder: true,
    marketOrder: false,
  });

  const [percentageButtons, setPercentageButtons] = useState([
    {
      percent: "25%",
      state: true,
    },
    {
      percent: "50%",
      state: false,
    },
    {
      percent: "75%",
      state: false,
    },
    {
      percent: "100%",
      state: false,
    },
  ]);

  const handlePercentageButtonClick = (clickedIndex: number) => {
    const updatedPercentageButtons = percentageButtons.map((item, index) => {
      return {
        ...item,
        state: index === clickedIndex,
      };
    });
    setPercentageButtons(updatedPercentageButtons);
  };

  return (
    <div className="w-full p-2 bg-th-bkg-4 rounded-md">
      {/* buy and sell button */}
      <div className="w-full grid grid-cols-2">
        <button
          onClick={() =>
            setButtonStates({
              ...buttonStates,
              buy: !buttonStates.buy,
              sell: false,
            })
          }
          className={`w-full h-[40px] flex justify-center items-center text-[14px] font-inter font-semibold ${
            buttonStates.buy
              ? "text-[#0AD171] border-b-2 border-[#0AD171]"
              : "text-th-fkg-4"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() =>
            setButtonStates({
              ...buttonStates,
              sell: !buttonStates.sell,
              buy: false,
            })
          }
          className={`w-full h-[40px] flex justify-center items-center text-[14px] font-inter font-semibold text-th-fkg-4 ${
            buttonStates.sell
              ? "text-[#0AD171] border-b-2 border-[#0AD171]"
              : "text-th-fkg-4"
          }`}
        >
          Sell
        </button>
      </div>
      <div className="w-full flex flex-col gap-2 px-3">
        {/* price */}
        <div className="w-full flex flex-col gap-1 mt-3">
          <p className="text-[12px] font-normal text-th-fkg-4">Price</p>
          <div className="w-full h-[40px] grid grid-cols-[3fr,1fr] bg-th-bkg-3">
            <input
              id="coinPrice"
              name="coinPrice"
              value="0.5402124"
              className="w-full h-full px-4 bg-transparent focus:outline-none rounded-l-md text-[12px] text-white font-inter font-normal"
            />
            <button className="w-full flex justify-center items-center gap-2 bg-[#2E3838] rounded-md">
              <Icons.UsdCoin />
              <p className="text-[12px] font-normal font-inter text-white">
                USDC
              </p>
            </button>
          </div>
        </div>
        {/* limit order + market order button*/}
        <div className="w-full grid grid-cols-2 h-[40px] bg-th-bkg-3 rounded-md p-1">
          <button
            onClick={() =>
              setButtonStates({
                ...buttonStates,
                limitOrder: true,
                marketOrder: false,
              })
            }
            className={`w-full flex gap-2 justify-center items-center rounded-md ${
              buttonStates.limitOrder
                ? "text-white bg-[#2E3838]"
                : "text-[#676767] bg-transparent"
            }`}
          >
            {buttonStates.limitOrder ? (
              <Icons.LimitOrder fill="#FFFAF5" />
            ) : (
              <Icons.LimitOrder fill="#676767" />
            )}
            <p
              className={`text-[12px] ${
                buttonStates.limitOrder ? "text-white" : "text-[#676767]"
              } font-normal font-inter`}
            >
              Limit order
            </p>
          </button>
          <button
            onClick={() =>
              setButtonStates({
                ...buttonStates,
                marketOrder: true,
                limitOrder: false,
              })
            }
            className={`w-full flex gap-2 justify-center items-center rounded-md ${
              buttonStates.marketOrder
                ? "text-white bg-[#2E3838]"
                : "text-[#676767] bg-transparent"
            }`}
          >
            {buttonStates.marketOrder ? (
              <Icons.MarketOrder fill="#FFFAF5" />
            ) : (
              <Icons.MarketOrder fill="#676767" />
            )}
            <p
              className={`text-[12px] ${
                buttonStates.marketOrder ? "text-white" : "text-[#676767]"
              } font-normal font-inter`}
            >
              Market order
            </p>
          </button>
        </div>
        {/* size */}
        <div className="w-full flex flex-col gap-1">
          <p className="text-[12px] font-normal text-th-fkg-4">Size</p>
          <div className="w-full h-[40px] grid grid-cols-[3fr,1fr] bg-th-bkg-3">
            <input
              id="coinPrice"
              name="coinPrice"
              value="1,250,000.0000"
              className="w-full h-full px-4 bg-transparent focus:outline-none rounded-l-md text-[12px] text-white font-inter font-normal"
            />
            <button className="w-full flex justify-center items-center gap-2 bg-[#2E3838] rounded-md">
              <Icons.SolapeCoin />
              <p className="text-[12px] font-normal font-inter text-white">
                SOLAPE
              </p>
            </button>
          </div>
        </div>
        {/* in dollar */}
        <div className="w-full flex flex-col">
          <div className="w-full h-[40px] bg-th-bkg-3 grid grid-cols-[3fr,1fr]">
            <input
              id="coinPrice"
              name="coinPrice"
              value="675,265.5000"
              className="w-full h-full px-4 bg-transparent focus:outline-none rounded-l-md text-[12px] text-white font-inter font-normal"
            />
            <button className="w-full flex justify-center items-center gap-2 bg-[#2E3838] rounded-md">
              <Icons.UsdCoin />
              <p className="text-[12px] font-normal font-inter text-white">
                SOLAPE
              </p>
            </button>
          </div>
        </div>
        {/* percentages */}
        <div className="w-full grid grid-cols-4 gap-1 h-[24px] bg-[#2E3838] rounded-md mt-2 p-1">
          {percentageButtons.map((item, index) => {
            return (
              <button
                onClick={() => handlePercentageButtonClick(index)}
                key={index}
                className={`w-full rounded-md flex justify-center items-center text-[10px] font-inter font-normal ${
                  item.state
                    ? "text-white bg-th-bkg-3"
                    : "text-white/50 bg-th-bkg-3"
                }`}
              >
                {item.percent}
              </button>
            );
          })}
        </div>
        {/* connect wallet button */}
        <div className="w-full mt-2">
          <FillButton
            text="Connect wallet"
            styles="w-full connectWalletShadow h-[40px] text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletWidget;
