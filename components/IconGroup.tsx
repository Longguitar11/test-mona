import Image from 'next/image'
import React from 'react'

interface IconGroupProps {
  className?: string
  textStyle?: string
  imageUrl: string
  text: string
}

const IconGroup = ({
  className,
  textStyle,
  imageUrl,
  text
}: IconGroupProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image src={imageUrl} width={24} height={24} alt='' className='shrink-0' />
      <p className={`font-semibold text-[#3A3A3A] ${textStyle}`}>{text}</p>
    </div>
  )
}

export default IconGroup
