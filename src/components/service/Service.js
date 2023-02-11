import React from 'react'

const Service = () => {
  return (
    <section className='mt-7'>
        <div className='flex flex-wrap'>
            <div className='w-2/4 flex flex-col justify-center items-end pt-[105px] pb-[142px] pr-[150px]'>
                <h2 className='font-pop font-bold text-6xl w-[405px] pb-3'>Our Services</h2>
                <p className='font-pop font-medium text-base w-[405px]'>It is a long estabished fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className='w-2/4' style={{background: "url(images/services1.png)"}}>
                <div className='bg-darkLight pt-[145px] pb-[139px] pl-28'>
                    <h4 className='font-pop font-bold text-4xl text-white mb-5'>Modern natural oil and gas refineries.</h4>
                    <a className='inline-block px-8 py-3.5 text-white bg-primary uppercase font-pop font-semibold text-base hover:text-primary hover:bg-transparent hover:border hover:border-solid hover:border-primary hover:ease-linear duration-300' href='#'>LEARN MORE</a>
                </div>
            </div>
            <div className='w-2/4' style={{background: "url(images/services2.png)"}}>
                <div className='bg-darkLight pt-[145px] pb-[139px] pl-28'>
                    <h4 className='font-pop font-bold text-4xl text-white mb-5'>Supply of national industries.</h4>
                    <a className='inline-block px-8 py-3.5 text-white bg-primary uppercase font-pop font-semibold text-base hover:text-primary hover:bg-transparent hover:border hover:border-solid hover:border-primary hover:ease-linear duration-300' href='#'>LEARN MORE</a>
                </div>
            </div>
            <div className='w-2/4' style={{background: "url(images/services3.png)"}}>
                <div className='bg-darkLight pt-[145px] pb-[139px] pl-28'>
                    <h4 className='font-pop font-bold text-4xl text-white mb-5'>National fuel distribution and supply.</h4>
                    <a className='inline-block px-8 py-3.5 text-white bg-primary uppercase font-pop font-semibold text-base hover:text-primary hover:bg-transparent hover:border hover:border-solid hover:border-primary hover:ease-linear duration-300' href='#'>LEARN MORE</a>
                </div>
            </div>
           
        </div>
    </section>
  )
}

export default Service