import React from 'react'
import { assets, plans } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const BuyCredits = () => {


  const { backendUrl, loadCreditsData } = useContext(AppContext)

  const navigate = useNavigate()
 
  const { getToken, userId } = useAuth()
  console.log("Frontend userId from Clerk:", userId);

  const initPay = async (order) => {

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);

        const token = await getToken()

        try {

          const { data } = await axios.post(backendUrl+'/api/user/verify-razor',response, {headers:{token}})
          if (data.success) {
            loadCreditsData()
            navigate('/')
            toast.success('Credits Added Yayy')
          }
          
        } catch (error) {
          console.log(error);
          toast.error(error.message)
          
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()

  }

  const paymentRazorpay = async (planId) => {
    
    try {

      const token = await getToken()
      const { data } = await axios.post(backendUrl+'/api/user/pay-razor', {planId, clerkId: userId}, {headers:{token}})

      if(data.success)
      {
        initPay(data.order)
      }
      else {
        toast.error(data.message || 'Payment could not be initiated');
      }

      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }


  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>
        Our Plans
      </button>

      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-l from-green-900 to-green-400 bg-clip-text text-transparent mb-6 sm:mb-10'>Choose the plan that's right for you</h1>
      
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) =>(
          <div key={index} className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500'>
                <img width={40} src={assets.logo_icon} alt="" />
                <p className='mt-3 font-semibold'>{item.id}</p>
                <p className='text-sm'>{item.desc}</p>
                <p className='mt-6'>
                  <span className='text-3xl font-medium'>₹{item.price}</span>/{item.credits} credits
                </p>

                <button onClick={() => paymentRazorpay(item.id)}
                 className='w-full bg-green-900 text-white mt-8 text-sm rounded-full py-2.5 min-w-52'>Buy now</button>
          </div>
        ))}
      </div>

    </div>
  )
}
