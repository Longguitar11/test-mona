import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative'>
        <Image src={'/banner.png'} width={1000} height={765} alt='' className='object-cover w-full h-[765px]' />
        <p className='absolute left-[165px] bottom-10 uppercase font-[BT_Beau_Sans] font-[700] text-[48px] leading-[140%] align-middle text-white'>
        Mở ra giới hạn diễn hoạ kiến trúc
        </p>
    </div>
  )
}

export default Banner