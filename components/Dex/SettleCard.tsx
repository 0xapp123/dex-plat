import React from 'react'

const SettleCard = () => {
    return (
        <div className='bg-grey-2 p-6 w-[450px] text-white rounded-[8px]'>
            <div className='text-white text-center relative'>
                <span className='text-[14px] leading-[20px] font-semibold'>Accounts</span>
                <button
                    className='absolute right-[0px] bg-grey-4 rounded-[4px] py-[6px] px-3 text-white text-[12px] font-medium leading-[16px]'
                >Token accounts</button>
            </div>
        </div>
    )
}

export default SettleCard
