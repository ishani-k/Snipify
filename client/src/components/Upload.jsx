import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Upload = () => {

  const {removeBg} = useContext(AppContext)


  return (
    <div className='pb-16'>
        <h1 className=' mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-l from-green-900 to-green-400 bg-clip-text text-transparent py-6 md:py-16'>
            Instant transformation. Drop your image now!
        </h1>

        <div className='text-center mb-24'>
            <input onChange={(e) => removeBg(e.target.files[0])}
            type="file" accept='image/*' id="upload2" hidden/>
            <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-br from-gray-700 to-green-700 sm:m-auto mx-16 hover:scale-105 transition-all duration-700 ' htmlFor="upload2">
              <img src={assets.upload_btn_icon} alt="" className='size-5'/>
              <p className='text-white text-sm'>Upload your image</p>
            </label>
        </div>
    </div>
  )
}

export default Upload