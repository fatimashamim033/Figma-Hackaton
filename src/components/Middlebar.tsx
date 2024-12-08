import React from 'react'
import Image from 'next/image'
import { FiShoppingCart } from "react-icons/fi";
import { Bs2CircleFill } from "react-icons/bs";

const middlebarPage = () => {
  return (
    
    <div className=' flex justify-around w-[1720px] h-[84px] gap-64 items-center pt-[20px] pl-[30px] pb-[20px] pr-[30px] bg-[#F0F2F3] '>
    
        <div className='flex text-center px-52 space-x-2'>
        <Image src="/images/logo Icon.svg" alt="My Icon" width={40} height={40}></Image>
        <h1 className='w-[118px] h-[31px] font-inter text-[26px] font-medium leading-[31.2px] text-purple-950'>Comforty</h1>      
    </div>
    <div className='felx px-20'>
    <div className='flex justify-around text-center w-[120px] h-[44px] bg-white text-purple-950 rounded-[8px] pt-[11px] pr-[16px] pb-[11px] pl-[16px] gap-[14px]'>

    <FiShoppingCart />
    <p>Cart</p>
    <Bs2CircleFill />
</div>

    </div>
    </div>
  )
}

export default middlebarPage
