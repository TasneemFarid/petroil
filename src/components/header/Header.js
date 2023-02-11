import React from 'react'
import { FiMail } from 'react-icons/fi';
import { FiPhoneCall } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const Header = () => {
  return (
    <header className='bg-[#282828]'>
      <div className='max-w-container px-2.5 md:px-0 py-[15px] mx-auto md:flex'>
        <div className='md:w-3/5 md:flex items-center font-pop font-normal text-xs text-white'>
          <div className='flex flex-gap-2 items-center'>
            <FiMail/>
            <p className='px-[4px] pr-14 relative after:absolute after:top-px after:right-6 after:h-4 after:w-0.5 md:after:bg-[#5C6A92] after:content-[""]'>mail@yourcompany.com</p>
          </div>
          <div className='flex flex-gap-2 items-center my-1 md:my-0'>
          <FiPhoneCall/>
          <p className='px-[4px]'>+896 120 5889 (Toll free)</p>
          </div>
        </div>
        <div className='md:w-2/5 flex md:justify-end gap-4 md:gap-5 items-center font-pop font-normal text-xs text-white'>
          <FaFacebookF/>
          <FaTwitter/>
          <FaLinkedinIn/>
          <FiInstagram/>
        </div>
      </div>
      <div className='h-[5px] bg-yellowBorder border border-black'></div>
    </header>
  )
}

export default Header