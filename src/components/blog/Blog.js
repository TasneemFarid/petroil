import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const Blog = () => {
  return (
    <section className='py-[110px] bg-[#F0F0F0]'>
        <div className='max-w-container mx-auto flex justify-between'>
            <div className='w-[339px]' style={{background: "url(images/blog1.png)"}}>
                <div className='pt-[75px] pb-[55px] px-[45px] bg-darkLight'>
                    <p className='font-pop font-bold text-2xl text-white pb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                    <a className='inline-block px-8 py-3.5 text-white bg-[rgba(255,255,255,0.5)] font-pop font-semibold text-xs hover:bg-transparent hover:border hover:border-solid hover:border-white hover:ease-linear duration-300' href='#'>Read More</a>
                </div>
            </div>
            <div className='w-[339px]' style={{background: "url(images/blog2.png)"}}>
                <div className='pt-[75px] pb-[55px] px-[45px] bg-darkLight'>
                    <p className='font-pop font-bold text-2xl text-white pb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                    <a className='inline-block px-8 py-3.5 text-white bg-[rgba(255,255,255,0.5)] font-pop font-semibold text-xs hover:bg-transparent hover:border hover:border-solid hover:border-white hover:ease-linear duration-300' href='#'>Read More</a>
                </div>
            </div>
            <div className='w-[339px]' style={{background: "url(images/blog3.png)"}}>
                <div className='pt-[75px] pb-[55px] px-[45px] bg-darkLight'>
                    <p className='font-pop font-bold text-2xl text-white pb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                    <a className='inline-block px-8 py-3.5 text-white bg-[rgba(255,255,255,0.5)] font-pop font-semibold text-xs hover:bg-transparent hover:border hover:border-solid hover:border-white hover:ease-linear duration-300' href='#'>Read More</a>
                </div>
            </div>
        </div>
        <div className='max-w-container mx-auto mt-7'>
            <div className='flex justify-end'>
                <a className='flex items-center font-pop font-bold text-base' href='#'>MORE FROM THE BLOG<FaChevronRight className='ml-1 '/></a>
            </div>
        </div>
    </section>
  )
}

export default Blog