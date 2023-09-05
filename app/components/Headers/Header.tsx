import React from 'react'
import Logo from './Logo'
import NavOne from './NavOne'
import ButtonVTB from './ButtonVTB'
import FonColorDarkLight from './FonColorDarkLight'
import NavTwo from './NavTwo'

export default function Header() {
  return (
    <section className='bg-white fixed z-10'>
    <div className='flex w-[1535px] h-[101px] ml-[-11px]'>
      <div className="p-7 ml-6">
      <Logo/>
      </div>
      
      <div className="flex space-x-[60px] p-6">
      <NavOne/>
      <div className=" flex space-x-4 m-[-15px] absolute right-[34px]">
        
      <ButtonVTB/>
      <FonColorDarkLight/>
      </div>
      </div>
      <div className="border-b-[1px] absolute w-[1345px]  left-[126px] m-12 text-lineVtb ">
        <span className='text-[#4a6ff3] absolute w-[97px] left-[-11px] border-b-[3px] mt-[-1px]  rounded '></span>
      </div>
      </div>
        <div className="absolute left-[176px] top-[60px]">
        <NavTwo/>
      </div>
      <div className="border-b-[1px] absolute w-[100%] text-lineVtb "></div>
      </section>
  )
}
