import React, { useState } from 'react'
import { getLeafNodes } from '../../../api/getLeafNodes'
import { getBookSide } from '../../../api/getBookSide'
import Spread from './Spread';
import MarkPrice from './MarkPrice';

const baseToken = "SOL";
const quoteToken = "USDC";

const Orderbook = ({
}) => {
    const [orderbookData, setOrderbookData] = useState(null);
    React.useEffect(() => {
        // getLeafNodes()
        getBookSide()
    }, [])


    return (
        <div className='bg-grey-2 rounded-[8px] w-[473px] p-4'>
            <div className='text-[14px] font-semibold leading-[20px] text-center mb-[4px]'>Orderbook</div>
            <MarkPrice />
            <div className='flex justify-between text-[14px] text-grey-1 leading-[20px] mt-[16px]'>
                <div>
                    Size({baseToken})
                </div>
                <div>
                    Price ({quoteToken})
                </div>
                <div>
                    Size({baseToken})
                </div>
            </div>
            <Spread maxBid={orderbookData?.bids[0]} minAsk={orderbookData?.asks[0]} />
        </div>
    )
}

export default Orderbook
