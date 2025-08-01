import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Result } from './pages/Result'
import { BuyCredits } from './pages/BuyCredits'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//import { SignInButton } from '@clerk/clerk-react'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-100'>
      <Navbar />
      {/*<SignInButton /> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='/buy' element={<BuyCredits/>} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App