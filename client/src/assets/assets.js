import logo from './comp_logo-removebg-preview.png'     
//import logo_icon from './logo_icon.svg'  
import arrow_icon from './arrow_icon.svg' 
import header_img from './header.png' 
import remove_bg_icon from './bgremove.svg'
import upload_btn_icon from './upload_btn_icon.svg'
import upload_icon from './upload.svg'
import download_icon from './download.svg'
import image_w_bg from './image_w_bg.png'
import image_wo_bg from './image_wo_bg.png'
import facebook_icon from './facebook_icon.svg'
import twitter_icon from './twitter_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import credit_icon from './credits.svg'

export const assets = {
    logo,
    arrow_icon,
    header_img,
    remove_bg_icon,
    upload_icon,
    download_icon,
    image_w_bg,
    image_wo_bg,
    facebook_icon,
    twitter_icon,
    upload_btn_icon,
    credit_icon
}

export const testimonialsData = [
    {
        id: 1,
        text: "Snipify is a total game-changer! I used to struggle with messy backgrounds, but now I can clean up my product photos in seconds. It's fast, reliable, and the quality is top-notch. Can't imagine editing without Snipify anymore!",
        author: "Phil Dunphy",
        image: profile_img_1,
        jobTitle:'Freelance Designer'
    },
    {
        id: 2,
        text: "Editing product images used to be a hassle—now it's a breeze with Snipify. The background removal is instant and super clean. I can't imagine my workflow without it! It’s reliable, fast, and saves me hours every week.",
        author: "Jonas Kahnwald",
        image: profile_img_2,
        jobTitle:'Content Creater'
    },
];

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]