import { BUY_SELL_TABS, ORDER_TYPE_TABS } from '@/constants/tabs.constants'
import React from 'react'

const BuySell = () => {
    const [activeTab, setActiveTab] = React.useState<string | undefined>("buy");
    const [activeOrderType, setActiveOrderType] = React.useState<string | undefined>("limit");
    return (
        <div className='bg-grey-2 rounded-[8px] w-[423px]'>
            <div className='flex'>
                {BUY_SELL_TABS.map((tab: CommonTabDataType, index: number) => (
                    <BuySellTab
                        key={index}
                        text={tab.text}
                        active={tab.tag === activeTab}
                        onClick={() => setActiveTab(tab.tag)}
                    />
                ))}
            </div>
            <div className='pt-4 pr-3 pl-5 pb-2.5'>
                {/*** Price */}
                <div>
                    <span className='text-grey-1 text-[12px] font-medium leading-[12px]'>Price</span>
                    <div className='mb-[22px] bg-grey-3 flex gap-[8px] justify-between p-1 rounded-[4px]'>
                        {ORDER_TYPE_TABS.map((tab: CommonTabDataType, index: number) => (
                            <OrderTypeTab
                                key={index}
                                text={tab.text}
                                active={tab.tag === activeOrderType}
                                onClick={() => setActiveOrderType(tab.tag)}
                            />
                        ))}

                    </div>
                </div>
                {/*** Size */}
                <div>
                    <span className='text-grey-1 text-[12px] font-medium leading-[12px]'>Size</span>
                </div>
                {/*** Percent */}
                <div className='mb-[22px] bg-grey-4 flex gap-[1px] justify-between p-1 rounded-[4px]'>
                    <div className="bg-grey-3 text-grey-5 rounded-[4px] text-center text-[10px] font-normal leading-[20px] w-full">
                        25%
                    </div>
                    <div className="bg-grey-3 text-grey-5 rounded-[4px] text-center text-[10px] font-normal leading-[20px] w-full">
                        50%
                    </div>
                    <div className="bg-grey-3 text-grey-5 rounded-[4px] text-center text-[10px] font-normal leading-[20px] w-full">
                        75%
                    </div>
                    <div className="bg-grey-3 text-grey-5 rounded-[4px] text-center text-[10px] font-normal leading-[20px] w-full">
                        100%
                    </div>
                </div>
                <button className='w-full bg-orange text-white py-3 rounded-[8px] text-[16px] font-medium leading-[16px]'>
                    Connect wallet
                </button>
            </div>

        </div>
    )
}

const BuySellTab = ({
    text,
    active,
    onClick
}: CommonTabType) => {
    return (
        <div className={`${active ? 'text-green border-b-green border-b-[2px]' : 'text-grey-1'} text-[14px] leading-[20px] font-inter font-bold cursor-pointer w-[50%] text-center pb-2 pt-3.5`} onClick={onClick}>{text}</div>
    )
}


const OrderTypeTab = ({
    text,
    active,
    onClick
}: CommonTabType) => {
    return (
        <div className={`${active ? 'bg-grey-4 text-white' : 'text-grey-1'} text-grey-5 rounded-[4px] text-center text-[12px] font-normal leading-[20px] w-full py-[6px] cursor-pointer`} onClick={onClick}>{text}</div>
    )
}



export default BuySell
