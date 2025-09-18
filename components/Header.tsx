import { ICON_GROUP_HEADER } from '@/constants/IconGroupHeader'
import React from 'react'
import IconGroup from './IconGroup'

const Header = () => {
  return (
    <div className='h-[75px] bg-white px-8 py-3 flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        {ICON_GROUP_HEADER.map(item => (
          <IconGroup key={item.text} imageUrl={item.icon} text={item.text} />
        ))}
      </div>

      <p className='font-[Bebas_Neue] text-3xl text-[#006D77] leading-[100%]'>
        ELEARNING
      </p>

      <div className='flex items-center gap-2'>
        <button className='text-[#006D77] border-[#006D77] border rounded-[8px] py-3 px-4'>Đăng nhập</button>
        <button className='text-white bg-[#006D77] rounded-[8px] py-3 px-4'>Đăng ký và học ngay</button>
      </div>
    </div>
  )
}

export default Header
