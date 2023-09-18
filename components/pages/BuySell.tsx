import Image from 'next/image';
import React from 'react'
import { BUY_SELL_TABS, ORDER_TYPE_TABS } from '../../constants/tabs.constants';
import { LIMIT_ICON, MARKET_ICON, MONKEY_ICON, USDC_ICON } from '../../constants/image.constants';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

const BuySell = () => {
    const [activeTab, setActiveTab] = React.useState<string | undefined>("buy");
    const [activeOrderType, setActiveOrderType] = React.useState<string | undefined>("limit");

    const wallet = useWallet();
    const { visible, setVisible } = useWalletModal();
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
                    <div className='bg-grey-3 rounded-[4px] w-full h-[40px] flex justify-between text-white items-center mb-2 pl-4'>
                        <input className="bg-grey-3 w-full" type="number" min={0.00} />
                        <div className='bg-grey-4 min-w-[97px] h-[40px] rounded-[4px] flex justify-center items-center gap-[6px]' >
                            <Image src={USDC_ICON} alt="usdc icon" width={20} height={20} />
                            USDC
                        </div>
                    </div>
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
                    <div className='bg-grey-3 rounded-[4px] w-full h-[40px] flex justify-between text-white items-center mb-2 pl-4' >
                        <input className="bg-grey-3 w-full" type="number" min={0.00} />
                        <div className='bg-grey-4 min-w-[97px]  h-[40px] rounded-[4px] flex justify-center items-center gap-[6px]' >
                            <Image src={MONKEY_ICON} alt="monkey icon" width={20} height={20} />
                            SOLAPE
                        </div>
                    </div>
                    <div className='bg-grey-3 rounded-[4px] w-full h-[40px] flex justify-between text-white items-center mb-2 pl-4 mb-4'>
                        <input className="bg-grey-3 w-full" type="number" min={0.00} />
                        <div className='bg-grey-4 min-w-[97px] h-[40px] rounded-[4px] flex justify-center items-center gap-[6px]' >
                            <Image src={USDC_ICON} alt="usdc icon" width={20} height={20} />
                            USDC
                        </div>
                    </div>
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
                <button className='w-full bg-orang text-white py-3 rounded-[8px] text-[16px] font-medium leading-[16px]'
                    onClick={
                        wallet.connected
                            ? () => {

                            }
                            : () => setVisible(!visible)
                    }
                >
                    {wallet.connected && wallet.publicKey
                        ? (activeTab === "buy" ? "Buy" : "Sell")
                        : "Connect Wallet"}
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
        <div className={`${active ? 'bg-grey-4 text-white' : 'text-grey-1'} text-grey-5 rounded-[4px] text-center text-[12px] font-normal leading-[20px] w-full py-[6px] cursor-pointer flex gap-2 justify-center`} onClick={onClick}>
            {
                text === "Limit Order"
                    ?
                    <Image src={LIMIT_ICON} width={14} height={14}
                        alt="limit-icon"
                    /> :
                    <Image src={MARKET_ICON} width={14} height={14}
                        alt="limit-icon"
                    />
            }

            {text}
        </div>
    )
}



export default BuySell
