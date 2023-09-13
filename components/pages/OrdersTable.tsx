import { CANCEL_ICON, LIMIT_ICON, MARKET_ICON } from '../../constants/image.constants';
import { ORDER_TABLE_CONTENTS, ORDER_TABLE_HEADERS } from '../../constants/tables.contants';
import { ORDER_TABLE_TABS } from '../../constants/tabs.constants'
import Image from 'next/image';
import React from 'react'



const OrdersTable = () => {
    const [activeTab, setActiveTab] = React.useState<string | undefined>("open-orders");

    return (
        <div className='bg-[#121616] pt-4 pr-6 pb-10 pl-6 rounded-[8px] mb-[60px]'>
            {/*** order table tabs */}
            <div className='flex justify-between'>
                <div className='flex gap-[25px]'>
                    {ORDER_TABLE_TABS.map((tab: CommonTabDataType, index: number) => (
                        <OrderTableTab
                            key={index}
                            text={tab.text}
                            active={tab.tag === activeTab}
                            onClick={() => setActiveTab(tab.tag)}
                        />
                    ))}
                </div>
                <div className='flex gap-2 items-center'>
                    <input type="checkbox" className='border-[1px] border-grey-4 bg-grey-3 w-[14px] h-[14px]' />
                    <div className='text-grey-1 text-[14px] leading-[20px] font-inter font-medium'>
                        show only this market
                    </div>
                </div>
            </div>
            {/*** order table content */}

            <div className="relative overflow-x-auto mt-[15px]">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="rounded-[8px] text-xs text-gray-700 uppercase bg-blacki">
                        <tr>
                            {
                                ORDER_TABLE_HEADERS.map((header: HeaderType, index: number) => {
                                    return (
                                        <th scope="col" className="px-6 py-3 text-white text-[14px] font-medium leading-[20px] normal-case" key={index}>
                                            {
                                                header.text
                                            }
                                        </th>
                                    )

                                })
                            }

                        </tr>
                    </thead>
                    <tbody>
                        {
                            ORDER_TABLE_CONTENTS.map((tr: OrderTableType, index: number) => {
                                return (
                                    <tr className="rounded-[8px] odd:bg-[none] even:bg-grey-3 dark:bg-gray-800 dark:border-gray-700 text-white text-[14px] leading-[20px]"
                                        key={index}
                                    >

                                        <th scope="row" className="px-6 py-4 font-semibold text-white whitespace-nowrap dark:text-white">


                                            {tr.market}

                                        </th>
                                        <td className={`px-6 py-4`}>
                                            {
                                                tr.side === "BUY"
                                                    ?
                                                    <span className={`bg-green w-[37px] h-[24px] flex justify-center rounded-[4px] text-[12px] item-center`}>{tr.side}</span>
                                                    :
                                                    <span className={`bg-pink-3 w-[41px] h-[24px] flex justify-center rounded-[4px] text-[12px] item-center`}>{tr.side}</span>
                                            }

                                        </td>
                                        <td className="px-6 py-4 flex gap-1">
                                            {
                                                tr.order_type === "LIMIT" ?
                                                    <Image src={LIMIT_ICON} width={14} height={14}
                                                        alt="limit-icon"
                                                    /> :
                                                    <Image src={MARKET_ICON} width={14} height={14}
                                                        alt="market-icon"
                                                    />
                                            }
                                            {tr.order_type}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tr.size}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tr.price}
                                        </td>
                                        <td className="px-6 py-4 text-[14px] font-normal leading-[20px]">
                                            {tr.order_status}
                                        </td>
                                        <td className="px-6 py-4 text-[14px] font-normal">
                                            {tr.progress}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className='flex gap-1 bg-grey-4 text-[12px] font-medium leading-[20px] rounded-[4px] w-[70px] h-[24px] justify-center items-center'>
                                                <Image src={CANCEL_ICON} width={14} height={14}
                                                    alt="cancel-icon"
                                                />
                                                Cancel
                                            </div>
                                        </td>

                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>

        </div>
    )
}

const OrderTableTab = ({
    text,
    active,
    onClick
}: CommonTabType) => {
    return (
        <div className={`${active ? 'text-orang pb-[8px] border-b-orang border-b-[2px]' : 'text-grey-1'} text-[14px] leading-[20px] font-inter font-medium cursor-pointer`} onClick={onClick}>{text}</div>
    )
}

export default OrdersTable