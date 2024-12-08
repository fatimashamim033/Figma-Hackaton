import React from 'react'

const NavbarPage = () => {
  return (
    <div className='flex justify-around w-[1720px] h-[103px] bg-[#FFFFFF] text-slate-500'>
      <div>
        <ul className='flex justify-between w-[339px] h-[15px] gap-[32px]'>
            <li className='w-[40px] h-[15px] py-2 font-inter text-[14px] font-medium leading-[15.4px] text-left hover:underline'>Home</li>
            <li className='w-[40px] h-[15px] py-2 font-inter text-[14px] font-medium leading-[15.4px] text-left hover:underline'>Shop</li>
            <li className='w-[40px] h-[15px] py-2 font-inter text-[14px] font-medium leading-[15.4px] text-left hover:underline'>Product</li>
            <li className='w-[40px] h-[15px] py-2 font-inter text-[14px] font-medium leading-[15.4px] text-left hover:underline'>Product</li>
            <li className='w-[40px] h-[15px] py-2 font-inter text-[14px] font-medium leading-[15.4px] text-left hover:underline'>Pages</li>
            <li className='w-[40px] h-[15px] py-2 font-inter text-[14px] font-medium leading-[15.4px] text-left hover:underline'>About</li>
        </ul>
      </div>
      <div className='flex justify-normal'>
        <p className='w-[57px] h-[15px] py-2 font-inter text-[14px] font-medium leading-[15.4px] text-left hover:underline'>Contact:</p>
        <p className='w-[103px] h-[15px] py-2 font-inter text-[14px] font-medium leading-[15.4px] text-left hover:underline'>(808) 555-0111</p>
      </div>
    </div>
  )
}
export default NavbarPage
