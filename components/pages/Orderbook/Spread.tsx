import React from 'react';
import { Market, OpenOrders } from '@project-serum/serum';
// import { useMarket } from '../../utils/markets'; // Assuming you have a 'Market' type


interface SpreadProps {
    maxBid: Market | null; // You should replace 'Market' with the actual type
    minAsk: Market | null;  // You should replace 'Market' with the actual type
}

// const SpreadRow = styled(Row)({
//     background: '#1C2222',
//     color: '#fff',
//     borderRadius: 4,
//     padding: '6px 8px',
//     margin: '12px 10px 0',
//     fontSize: 12,
// });

const Spread: React.FC<SpreadProps> = React.memo(
    ({ maxBid, minAsk }) => {
        // const { market } = useMarket();
        // const spread = minAsk && maxBid ? minAsk.price - maxBid.price : null;
        // const percentSpread =
        //     minAsk && maxBid ? (spread / minAsk.price) * 100 : null;

        return (
            <div className='rounded-[4px] bg-grey-3 flex justify-between py-[6px] px-[8px]'>
                <div className='text-[12px] font-normal leading-[20px]'>Spread</div>
                <div>
                    { }
                </div>
                <div>%</div>
            </div>
        );
    },
    // (prevProps, nextProps) => isEqual(prevProps, nextProps, ['maxBid', 'minAsk']),
);

export default Spread;

// function isEqual(obj1, obj2, keys) {
//     if (!keys && Object.keys(obj1).length !== Object.keys(obj2).length) {
//         return false;
//     }
//     keys = keys || Object.keys(obj1);
//     for (const k of keys) {
//         if (obj1[k] !== obj2[k]) {
//             // shallow comparison
//             return false;
//         }
//     }
//     return true;
// }


// function getDecimalCount(value): number {
//     if (
//         !isNaN(value) &&
//         Math.floor(value) !== value &&
//         value.toString().includes('.')
//     )
//         return value.toString().split('.')[1].length || 0;
//     if (
//         !isNaN(value) &&
//         Math.floor(value) !== value &&
//         value.toString().includes('e')
//     )
//         return parseInt(value.toString().split('e-')[1] || '0');
//     return 0;
// }

// function useMarket() {
//     const context = React.useContext(MarketContext);
//     if (!context) {
//         throw new Error('Missing market context');
//     }
//     return context;
// }


// const MarketContext: React.Context<null | MarketContextValues> = React.createContext<null | MarketContextValues>(
//     null,
// );