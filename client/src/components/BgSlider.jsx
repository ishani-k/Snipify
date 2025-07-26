import React, { useState } from 'react'
import { assets } from '../assets/assets'

const BgSlider = () => {

    const [sliderPosition, setSliderPosition] = useState(50)

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value)
    }


  return (
    <div className='pb-10 md:py-20 mx-2'>
        {/* title */}
        <h1 className=' mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-l from-green-900 to-green-400 bg-clip-text text-transparent'>
            Experience seamless background removal <br className='max-sm:hidden'/> with pixel-perfect precision
        </h1>

        <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
            {/*bg img */}
            <img src={assets.image_w_bg} style={{clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)`}} alt="" />

            {/*fg img */}
            <img className='absolute top-0 left-0 w-full h-full' src={assets.image_wo_bg} style={{clipPath: `inset(0 0 0 ${sliderPosition}%)`}} alt="" />

            {/*slider */}
            <input className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-0 slider' type="range" min={0} max={100} value={sliderPosition} onChange={handleSliderChange}/>
        </div>
    </div>
  )
}

export default BgSlider