import React, { useEffect, useState } from 'react'
import {FaBars} from "react-icons/fa"

const Navbar = () => {

    let [open,setOpen] = useState(false);

    let handleOpen = ()=> {
        console.log('click')
        setOpen(!open);
    }

    useEffect(()=>{
        // if (window.innerWidth >= 768) {
        //     setOpen(true);
        // }
        function setResize() {
            if (window.innerWidth >= 768) {
                setOpen(true);
            }else{
                setOpen(false);
            }
            console.log(window.innerWidth)
        }
        window.addEventListener('resize', setResize)
    },[])

  return (
    <nav className='py-4 md:py-[30px] bg-primary relative'>
        <div className='max-w-container px-2.5 md:px-0 mx-auto md:flex'>
            <div className='md:w-1/5'>
                <img src='images/Logo.png'/>
            </div>
            <button className='block md:hidden absolute right-2.5 top-6 text-white' onClick={handleOpen}>
                <FaBars/>
            </button>
            {open && (<div className='md:flex md:justify-end md:w-4/5 font-pop font-semibold text-base text-white'>
                <ul className='flex flex-col md:flex-row md:justify-end gap-y-3 md-gap-y-0 md:gap-x-12 md:items-center my-3 md:my-0'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Gallery</a></li>
                    <li><a href='#'>Blog</a></li>
                </ul>
                <a className='inline-block px-8 py-3.5 uppercase md:ml-[72px] border border-solid border-white hover:bg-white hover:text-primary hover:border-solid hover:ease-linear duration-300' href='#'>Contact</a>
            </div>)}
            
        </div>
    </nav>
  )
}

export default Navbar