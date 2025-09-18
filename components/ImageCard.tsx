import Image from 'next/image'
import React from 'react'

interface ImageCardProps {
    imageUrl: string
    title: string
}

const ImageCard = ({ imageUrl, title }: ImageCardProps) => {
  return (
    <div className='w-[450px] h-[600px] rounded-lg relative'>
        <Image src={imageUrl} width={450} height={600} alt={title} className='rounded-lg size-full object-cover' />
        <p className='absolute bottom-[55px] inset-x-8 leadling-[140%] text-2xl text-white align-middle font-bold'>{title}</p>
    </div>
  )
}

export default ImageCard