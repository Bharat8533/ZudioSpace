import React from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";


const Header = () => {
  return (
    <div className='w-full flex justify-between p-4 px-12'>
      <div className='text-4xl flex items-center gap-1 logoFont'>
        <img src="https://www.zudio.com/cdn/shop/files/logo_360x.png?v=1613519896" className='h-8' alt="" />
      </div>
      <div className='text-4xl'>
        <HiMiniBars3BottomLeft />
      </div>
    </div>
  )
}

export default Header
