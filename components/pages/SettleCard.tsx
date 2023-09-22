import { INFO_ICON, MONKEY_ICON, SETTLE_ICON, USDC_ICON } from '../../constants/image.constants'
import Image from 'next/image'
import React from 'react'

const SettleCard = () => {
    return (
        <div className='bg-grey-2 p-6 w-[450px] text-white rounded-[8px]'>
            <div className='text-white text-center relative mb-[12.68px]'>
                <span className='text-[14px] leading-[20px] font-semibold'>Accounts</span>
                <button
                    className='absolute right-[0px] bg-grey-4 rounded-[4px] py-[6px] px-3 text-white text-[12px] font-medium leading-[16px] w-[123px] h-[34px]'
                >Token accounts</button>
            </div>

            <div className='gap-[28.67px] flex flex-col'>
                <div>
                    <div className='flex gap-2 items-center mb-[21.5px]'>
                        <div className='text-grey-1 text-[18px] font-normal leading-[12px]'>
                            Wallet balances
                        </div>
                        <Image src={INFO_ICON} width={21.226} height={23.892} alt="info-icon" />
                    </div>
                    <div className='flex gap-2 items-center mb-[9.56px]'>
                        <Image src={MONKEY_ICON} width={25.472} height={28.671} alt="monkey-icon" />
                        <div className='text-grey-1 text-[20px] font-normal leading-[20px] text-white'>
                            2,555,661.5402
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={USDC_ICON} width={25.472} height={28.671} alt="monkey-icon" />
                        <div className='text-grey-1 text-[20px] font-normal leading-[20px] text-white'>
                            1,800.5402
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center mb-[21.5px]'>
                            <div className='text-grey-1 text-[18px] font-normal leading-[12px]'>
                                Unsettled balances
                            </div>
                            <Image src={INFO_ICON} width={21.226} height={23.892} alt="info-icon" />
                        </div>
                        <button className='flex gap-1 bg-orang items-center rounded-[4px] w-[101px] h-[43px] justify-center'>
                            <div className='text-[14px] font-medium leading-[16px]'>
                                Settle
                            </div>
                            <Image
                                src={SETTLE_ICON}
                                width={20}
                                height={20}
                                alt="settle icon"
                            />
                        </button>
                    </div>
                    <div className='flex gap-2 items-center mb-[9.56px]'>
                        <Image src={MONKEY_ICON} width={25.472} height={28.671} alt="monkey-icon" />
                        <div className='text-grey-1 text-[20px] font-normal leading-[20px] text-white'>
                            2,555,661.5402
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={USDC_ICON} width={25.472} height={28.671} alt="monkey-icon" />
                        <div className='text-grey-1 text-[20px] font-normal leading-[20px] text-white'>
                            1,800.5402
                        </div>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='text-grey-1 text-[16px] leading-[20px] font-normal'>
                        Need a Solana wallet?
                    </div>

                    <div className='flex gap-1 items-center'>
                        <a href="https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa" target='_blank' className='text-orang text-[14px] leading-[20px] font-normal underline' rel="noreferrer">Phantom</a>
                        <span className='text-grey-1'>|</span>
                        <a href="https://chrome.google.com/webstore/detail/slope-wallet/pocmplpaccanhmnllbbkpgfliimjljgo" target='_blank' className='text-orang text-[14px] leading-[20px] font-normal underline' rel="noreferrer">Slope</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettleCard
