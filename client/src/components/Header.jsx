import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div  className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20 '>
      {/*Left side*/}
      <div>

        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
          Remove background <br className='max-md:hidden' /> in seconds. <br className='max-sm:hidden'/>
          Get it <span className='bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent'>Snipified.</span>
        </h1>

        
        <p className='my-6 text-[15px] text-gray-500'>Clean, professional images - no effort, no cost. <br />
        Snipify delivers fast, AI-powered background removal with pixel-perfect precision. <br /> Whether you're designing, selling, or creating - do it smarter, for <span className='text-[25px] text-green-700'>free.</span></p>

        <input type="file" id="upload1" hidden/>
        <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-green-700 to-green-400 sm:m-auto mx-16 hover:scale-105 transition-all duration-700 ' htmlFor="upload1">
          <img src={assets.upload_btn_icon} alt="" className='size-5'/>
          <p className='text-white text-sm'>Upload your image</p>
        </label>
      </div>

      {/*Right side */}
      <div className='w-full max-w-md'>
        <img src={assets.header_img} alt="header_img" />
      </div>
    </div>
  )
}

export default Header