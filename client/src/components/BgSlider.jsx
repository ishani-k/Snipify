import React, { useState } from 'react'
import { assets } from '../assets/assets'

const BgSlider = () => {

    const [sliderPosition, setSliderPosition] = useState(50)

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value)
    }


  return (
    <div>
        {/* title */}
        <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-l from-green-900 to-green-600 bg-clip-text text-transparent'>
            Experience seamless background removal <br className='max-sm:hidden'/> with pixel-perfect precision.
        </h1>

        <div>
            {/*bg img */}
            <img src={assets.image_w_bg} style={{clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)`}} alt="" />
        </div>
    </div>
  )
}

export default BgSlider