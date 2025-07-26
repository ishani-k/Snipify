import React from 'react'
import { assets } from '../assets/assets'

export const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>

      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>

        {/*img container */}
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
          {/*left side */}
          <div>
            <p className='font-semibold text-gray-600 mb-2'>Original</p>
            <img className='rounded-md border' src={assets.image_w_bg} alt="" />
          </div>

          {/*right side */}
          <div className='flex flex-col'>
            <p className='font-semibold text-gray-600 mb-2'>Background removed</p>
            <div className='rounded-md border border-gray-300 h-full relative overflow-hidden bg-layer'>
              <img src={assets.image_wo_bg} alt="" />

              {/* <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
                <div className='border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin'></div>
              </div>*/}
            </div>
          </div>
        </div>

        {/*btns */}
        <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
          <button className='px-8 py-2.5 border border-green-800 text-green-800 rounded-full hover:scale-105 transition-all duration-700'>Try another Image</button>
          <a className='px-8 py-2.5 rounded-full bg-gradient-to-br from-gray-700 to-green-700 text-slate-100 hover:scale-105 transition-all duration-700 ' href="">Download Image</a>
        </div>

      </div>

    </div>
  )
}
