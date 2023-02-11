import React from 'react'

const Contact = () => {
  return (
    <section className='bg-primary py-[45px] border-b-[5px] border-yellowBorder'>
        <div className='max-w-container mx-auto flex items-center justify-between'>
            <div className='font-pop font-bold text-4xl text-white'>
                <h3>Want to join as member branch in your area?</h3>
            </div>
            <div className='font-pop font-normal text-xs text-white'>
            <a className='px-8 py-3.5 bg-primary border border-solid border-white uppercase font-pop font-semibold text-base hover:bg-white hover:text-primary hover:border-solid hover:border-primary hover:ease-linear duration-300' href='#'>CONTACT</a>
            </div>
      </div>
    </section>
  )
}

export default Contact