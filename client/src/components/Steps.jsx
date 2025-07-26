import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>

        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold'>
          <span className='bg-gradient-to-l from-green-900 to-green-400 bg-clip-text text-transparent'>
            Just Three Steps to Magic..
          </span> ✨🪄
        </h1>

        <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>

          {/*upload */}
          <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
              <img src={assets.upload_icon} alt="" className='size-12'/>
              <div>
                <p className='text-xl font-medium'>Upload Image</p>
                <p className='text-sm text-neutral-500 mt-1'>Upload your image in JPG, PNG, or any format you like.</p>
              </div>
          </div>
          {/*remove */}
          <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
              <img src={assets.remove_bg_icon} alt="" className='size-12'/>
              <div>
                <p className='text-xl font-medium'>Remove Background</p>
                <p className='text-sm text-neutral-500 mt-1'>Our AI instantly detects and removes the background. </p>
              </div>
              
          </div>
          {/*download */}
          <div className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
              <img src={assets.download_icon} alt="" className='size-12'/>
              <div>
                <p className='text-xl font-medium'>Download Image</p>
                <p className='text-sm text-neutral-500 mt-1'>Download your image with a transparent background. </p>
              </div>

          </div>
          </div>
    </div>
  )
}

export default Steps