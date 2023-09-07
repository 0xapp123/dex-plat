import { ORDER_TABLE_CONTENTS, ORDER_TABLE_HEADERS } from '@/constants/tables.contants';
import { ORDER_TABLE_TABS } from '@/constants/tabs.constants'
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
                    <thead className="bg-[#090b0c] text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-[8px]">
                        <tr>
                            {
                                ORDER_TABLE_HEADERS.map((header: any) => {
                                    return (
                                        <th scope="col" className="px-6 py-3 text-white text-[14px] font-medium leading-[20px] normal-case">
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
                                    <tr className="odd:bg-[none] even:bg-grey-3 dark:bg-gray-800 dark:border-gray-700 text-white text-[14px] leading-[20px]"
                                        key={index}
                                    >

                                        <th scope="row" className="px-6 py-4 font-semibold text-white whitespace-nowrap dark:text-white">
                                            {tr.market}
                                        </th>
                                        <td className={`px-6 py-4`}>
                                            <span className={`p-1.5 rounded-[4px] text-[12px] ${tr.side === "BUY" ? 'bg-green' : 'bg-pink-3'}`}>{tr.side}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {tr.order_type}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tr.size}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tr.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tr.order_status}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tr.progress}
                                        </td>
                                        <td className="px-6 py-4">
                                            Cance
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
        <div className={`${active ? 'text-orange pb-[8px] border-b-orange border-b-[2px]' : 'text-grey-1'} text-[14px] leading-[20px] font-inter font-medium cursor-pointer`} onClick={onClick}>{text}</div>
    )
}

export default OrdersTable