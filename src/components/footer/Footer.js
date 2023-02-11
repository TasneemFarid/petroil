import React from 'react'
import { FiMail } from 'react-icons/fi';
import { FiPhoneCall } from 'react-icons/fi';
import {RiMapPinFill} from 'react-icons/ri'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

const Footer = () => {
  return (
    <section>
       <div className='pt-[150px] pb-[170px] bg-[#1F1F1F]'>
            <div className='max-w-container mx-auto flex justify-between text-white'>
                <div>
                    <div>
                        <picture>
                            <img src='images/Logo_b.png'/>
                        </picture>
                    </div>
                    <div className='my-[33px]'>
                        <ul className='text-white font-pop font-normal text-xs'>
                            <li className='flex items-center'><FiMail className='mr-1'/>mail@yourcompany.com</li>
                            <li className='flex items-center my-[15px]'><FiPhoneCall className='mr-1'/>+896 120 5889 (Toll free)</li>
                            <li className='flex items-center'><RiMapPinFill className='mr-1'/>101 Baker Street, New York, USA, 12345</li>
                        </ul>
                    </div>
                    <div className='flex gap-3'>
                        <div className='h-[30px] w-[30px] bg-primary text-white hover:bg-transparent hover:text-primary hover:border-2 hover:border-solid hover:border-primary hover:ease-linear duration-300 rounded-[50%] relative'>
                            <FaFacebookF className='absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'/>
                        </div>
                        <div className='h-[30px] w-[30px] bg-primary text-white hover:bg-transparent hover:text-primary hover:border-2 hover:border-solid hover:border-primary hover:ease-linear duration-300 rounded-[50%] relative'>
                            <FaTwitter className='absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'/>
                        </div>
                        <div className='h-[30px] w-[30px] bg-primary text-white hover:bg-transparent hover:text-primary hover:border-2 hover:border-solid hover:border-primary hover:ease-linear duration-300 rounded-[50%] relative'>
                            <FaLinkedinIn className='absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'/>
                        </div>
                        <div className='h-[30px] w-[30px] bg-primary text-white hover:bg-transparent hover:text-primary hover:border-2 hover:border-solid hover:border-primary hover:ease-linear duration-300 rounded-[50%] relative'>
                            <GrInstagram className='absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'/>
                        </div>
                    </div>
                </div>
                <div className='mt-[32px] ml-[15px] flex gap-[100px] justify-end font-pop font-normal text-xs'>
                    <div>
                        <h4 className='font-bold text-base pb-[21px]'>Company</h4>
                        <p className='pb-[15px]'>Home</p>
                        <p className='pb-[15px]'>About</p>
                        <p className='pb-[15px]'>Services</p>
                        <p className='pb-[15px]'>Gallery</p>
                    </div>
                    <div>
                        <h4 className='font-bold text-base pb-[21px]'>Others</h4>
                        <p className='pb-[15px]'>Blog</p>
                        <p className='pb-[15px]'>Contact</p>
                        <p className='pb-[15px]'>Terms & Conditions</p>
                        <p className='pb-[15px]'>Privacy Policy</p>
                    </div>
                </div>
                <div className='mt-[32px]'>
                    <h4 className='font-pop font-bold text-base pb-[21px]'>Certificate</h4>
                    <div className='flex'>
                        <picture className='mr-[5px]'>
                            <img src='images/cert1.png'/>
                        </picture>
                        <picture>
                            <img src='images/cert2.png'/>
                        </picture>
                    </div>
                </div>
            </div>
       </div>
       <div className='py-[42px] bg-[#282828]'>
            <div className='max-w-container mx-auto'>
            <p className='font-pop font-medium text-base text-para'>© Copyright 2022 by AltDesain Studio – All right reserved.</p>
            </div>
       </div>
    </section>
  )
}

export default Footer