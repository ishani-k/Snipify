import React from 'react'
import { assets, plans } from '../assets/assets'

export const BuyCredits = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>
        Our Plans
      </button>

      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-l from-green-900 to-green-400 bg-clip-text text-transparent mb-6 sm:mb-10'>Choose the plan that's right for you</h1>
      
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) =>(
          <div>
                <img width={40} src={assets.logo_icon} alt="" />
                <p>{item.id}</p>
                <p>{item.desc}</p>
                <p>
                  <span>₹{item.price}</span>/{item.credits} credits
                </p>

                <button>Buy now</button>
          </div>
        ))}
      </div>

    </div>
  )
}
