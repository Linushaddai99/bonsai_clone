import React from 'react'
import logo from '../assets/boisai_logo.svg'
import arrowDown from '../assets/arrow-down.png'

const Navbar = () => {
  return (
    <div className='px-18 py-6 flex justify-between items-center bg-white fixed w-full' >
      <img className='w-37' src={logo} alt="" />
      <div className='flex items-center'>
        <div className="">
          <ul className='flex space-x-6 ml-auto '>
            <li className='flex items-center text-[#4C4D5F] mx-5 cursor-pointer'>
                <span className='mr-2'>Product</span>
                <i className='bx bx-chevron-down' style={{'color':'#565252'}}  ></i>
            </li>
            <li className='flex items-center text-[#4C4D5F] mx-5 cursor-pointer'>
                <span className='mr-2'>Templates</span>
                <i className='bx bx-chevron-down' style={{'color':'#565252'}}  ></i>
            </li>
            <li className='text-[#4C4D5F] mx-5 cursor-pointer'>Pricing</li>
            <li className='text-[#4C4D5F] mx-5 cursor-pointer'>Reviews</li>
          </ul>
        </div>
        <div className='ml-10'>
          <button className='border border-[#00b289] text-[#00b289] cursor-pointer hover:bg-[#00b289] hover:text-white text-xs font-bold px-6 py-3 rounded'>LOG IN</button>
          <button className='text-xs font-bold text-white bg-[#00b289] cursor-pointer hover:bg-[#7bc9b7] ml-6 py-3 px-10 rounded'>START FREE</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
