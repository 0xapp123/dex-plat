import { resourceUsage } from 'process'
import React from 'react'
import { FaArrowDownLong, FaArrowUpLong } from 'react-icons/fa6';
const MarkPrice = () => {
    const markPrice = 200;
    const previousMarkPrice = 100;

    const markPriceColor =
        markPrice > previousMarkPrice
            ? 'text-green-1'
            : markPrice < previousMarkPrice
                ? 'text-pink-2'
                : 'white';


    return (
        <div className='flex justify-between'>

            <BidLabel
                type="buy"
                text="Buy side"
            />
            <div className={markPriceColor + " text-[14px] leading-[20px] font-bold flex items-center"}>
                {markPrice > previousMarkPrice && <FaArrowUpLong />}
                {markPrice < previousMarkPrice && <FaArrowDownLong />}
                {markPrice}
            </div>
            <BidLabel
                type="sell"
                text="Sell side"
            />

        </div>
    )
}

export default MarkPrice


interface BidLabel {
    text: string;
    type: string;
}
const BidLabel = (
    {
        text, type
    }: BidLabel
) => {
    return (
        <div className='flex items-center bg-grey-3 rounded-[4px] p-[8px] gap-[4px] text-[14px] leading-[20px]'>

            <div className={`${type === "buy" ? 'bg-green' : "bg-pink-2"} w-[10px] h-[10px] rounded-[2px]`}>

            </div>
            {text}
        </div>
    )
}