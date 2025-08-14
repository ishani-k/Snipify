import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
      <img width={150} src={assets.logo} alt="" />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright &copy; Ishani Kundu 2025 | All rights reserved.</p>
      <div className='flex gap-1'>
        <a href="https://facebook.com/ishani.kundu.126088" target="_blank" rel="noopener noreferrer">
        <img width={40} src={assets.facebook_icon} alt="Facebook" />
        </a>

        <a href="https://twitter.com/ishaniiii_k" target="_blank" rel="noopener noreferrer">
        <img width={40} src={assets.twitter_icon} alt="Twitter" />
        </a>

        <a href="https://linkedin.com/in/ishani-kundu-886266222" target="_blank" rel="noopener noreferrer">
        <img width={40} src={assets.linkedin_icon} alt="LinkedIn" />
        </a>

        <a href="https://instagram.com/ishaniiii._k" target="_blank" rel="noopener noreferrer">
        <img width={40} src={assets.insta_icon} alt="Instagram" />
        </a>

      </div>
    </div>
  )
}

export default Footer