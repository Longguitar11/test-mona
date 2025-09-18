import Banner from '@/components/Banner'
import Header from '@/components/Header'
import ImageCard from '@/components/ImageCard'
import SectionFooter from '@/components/SectionFooter'
import { HORIZONTAL_CARDS } from '@/constants/HorizontalCards'
import Image from 'next/image'

export default function Home () {
  return (
    <div className='leading-[20px]'>
      <Header />

      <Banner />

      <div className='bg-white font-[BT_Beau_Sans] py-[76px] px-[164px] '>
        <div className='space-y-[76px]'>
          <div className='flex items-end justify-between'>
            <div className='space-y-3 text-[#353535]'>
              <p className='text-5xl uppercase font-[700] leading-[140%] align-middle'>
                Bạn học được gì từ khóa học?
              </p>
              <p className='text-lg leading-[130%]'>
                Sau khóa học, bạn sẽ có thể tự tin sử dụng Chaos Vantage như một
                phần không thể thiếu trong quy trình diễn họa!
              </p>
            </div>

            <div className='flex items-center gap-2'>
              <div className='size-10 flex rounded-full bg-[#F4F5F8]'>
                <Image
                  src={'/left-arrow.svg'}
                  width={16}
                  height={16}
                  alt=''
                  className='h-4 m-auto'
                />
              </div>
              <div className='size-10 flex rounded-full bg-[#006D77]'>
                <Image
                  src={'/right-arrow.svg'}
                  width={16}
                  height={16}
                  alt=''
                  className='h-4 m-auto'
                />
              </div>
            </div>
          </div>

          <div className='flex gap-8 items-center overflow-visible'>
            {HORIZONTAL_CARDS.map(item => (
              <ImageCard
                key={item.title}
                imageUrl={item.imageUrl}
                title={item.title}
              />
            ))}
          </div>
        </div>

        <div className=''>
          <p className='mt-19 mb-10 text-center leading-[140%] font-bold text-5xl text-[#353535] uppercase align-middle'>
            các dự án nổi bật của boc studio
          </p>

          <div className='grid grid-cols-3 gap-6'>
            <div className='relative col-span-2 row-span-2'>
              <Image
                src={'/gallary-1.jpg'}
                width={450}
                height={600}
                alt=''
                className='object-cover size-full rounded-lg'
              />
              <div className='absolute bottom-[20px] left-[27px] space-y-2 text-white'>
                <p className='uppercase font-bold text-2xl leading-[140%]'>
                  The Agricultural Museum of The Mekong Delta
                </p>
                <div className='flex gap-2 items-center border-b w-fit pb-1 border-white'>
                  <p>Xem thêm</p>
                  <Image
                    src={'/right-arrow.svg'}
                    width={10}
                    height={10}
                    alt=''
                    className='h-[10px]'
                  />
                </div>
              </div>
            </div>

            <Image
              src={'/gallary-2.jpg'}
              width={450}
              height={300}
              alt=''
              className='object-cover size-full row-span-2 rounded-lg'
            />

            <div className='relative'>
              <Image
                src={'/gallary-3.jpg'}
                width={450}
                height={300}
                alt=''
                className='object-cover size-full rounded-lg'
              />
            </div>

            <div className='relative'>
              <Image
                src={'/gallary-4.jpg'}
                width={450}
                height={300}
                alt=''
                className='object-cover size-full rounded-lg'
              />
            </div>

            <div className='relative'>
              <Image
                src={'/gallary-5.jpg'}
                width={450}
                height={300}
                alt=''
                className='object-cover size-full rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='text-[#3A3A3A] bg-[#F1F1F1] px-[164px] pb-14 pt-24 space-y-6 font-[Inter] '>
        <div className='flex items-center justify-between'>
          <div className='space-y-2'>
            <p className='font-semibold leading-[20px] align-bottom'>MENU</p>
            <SectionFooter text={'Chương trình học'} />
            <SectionFooter text={'Quyền lợi'} />
            <SectionFooter text={'Chúng tôi là ai?'} />
            <SectionFooter text={'FAQs'} />
          </div>

          <div className='space-y-2'>
            <p className='font-semibold leading-[20px] align-bottom'>LIÊN HỆ</p>
            <div className='flex gap-2 items-center'>
              <Image src={'/email.svg'} width={16} height={16} alt='' />
              <p>Email:</p>
            </div>
            <p className='font-semibold align-bottom'>monatest@gmail.com</p>
            <div className='flex gap-2 items-center'>
              <Image src={'/phone.svg'} width={16} height={16} alt='' />
              <p>Hotline:</p>
            </div>

            <p className='font-semibold text-2xl leading-8 align-bottom text-[#006D77]'>
              0901.123.456
            </p>
          </div>

          <div className='p-[20px] rounded-lg flex items-center gap-[18px] bg-white'>
            <Image
              src={'/Sticker-KHA.svg'}
              width={80}
              height={80}
              alt=''
              className='size-20'
            />
            <div className='space-y-1'>
              <p className='leading-[20px] algin-bottom'>Thuộc cộng đồng</p>
              <p className='font-semibold text-lg leading-7 align-bottom'>
                Đồng Nghiệp của Hùng
              </p>
            </div>
          </div>
        </div>

        <div className='border-t border-[#006D77] pt-4 flex items-center justify-between'>
          <div className='flex items-center gap-[6px]'>
            <p>Thiết kế bởi</p>
            <p>Thiết kế bởi</p>
            <Image
              src={'/mona.png'}
              width={16}
              height={16}
              alt=''
              className='size-4'
            />

            <div className='font-bold leading-[100%] flex'>
              MONA<span className='text-[#2686ED]'>.Software </span>
              <span className='text-[#F51E92] flex'>
                / E-Learning{' '}
                <Image
                  src={'/preview.svg'}
                  width={16}
                  height={16}
                  alt=''
                  className='size-4'
                />
              </span>
            </div>
          </div>

          <div className='flex items-center gap-8'>
            <div className='flex items-center gap-2'>
              <Image
                src={'/facebook.svg'}
                width={16}
                height={16}
                alt=''
                className=''
              />
              <p className='font-semibold leading-[20px] align-middle'>
                Facebook
              </p>
            </div>

            <div className='flex items-center gap-2'>
              <Image
                src={'/facebook.svg'}
                width={16}
                height={16}
                alt=''
                className=''
              />
              <p className='font-semibold leading-[20px] align-middle'>
                Fanpage
              </p>
            </div>

            <div className='flex items-center gap-2'>
              <Image
                src={'/tiktok.svg'}
                width={16}
                height={16}
                alt=''
                className=''
              />
              <p className='font-semibold leading-[20px] align-middle'>
                Tiktok
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
