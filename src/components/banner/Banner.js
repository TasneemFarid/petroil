import React from 'react'

const Banner = () => {
  return (
    <div className='' style={{background: "url(images/banner.png)"}}>
        <div className=' py-28 md:py-60 bg-darkLight font-pop font-bold text-3xl md:text-[64px] text-white'>
            <div className='max-w-container px-2.5 md:px-0 mx-auto'>
                <div className='w-[320px] md:w-[842px]'>
                    <h1 className='mb-5 md:leading-[80px]'>We exist since 1975 on the oil and gas industry.</h1>
                    <a className='px-7 py-3.5 md:px-8 py-3.5 bg-primary uppercase font-pop font-semibold text-sm md:text-base hover:bg-transparent hover:border hover:border-solid hover:border-primary hover:ease-linear duration-300' href='#'>LEARN MORE</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner