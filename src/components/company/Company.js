import React from 'react'

const Company = () => {
  return (
    <section className='py-[136px] bg-[#F0F0F0]'>
        <div className='max-w-container mx-auto'>
            <div className='flex'>
                <div className='w-[416px] bg-primary'>
                    <p className='font-pop font-bold text-4xl text-white px-[75px] py-[100px] leading-[42px]'>Learn more about our company</p>
                </div>
                <div className='w-[726px] pt-[168px] pb-[142px] text-center' style={{background: "url(images/company.png)"}}>
                <a className='px-8 py-3.5 bg-white text-primary font-pop font-semibold text-base hover:bg-primary hover:text-white hover:border hover:border-solid hover:border-primary hover:ease-linear duration-300' href='#'>Learn More</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Company