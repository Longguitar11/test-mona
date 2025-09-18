import Image from 'next/image'
import React from 'react'

interface SectionFooterProps {
  text: string
}

const SectionFooter = ({ text }: SectionFooterProps) => {
  return (
    <div className='flex gap-2 items-center'>
      <div className='flex size-4'>
        <Image
          src={'/right-arrow-footer.svg'}
          width={4}
          height={8}
          alt=''
          className='m-auto h-2'
        />
      </div>

      <p className='leading-[20px]'>{text}</p>
    </div>
  )
}

export default SectionFooter
