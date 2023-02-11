import React from 'react'

const Supplier = () => {
  return (
    <section className='mt-16 md:mt-20'>
        <div className='max-w-container px-2.5 md:px-0 mx-auto'>
            <div className='md:flex justify-between items-center mb-16 md:mb-24'>
                <div className='w-full md:max-w-[289] font-pop font-bold text-3xl md:text-5xl md:pr-[100px] leading-10 md:leading-[72px]'>
                    <h2>The biggest supplier on the country</h2>
                </div>
                <div className='w-full md:max-w-[651] font-pop font-medium text-sm md:text-base pt-3 md:pt-0 md:pr-[18px] text-para'>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col sml:flex-row sml:flex-wrap md:flex-row md:flex-nowrap md:justify-between'>
            <div className='sml:w-2/4 md:my-0 md:w-1/4'>
                <picture className='p-1'>
                    <img src='images/supplier1.png' loading='lazy'/>
                </picture>
            </div>
            <div className='sml:w-2/4 md:my-0 md:w-1/4'>
                <picture className='p-1'>
                    <img src='images/supplier2.png' loading='lazy'/>
                </picture>
            </div>
            <div className='sml:w-2/4 md:my-0 md:w-1/4'>
                <picture className='p-1'>
                    <img src='images/supplier3.png' loading='lazy'/>
                </picture>
            </div>
            <div className='sml:w-2/4 md:my-0 md:w-1/4'>
                <picture className='p-1'>
                    <img src='images/supplier4.png' loading='lazy'/>
                </picture>
            </div>
        </div>
    </section>
  )
}

export default Supplier